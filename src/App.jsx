import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import OurVision from "./components/OurVision";
import Team from "./components/Team";
import { Spacer } from "@nextui-org/react";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Spacer y={10} />
      <Team />
      <OurVision />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
