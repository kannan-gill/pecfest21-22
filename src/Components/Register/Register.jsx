import React, { useState } from "react";
import SimpleInput from "../Utilities/SimpleInput";
import SelectInput from "../Utilities/SelectInput";
import DatePickerInput from "../Utilities/DatePickerInput";
import { Spinner } from "react-bootstrap";
// this page opens only if
import { sendEmailVerification, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config";
import { useNavigate } from "react-router-dom";
// import styles from "./Register.module.css";
import { toast } from "react-toastify";
import Button from "../Utilities/Button";
import { createDoc, getDocById, updateDoc } from "services";

const isDigit = (phoneNum) => {
  return /^\+?([0-9]{2})?[-. ]?([0-9]{10})$/.test(phoneNum);
}

const isValidEmailAddress = (email) => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
}

const initialStateUser = {
  name: "",
  college: "",
  email: "",
  phone: "",
  dob: "",
  degree: "",
  year: "",
  gender: "",
  password: "",
};

const initialValidStates = {
  isNameValid: true,
  isCollegeValid: true,
  isEmailValid: true,
  isPhoneValid: true,
  isDobValid: true,
  isDegreeValid: true,
  isYearValid: true,
  isGenderValid: true,
  isPasswordValid: true,
};

function Register({ onFlip, redirect }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(initialStateUser);
  const [loading, setLoading] = useState(false);

  const [checkValidStates, setCheckValidStates] = useState(initialValidStates);


  const onFlipBtnClick = () => {
    onFlip();
    setCheckValidStates(initialValidStates);
  }

  const registerUser = () => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        const userData = { ...user };
        delete userData.password;
        createDoc("users", userData)
          .then((createdUser) => {
            sendEmailVerification(auth.currentUser, { url: `${window.location.origin}/verifyEmail/${createdUser.id}` })
              .then(() => {
                navigate("/");
              })
              .catch((error) => {
                const errorMessage = error.message;
                toast.error("Unable to send verification email. Please try again later.", { autoClose: 2000 });
                setLoading(false);
              });
          })
          .catch((error) => {
            const errorMessage = error.message;
            toast.error("Unable to register!");
            setLoading(false);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
        setLoading(false);
      });
  }

  const changeHandler = (name, value) => {
    setUser({ ...user, [name]: value });
  };


  const submitHandler = (e) => {
    e.preventDefault();

    let formIsValid = true;

    for (var det in user) {
      if (det === "name") {
        if (user[det].length < 2 || user[det].length > 50) {
          setCheckValidStates((prevState) => {
            return { ...prevState, isNameValid: false };
          });
          formIsValid = false;
        } else
          setCheckValidStates((prevState) => {
            return { ...prevState, isNameValid: true };
          });
      }
      else if (det === "college") {
        if (user[det].length === 0 || user[det].length > 50) {
          setCheckValidStates((prevState) => {
            return { ...prevState, isCollegeValid: false };
          });
          formIsValid = false;
        } else
          setCheckValidStates((prevState) => {
            return { ...prevState, isCollegeValid: true };
          });
      }

      else if (det === "email") {
        if (!isValidEmailAddress(user[det])) {
          setCheckValidStates((prevState) => {
            return { ...prevState, isEmailValid: false };
          });
          formIsValid = false;
        } else
          setCheckValidStates((prevState) => {
            return { ...prevState, isEmailValid: true };
          });
      }

      else if (det === "phone") {
        if (!isDigit(user[det])) {
          setCheckValidStates((prevState) => {
            return { ...prevState, isPhoneValid: false };
          });
          formIsValid = false;
        } else
          setCheckValidStates((prevState) => {
            return { ...prevState, isPhoneValid: true };
          });
      }

      else if (det === "password") {
        if (user[det].length < 8) {
          setCheckValidStates((prevState) => {
            return { ...prevState, isPasswordValid: false };
          });
          formIsValid = false;
        } else
          setCheckValidStates((prevState) => {
            return { ...prevState, isPasswordValid: true };
          });
      }

      else if (det === "dob") {
        if (user[det].length === 0) {
          setCheckValidStates((prevState) => {
            return { ...prevState, isDobValid: false };
          });
          formIsValid = false;
        } else
          setCheckValidStates((prevState) => {
            return { ...prevState, isDobValid: true };
          });
      }

      else if (det === "degree") {
        if (user[det] === "") {
          setCheckValidStates((prevState) => {
            return { ...prevState, isDegreeValid: false };
          });
          formIsValid = false;
        } else
          setCheckValidStates((prevState) => {
            return { ...prevState, isDegreeValid: true };
          });
      }

      else if (det === "year") {
        if (user[det] === "") {
          setCheckValidStates((prevState) => {
            return { ...prevState, isYearValid: false };
          });
          formIsValid = false;
        } else
          setCheckValidStates((prevState) => {
            return { ...prevState, isYearValid: true };
          });
      }

      else if (det === "gender") {
        if (user[det] === "") {
          setCheckValidStates((prevState) => {
            return { ...prevState, isGenderValid: false };
          });
          formIsValid = false;
        } else
          setCheckValidStates((prevState) => {
            return { ...prevState, isGenderValid: true };
          });
      }

    }

    if (!formIsValid) {
      return false;
    }
    setCheckValidStates(initialValidStates);
    registerUser();
  };

  return (
    <>
      <div
        className="text-center text-uppercase fs-1 my-3"
        style={{ fontFamily: "'Audiowide', serif", color: "white" }}
      >
        REGISTER
      </div>
      <form onSubmit={submitHandler} className="h-auto mh-100 mt-3 overflow-auto">
        <div
          className={`w-100 d-flex flex-column align-items-center`}
        >
          <SimpleInput
            type="text"
            icon="user"
            placeholder="Name"
            name="name"
            val={user.name}
            changeFunc={changeHandler}
            isValid={checkValidStates.isNameValid}
          />
          <SimpleInput
            type="text"
            icon="at"
            name="email"
            placeholder="Email Address"
            val={user.email}
            changeFunc={changeHandler}
            isValid={checkValidStates.isEmailValid}
          />
          <SimpleInput
            type="text"
            icon="university"
            name="college"
            placeholder="College Name"
            val={user.college}
            changeFunc={changeHandler}
            isValid={checkValidStates.isCollegeValid}
          />
          <SimpleInput
            type="text"
            icon="phone-alt"
            name="phone"
            placeholder="Mobile Number"
            val={user.phone}
            changeFunc={changeHandler}
            isValid={checkValidStates.isPhoneValid}
          />

          <SelectInput
            val={user.gender}
            changeFunc={changeHandler}
            name="gender"
            icon="transgender-alt"
            label="gender"
            disabledOption="Gender"
            options={["Male", "Female", "Other"]}
            isValid={checkValidStates.isGenderValid}
          />
          <DatePickerInput
            label="dob"
            icon="calendar"
            name="dob"
            val={user.dob}
            changeFunc={changeHandler}
            isValid={checkValidStates.isDobValid}
          />

          <SelectInput
            val={user.year}
            changeFunc={changeHandler}
            name="year"
            icon="graduation-cap"
            label="grad_year"
            disabledOption="Graduation Year"
            options={["2022", "2023", "2024", "2025", "Other"]}
            isValid={checkValidStates.isYearValid}
          />
          <SelectInput
            val={user.degree}
            changeFunc={changeHandler}
            name="degree"
            icon="book"
            label="course"
            disabledOption="Course"
            options={["BTech", "MTech", "PhD", "Other"]}
            isValid={checkValidStates.isDegreeValid}
          />
          <SimpleInput
            type="password"
            name="password"
            val={user.password}
            password
            icon="key"
            placeholder="Password"
            changeFunc={changeHandler}
            isValid={checkValidStates.isPasswordValid}
          />
        </div>
        <div className="d-flex flex-row justify-content-center mt-2 mb-4">
          <Button type="button" onClickFunc={onFlipBtnClick}>
            BACK
          </Button>
          <Button disabled={loading} type="submit">
            {loading ? (
              <Spinner
                className="mx-3"
                variant="light"
                size="sm"
                animation="border"
              />
            ) : (
              <>SIGN UP</>
            )}
          </Button>
        </div>
      </form>
    </>
  );
}

export default Register;
