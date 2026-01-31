import Image from "next/image";

export default function ExecutiveMembersPage() {
  const members = [
    {
      name: "Bhrigu Bhaskar",
      role: "President",
      image: "/images/bhrigu-bhaskar.jpg",
    },
    {
      name: "Krishna Singh",
      role: "Vice President",
      image: "/images/krishna-singh.jpg",
    },
    {
      name: "Sujata Kumar",
      role: "Treasurer",
      image: "/images/sujata-kumar.jpg",
    },
    {
      name: "Rajesh Kumar",
      role: "Head of Culture",
      image: "/images/rajesh-kumar.jpg",
    },
    {
      name: "Ravi Gupta",
      role: "General Secretary",
      image: "/images/ravi-gupta.jpg",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-2">
        Executive Members
      </h1>

      <p className="text-center text-gray-600 mb-6">
        Bihar Jharkhand Sabha of Australia and New Zealand
      </p>

      <h2 className="text-xl font-semibold text-center mb-10">
        Term: 2025 – 2027
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {members.map((member) => (
          <div
            key={member.name}
            className="text-center bg-white rounded-lg shadow-sm p-4"
          >
            <div className="relative w-48 h-48 mx-auto mb-4">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover rounded-md"
              />
            </div>

            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
