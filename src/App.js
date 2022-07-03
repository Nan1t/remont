import Navbar from "./components/navbar";
import Services from "./sections/services";
import Welcome from "./sections/welcome";
import Projects from "./sections/projects";
import Footer from "./components/footer";
import Contacts from "./sections/contacts";

function App() {
  return (
      <div>
          <Navbar/>
          <Welcome/>
          <Services/>
          <Projects/>
          <Contacts/>
          <Footer/>
      </div>
  );
}

export default App;
