import Head from 'next/head';

export default function DataAnalytics() {
  return (
    <div className="min-h-screen bg-light">
      <Head>
        <title>Data Analytics - Your Business Name</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-neutral mb-8">Data Analytics Services</h1>
        <p className="text-lg text-gray-700 mb-8">
          Unlock the power of your data with our comprehensive data analytics services. We help you gain valuable insights, make informed decisions, and drive business growth.
        </p>
        <p className="text-gray-700 mb-8">
          Our services include:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-8">
          <li>Data Collection and Processing</li>
          <li>Data Visualization and Reporting</li>
          <li>Predictive Analytics</li>
          <li>Business Intelligence</li>
          <li>Data Strategy and Consulting</li>
        </ul>
        <p className="text-gray-700">
          Let us transform your data into actionable insights that lead to success.
        </p>
      </main>
    </div>
  );
}