import { useState } from "react"

const Globe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden bg-black">
      {/* Фон - изображение Европы */}
      <img
        src="/assets/globe-map.png" // замените на актуальный путь
        alt="Europe Globe"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      {/* Точка на Катовице */}
      <button
        onClick={toggleModal}
        className="absolute z-10 w-4 h-4 rounded-full bg-green-400 animate-pulse shadow-md border-2 border-white"
        style={{ top: "68%", left: "52%" }} // подбери вручную под изображение
        aria-label="Show Profile"
      />

      {/* Модальное окно */}
      {isModalOpen && (
        <div
          className="absolute z-20 bg-black/90 border border-brand p-4 rounded-xl shadow-lg text-white w-72 flex flex-col items-center gap-2 animate-fade-in"
          style={{ top: "72%", left: "55%" }}
        >
          <img
            src="/assets/profile.jpg" // путь к твоему фото
            alt="Vladyslav"
            className="w-20 h-20 rounded-full border border-brand-light shadow-md"
          />
          <p className="text-brand text-sm font-medium">Katowice, Poland</p>
          <p className="text-sm text-gray-300 text-center">
            Frontend Developer with passion for UI/UX and clean code.
          </p>
          <button
            onClick={toggleModal}
            className="mt-1 text-xs text-gray-400 hover:underline"
          >
            Close
          </button>
        </div>
      )}
    </section>
  );
};

export default Globe;