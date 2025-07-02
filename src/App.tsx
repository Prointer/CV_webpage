import Header from "@sections/Header";
import Hero from "@sections/Hero";
import Landing from "@sections/Landing";

function App() {
  return (
    <div className="container">
      <Header />
      {/* Main content */}
      <main className="relative min-h-screen pt-10 lg:pt-0">
        <Landing />
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
