import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Header from "./Components/Header/header";

function App() {
  return (
    <>
      <div className="  lg:w-[1200px] mx-auto">
        <Header></Header>
        <Blogs></Blogs>
      </div>
    </>
  );
}

export default App;
