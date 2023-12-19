import FeaturedSection from "./component/featured/FeaturedSection";
import Header from "./component/header/Header";
import HeroSection from "./component/hero/HeroSection";

const App = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <FeaturedSection />
    </main>
  </>
);

export default App;
