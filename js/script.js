const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const auditForm = document.querySelector("#audit-form");
const formStatus = document.querySelector(".form-status");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation");
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const requiredFields = [
  { id: "full-name", message: "Please enter your full name." },
  { id: "business-name", message: "Please enter your business name." },
  { id: "email", message: "Please enter a valid email address." },
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
    if (!(field instanceof HTMLInputElement)) return;

    const value = field.value.trim();
    const invalidEmail = field.type === "email" && value && !field.validity.valid;

    if (!value || invalidEmail) {
      showFieldError(field, message);
      isValid = false;
    }
  });

  return isValid;
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
        body: new FormData(auditForm),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      auditForm.reset();
      setStatus("Thank you. Your Arcana Audit intake has been received. Next steps: you will receive the discovery invoice and booking link by email.", "success");
    } catch (error) {
      setStatus("Something went wrong while submitting. Please email discovery@thearcanasystems.com and we will take it from there.", "error");
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
      }
    }
  });
}
