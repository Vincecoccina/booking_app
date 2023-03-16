import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import HotelDetails from "./pages/HotelDetails";
import HotelsList from "./pages/HotelsList";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hotels" element={<HotelsList />} />
          <Route path="/hotels/:id" element={<HotelDetails />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
