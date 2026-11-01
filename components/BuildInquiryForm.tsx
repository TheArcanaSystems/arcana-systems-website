"use client";

import { FormEvent, useState } from "react";

type Status = { type: "idle" | "success" | "error"; message: string };

export function BuildInquiryForm() {
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      "Offer Interest": "Arcana Build™",
      "Business Name": String(data.get("business_name") || "").trim(),
      "Contact Name": String(data.get("contact_name") || "").trim(),
      Email: String(data.get("email") || "").trim(),
      "Audit Status": String(data.get("audit_status") || "").trim(),
      "Primary Need": String(data.get("primary_need") || "").trim(),
      Message: String(data.get("message") || "").trim(),
    };

    if (!payload["Business Name"] || !payload["Contact Name"] || !payload.Email) {
      setStatus({ type: "error", message: "Please complete your business name, name, and email." });
      return;
    }

    setSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("https://crm.thearcanasystems.com/api/intake", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result?.error || "Unable to submit your inquiry.");

      form.reset();
      setStatus({
        type: "success",
        message: "Your Build inquiry is in. We’ll review the context and reply with the appropriate next step.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error
          ? error.message
          : "Something went wrong. Please email hello@thearcanasystems.com.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>Business name *</span>
          <input name="business_name" required autoComplete="organization" />
        </label>
        <label>
          <span>Your name *</span>
          <input name="contact_name" required autoComplete="name" />
        </label>
        <label>
          <span>Email *</span>
          <input name="email" required type="email" autoComplete="email" />
        </label>
        <label>
          <span>Arcana Audit™ status</span>
          <select name="audit_status" defaultValue="">
            <option value="">Choose one</option>
            <option>I have completed my Audit</option>
            <option>I purchased but have not completed the diagnostic</option>
            <option>I have not purchased an Audit yet</option>
          </select>
        </label>
      </div>

      <label>
        <span>What needs to change operationally?</span>
        <input
          name="primary_need"
          placeholder="Example: client onboarding, CRM, founder dependency, reporting, SOPs"
        />
      </label>

      <label>
        <span>Context</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us what is creating the most friction and what you want the business to be able to do next."
        />
      </label>

      <button className="button button-gold" type="submit" disabled={submitting}>
        {submitting ? "Sending…" : "Discuss my Build"}
      </button>

      {status.message ? (
        <p className={`form-status form-status-${status.type}`} role="status">
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
