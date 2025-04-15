import React from "react";

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-semibold mb-4">
            Reliable Accounting & Bookkeeping Services for Businesses of All Sizes
          </h1>
          <p className="text-lg mb-8">
            Trusted by freelancers, small businesses, and corporations across the US.
          </p>
          <a
            href="#services"
            className="inline-block bg-yellow-500 text-gray-900 px-6 py-3 text-xl font-semibold rounded-lg hover:bg-yellow-400"
          >
            Get a Free Consultation
          </a>
        </div>
      </section>

      {/* Accounting Services Overview */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Our Services
          </h2>

          {/* Bookkeeping Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                Bookkeeping Services
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Keep your business finances in order with our detailed bookkeeping services.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Monthly transaction recording</li>
                <li>Bank & credit card reconciliation</li>
                <li>Accounts payable & receivable</li>
                <li>Payroll tracking</li>
                <li>Financial reporting</li>
              </ul>
              <a
                href="#contact"
                className="inline-block bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800"
              >
                Get a Quote
              </a>
            </div>

            {/* Accounting Services */}
            <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                Accounting Services
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Comprehensive accounting solutions to help your business thrive.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Financial statement preparation</li>
                <li>Budgeting & forecasting</li>
                <li>Tax preparation</li>
                <li>Compliance & advisory</li>
                <li>Year-end close assistance</li>
              </ul>
              <a
                href="#contact"
                className="inline-block bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section (Optional) */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            What Our Clients Say
          </h2>
          <div className="flex justify-center space-x-8">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs">
              <p className="text-lg text-gray-700 mb-4">
                &quot;ASN Bookkeeping has been an invaluable partner to our business. Their expertise and attention to detail make our financials easier to manage.
              </p>
              <span className="font-semibold text-blue-900">John D., Small Business Owner</span>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs">
              <p className="text-lg text-gray-700 mb-4">
              &quot;The team at ASN has helped us streamline our accounting processes. Their professionalism and customer service are top-notch.
              </p>
              <span className="font-semibold text-blue-900">Sarah T., Freelancer</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-yellow-500 text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold mb-4">Get Started Today</h2>
          <p className="text-lg mb-8">Take control of your financial future with our expert services.</p>
          <a
            href="#contact"
            className="inline-block bg-blue-900 text-white px-6 py-3 text-xl font-semibold rounded-lg hover:bg-blue-800"
          >
            Contact Us for a Free Consultation
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 ASN Bookkeeping & Accounting | All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
