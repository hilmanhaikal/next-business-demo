import Head from 'next/head';

export default function TeamCollaboration() {
  return (
    <div className="min-h-screen bg-light">
      <Head>
        <title>Team Collaboration - Your Business Name</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-neutral mb-8">Team Collaboration Services</h1>
        <p className="text-lg text-gray-700 mb-8">
          Enhance your team's productivity and streamline workflows with our team collaboration services. We provide tools and strategies to foster seamless communication and collaboration.
        </p>
        <p className="text-gray-700 mb-8">
          Our services include:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-8">
          <li>Collaboration Software Implementation</li>
          <li>Workflow Optimization</li>
          <li>Communication Strategy Development</li>
          <li>Team Training and Support</li>
          <li>Project Management Solutions</li>
        </ul>
        <p className="text-gray-700">
          Empower your team to achieve more together.
        </p>
      </main>
    </div>
  );
}