import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main className="container mt-9">
        <Outlet />
      </main>
    </>
  );
}

export default App;
