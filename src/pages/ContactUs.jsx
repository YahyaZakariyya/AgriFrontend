import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


const ContactUs = () => {

 
 
    return (
    <div className="bg-green-900 bg-opacity-90 text-white min-h-screen py-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-wide">Contact Us</h1>
          <p className="text-gray-300 mt-2 text-sm md:text-base">
            We’re here to help with all your agricultural needs.
          </p>
        </div>

        {/* Contact Information & Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-300 mb-6">
              Whether you’re looking for advice or support, our team is here to assist. Reach out to us through the following:
            </p>
            <ul className="space-y-4">
              <li>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@agrishop.com"
                    className="text-green-200 hover:underline"
                  >
                    info@agrishop.com
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <strong>Phone:</strong> +1 (800) 123-4567
                </p>
              </li>
              <li>
                <p>
                  <strong>Address:</strong> 123 Green Valley, Farming Town 
                </p>
              </li>
            </ul>

            {/* Social Media */}
            <h3 className="mt-8 text-xl font-semibold">Follow Us:</h3>
            <div className="flex space-x-6 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition duration-300 transform hover:scale-110"
              >
                <FaFacebookF className="w-7 h-7" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition duration-300 transform hover:scale-110"
              >
                <FaTwitter className="w-7 h-7" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition duration-300 transform hover:scale-110"
              >
                <FaInstagram className="w-7 h-7" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition duration-300 transform hover:scale-110"
              >
               <FaLinkedin className="w-7 h-7" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
             
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form 
            className="bg-white text-black rounded-xl shadow-lg p-6 space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message here"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Agriculture Theme Section */}
        <div className="mt-12 bg-white py-10 rounded-lg shadow-lg">
  <h2 className="text-2xl font-semibold text-center text-green-900 mb-6">
    Why Choose Agri Shop?
  </h2>
  <p className="text-center text-gray-700 max-w-4xl mx-auto">
    At Agri Shop, we combine years of expertise with innovative solutions
    to deliver exceptional quality products. From sustainable farming
    tools to organic fertilizers, we provide everything you need to
    thrive in agriculture. Let’s grow together.
  </p>
</div>

      </div>
    </div>
  );
};

export default ContactUs;
