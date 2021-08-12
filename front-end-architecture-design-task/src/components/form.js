import React, { useState, useContext } from "react";
import { StoreContext } from "../context/store";

import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import PersonalInformation from "./personal-information";
import InformationRunning from "./information-running";
import EmergencyContact from "./emergency-contact";
import MedicalInformation from "./medical-information";
import SouvenirShirt from "./souvenir-shirt";
import Finish from "./finish";
import useForm from "react-hook-form";
import * as yup from "yup";

const useStyles = makeStyles((theme) => ({}));

const getSteps = () => {
  return [
    "Personal information",
    "Information about running",
    "Emergency contact",
    "Medical information",
    "Souvenir shirt",
    "Finish",
  ];
};

const StepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const {
    personalInformation,
    informationRunning,
    emergencyContact,
    medicalInformation,
    souvenirShirt,
  } = useContext(StoreContext);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <PersonalInformation
            formProps={personalInformationForm}
            data={personalInformation}
          />
        );
      case 1:
        return (
          <InformationRunning
            formProps={informationRunningForm}
            data={informationRunning}
          />
        );
      case 2:
        return (
          <EmergencyContact
            formProps={emergencyContactForm}
            data={emergencyContact}
          />
        );
      case 3:
        return (
          <MedicalInformation
            formProps={medicalInformationForm}
            data={medicalInformation}
          />
        );
      case 4:
        return (
          <SouvenirShirt formProps={souvenirShirtForm} data={souvenirShirt} />
        );
      case 5:
        return (
          <Finish
            data1={personalInformation}
            data2={informationRunning}
            data3={emergencyContact}
            data4={medicalInformation}
            data5={souvenirShirt}
          />
        );
      default:
        return "Unknown step";
    }
  };

  const personalInformationSchema = yup.object().shape({
    prefix: yup.string().required("Prefix is required."),
    firstName: yup.string().required("Firstname is required."),
    lastName: yup.string().required("Lastname is required."),
    prefixTh: yup.string().required("กรุณาใส่คำนำหน้า"),
    firstNameTh: yup.string().required("กรุณากรอกชื่อจริง"),
    lastNameTh: yup.string().required("กรุณากรอกนามสกุล"),
    birthday: yup.string().required("Birthday is required."),
    email: yup
      .string()
      .email("Invalid email.")
      .required("This field is required."),
    idCard: yup
      .string()
      .min(13, "This isn't not ID Card.")
      .max(13, "This isn't not ID Card.")
      .required("ID Card is required."),
    phoneNumber: yup
      .string()
      .min(10, "This isn't not phone number.")
      .max(10, "This isn't not phone number.")
      .required("Phone number requried."),
    address: yup.string().required("Address is required."),
    bib: yup
      .string()
      .max(10, "BIB up to 10 characters.")
      .required("BIB is required.")
      .matches(/^(?=.[A-Z])/, "Must be Uppercase"),
    photo: yup
      .mixed()
      .test(
        "fileSize",
        "Please recheck the image size",
        (value) => value[0] === null || (value[0] && value[0].size >= 300 * 300)
      ),
    // .test(
    //   "fileAspectRatio",
    //   "Please recheck the image resolution",
    //   (value) => console.log(value),
    // ),
  });

  const informationRunningSchema = yup.object().shape({
    marathon: yup.string().required("Required."),
    time: yup.string().required("Time is required."),
  });

  const emergencyContactSchema = yup.object().shape({
    firstNameE: yup.string().required("Firstname is required."),
    lastNameE: yup.string().required("Lastname is required."),
    phoneNumberE: yup
      .string()
      .min(10, "This isn't not phone number.")
      .max(10, "This isn't not phone number.")
      .required("Phone number requried."),
    relationship: yup.string().required("Relationship is required."),
    firstNameE2: yup.string().required("Firstname is required."),
    lastNameE2: yup.string().required("Lastname is required."),
    phoneNumberE2: yup
      .string()
      .min(10, "This isn't not phone number.")
      .max(10, "This isn't not phone number.")
      .required("Phone number requried."),
    relationship2: yup.string().required("Relationship is required."),
  });

  const medicalInformationSchema = yup.object().shape({
    bloodType: yup.string().required("Required"),
    //allergicDetail: yup.string().required("Required"),
    //surgeryDetail: yup.string().required("Required"),
    pregnant: yup.string().required("Required"),
    //pillDetail: yup.string().required("Required"),
    injured: yup.string().required("Required"),
    workout: yup.string().required("Required"),
    faint: yup.string().required("Required"),
  });

  const souvenirShirtSchema = yup.object().shape({
    size: yup.string().required("Size is required"),
  });

  const personalInformationForm = useForm({
    validationSchema: personalInformationSchema,
  });
  const informationRunningForm = useForm({
    validationSchema: informationRunningSchema,
  });
  const emergencyContactForm = useForm({
    validationSchema: emergencyContactSchema,
  });
  const medicalInformationForm = useForm({
    validationSchema: medicalInformationSchema,
  });
  const souvenirShirtForm = useForm({
    validationSchema: souvenirShirtSchema,
  });

  const onSubmit = (data) => {
    console.log(data);
    if (activeStep === 0) {
      personalInformation[1](data);
    } else if (activeStep === 1) {
      informationRunning[1](data);
    } else if (activeStep === 2) {
      emergencyContact[1](data);
    } else if (activeStep === 3) {
      medicalInformation[1](data);
    } else if (activeStep === 4) {
      souvenirShirt[1](data);
    }
    handleNext();
  };

  return (
    <>
      <div className="form-style">
        <h1>Register</h1>
        <form
          onSubmit={
            activeStep === 0
              ? personalInformationForm.handleSubmit(onSubmit)
              : activeStep === 1
              ? informationRunningForm.handleSubmit(onSubmit)
              : activeStep === 2
              ? emergencyContactForm.handleSubmit(onSubmit)
              : activeStep === 3
              ? medicalInformationForm.handleSubmit(onSubmit)
              : souvenirShirtForm.handleSubmit(onSubmit)
          }
        >
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            {activeStep === steps.length ? (
              <div>
                <Typography>All steps completed</Typography>
                <Button onClick={handleReset}>Reset</Button>
              </div>
            ) : (
              <div>
                <div>{getStepContent(activeStep)}</div>
                <div>
                  <Button disabled={activeStep === 0} onClick={handleBack}>
                    Back
                  </Button>
                  <Button variant="contained" color="primary" type="submit">
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default StepForm;
