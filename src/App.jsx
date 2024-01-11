import { ToastContainer } from "react-toastify";
import "./Styles/index.scss";
import { RoutesMain } from "./Routes/Route";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
        <RoutesMain />
        <ToastContainer theme="dark" />
    </>
  );
}

export default App;
