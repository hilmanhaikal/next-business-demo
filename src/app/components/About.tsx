"use client";
import Image from 'next/image';

export default function About() {
  const teamMembers = [
    {
      name: 'Person 1',
      role: 'Role',
      image: '/team/image.png',
      bio: 'Description. Loves coding and long walks.',
    },
    {
      name: 'Person 2',
      role: 'Role',
      image: '/team/image.png',
      bio: 'Description. Enjoys design and coffee.',
    },
    {
      name: 'Person 3',
      role: 'Role',
      image: '/team/image.png',
      bio: 'Description. Passionate about innovation and team work.',
    },
  ];

  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold text-neutral mb-12 text-center">Our Story</h2>
        <div className="mb-12">
          <p className="text-lg text-gray-700 mb-6">
            We started with a simple idea: to provide innovative solutions that help businesses thrive. Over the years, we've grown into a team of passionate professionals who love what we do.
          </p>
          <p className="text-lg text-gray-700">
            Our mission is to empower our clients with the tools and strategies they need to succeed in the digital age, and we're always here to help with a friendly approach.
          </p>
        </div>

        <h3 className="text-3xl font-semibold text-neutral mb-8">Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg-soft transition-shadow duration-300"
            >
              <div className="mb-4 rounded-full overflow-hidden border border-gray-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              </div>
              <h4 className="text-xl font-semibold text-primary mb-2">{member.name}</h4>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <p className="text-gray-700">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}