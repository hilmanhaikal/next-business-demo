import ServiceCard from './ServiceCard';
import { FaLaptopCode, FaChartLine, FaUsers } from 'react-icons/fa'; // Example icons
import Link from 'next/link';

interface Service {
  title: string;
  description: string;
  link: string; // Add link property
}

export default function Services() {
  const services: Service[] = [
    {
      title: 'Web Development',
      description: 'Custom web solutions tailored to your needs. We build responsive and scalable websites.',
      link: '/services/web-development', // Link to dedicated page
    },
    {
      title: 'Data Analytics',
      description: 'Gain valuable insights from your data. We provide data-driven solutions for better decision-making.',
      link: '/services/data-analytics', // Link to dedicated page
    },
    {
      title: 'Team Collaboration',
      description: 'Enhance your team\'s productivity. We offer tools and strategies for seamless collaboration.',
      link: '/services/team-collaboration', // Link to dedicated page
    },
  ];

  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-neutral mb-12 text-center">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={[<FaLaptopCode />, <FaChartLine />, <FaUsers />][index]}
              link={service.link} // Pass the link
            />
          ))}
        </div>
      </div>
    </section>
  );
}