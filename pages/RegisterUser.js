import React from 'react'
//import './Login.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const RegisterUser = () => {  //
    const [userName, setUserName] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState(''); 
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    //const [role,setrole]=React.useState('');
   // const [cardNumber, setcardNumber] = React.useState('');

    const navigate = useNavigate();

    const register = async (e) => {
      e.preventDefault();
      const body= {
        userName,
        password,
        confirmPassword,
        phoneNumber,
        role:"User"
      };
      console.log(userName,phoneNumber,password,confirmPassword)
        try {
        
       
        const request = await fetch(`/api/v1/auth/register`, { 
          method: 'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify(body)
        });
           console.log(request)
           const data = await request.json();

    if (request.status === 401) {
      toast({
        title: 'Error',
        description: data.message,
        status: 'error',
        duration: 2000,
        isClosable: false,
        position: 'top',
      });
    } else {
      localStorage.setItem('loggedIn', true);
      navigate('/');
    }
}catch(e){
    console.log(e)
}
  };
  useEffect(() => {
    if (localStorage.getItem('loggedIn')) {
      navigate('/');
    }
  }, []);


  return (
 
    
        <div class="container">
        <div class="screen">
            <div class="screencontent">
            <div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 d-flex justify-content-center">
             
             <form onSubmit={register} class="login m-5 p-5 bg-light shadow font-monospace">
                <div class="loginfield">
                        <i class="loginicon fas fa-user"></i>
                        <input 
                        onChange={e => setUserName(e.target.value)}
                        value={userName}
                        type="userName" 
                        placeholder="Full Name"
                        />
                    </div>
                    
                    <div class="loginfield">
                        <i class="loginicon fas fa-user"></i>
                        <input 
                         onChange={e => setPhoneNumber(e.target.value)}
                         value={phoneNumber}
                         type="phoneNumber"
                         placeholder="Phone Number"
                         />
                    </div>
                    <div class="loginfield">
                        <i class="loginicon fas fa-lock"></i>
                        <input
                         onChange={e => setPassword(e.target.value)}
                         type="password"
                         placeholder="Password"
                         />
                    </div>
                   
                    <div class="loginfield">
                        <i class="loginicon fas fa-lock"></i>
                        <input
                        onChange={e => setConfirmPassword(e.target.value)}
                        type="password" 
                         placeholder="Confirm Password"
                         /> 
                    </div>

                    <input  
                         class="button loginsubmit mt-3"
                         type='submit' value='Register'>
                    </input>
                 
                </form>
                </div>
            </div>
            <div class="screenbackground">
                {/* <span class="screenbackgroundshape screenbackgroundshape4"></span> /}
                {/ <span class="screenbackgroundshape screenbackgroundshape3"></span>         */}
                <span class="screenbackgroundshape screenbackgroundshape2"></span>
                <span class="screenbackgroundshape screenbackground__shape1"></span>
            </div>
        </div>
    </div>
      )
    }


export default RegisterUser