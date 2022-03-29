import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes />
        <ContactForm />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
