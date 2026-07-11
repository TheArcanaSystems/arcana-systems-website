const auditForm = document.querySelector("#audit-form");
const formStatus = document.querySelector(".form-status");

const moduleCatalog = {
  Genesis: { number: "00", price: 1500, focus: "Onboarding & business setup" },
  Alchemist: { number: "01", price: 1500, focus: "Automation & tool stack" },
  Oracle: { number: "02", price: 1500, focus: "Data, analytics & reporting" },
  Cultivator: { number: "03", price: 1500, focus: "Growth strategy & scaling" },
  Sovereign: { number: "04", price: 1500, focus: "Org structure & governance" },
  Codex: { number: "05", price: 1500, focus: "SOPs & process documentation" },
  Accord: { number: "06", price: 1500, focus: "CRM & client relationships" },
  Vanguard: { number: "07", price: 1500, focus: "Project & task management" },
  Fortitude: { number: "08", price: 2500, focus: "Team & HR operations" },
  Lantern: { number: "09", price: 2500, focus: "Business audit & assessment" },
  Flux: { number: "10", price: 2500, focus: "Workflow automation & cycles" },
  Scale: { number: "11", price: 2500, focus: "Compliance, contracts & legal ops" },
  Elevation: { number: "12", price: 2500, focus: "Business pivot & transformation" },
  Metamorphosis: { number: "13", price: 2500, focus: "System migration & overhaul" },
  Confluence: { number: "14", price: 2500, focus: "System integration & harmony" },
  Unchained: { number: "15", price: 2500, focus: "Risk management & bottleneck removal" },
  Reclaim: { number: "16", price: 3500, focus: "Crisis management & recovery" },
  Beacon: { number: "17", price: 3500, focus: "Brand, comms & visibility" },
  Foresight: { number: "18", price: 3500, focus: "Research, strategy & planning" },
  Prosperity: { number: "19", price: 3500, focus: "Financial operations & reporting" },
  Ascension: { number: "20", price: 3500, focus: "Performance reviews & KPIs" },
  Cosmos: { number: "21", price: 8500, focus: "Full system architecture" },
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
    emptyItem.textContent = "No buildout areas selected yet. Choose the areas that apply to see a suggested architecture map.";
    recommendationList.append(emptyItem);
  } else {
    selectedModules.forEach((name) => {
      const module = moduleCatalog[name];
      const item = document.createElement("li");
      item.innerHTML = `<span>${module.number}</span><strong>${name}</strong><small>${module.focus} - suggested starting floor ${formatCurrency(module.price)}</small>`;
      recommendationList.append(item);
    });
  }

  recommendationTotal.textContent = `Suggested starting project floor: ${formatCurrency(total)}`;

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

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve({
      name: file.name,
      type: file.type,
      size: file.size,
      data_url: reader.result,
    });
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

async function getBrandAssets(form) {
  const fileInput = form.querySelector("#brand-assets");
  if (!(fileInput instanceof HTMLInputElement) || !fileInput.files?.length) return [];

  const allowedTypes = new Set(["image/png", "image/jpeg", "image/svg+xml", "application/pdf"]);
  const maxFiles = 3;
  const maxBytes = 3 * 1024 * 1024;
  if (fileInput.files.length > maxFiles) {
    throw new Error("Please upload no more than 3 brand assets.");
  }

  const files = Array.from(fileInput.files);

  files.forEach((file) => {
    if (!allowedTypes.has(file.type)) {
      throw new Error("Please upload only PNG, JPG, SVG, or PDF brand assets.");
    }

    if (file.size > maxBytes) {
      throw new Error("Each brand asset must be 3 MB or smaller.");
    }
  });

  return Promise.all(files.map(readFileAsDataUrl));
}

async function getFormPayload(form) {
  updateRecommendations();

  const formData = new FormData(form);
  const payload = {};

  formData.forEach((value, key) => {
    if (value instanceof File) return;

    const cleanValue = typeof value === "string" ? value.trim() : value;
    if (!cleanValue) return;

    if (Object.prototype.hasOwnProperty.call(payload, key)) {
      payload[key] = Array.isArray(payload[key]) ? payload[key] : [payload[key]];
      payload[key].push(cleanValue);
      return;
    }

    payload[key] = cleanValue;
  });

  const brandAssets = await getBrandAssets(form);
  if (brandAssets.length) payload.brand_assets = brandAssets;

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
        body: JSON.stringify(await getFormPayload(auditForm)),
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
