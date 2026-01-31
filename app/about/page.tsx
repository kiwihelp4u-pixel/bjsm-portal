export default function AboutPage() {
  return (
    <main className="bg-gray-50">
      {/* Top visual section */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <img
            src="/images/about-vision-mission.png"
            alt="BJSM Vision and Mission"
            className="w-full rounded-md mb-8"
          />

          <h1 className="text-3xl font-bold text-center mb-6">
            About Bihar Jharkhand Sabha of Australia and New Zealand
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            Bihar Jharkhand Sabha of Australia and New Zealand (BJSM) is a
            community-driven organisation formed to bring together people
            originating from Bihar and Jharkhand who are now settled across
            Australia and New Zealand. Our purpose is simple but meaningful:
            to stay connected to our roots while supporting one another in a
            new land.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-blue-700 text-center mb-4">
            Vision Statement
          </h2>
          <p className="text-center text-xl italic text-orange-600">
            Connecting People Abroad
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-blue-700 text-center mb-6">
            Mission Statement
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Our mission is to preserve, uphold, foster, and promote the
            linguistic, social, and cultural heritage of Bihar and Jharkhand,
            while building a strong, supportive community abroad.
          </p>

          <ul className="list-disc ml-6 space-y-4 text-gray-700 text-lg">
            <li>
              To facilitate better <strong>communication</strong> and{" "}
              <strong>networking</strong> among members
            </li>
            <li>
              To promote <strong>friendship</strong> and{" "}
              <strong>mutual respect</strong> within the community
            </li>
            <li>
              To support the <strong>smooth settlement</strong> and{" "}
              <strong>assimilation</strong> of new immigrants
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
