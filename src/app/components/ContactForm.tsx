'use client';
import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Input from './Input';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setError(false);
      setSuccess(false);
      setErrorMessage('');
  
      // Simulate form submission (replace with your actual logic)
      try {
        // Replace this with your actual form submission logic (e.g., fetch, axios)
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate 1 second delay
  
        if (name && email && message) {
          setSuccess(true);
          setName('');
          setEmail('');
          setMessage('');
        } else {
          setError(true);
          setErrorMessage('Please fill in all fields.');
        }
      } catch (err) {
        setError(true);
        setErrorMessage('An error occurred. Please try again later.');
        console.error('Form submission error:', err);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-neutral mb-12 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="bg-light rounded-lg shadow-lg p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-neutral">Name</label>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-neutral"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral">Email</label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-neutral"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-neutral"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`bg-primary hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded transition-colors duration-300 ${
                    loading ? 'opacity-50 cursor-wait' : ''
                  }`}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
                {success && <p className="text-green-500">Message sent successfully!</p>}
                {error && <p className="text-red-500">{errorMessage}</p>}
              </form>
            </div>

          {/* Contact Information */}
          <div className="p-8">
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-primary mr-2" />
              <p className="text-gray-700">123 Main Street, Kuala Lumpur, Malaysia</p>
            </div>
            <div className="flex items-center mb-4">
              <FaPhone className="text-primary mr-2" />
              <p className="text-gray-700">+60 (123) 456-7890</p>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-primary mr-2" />
              <p className="text-gray-700">info@example.com</p>
            </div>
            {/* Add Google Map Embed Here */}
          </div>
        </div>
      </div>
    </section>
  );
}