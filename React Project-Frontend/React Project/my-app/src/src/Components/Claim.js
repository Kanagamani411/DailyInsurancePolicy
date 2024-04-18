import React, {useState,useEffect} from 'react';
import axios from 'axios';
import "./Claim.css";
  
const Claim = () => {

  const [policyName, setPolicyName] = useState("")
  const [policyList, setPolicyList] = useState([{'policy_name':'','policy_id':''}])
  const [date, setDate] = useState();
  const [amt, setAmt]=useState();
  var username=localStorage.getItem("username")

  useEffect(() =>{
    const fetchData = async ()=>{
        const response = await fetch("http://localhost:8081/user/getAllPolicy");
        const newData = await response.json();
        setPolicyList(newData);
        // console.log(newData);
    };
    fetchData();
}, [])

const handleChange = (event) =>{
  setPolicyName(event.target.value);

}
const handleChanges=(e)=>{
  const value=e.target.value.replace(/\D/g, "");
  setAmt(value);
}
const saveBtn = (e) => {
  e.preventDefault();

  axios.put("http://localhost:8081/user/claim", 
    {
      policyName : policyName,
      amt : amt,
      username

    })
    .then((response)=> {
      console.log(response)
      
      alert("successfully claimed")
      console.log("claim successful")
      
    }).catch((err)=> {
      //console.log(err)
      console.log(err.response)
      //alert("login failed")
      //alert(err.response.data.error.message)

    })
}


  return (
    <div>
      <h1>Welcome Claim!</h1>
      <br></br>
      <br></br>
      <select className="form-control" value={policyName} onChange={handleChange}>
              <option value="">Choose Policy Name</option>

        {policyList.map(policy => (
              <option value={policy.policy_name} key={policy.policy_id} >{policy.policy_name}</option> 
          
              ))
              }

          </select>

          <br/>
          <br></br>
          <input type="date" value={date} onChange={e=>setDate(e.target.value)}/>
          <br></br>
          <br></br>
          <input  type={"text"} placeholder ="Enter Claim Amount" value={amt} onChange={handleChanges}/>
                  
          <br></br>
          <button className="btn btn-primary" onClick={saveBtn}>Save</button>
          
    </div>
  );
};
  
export default Claim;