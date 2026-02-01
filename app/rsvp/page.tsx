"use client";

export default function RSVPPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-2">
          RSVP for Bihar Diwas
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Bihar Diwas & 15th Anniversary of BJSM
        </p>

        <div className="bg-white shadow-xl rounded-xl overflow-hidden">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSci6o-ZtHGhLxZaxilJIkDTJvY2Jh6k_5lEmiyFaMYa3GTLGA/viewform?embedded=true"
            width="100%"
            height="1150"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="BJSM RSVP Form"
            style={{ border: "none", maxWidth: "100%" }}
          >
            Loading…
          </iframe>
        </div>
      </div>
    </main>
  );
}
