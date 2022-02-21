import React, { useState } from "react";
import { Button } from "react-bootstrap";
import SimpleInput from "../Utilities/SimpleInput";
import SelectInput from "../Utilities/SelectInput";
import DatePickerInput from "../Utilities/DatePickerInput";

// this page opens only if
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {} from "../../config";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import SimpleInput from "../Utilities/SimpleInput";
import SelectInput from "../Utilities/SelectInput";
import DatePickerInput from "../Utilities/DatePickerInput";
import Button from "../Utilities/Button"; 

function Register({ onFlip }) {
  const navigate = useNavigate();
  const [user, editUser] = useState({
    name: "",
    college: "",
    email: "",
    phone: "",
    dob: "",
    degree: "",
    year: "",
    gender: "",
    password: "",
    isVerified: false,
  });

  const [checkValidStates, setCheckValidStates] = useState({
    isNameValid: true,  
    isCollegeValid: true,
    isEmailValid: true,
    isPhoneValid: true,
    isDobValid: true,
    isDegreeValid: true,
    isYearValid: true,
    isGenderValid: true,
    isPasswordValid: true
  });

  function appendUser() {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/events");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
    // store this user in db and redirect to events page
  }

  const changeHandler = (name, value) => {
    console.log("change");
    editUser({ ...user, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    for(var det in user) {
      if(det === "name") {
        if((user[det].length < 2 || user[det].length > 50)){
          setCheckValidStates((prevState) => { return {...prevState, isNameValid: false}});
        }
        else setCheckValidStates((prevState) => { return {...prevState, isNameValid: true}});
      }

      else if(det === "college") {
        if( user[det].length === 0 || user[det].length > 50){
          setCheckValidStates((prevState) => {return  {...prevState, isCollegeValid: false }});
        }
        else setCheckValidStates((prevState) => {return  {...prevState, isCollegeValid: true }});
      }

      else if(det === "email") {
        if(!user[det].includes("@")){
          setCheckValidStates((prevState) => {return  {...prevState, isEmailValid: false }});
        }
        else setCheckValidStates((prevState) => {return  {...prevState, isEmailValid: true }});
      }

      else if(det === "phone") {
        if(user[det].length != 10){
          setCheckValidStates((prevState) => {return  {...prevState, isPhoneValid: false }});
        }
        else setCheckValidStates((prevState) => {return  {...prevState, isPhoneValid: true }});
      }
      
      else if(det === "password") {
        if(user[det].length < 8){
          setCheckValidStates((prevState) => {return  {...prevState, isPasswordValid: false }});
        }
        else setCheckValidStates((prevState) => {return  {...prevState, isPasswordValid: true }});
      }

    }

    // MG CODE
    // for(const prop in user) {
    //   editUser({ ...user, [prop]: "" });
    // }
    // console.log(user);

    // appendUser();
  };

  return (
    <>
      <div
        className="text-center text-uppercase fs-1 my-3"
        style={{ "font-family": "'Audiowide', serif", color: "white" }}
      >
        REGISTER
      </div>
      <form
        onSubmit={submitHandler}
        className="h-100 mt-3 overflow-hidden"
      >
      <div className={`w-100 d-flex flex-column align-items-center ${styles.overflow_auto}`}>
        <SimpleInput
          type="text"
          icon="user"
          placeholder="Name"
          name="name"
          val={user.name}
          changeFunc={changeHandler}
          isValid = {checkValidStates.isNameValid}
        />
        <SimpleInput
          type="text"
          icon="at"
          name="email"
          placeholder="Email Address"
          val={user.email}
          changeFunc={changeHandler}
          isValid = {checkValidStates.isEmailValid}
        />
        <SimpleInput
          type="text"
          icon="university"
          name="college"
          placeholder="College Name"
          val={user.college}
          changeFunc={changeHandler}
          isValid = {checkValidStates.isCollegeValid}
        />
        <SimpleInput type="text" icon="phone-alt" placeholder="Mobile Number"/>
        <SelectInput label="gender" icon="transgender-alt" disabledOption="Gender" options={["Male", "Female", "Other"]}/>
        <DatePickerInput label="dob" icon="calendar" />
        <SelectInput
          label="grad_year"
          icon="graduation-cap"
          disabledOption="Graduation Year"
          options={["2022", "2023", "2024", "2025"]}
        />
        <SelectInput
          icon="book"
          label="course"
          disabledOption="Course"
          options={["BTech", "MTech", "PhD"]}
        />
        <SimpleInput
          type="password"
          name="password"
          val={user.password}
          password="true"
          icon="key"
          placeholder="Password"
          changeFunc={changeHandler}
          isValid = {checkValidStates.isPasswordValid}
        />
        </div>
        <div className="d-flex flex-row justify-content-center my-2">
          <Button className="mx-3" type="button" onClickFunc={onFlip}>
            Back
          </Button>
          <Button className="mx-3" type="submit" >
            Sign Up
          </Button> 
        </div>
      </form>
    </>
  );
}

export default Register;
