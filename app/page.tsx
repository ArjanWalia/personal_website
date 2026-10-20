import About from "@/components/About";
import Connect from "@/components/Connect";
import Extracurriculars from "@/components/Extracurriculars";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Header />
        <About />
        <Extracurriculars />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
