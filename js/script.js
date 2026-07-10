const auditForm = document.querySelector("#audit-form");
const formStatus = document.querySelector(".form-status");

const moduleCatalog = {
  Genesis: { number: "00", price: 97, focus: "Onboarding & business setup" },
  Alchemist: { number: "01", price: 97, focus: "Automation & tool stack" },
  Oracle: { number: "02", price: 97, focus: "Data, analytics & reporting" },
  Cultivator: { number: "03", price: 97, focus: "Growth strategy & scaling" },
  Sovereign: { number: "04", price: 97, focus: "Org structure & governance" },
  Codex: { number: "05", price: 97, focus: "SOPs & process documentation" },
  Accord: { number: "06", price: 97, focus: "CRM & client relationships" },
  Vanguard: { number: "07", price: 97, focus: "Project & task management" },
  Fortitude: { number: "08", price: 147, focus: "Team & HR operations" },
  Lantern: { number: "09", price: 147, focus: "Business audit & assessment" },
  Flux: { number: "10", price: 147, focus: "Workflow automation & cycles" },
  Scale: { number: "11", price: 147, focus: "Compliance, contracts & legal ops" },
  Elevation: { number: "12", price: 147, focus: "Business pivot & transformation" },
  Metamorphosis: { number: "13", price: 147, focus: "System migration & overhaul" },
  Confluence: { number: "14", price: 147, focus: "System integration & harmony" },
  Unchained: { number: "15", price: 147, focus: "Risk management & bottleneck removal" },
  Reclaim: { number: "16", price: 197, focus: "Crisis management & recovery" },
  Beacon: { number: "17", price: 197, focus: "Brand, comms & visibility" },
  Foresight: { number: "18", price: 197, focus: "Research, strategy & planning" },
  Prosperity: { number: "19", price: 197, focus: "Financial operations & reporting" },
  Ascension: { number: "20", price: 197, focus: "Performance reviews & KPIs" },
  Cosmos: { number: "21", price: 197, focus: "Full system architecture" },
};

const directCheckoutLinks = {
  "Invoice & Payment Automation Kit - $247": "https://buy.stripe.com/3cI4gz8GU1bg5i25dwdZ60f",
  "Client Portal OS Template - $197": "https://buy.stripe.com/7sY6oH2iw8DI6m6fSadZ60a",
  "CEO Command Center Dashboard - $147": "https://buy.stripe.com/28E4gz0ao9HM25Q0XgdZ60c",
  "SOP Snap Kit - $97": "https://buy.stripe.com/9B6bJ11es4ns4dY7lEdZ60d",
  "AI SOP Builder Prompt Pack - $47": "https://buy.stripe.com/28EeVd8GU7zE5i2gWedZ60e",
};

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

(function prefillInterestFromHash() {
  const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  const interest = hashParams.get("interest");
  const module = hashParams.get("module");
  const offerSelect = document.querySelector("#offer-interest");
  const moduleInterest = document.querySelector("#module-interest");

  if (interest && offerSelect instanceof HTMLSelectElement) {
    const hasOption = Array.from(offerSelect.options).some((option) => option.value === interest);
    if (hasOption) offerSelect.value = interest;
  }

  if (module && moduleInterest instanceof HTMLInputElement) {
    moduleInterest.value = module;
  }

  if (interest || module) {
    const form = document.querySelector("#audit-form");
    if (form) form.scrollIntoView({ block: "start" });
  }
})();

document.querySelectorAll("[data-offer-target]").forEach((link) => {
  const offerTarget = link.getAttribute("data-offer-target");
  const checkoutUrl = offerTarget ? directCheckoutLinks[offerTarget] : "";

  if (checkoutUrl) {
    link.href = checkoutUrl;
    link.removeAttribute("data-offer-target");
  }
});

function getSelectedRecommendations() {
  const recommendations = new Set();

  document.querySelectorAll("[data-recommend]:checked").forEach((field) => {
    const moduleNames = field.getAttribute("data-recommend") || "";
    moduleNames.split(",").forEach((name) => {
      const cleanName = name.trim();
      if (moduleCatalog[cleanName]) recommendations.add(cleanName);
    });
  });

  const manualInterest = document.querySelector("#module-interest");
  if (manualInterest instanceof HTMLInputElement && manualInterest.value.trim()) {
    Object.keys(moduleCatalog).forEach((name) => {
      if (manualInterest.value.toLowerCase().includes(name.toLowerCase())) {
        recommendations.add(name);
      }
    });
  }

  return Array.from(recommendations);
}

function updateRecommendations() {
  const recommendationList = document.querySelector("#recommendation-list");
  const recommendationTotal = document.querySelector("#recommendation-total");
  const recommendedModules = document.querySelector("#recommended-modules");
  const recommendedTotal = document.querySelector("#recommended-total");

  if (!recommendationList || !recommendationTotal) return;

  const selectedModules = getSelectedRecommendations();
  const total = selectedModules.reduce((sum, name) => sum + moduleCatalog[name].price, 0);

  recommendationList.innerHTML = "";

  if (selectedModules.length === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.textContent = "No modules selected yet. Choose the areas that apply to see a suggested bundle.";
    recommendationList.append(emptyItem);
  } else {
    selectedModules.forEach((name) => {
      const module = moduleCatalog[name];
      const item = document.createElement("li");
      item.innerHTML = `<span>${module.number}</span><strong>${name}</strong><small>${module.focus} - ${formatCurrency(module.price)}</small>`;
      recommendationList.append(item);
    });
  }

  recommendationTotal.textContent = `Estimated one-time total: ${formatCurrency(total)}`;

  if (recommendedModules instanceof HTMLInputElement) {
    recommendedModules.value = selectedModules.join(", ");
  }

  if (recommendedTotal instanceof HTMLInputElement) {
    recommendedTotal.value = total ? formatCurrency(total) : "";
  }
}

document.querySelectorAll("[data-recommend], #module-interest").forEach((field) => {
  field.addEventListener("change", updateRecommendations);
  field.addEventListener("input", updateRecommendations);
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
  { id: "offer-interest", message: "Please choose what you want to do." },
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
  updateRecommendations();

  const formData = new FormData(form);
  const payload = {};

  formData.forEach((value, key) => {
    const cleanValue = typeof value === "string" ? value.trim() : value;
    if (!cleanValue) return;

    if (Object.prototype.hasOwnProperty.call(payload, key)) {
      payload[key] = Array.isArray(payload[key]) ? payload[key] : [payload[key]];
      payload[key].push(cleanValue);
      return;
    }

    payload[key] = cleanValue;
  });

  return payload;
}

if (auditForm) {
  updateRecommendations();

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
      updateRecommendations();
      setStatus(
        "Your assessment was sent to TAS. We will reply from discovery@thearcanasystems.com.",
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
