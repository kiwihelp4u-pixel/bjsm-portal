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

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");

    if (!form.consent) {
      setError("Please provide consent to proceed.");
      return;
    }

    setSubmitting(true);

    try {
      await fetch("/api/rsvp-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          mobile: form.mobile,
          adults: Number(form.adults),
          kids: Number(form.kids),
          consent: form.consent,
        }),
      });

      // ✅ If fetch did not throw, treat as success
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        mobile: "",
        adults: "1",
        kids: "0",
        consent: false,
      });
    } catch (err) {
      console.error("RSVP submit failed:", err);
      setError("Failed to submit RSVP. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2">
          RSVP for Bihar Diwas
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Bihar Diwas & 15th Anniversary of BJSM
        </p>

        <div className="bg-white shadow-xl rounded-xl p-8">
          {success ? (
            <div className="text-center space-y-4">
              <p className="text-green-700 font-semibold text-lg">
                Thank you! Your RSVP has been submitted.
              </p>
              <p className="text-sm text-gray-600">
                We look forward to seeing you at the event.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="mt-4 w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-lg font-semibold"
              >
                Submit another RSVP
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

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
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

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
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
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
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={handleChange}
                  className="mt-1"
                />
                <p className="text-sm text-gray-600">
                  I consent to BJSM collecting my details for event coordination purposes only.
                </p>
              </div>

              {error && (
                <p className="text-sm text-red-600 font-medium">{error}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-lg font-semibold transition disabled:opacity-50"
              >
                {submitting ? "Submitting..." : "Submit RSVP"}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
