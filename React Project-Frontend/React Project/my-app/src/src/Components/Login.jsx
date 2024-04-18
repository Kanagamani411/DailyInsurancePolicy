/*import React from 'react';
import { emailValidator, passwordValidator } from '../components/regexValidator';
import {useHistory} from "react-router-dom";

const Login = () => {
	const history = useHistory()

	const [input, setInput] = React.useState({ email: '', password: '' });

	const [errorMessage, seterrorMessage] = React.useState('');
	const [successMessage, setsuccessMessage] = React.useState('');

	const handleChange = e => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};

	React.useEffect(()=>{
		if(localStorage.getItem('auth')) history.push('/')
	},[])

	const formSubmitter = e => {
		e.preventDefault();
		setsuccessMessage('');
		if (!emailValidator(input.email)) return seterrorMessage('Please enter valid email id');

		if (!passwordValidator(input.password))
			return seterrorMessage(
				'Password should have minimum 8 character with the combination of uppercase, lowercase, numbers and specialcharaters'
			);
		// setsuccessMessage('Successfully Validated');
		if(input.email !== 'admin@a.com' || input.password !== 'Password@1') return seterrorMessage('Invalid email or password');

		history.push('/')
		localStorage.setItem('auth', true)

	};

	return (
		<div>
			<div className="limiter">
				<div className="container-login100" style={{ backgroundImage: 'url("images/bg-01.jpg")' }}>
					<div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
						<form className="login100-form validate-form" onSubmit={formSubmitter}>
							<span className="login100-form-title p-b-49">Login</span>
							{errorMessage.length > 0 && <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>}
							{successMessage.length > 0 && (
								<div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>
							)}
							<div className="wrap-input100 validate-input m-b-23" data-validate="email is required">
								<span className="label-input100">Email</span>
								<input
									className="input100"
									type="text"
									name="email"
									placeholder="Type your username"
									onChange={handleChange}
								/>
								<span className="focus-input100" data-symbol="" />
							</div>
							<div className="wrap-input100 validate-input" data-validate="Password is required">
								<span className="label-input100">Password</span>
								<input
									className="input100"
									type="password"
									name="password"
									placeholder="Type your password"
									onChange={handleChange}
								/>
								<span className="focus-input100" data-symbol="" />
							</div>
							<div className="text-right p-t-8 p-b-31">
								<a href="#">Forgot password?</a>
							</div>
							<div className="container-login100-form-btn">
								<div className="wrap-login100-form-btn">
									<div className="login100-form-bgbtn" />
									<button className="login100-form-btn">Login</button>
								</div>
							</div>
							<div className="txt1 text-center p-t-54 p-b-20">
								<span>Or Sign Up Using</span>
							</div>
							<div className="flex-c-m">
								<a href="#" className="login100-social-item bg1">
									<i className="fa fa-facebook" />
								</a>
								<a href="#" className="login100-social-item bg2">
									<i className="fa fa-twitter" />
								</a>
								<a href="#" className="login100-social-item bg3">
									<i className="fa fa-google" />
								</a>
							</div>
							{/* <div className="flex-col-c p-t-155">
                <span className="txt1 p-b-17">Or Sign Up Using</span>
                <a href="#" className="txt2">
                  Sign Up
                </a>
							</div> }
						</form>
					</div>
				</div>
			</div>
			<div id="dropDownSelect1" />
		</div>
	);
};

export default Login;
*/
import React from 'react';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { doLogin} from '../auth';
import axios from 'axios';
export default function Login() {
	

	const [loginDetail, setLoginDetail]=useState({
		username:'',
		password:''
	})

	const handleChange=(event,field)=>{
		
		let actualValue=event.target.value
		setLoginDetail({
		  ...loginDetail,
		[field]:actualValue

		})
		
	}

	const  handleReset=()=> {
		setLoginDetail({
			username:'',
			password:''
		});
	};
	const handleFormSubmit=(event)=>{
		event.preventDefault();
		console.log(loginDetail);

		if(loginDetail.username.trim()==='' || loginDetail.password.trim()===''){
			toast.error("Username or password is required");
			return;
		}
		 
		    /*loginUser(loginDetail).then((data)=>{
				console.log(data)

				doLogin(data,()=>{
					console.log("login detail is saved to localstorage");
				})

				toast.success("Login Success")
			}).catch(error=>{
				console.log(error=>{
					if(error.response.status===400 || error.response.status===404){
						toast.error(error.response.data.message)
					}else{
						toast.error("Something went wrong")
					}
					  
				})
			})
			*/
			axios.post("http://localhost:8081/user/login", (loginDetail)).then((response)=> {
				console.log(response.data)

				localStorage.setItem("username",loginDetail.username);
				doLogin(response,()=>{
					console.log("login detail is saved to localstorage");
				})
				
				alert("successfully login")
				
			}).catch((err)=> {
				//console.log(err)
				console.log(err.response)
				//alert("login failed")
				alert(err.response.data.error.message)

			})
	}

	return (
	  <main style={{ padding: "1rem 0" }}>
		<h2>Login</h2>
		<div>
		<form onSubmit={handleFormSubmit}>
	  <input type="text"
	  placeholder="UserName" name="username" value={loginDetail.username} 
	  onChange={(e)=> handleChange(e,'username')} autoComplete="off"  />
	  <input type="password" placeholder="Password" name="password"  value={loginDetail.password} 
	  onChange={(e)=> handleChange(e,'password')} autoComplete="off" />
	  <br></br>
	  <input type="submit" value="Submit"/>
	  < input type="button" style={{color:'black'}} value="Reset" onClick={handleReset} />
	  <ToastContainer/>
      </form>
	  
		</div>
	  </main>

	);
  }