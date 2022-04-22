import React from 'react';
import Home from "./Container/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import BusinessPage from "./Container/BusinessPage/BusinessPage";
import Listing from "./Container/Listing/Listing";
import Message from "./Container/Message/Message";
import SignUp from "./Container/SignUp/SignUp";
import Login from "./Container/Login/Login";
import Booking from "./Container/Booking/Booking";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
        <Router>
            <Header />
            <Routes>
                <Route path={'/'}  element={<Home />} />
                <Route path={'/business-page'}  element={<BusinessPage />} />
                <Route path={'/listings'}  element={<Listing />} />
                <Route path={'/message'}  element={<Message />} />
                <Route path={'/login'}  element={<Login />} />
                <Route path={'/booking'}  element={<Booking />} />
                <Route path={'/sign-up'}  element={<SignUp />} />
            </Routes>
            <Footer />
        </Router>
  );
}
export default App;