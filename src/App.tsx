import { MyContext } from "./Components/Context";
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";

function App() {


  return (
    <>
      <div>
        <MyContext.Provider
          value={{
          }}
        >
          <Home />
          <Gallery />
        </MyContext.Provider>
      </div>
    </>
  );
}
export default App
