import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Header } from './components/';
import { useGeolocation } from './hooks&aux/useGeolocation';
import ModalCart from './components/ModalCart/ModalCart.jsx'
import { Navbar } from './components/navbar/Navbar.jsx'

import { AddressModal } from './components/addressModal/AddressModal.jsx';

export const LocationContext = createContext()

export const App = () => {
  /* A custom hook that is used to get the user's location. */
  const currentLocation = useGeolocation();

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [editAddress, setEditAddress] = useState(false);

  const handleOpenModal = () =>{
    setIsOpenModal(true);
  }

  /**** Address modal handlers ********/
  const openEditAddress = () => {
      setEditAddress(true);
  };

  const closeEditAddress = () => {
      setEditAddress(false);
  };

  const handleInfoSubmit = (e) => {
    e.preventDefault();
    setEditAddress(false);
    console.log("Delivery info saved.");
};
/* ************************************* */
  
  return (
    <Router>
      <LocationContext.Provider value={currentLocation}>

        <ModalCart isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} openEditAddress={openEditAddress} />

        {editAddress && <AddressModal closeModal={closeEditAddress} handleInfoSubmit={handleInfoSubmit} />}

        <Header onClick={handleOpenModal} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
        <Navbar />
      </LocationContext.Provider>
    </Router>
  );
}


