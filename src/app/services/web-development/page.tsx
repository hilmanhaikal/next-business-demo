import Head from 'next/head';

export default function WebDevelopment() {
  return (
    <div className="min-h-screen bg-light">
      <Head>
        <title>Web Development - Your Business Name</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-neutral mb-8">Web Development Services</h1>
        <p className="text-lg text-gray-700 mb-8">
          We specialize in creating custom web solutions tailored to your specific business needs. Our team of experienced developers builds responsive and scalable websites that deliver exceptional user experiences.
        </p>
        <p className="text-gray-700 mb-8">
          Our services include:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-8">
          <li>Custom Website Design and Development</li>
          <li>E-commerce Solutions</li>
          <li>Content Management Systems (CMS)</li>
          <li>Web Application Development</li>
          <li>Website Maintenance and Support</li>
        </ul>
        <p className="text-gray-700">
          Contact us today to discuss your web development needs and take your online presence to the next level.
        </p>
      </main>
    </div>
  );
}