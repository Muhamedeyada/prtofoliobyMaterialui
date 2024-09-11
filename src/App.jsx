import "./App.css";
import ContactInfo from "./components/ContactInfo";

import Contactme from "./components/Contactme";
import "../src/styles/style.css";

import Mybio from "./components/Mybio";
import Projectsection from "./components/Projectsection";

import New from "./components/New";

function App() {
  return (
    <div>
      <New />
      <Mybio />
      <Projectsection></Projectsection>
      <h1>Contact Me</h1>
      <div className="mainContact">
        <Contactme />
        <ContactInfo />
      </div>
    </div>
  );
}

export default App;
