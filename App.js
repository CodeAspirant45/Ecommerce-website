import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/Scrolltotop";

function App() {
  return (
    <>
      <ScrollToTop />
      <div>
        <Header />
        <main className="">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
