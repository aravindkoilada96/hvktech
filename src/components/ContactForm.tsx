"use client";

import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message.");
      }

      setStatus("success");
      setFeedback("Thanks. Your message has been sent successfully.");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Unable to send message.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
      <h3 className="text-2xl font-semibold text-zinc-900">Get in Touch</h3>

      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-800">
          Name
        </label>
        <input
          id="name"
          value={form.name}
          onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          required
          className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none transition focus:border-[#0ec9c3]"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-800">
          Email*
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          required
          className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none transition focus:border-[#0ec9c3]"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-800">
          Tell us about your project
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          required
          className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none transition focus:border-[#0ec9c3]"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-md bg-[#0ec9c3] px-5 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-[#1ce5df] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Sending..." : "Send"}
      </button>

      {feedback ? (
        <p className={`text-sm ${status === "success" ? "text-emerald-600" : "text-rose-600"}`}>{feedback}</p>
      ) : null}
    </form>
  );
}
