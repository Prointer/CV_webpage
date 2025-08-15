import Modal from "@components/Modal"
import ExperienceEducation from "@sections/ExperienceEducation"
import Footer from "@sections/Footer"
import Header from "@sections/Header"
import Hero from "@sections/Hero"
import ProjectsSection from '@sections/ProjectsSection'
import SkillsInAction from '@sections/SkillInAction'
import Skills from "@sections/Skills"
import { useState } from "react"

function App() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const toggleModal = (): void => setShowModal(!showModal);

  return (
    <>
      <Header toggleModal={toggleModal} />
      {/* Main content */}
      {/* Modal */}
      <Modal isOpen={showModal} onClose={toggleModal} title="Contact with me">
        <p className="font-extralight text-brand ">
          Email: vladyslav.omelianenko@gmail.com
        </p>
        <p className="mt-2 text-sm text-gray-500">Form will be soon... 😎</p>
      </Modal>

      {/* Added pt-20 (80px) to account for fixed header height. Adjust if header height differs. */}
      <main className="relative z-10 bg-black/80 dark:bg-black/90  text-white min-h-screen">
        <Hero onContactClick={toggleModal} />
        <ProjectsSection />
        <Skills />
        <ExperienceEducation />
        <SkillsInAction />
        <Footer /> {/* Add the ContactSection component */}
        {/* Other sections can be added here */}
      </main>
    </>
  );
}

export default App;
