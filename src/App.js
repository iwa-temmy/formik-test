import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useFormik } from "formik";
function App() {
  // const [showValidation, setShowValidation] = React.useState(false);

  // const pattern = {
  //   ip_address: /^$|^[0-9.:/,-]+$/,
  //   email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,7}$/i,
  //   phone: /^$|^[0-9+]+$/,
  //   number: /^$|^[0-9]+$/,
  //   password: {
  //     uppercase: /[A-Z]/,
  //     number: /[0-9]/,
  //     characters: /[!@#$%^&*_()-+=\[\]{}|\\:;'",./?><]/,
  //     lowercase: /[a-z]/,
  //   },
  // };
  // const passwordFieldNames = ["new password", "confirm password"];
  // const validation = (value = "", name, required) => {
  //   let isValid = true,
  //     errorMessage = "";
  //   if (name.toLowerCase() === "email") {
  //     // validation for emails
  //     if (!pattern.email.test(value)) {
  //       isValid = false;
  //       errorMessage = "This email is not a valid email";
  //     }
  //   } else if (name?.includes("name")) {
  //     // validation for names
  //   } else if (passwordFieldNames?.includes(name)) {
  //     // minlength, alphabet,
  //     if (value.length < 12) {
  //       isValid = false;
  //       errorMessage = "Password cannot be less than 12 characters";
  //     } else if (!value.match(pattern.password.uppercase)) {
  //       isValid = false;
  //       errorMessage = "Password must contain at least one uppercase alphabet";
  //     } else if (!value.match(pattern.password.lowercase)) {
  //       isValid = false;
  //       errorMessage = "Password must contain at least one lowercase alphabet";
  //     } else if (!value.match(pattern.password.number)) {
  //       isValid = false;
  //       errorMessage = "Password must contain at least one numeric character";
  //     } else if (!value.match(pattern.password.characters)) {
  //       isValid = false;
  //       errorMessage = "Password must contain at least one special character";
  //     }
  //   } else if (
  //     name.toLowerCase()?.includes("ip_") ||
  //     name.toLowerCase()?.includes("_ip") ||
  //     name.toLowerCase()?.includes("ipaddress")
  //   ) {
  //     if (!pattern.ip_address.test(value)) {
  //       isValid = false;
  //       errorMessage = "This IP address is not valid";
  //     }
  //   } else if (name.toLowerCase()?.includes("phone")) {
  //     if (value.length > 15 || value.length < 7) {
  //       isValid = false;
  //       errorMessage = "Phone number should be between 7 and 15";
  //     }
  //   }

  //   // const valueLength =
  //   //   typeof value === "number" ? String(value).length : value.length;
  //   // general validation for required
  //   //   console.log("valueLength",valueLength);
  //   if (value === "" && required) {
  //     isValid = false;
  //     errorMessage =
  //       name === "select"
  //         ? "Select a valid option"
  //         : name === "agreementCheck"
  //         ? "You need to check this box"
  //         : `${name} cannot be empty`;
  //   }

  //   return { isValid, errorMessage };
  // };

  // const validate = (values) => {
  //   const errors = {};
  //   const name = validation(values.name, "name", true);
  //   const age = validation(values.age, "age", true);

  //   if (showValidation) {
  //     if (!name.isValid) {
  //       errors.name = name.errorMessage;
  //     }
  //     if (!age.isValid) {
  //       errors.age = age.errorMessage;
  //     }
  //   }
  //   return errors;
  // };
  const validate = (
    values,
    props /* only available when using withFormik */
  ) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.age) {
      errors.age = "Required";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
    },
    validate,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      formik.validateForm();
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <form onSubmit={formik.handleSubmit} noValidate>
            <label htmlFor="name">Name</label>
            <input
              name="name"
              id="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}
            <label htmlFor="age">Age</label>
            <input
              name="age"
              id="age"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.age}
            />
            {formik.touched.age && formik.errors.age ? (
              <div>{formik.errors.age}</div>
            ) : null}
            <button type="submit">Submit</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
