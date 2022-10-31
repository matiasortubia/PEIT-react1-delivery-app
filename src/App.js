import React, { createContext, useEffect, useState } from 'react';
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
  const [isAddressEditOn, setIsAddressEditOn] = useState(false);

  const handleOpenModal = () =>{
    setIsOpenModal(true);
  }

  const openEditAddress = () => {
    setIsAddressEditOn(true);
  };

  const handleInfoSubmit = (address, apartment, extraInfo) => {
    console.log(address, apartment, extraInfo);
    setIsAddressEditOn(false);
  };

/*
  useEffect(() => {
    const timer = setTimeout(() => setIsOpenModal(!isOpenModal), 1000);
    return () => clearTimeout(timer);
  }, [isAddressEditOn]);*/
  
  return (
    <Router>
      <LocationContext.Provider value={currentLocation}>

        {!isAddressEditOn && <ModalCart isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} openEditAddress={openEditAddress} />}
        {/*<ModalCart isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} openEditAddress={openEditAddress} />*/}

        <AddressModal isAddressEditOn={isAddressEditOn} setIsAddressEditOn={setIsAddressEditOn} handleInfoSubmit={handleInfoSubmit} />

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


