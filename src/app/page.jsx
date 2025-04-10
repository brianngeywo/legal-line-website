// src/app/page.jsx
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Services from "./components/Services";


export default function Home() {
  return (
    <main>
      <Header />
      <HeroBanner />
      <About />
        <Services />
      <Contact />
      <Footer />
    </main>
  );
}
