import { Suspense } from "react";
import Banner from "./components/Banner";
import ExploreTechnology from "./components/ExploreTechnology";
import Navbar from "./components/Navbar";
import type { Itecnology } from "./components/type";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";


const technologiesFetch = async():Promise<Itecnology[]>=>{
  const res = await fetch("/data.json");
  const data = await res.json();
  return data
}

function App() {
  const technologiesPromise = technologiesFetch()
  return (
    <>
      <Navbar/>
      <Banner/>
      <Suspense fallback={<p>Loadding..........</p>}>
        <ExploreTechnology technologiesPromise={technologiesPromise}/>
      </Suspense>
      <ToastContainer />
      <Footer/>
    </>
  );
}

export default App;
