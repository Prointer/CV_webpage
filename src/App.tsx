import Header from '@sections/Header'
import Landing from '@sections/Landing'

function App() {
  return (
    <div className="container">
      <Header />
      {/* Main content */}
      <main className="relative min-h-screen">
        <Landing />
        {/* Other sections can be added here */}
        <div className="space-y-4 p-8 bg-bgbrand text-white">
      <p className="text-brand">This is brand color</p>
      <p className="text-brand-light">This is brand-light</p>
      <p className="text-brand-dark">This is brand-dark</p>
      <p className="bg-brand text-white px-4 py-2">Background brand</p>
      <p className="bg-bgbrand text-white px-4 py-2">Background bgbrand</p>
    </div>
      </main>

    </div>
  );
}

export default App;
