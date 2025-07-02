import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Will be used in styling/animation step

// Define the props for social links
export interface SocialLink {
  icon: React.ReactNode; // e.g., <FaGithub />
  url: string;
  label: string; // For aria-label or tooltip
}

// Define the props for the ContactCard component
export interface ContactCardProps {
  name: string;
  role: string;
  email: string;
  phone: string;
  socialLinks: SocialLink[];
}

const ContactCard: React.FC<ContactCardProps> = ({
  name,
  role,
  email,
  phone,
  socialLinks,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const cardSizeClasses = "w-80 sm:w-96 h-52 sm:h-56"; // Responsive card size
  const cardFaceBaseStyle = `absolute w-full h-full p-6 flex flex-col justify-center items-center text-center rounded-xl shadow-xl`;

  return (
    // Outer container to set perspective for 3D flip
    // Added group class for potential future use if needed
    <div
        className="group cursor-pointer"
        style={{ perspective: '1000px' }}
        onClick={handleFlip}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleFlip(); }}
        aria-pressed={isFlipped}
        aria-label={isFlipped ? "Show front of contact card" : "Show back of contact card"}
    >
      {/* Inner container that will actually flip */}
      <motion.div
        className={`relative ${cardSizeClasses}`}
        style={{ transformStyle: 'preserve-3d' }}
        initial={false} // No initial animation on load, only on state change
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front Face */}
        {/* No need for individual motion.div here if the parent handles rotation */}
        <div
          className={`${cardFaceBaseStyle} bg-bgbrand-light dark:bg-gray-800 text-gray-800 dark:text-white`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <h2 className="text-3xl font-bold mb-1">{name}</h2>
          <p className="text-lg text-brand dark:text-brand-light">{role}</p>
        </div>

        {/* Back Face */}
        {/* The back face needs to be pre-rotated if the parent is not doing it based on isFlipped */}
        {/* Or, ensure its content is correctly oriented after parent rotation */}
        <div
          className={`${cardFaceBaseStyle} bg-brand-dark dark:bg-bgbrand-dark text-white`}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)' // This ensures it's correctly oriented when the parent flips
          }}
        >
          <div className="space-y-2 text-left w-full px-4">
            <p className="text-sm">
              <span className="font-semibold">Email:</span>
              <a href={`mailto:${email}`} className="ml-1 hover:underline">{email}</a>
            </p>
            <p className="text-sm">
              <span className="font-semibold">Phone:</span>
              <a href={`tel:${phone}`} className="ml-1 hover:underline">{phone}</a>
            </p>
          </div>
          <div className="mt-6 flex justify-center space-x-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-white hover:text-brand-light transition-colors text-2xl" // Increased icon size
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
