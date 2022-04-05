import React from 'react';
import {BigCalendar} from "./Container/Calender/Calender";
import CreateReservation from "./Container/CreateReservation/CreateReservation";
import PaymentMethod from "./Container/PaymentMethod/PaymentMethod";
import ReservationPage from "./Container/ReservationPage/ReservationPage";
import Home from "./Container/Home/Home";
import Header from "./Components/Header/Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
        <Router>
            <Header />
            <Routes>
                <Route path={'/'}  element={<Home />} />
                <Route path={'/reservation'}  element={<BigCalendar />} />
                <Route path={'/create-reservation'} element={<CreateReservation />} />
                <Route path={'/payment'} element={<PaymentMethod />} />
                <Route path={'/reservation-page'} element={<ReservationPage />} />
            </Routes>
        </Router>
  );
}

export default App;
