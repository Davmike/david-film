import { MyContext } from "./Components/Context";
import Home from "./Components/Home";

function App() {


  return (
    <>
      <div>
        <MyContext.Provider
          value={{
          }}
        >
          <Home />
        </MyContext.Provider>
      </div>
    </>
  );
}
export default App
