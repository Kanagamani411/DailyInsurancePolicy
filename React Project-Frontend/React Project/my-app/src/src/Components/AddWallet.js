import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
  
const AddWallet = () => {

  var username=localStorage.getItem("username")
  const [mode, setMode]=useState();
  const [amount, setAmount]=useState();
  const handleChange=(e)=>{
    const value=e.target.value.replace(/\D/g, "");
    setAmount(value);
  }
  const handleSubmit=(event)=>{
		event.preventDefault();
		console.log(mode);
    console.log(amount)
    console.log(username)

    if(mode.trim()==='' || amount.trim()===''){
			toast.error("Username or password is required");
			return;
		}
    if(amount<1 || amount>10000) {
      toast.error("amount should not be more than 10,000 and less than 0")
    }
      
    axios.post("http://localhost:8081/user/AddWallet", 
    {
      mode: mode,
      amount: amount,
      username

    })
    .then((response)=> {
      console.log(response)
      
      alert("successfully added")
      
    }).catch((err)=> {
      //console.log(err)
      console.log(err.response)
      //alert("login failed")
      //alert(err.response.data.error.message)

    })
  }

  return (
    <div>
      <h1>Import your Wallet and Add balance</h1>
      <br></br>
      <br></br>
      <form onSubmit={handleSubmit}>
      <select value={mode} onChange={e=>setMode(e.target.value)}>
        <option disabled selected="true">Sellect Wallet</option>
        
        <option>Credit Card</option>
        <option>Debit Card</option>
        <option>UPI</option>
      </select>
      <br></br>
      <br></br>
      <input  type={"text"} placeholder ="Enter Amount" value={amount} onChange={handleChange}/>
      <br></br>
      <input type="submit" value="Submit"></input>
      <ToastContainer/>
      </form>
    </div>
  );
};
  
export default AddWallet;