import React from 'react';
import ContactCard, { ContactCardProps } from '../components/ContactCard'; // Adjust path if necessary
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'; // Example icons

// Sample data for the ContactCard - replace with your actual details
const contactCardData: ContactCardProps = {
  name: 'Vladyslav Omelianenko', // Replace with your name
  role: 'Frontend Developer',    // Replace with your role
  email: 'vladyslav.dev@example.com', // Replace with your email
  phone: '+1 (555) 123-4567',      // Replace with your phone
  socialLinks: [
    {
      icon: <FaGithub />,
      url: 'https://github.com/prointer', // Replace with your GitHub URL
      label: 'GitHub Profile',
    },
    {
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/yourprofile', // Replace with your LinkedIn URL
      label: 'LinkedIn Profile',
    },
    {
      icon: <FaTwitter />,
      url: 'https://twitter.com/yourusername', // Replace with your Twitter URL
      label: 'Twitter Profile',
    },
    // Add more social links if needed
  ],
};

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-bgbrand dark:bg-bgbrand-dark flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 dark:text-white mb-12 md:mb-16">
          Get In Touch
        </h2>

        <div className="flex justify-center">
          <ContactCard {...contactCardData} />
        </div>

        {/* Placeholder for Email Form (Phase 2) */}
        {/* <div className="mt-16 w-full max-w-2xl mx-auto"> */}
        {/*   <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">Send Me a Message</h3> */}
        {/*   Email form will go here */}
        {/* </div> */}

        {/* Placeholder for Mini-Footer (Phase 3) - will be part of this section */}
      </div>
      {/* Mini-footer will be added directly inside the section, likely below the form area */}
    </section>
  );
};

export default ContactSection;
