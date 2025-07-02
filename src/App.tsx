import Header from '@sections/Header'
import Landing from '@sections/Landing'
import Hero from '@sections/Hero'
import Portfolio from '@sections/Portfolio'
import Skills from '@sections/Skills'
import ExperienceEducation from '@sections/ExperienceEducation'
import AboutMeTimelineSection from '@sections/AboutMeTimelineSection' // Import the new AboutMeTimelineSection

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
        <AboutMeTimelineSection /> {/* Add the AboutMeTimelineSection component */}
        {/* Other sections can be added here */}

        {/* Test div for colors - you may want to remove or relocate this later */}
        {/*
        <div className="space-y-4 p-8 bg-bgbrand text-white">
          <p className="text-brand">This is brand color</p>
          <p className="text-brand-light">This is brand-light</p>
          <p className="text-brand-dark">This is brand-dark</p>
          <p className="bg-brand text-white px-4 py-2">Background brand</p>
          <p className="bg-bgbrand text-white px-4 py-2">Background bgbrand</p>
        </div>
        */}
      </main>
    </>
  );
}

export default App;
