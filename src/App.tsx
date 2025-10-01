import { MyContext } from "./Components/Context";
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";
import Gallerytwo from "./Components/Gallerytwo";
import About from "./Components/About";
import Service from "./Components/Service";
import Testimonials from "./Components/Testimonials";


function App() {


  return (
    <>
      <div>
        <MyContext.Provider
          value={{
          }}
        >
          <Home />
          <div className="block lg:hidden">
            <Gallery />
          </div>
          <div className="hidden lg:block">
            <Gallerytwo />
          </div>
          <About />
          <Service />
          <Testimonials />
        </MyContext.Provider>
      </div>
    </>
  );
}
export default App
