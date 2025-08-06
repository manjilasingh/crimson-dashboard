import './App.css';
import Header from './components/layout/Header';
import HeroCarousel from './components/home/HeroCarousel';

function App() {
  return (
    <div className="min-h-screen bg-gray-200 text-white">
      <Header />
      <main>
        <HeroCarousel />
      </main>
    </div>
  )
}

export default App
