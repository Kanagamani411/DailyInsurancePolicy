import React ,{useState} from 'react';
import {useFormik} from 'formik';
import { Outlet, Link } from "react-router-dom";
import './Register.css';
//import { SignUp } from '../services/UserService';

import Popup from './Popup';
const validate = values => {
  const errors = {};
  if(!values.firstname){
    errors.firstname = "*Required";
  } else if(values.firstname.length > 15) {
    errors.firstname = "*Must be 15 characters or less";
  }
  if(!values.lastname){
    errors.lastname = "*Required";
  } else if(values.lastname.length > 15) {
    errors.lastname = "*Must be 15 characters or less";
  }
  if(!values.username){
    errors.username = "*Required";
  } else if(values.username.length > 15) {
    errors.username = "*Must be 15 characters or less";
  }  
  if(!values.email) {
    errors.email = "*Required";
  } else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)) {
    errors.email = "*Invalid Email Address";
  }
  if(!values.password) {
    errors.password = "*Required";
  } else if(values.password.length > 8) {
    errors.password = "*Maximum 8 characters";
  } else if(values.password.length < 4) {
    errors.password = "*Minimum 4 characters";
  }
  if(!values.confirmpassword) {
    errors.confirmpassword = "*Required";
  } else if(values.password !== values.confirmpassword) {
    errors.confirmpassword = "*Password must match";
  }
  return errors;
}
const Register = () =>{
  const [bool,setBool] = useState(0);
  const formik = useFormik({
    initialValues : {
      firstname : '',
      lastname : '',
      username : '',
      email : '',
      password : '',
      confirmpassword : '',
    },
    validate,
    onSubmit : (values , {resetForm}) =>{
      if(bool){
        setBool(0);
        resetForm({values : ''})

      fetch("http://localhost:8081/user/register",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(values)
      }).then(() =>{
        console.log("new user edit");
      })
      
      /*SignUp(values).then((resp)=> {

        console.log(resp);
        console.log("success log");

      }).catch((error)=>{
        console.log(error);
        console.log("error log");
      })*/
      
      } else {
        setBool(1);
        console.log(values);
      }

      

    }
  });
  return(
    <div className = "main">
      <div className = "SignUp-form">
        <h2>Sign Up Here</h2>
        <form onSubmit = {formik.handleSubmit}>
          <input type="text"
          placeholder="FirstName" name="firstname" 
          autoComplete="off" onChange={formik.handleChange} 
          value = {formik.values.firstname} onBlur = {formik.handleBlur}/>
          {
            formik.touched.firstname && formik.errors.firstname ? <span>{formik.errors.firstname}</span> : null
          }
          <br></br>
          <input type="text"
          placeholder="LastName" name="lastname" 
          autoComplete="off" onChange={formik.handleChange} value = {formik.values.lastname} onBlur={formik.handleBlur}/>
          {
            formik.touched.lastname && formik.errors.lastname ? <span>{formik.errors.lastname}</span> : null
          }
          <br></br>
          <input type="text"
          placeholder="UserName" name="username" 
          autoComplete="off" onChange={formik.handleChange} 
          value = {formik.values.username} onBlur = {formik.handleBlur}/>
          {
            formik.touched.username && formik.errors.username ? <span>{formik.errors.username}</span> : null
          }
          <br></br>
          <input type="text"
          placeholder="Email" name="email" autoComplete="off" 
          onChange={formik.handleChange} value = {formik.values.email} onBlur={formik.handleBlur}/>
          {
            formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span> : null
          }
          <br></br>
          <input type="password"
          placeholder="Password" name="password" autoComplete="off" 
          onChange={formik.handleChange} value = {formik.values.password} onBlur={formik.handleBlur}/>
          {
            formik.touched.password && formik.errors.password ? <span>{formik.errors.password}</span> : null
          }
          <br></br>
          <input type="password"
          placeholder="Confirm" name="confirmpassword" autoComplete="off" 
          onChange={formik.handleChange} value = {formik.values.confirmpassword} onBlur={formik.handleBlur}/>
          {
            formik.touched.confirmpassword && formik.errors.confirmpassword ? <span>{formik.errors.confirmpassword}</span> : null
          }
          <br></br>
          <input type="submit"
          value="Submit"/>
        </form>
      </div>
      <div className = "message-box">
        {
          bool ? (<Popup onClick = {formik.handleSubmit}/>) : null
        }
      </div>
      <div>
      <p>Existing User?</p>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/login">Login</Link>
      </nav>
      <Outlet />
      </div>
       </div>
  );
}
export default Register;