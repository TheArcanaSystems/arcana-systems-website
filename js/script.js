const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const auditForm = document.querySelector("#audit-form");
const formStatus = document.querySelector(".form-status");
const stardustCanvas = document.querySelector("#stardust-canvas");
const crmIntakeEndpoint = "https://crm.thearcanasystems.com/api/intake";

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
      const response = await fetch(auditForm.action || crmIntakeEndpoint, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(getFormPayload(auditForm)),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || "Form submission failed");
      }

      auditForm.reset();
      setStatus("Your intake was sent to the TAS CRM. Opening your TAS booking link now.", "success");

      if (result.booking_url) {
        window.setTimeout(() => {
          window.location.href = result.booking_url;
        }, 900);
      }
    } catch (error) {
      setStatus(error.message || "Something went wrong while submitting. Please email discovery@thearcanasystems.com and we will take it from there.", "error");
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
      }
    }
  });
}

function initStardust(canvas) {
  if (!(canvas instanceof HTMLCanvasElement)) return;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const ctx = canvas.getContext("2d");
  if (!ctx || prefersReducedMotion.matches) return;

  let width = 0;
  let height = 0;
  let particles = [];
  let animationFrame = 0;

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    width = Math.max(1, Math.floor(rect.width));
    height = Math.max(1, Math.floor(rect.height));
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    const count = Math.min(150, Math.max(70, Math.floor(width * height / 9000)));
    particles = Array.from({ length: count }, () => createParticle(true));
  }

  function createParticle(scattered = false) {
    const size = Math.random() * 2.2 + 0.7;
    return {
      x: Math.random() * width,
      y: scattered ? Math.random() * height : -20,
      size,
      speed: Math.random() * 0.85 + 0.28,
      drift: Math.random() * 0.42 + 0.08,
      trail: Math.random() * 18 + 10,
      hue: Math.random() > 0.45 ? 316 : 186,
      alpha: Math.random() * 0.46 + 0.32,
      twinkle: Math.random() * Math.PI * 2,
    };
  }

  function drawParticle(particle) {
    const glow = Math.sin(particle.twinkle) * 0.18 + particle.alpha;
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    ctx.strokeStyle = `hsla(${particle.hue}, 95%, 72%, ${glow * 0.5})`;
    ctx.lineWidth = particle.size;
    ctx.beginPath();
    ctx.moveTo(particle.x, particle.y);
    ctx.lineTo(particle.x - particle.drift * particle.trail, particle.y - particle.trail);
    ctx.stroke();

    ctx.fillStyle = `hsla(${particle.hue}, 100%, 78%, ${glow})`;
    ctx.shadowColor = `hsla(${particle.hue}, 100%, 68%, 0.9)`;
    ctx.shadowBlur = particle.size * 8;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((particle, index) => {
      particle.y += particle.speed;
      particle.x += particle.drift;
      particle.twinkle += 0.045;

      if (particle.y > height + 30 || particle.x > width + 30) {
        particles[index] = createParticle();
      } else {
        drawParticle(particle);
      }
    });

    animationFrame = window.requestAnimationFrame(animate);
  }

  resize();
  animate();
  window.addEventListener("resize", resize);
  prefersReducedMotion.addEventListener("change", () => {
    window.cancelAnimationFrame(animationFrame);
    ctx.clearRect(0, 0, width, height);
    if (!prefersReducedMotion.matches) {
      resize();
      animate();
    }
  });
}

initStardust(stardustCanvas);
