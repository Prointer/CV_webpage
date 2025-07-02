
import Header from '@sections/Header'
import Landing from '@sections/Landing'
import Hero from '@sections/Hero'
import Portfolio from '@sections/Portfolio'
import Skills from '@sections/Skills'
import ExperienceEducation from '@sections/ExperienceEducation'
import AboutMeTimelineSection from '@sections/AboutMeTimelineSection'
import ContactSection from '@sections/ContactSection' // Import the new ContactSection


function App() {
  return (
    <>
      <Header />
      {/* Main content */}
      {/* Added pt-20 (80px) to account for fixed header height. Adjust if header height differs. */}
      <main className="relative pt-20">
        <Landing />
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
