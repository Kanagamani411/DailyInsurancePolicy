import React, { useEffect, useState } from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
import { useNavigate } from 'react-router-dom'
import { isLoggedIn } from "../auth";
//import { doLogout } from "../auth";
  
const Navbar =()=>{

  const [login,setLogin]=useState(false)
  //const [user,setUser]=useState(undefined)
  useEffect(()=>{
    setLogin(isLoggedIn())
    //setUser(getCurrentUserDetail())
  },[login])
  const navigate=useNavigate()
  function logOut()
  {
    localStorage.removeItem("accessToken");
    navigate('/');
   
  }

  return (
    <>
      <Nav>
        {
          login && (
            <>
            <NavMenu>
            <NavLink to="/AddWallet" activeStyle>
                AddWallet
              </NavLink>
              <NavLink to="/Purchase Policy" activeStyle>
                Purchase Policy
              </NavLink>
              <NavLink to="/Claim" activeStyle>
                Claim
              </NavLink>
              </NavMenu>
            </>
          )
        }
        {
          !login && (
            <>
            <NavMenu>
              <NavLink to="/Login" activeStyle>
                Login
              </NavLink>
              <NavLink to="/Register" activeStyle>
                Register
              </NavLink>
            </NavMenu> 
            </>
          )
        }
        
            
            
       <NavMenu>
          {
            login && (
            <>
            <input type="button" value="Logout" onClick={logOut}></input>
            </>
            )
          }
          {
            !login && (null)
          }
            
            

          
        </NavMenu>
        
      </Nav>
    </>
  );
};
  
export default Navbar;


/*import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { isLoggedIn } from '../auth'
import { useNavigate } from 'react-router-dom'
function Header() {

  const navigate = useNavigate();
  function logOut()
  {
    localStorage.removeItem("accessToken");
    navigate('/');
    
  }

  return(

    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
        <Nav className="mr-auto nav_bar_wrapper">
          {
            isLoggedIn ?
            <>
            <Link to="/AddWallet">AddWallet</Link>
            <Link to="/Claim">Claim</Link>
            </>
            :
            <>
            <Link to="/Login">Login</Link>
            <Link to="/Register">Register</Link>
            </>
          }
        </Nav>
        {isLoggedIn ?
          <Nav>
            <NavDropdown>
              <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          :null
        }
      </Navbar>
    </div>
  )
}
export default Header;
*/