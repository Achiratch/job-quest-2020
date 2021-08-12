import React, { useState, createContext } from "react";

export const StoreContext = createContext({});

export const StoreContextProvider = ({ children }) => {
  const [personalInformation, setPersonalInformation] = useState({
    prefix: "",
    firstName: "",
    lastName: "",
    prefixTh: "",
    firstNameTh: "",
    lastNameTh: "",
    birthday: "",
    email: "",
    idCard: "",
    phoneNumber: "",
    address: "",
    bib: "",
    photo: "",
  });

  const [informationRunning, setInformationRunning] = useState({
    marathon: "",
    time: "",
  });

  const [emergencyContact, setEmergencyContact] = useState({
    firstNameE: "",
    lastNameE: "",
    phoneNumberE: "",
    relationship: "",
    fistNameE2: "",
    lastNameE2: "",
    phoneNumberE2: "",
    relationship2: "",
  });

  const [medicalInformation, setMedicalInformation] = useState({
    bloodType: "",
    allergic: undefined,
    allergicDetail: "",
    surgery: undefined,
    surgeryDetail: "",
    pregnant: "",
    pill: undefined,
    pillDetail: "",
    injured: "",
    workout: "",
    faint: "",
  });

  const [souvenirShirt,setSouvenirShirt] = useState({
    size: "",
  })

  const store = {
    personalInformation: [personalInformation, setPersonalInformation],
    informationRunning: [informationRunning, setInformationRunning],
    emergencyContact: [emergencyContact, setEmergencyContact],
    medicalInformation: [medicalInformation, setMedicalInformation],
    souvenirShirt:[souvenirShirt,setSouvenirShirt],
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
