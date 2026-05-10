import About from "@/components/organisms/About";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import Planes from "@/components/organisms/Planes";

export default function Home() {
  return (
    <main className="min-h-full flex flex-col">
      <Header />
      <Hero />
      <About />
      <Planes />
      <Footer />
    </main>
  );
}
