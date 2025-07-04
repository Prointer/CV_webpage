import Modal from "@components/Modal"
import AboutMeTimelineSection from "@sections/AboutMeTimelineSection"
import ContactSection from "@sections/ContactSection"; // Import the new ContactSection
import ExperienceEducation from "@sections/ExperienceEducation"
import Header from "@sections/Header"
import Hero from "@sections/Hero"
import Portfolio from "@sections/Portfolio"
import Skills from "@sections/Skills"
import { useState } from "react"
// Main App component


function App() {
const [showModal, setShowModal] = useState<boolean>(false);
const toggleModal = (): void => setShowModal(!showModal);

  return (
    <>
      <Header toggleModal={toggleModal} />
      {/* Main content */}
      {/* Modal */}
            <Modal isOpen={showModal} onClose={toggleModal} title="Связаться со мной">
              <p className='font-extralight text-brand '>Email: vladyslav.omelianenko@gmail.com</p>
              <p className="mt-2 text-sm text-gray-500">Форма будет позже 😎</p>
            </Modal>
      {/* Added pt-20 (80px) to account for fixed header height. Adjust if header height differs. */}
      <main className="relative pt-20 bg-black/80 dark:bg-black/90  text-white min-h-screen">
        <Hero />
        <Portfolio />
        <Skills />
        <ExperienceEducation />
        <AboutMeTimelineSection />
        <ContactSection /> {/* Add the ContactSection component */}
        {/* Other sections can be added here */}
      </main>
    </>
  );
}

export default App;
