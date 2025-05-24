"use client";

import { useState } from "react";
import { SpinnerMini } from "@/app/_components/ui/Spinner";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (submitted) setSubmitted(false);
    if (error) setError("");
  };

  // Handle Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isLoading) return;

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const errorData = await response.json().catch(() => ({}));
        setError(
          errorData.message || "Something went wrong. Please try again."
        );
      }
    } catch (err) {
      console.error(err);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // Contact Form
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={formData.name}
          required
          disabled={isLoading}
          className="mt-1 block w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          required
          disabled={isLoading}
          className="mt-1 block w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          onChange={handleChange}
          value={formData.message}
          required
          disabled={isLoading}
          className="mt-1 block w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-200 disabled:bg-gray-100 disabled:cursor-not-allowed text-sm sm:text-base resize-y h-75 sm:h-45 md:h-30 lg:h-20 xl:h-15"
        />
      </div>

      {/* Send Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
      >
        {isLoading && <SpinnerMini />}
        {isLoading ? "Sending..." : "Send"}
      </button>

      {/* Form success or error */}
      {submitted && (
        <p className="text-green-600 text-sm pt-2 flex items-center gap-1">
          Message sent!
        </p>
      )}

      {error && (
        <p className="text-red-600 text-sm pt-2 flex items-center gap-1">
          {error}
        </p>
      )}
    </form>
  );
}

export default ContactForm;
