const auditForm = document.querySelector("#audit-form");
const formStatus = document.querySelector(".form-status");

const directCheckoutLinks = {
  "Invoice & Payment Automation Kit - $247": "https://buy.stripe.com/3cI4gz8GU1bg5i25dwdZ60f",
  "Client Portal OS Template - $197": "https://buy.stripe.com/7sY6oH2iw8DI6m6fSadZ60a",
  "CEO Command Center Dashboard - $147": "https://buy.stripe.com/28E4gz0ao9HM25Q0XgdZ60c",
  "SOP Snap Kit - $97": "https://buy.stripe.com/9B6bJ11es4ns4dY7lEdZ60d",
  "AI SOP Builder Prompt Pack - $47": "https://buy.stripe.com/28EeVd8GU7zE5i2gWedZ60e",
};

document.querySelectorAll("[data-offer-target]").forEach((link) => {
  const offerTarget = link.getAttribute("data-offer-target");
  const checkoutUrl = offerTarget ? directCheckoutLinks[offerTarget] : "";

  if (checkoutUrl) {
    link.href = checkoutUrl;
    link.removeAttribute("data-offer-target");
  }
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    const offerTarget = link.getAttribute("data-offer-target");
    const offerSelect = document.querySelector("#offer-interest");
    if (offerTarget && offerSelect instanceof HTMLSelectElement) {
      offerSelect.value = offerTarget;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const requiredFields = [
  { id: "offer-interest", message: "Please choose what you want to book or buy." },
  { id: "company-name", message: "Please enter your business name." },
  { id: "contact-name", message: "Please enter your name." },
  { id: "contact-email", message: "Please enter a valid email address." },
];

function setStatus(message, type) {
  if (!formStatus) return;
  formStatus.textContent = message;
  formStatus.className = `form-status show ${type}`;
}

function clearErrors(form) {
  form.querySelectorAll(".field-error").forEach((error) => error.remove());
  form.querySelectorAll(".is-invalid").forEach((field) => {
    field.classList.remove("is-invalid");
    field.removeAttribute("aria-invalid");
  });
}

function showFieldError(field, message) {
  field.classList.add("is-invalid");
  field.setAttribute("aria-invalid", "true");

  const error = document.createElement("p");
  error.className = "field-error";
  error.textContent = message;
  field.insertAdjacentElement("afterend", error);
}

function validateForm(form) {
  clearErrors(form);
  let isValid = true;

  requiredFields.forEach(({ id, message }) => {
    const field = form.querySelector(`#${id}`);
    if (!(field instanceof HTMLInputElement) && !(field instanceof HTMLSelectElement)) return;

    const value = field.value.trim();
    const invalidEmail = field.type === "email" && value && !field.validity.valid;

    if (!value || invalidEmail) {
      showFieldError(field, message);
      isValid = false;
    }
  });

  return isValid;
}

function getFormPayload(form) {
  const formData = new FormData(form);
  const payload = {};

  formData.forEach((value, key) => {
    const cleanValue = typeof value === "string" ? value.trim() : value;
    if (!cleanValue) return;

    if (key === "services_needed") {
      payload.services_needed = payload.services_needed || [];
      payload.services_needed.push(cleanValue);
      return;
    }

    payload[key] = cleanValue;
  });

  return payload;
}

if (auditForm) {
  auditForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!validateForm(auditForm)) {
      setStatus("Please complete the required fields before submitting.", "error");
      return;
    }

    const submitButton = auditForm.querySelector('button[type="submit"]');
    const originalText = submitButton ? submitButton.textContent : "";

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Submitting...";
    }

    try {
      const response = await fetch(auditForm.action, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(getFormPayload(auditForm)),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || "Form submission failed");
      }

      auditForm.reset();
      setStatus(
        "Your inquiry was sent to the TAS CRM. We will reply from discovery@thearcanasystems.com.",
        "success"
      );
    } catch (error) {
      setStatus(
        error.message || "Something went wrong while submitting. Please email discovery@thearcanasystems.com.",
        "error"
      );
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
      }
    }
  });
}
