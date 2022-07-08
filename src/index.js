import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.min';
import './assets/util.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import Navbar from "./components/navbar";
import Welcome from "./sections/welcome";
import Services from "./sections/services";
import Projects from "./sections/projects";
import Contacts from "./sections/contacts";
import Footer from "./components/footer";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
    return (
        <div className="bg-light">
            <Navbar/>
            <Welcome/>
            <Services/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}