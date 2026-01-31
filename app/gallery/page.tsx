export default function GalleryPage() {
  const videos = [
    "https://www.youtube.com/embed/GR6Go8zKh0k",
    "https://www.youtube.com/embed/po-6zINXVeA",
    "https://www.youtube.com/embed/5KEBYMJzANw",
    "https://www.youtube.com/embed/_CyEFD0PzVs",
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">Gallery</h1>

      {/* Videos Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Event Videos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((url, index) => (
            <div
              key={index}
              className="relative w-full aspect-video rounded-lg overflow-hidden shadow"
            >
              <iframe
                src={url}
                title={`BJSM Video ${index + 1}`}
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </section>

      {/* Images Section (placeholder for later) */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Event Photos</h2>
        <p className="text-gray-600">
          Photos from recent BJSM events will be added here soon.
        </p>
      </section>
    </main>
  );
}
