import { useEffect, useState } from "react";
import Footer from "./layout/footer";
import { Navbar } from "./layout/navbar";
import { Home } from "./pages/home";
import { Preloader } from "./pages/preloader";


export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      )}
    </>
  );
}