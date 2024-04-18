import React, {useState,useEffect} from 'react';
import axios from 'axios';
  
const Purchase = () => {

    const [policyName, setPolicyName] = useState("")
    const [policyList, setPolicyList] = useState([{'policy_name':'','policy_id':''}])
    const [premium, setPremium] = useState("")
 
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
        if(event.target.value === "Medical Insurance"){
          setPremium(100);
        } else if(event.target.value === "Education Insurance") {
          setPremium(500);
        } else {
          setPremium(1000);
        }
        
    }

  const saveBtn = (e) => {
    e.preventDefault();
    console.log('Policy Name',policyName);

    axios.post("http://localhost:8081/user/purchase", 
    {
      policyName: policyName,
      premium: premium,
      username

    })
    .then((response)=> {
      console.log(response)
      
      alert("successfully added")
      console.log("purchase added")
      //toast.success("successfully purchased")
      
    }).catch((err)=> {
      //console.log(err)
      console.log(err.response)
      //alert("login failed")
      //alert(err.response.data.error.message)

    })
  }


   

  
  return (
    <div>
      <h1>Welcome to Purchase Policy Portal!</h1>
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
          
              <input type="text" name='policy_premium'  placeholder="Premium"  value={premium}  readOnly />
          
               
                 
          <br></br>
          <button className="btn btn-primary" onClick={saveBtn}>Save</button>


  
    </div>
  );
};
  
export default Purchase;