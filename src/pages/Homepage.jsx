import Contact from "../components/Contact";
import Landing from "../components/Landing";
import SelectedWork from "../components/SelectedWork";
import Skills from "../components/Skills";

function Homepage() {
  return (
    <div>
      <Landing />
      <SelectedWork />
      <Skills />
      <Contact />
    </div>
  );
}

export default Homepage;
