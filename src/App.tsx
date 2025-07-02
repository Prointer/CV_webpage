import Header from '@sections/Header'
import Hero from '@sections/Hero'
import Landing from '@sections/Landing'

function App() {
  return (
    <div className="container">
      <Header />
      {/* Main content */}
      <main className="relative min-h-screen">
        <Landing />
        {/* Other sections can be added here */}
        {/* <Hero /> */}
        <Hero />
        {/* <About /> */}
        {/* <Projects /> */}
        {/* <Contact /> */}
      </main>

    </div>
  );
}

export default App;
