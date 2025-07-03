import AboutMeTimelineSection from "@sections/AboutMeTimelineSection";
import ContactSection from "@sections/ContactSection"; // Import the new ContactSection
import ExperienceEducation from "@sections/ExperienceEducation";
import Header from "@sections/Header";
import Hero from "@sections/Hero";
import Landing from "@sections/Landing";
import Portfolio from "@sections/Portfolio";
import Skills from "@sections/Skills";

function App() {
  return (
    <>
      <Header />
      {/* Main content */}
      {/* Added pt-20 (80px) to account for fixed header height. Adjust if header height differs. */}
      <main className="relative pt-20 bg-black/80 dark:bg-black/90  text-white min-h-screen">
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
