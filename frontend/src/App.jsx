import Header from "./components/Header";
import {Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Home from './pages/Home'

const App = () => {
  return (
    <>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
    </>
  );
};

export default App;
