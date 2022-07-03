import Navbar from "./components/navbar";
import Services from "./sections/services";
import Welcome from "./sections/welcome";
import Projects from "./sections/projects";
import Footer from "./components/footer";

function App() {
  return (
      <div>
          <Navbar/>
          <Welcome/>
          <Services/>
          <Projects/>
          <Footer/>
      </div>
  );
}

export default App;
