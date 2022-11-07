import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Header } from './components/';
import { useGeolocation } from './hooks&aux/useGeolocation';
import ModalCart from './components/ModalCart/ModalCart.jsx'
import { Navbar } from './components/navbar/Navbar.jsx'
import { AddressModal } from './components/addressModal/AddressModal.jsx';
import { PlaceOrderDone } from './components/PlaceOrderDone/PlaceOrderDone';
import { IntroLogo } from './components/IntroLogo/IntroLogo';

export const LocationContext = createContext()

export const App = () => {
  /* A custom hook that is used to get the user's location. */
  const currentLocation = useGeolocation();

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isAddressEditOn, setIsAddressEditOn] = useState(false);

  // set interval for intro app
  const [isIntroLogo, setIsIntroLogo] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsIntroLogo(false)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  /* User info: */
  const [userInfo, setUserInfo] = useState({"street": "Maple Ave", "addressNumber": "624", "apartment": "", "extraInfo": ""});
  const [userAddress, setUserAddress] = useState("624 Mapple Ave");

  /*const [userApartment, setUserApartment] = useState("");
  const [userExtraInfo, setUserExtraInfo] = useState(""); */

  /* *********** */

  const handleOpenModal = () => {
    setIsOpenModal(true);
  }

  const openEditAddress = () => {
    setIsAddressEditOn(true);
  };

  const handleInfoSubmit = (address, addressNumber, apartment, extraInfo) => {
    setUserInfo({"street": address, "addressNumber": addressNumber, "apartment": apartment, "extraInfo": extraInfo});
    setUserAddress(address);
    setIsAddressEditOn(false);
  };

  return (
    <Router>
      <LocationContext.Provider value={currentLocation}>

        {!isAddressEditOn && <ModalCart isOpenModal={isOpenModal} 
                                        setIsOpenModal={setIsOpenModal} 
                                        openEditAddress={openEditAddress}
                                        userInfo={userInfo} />}

        <AddressModal isAddressEditOn={isAddressEditOn}
          setIsAddressEditOn={setIsAddressEditOn}
          handleInfoSubmit={handleInfoSubmit} />

        <Header onClick={handleOpenModal} />

        <Routes>
          <Route path="/" element={isIntroLogo ? <IntroLogo /> : <Home />} />
          <Route path='/success' element={<PlaceOrderDone />} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
        <Navbar />
      </LocationContext.Provider>
    </Router>
  );
}


