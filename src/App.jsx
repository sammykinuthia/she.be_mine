import Background from "./components/Background";
import Music from "./components/Music";
import Hero from "./components/Hero";
import Quotes from "./components/Quotes";
import Gallery from "./components/Gallery";
import Promise from "./components/Promise";
import Ending from "./components/Ending";
import useSoftSnap from "./useSoftSnap";

export default function App() {
  useSoftSnap();
  return (
    <>
      <Background />
      <Music />
      <Hero />
      <Quotes />
      <Gallery />
      <Promise />
      <Ending />
    </>
  );
}
