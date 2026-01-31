"use client";

import { useState } from "react";

export default function RSVPPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    adults: "1",
    kids: "0",
    consent: false,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!form.consent) {
      alert("Please provide consent to proceed.");
      return;
    }

    console.log("RSVP Submitted:", form);

    alert("Thank you! Your RSVP has been submitted.");

    setForm({
      name: "",
      email: "",
      mobile: "",
      adults: "1",
      kids: "0",
      consent: false,
    });
  };

  return (
    <main className="max-w-xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-2 text-center">
        RSVP for Bihar Diwas
      </h1>

      <p className="text-center text-gray-600 mb-10">
        Bihar Diwas & 15th Anniversary of BJSM
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 space-y-6"
      >
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        {/* Mobile */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Mobile Number *
          </label>
          <input
            type="tel"
            name="mobile"
            required
            value={form.mobile}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        {/* Adults */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Number of Adults
          </label>
          <input
            type="number"
            name="adults"
            min="1"
            value={form.adults}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        {/* Kids */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Number of Kids
          </label>
          <input
            type="number"
            name="kids"
            min="0"
            value={form.kids}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        {/* Consent */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            name="consent"
            checked={form.consent}
            onChange={handleChange}
            className="mt-1"
          />
          <p className="text-sm text-gray-600">
            I consent to BJSM collecting my details for event coordination
            purposes only.
          </p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-lg font-semibold transition"
        >
          Submit RSVP
        </button>
      </form>
    </main>
  );
}
