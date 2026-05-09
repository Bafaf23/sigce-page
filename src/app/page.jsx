import About from "@/components/organisms/About";
import Fotter from "@/components/organisms/Fotter";
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
      <Fotter />
    </main>
  );
}
