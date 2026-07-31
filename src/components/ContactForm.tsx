"use client";

import React, { useState } from "react";
import styles from "./ContactForm.module.css";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");

    // Simulate sending message
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={styles.successMessage}>
        <div className={styles.successTitle}>Thank You!</div>
        <div className={styles.successText}>
          Your message has been sent successfully. I will get back to you shortly.
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.fieldGroup}>
        <label htmlFor="name" className={styles.label}>
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className={styles.input}
          disabled={status === "submitting"}
        />
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="email" className={styles.label}>
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className={styles.input}
          disabled={status === "submitting"}
        />
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message..."
          className={styles.textarea}
          disabled={status === "submitting"}
        />
      </div>

      <button
        type="submit"
        className={styles.submitBtn}
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {status === "error" && (
        <p style={{ color: "var(--accent)", fontSize: "14px", marginTop: "8px" }}>
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
};
