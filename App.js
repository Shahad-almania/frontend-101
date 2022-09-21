
import './App.css';
import Navbar from './pages/Navbar';
import Navebar from './pages/Navebar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Cards from './pages/Cards';
//import { useEffect, useState } from 'react';

import RegisterUser from './pages/RegisterUser';
import LoginUser from './pages/LoginUser';
import NotFound from './pages/NotFound';

//import Fistpage from './pages/Fistpage';
//import Email from './pages/Email';

function App() {

// const [emailinput,setEmailinput] = useState('');
// const [emailresult,setEmailresult] = useState('');
// const [emailadrees,setEmailadress] = useState('');
// const [emaildomain,setEmaildomain] = useState('');
// const [emailspam,setEmailspam] = useState('');

// useEffect(()=> {
// const fetchemailresult= async () => {
//   const request =await fetch ( `https://api.eva.pingutil.com/email?email=${emailinput} `);
//   const data = await request.json();
//   setEmailadress(data.data.email_address);
//   setEmaildomain(data.data.domain);
//   setEmailspam(data.data.spam);
//   console.log('data',data);


// };
// fetchemailresult();
// } ,[] );


  // const showresult = async (e) => {
  //   console.log(emailinput)
  //   const request =await fetch (`https://api.eva.pingutil.com/email?email=${emailinput} `);
  //   const data=await request.json();
  //   console.log(data);
  //   setEmailadress(data.data.email_address);
  //   console.log(emailadrees);
  //     setEmaildomain(data.data.domain);
  //     setEmailspam(data.data.spam);
  //     console.log('data',data);
  //   }
   



  return (
  // <Navebar/>
  // <Fistpage/>
  // <Email/>

  <BrowserRouter>
  <Navebar/>
  <Routes>
<Route path="/" element ={<Navbar/>}/>
 <Route path="/Cards" element={<Cards/>}/>
 {/* <Route path="/Email" element={<Email/>}/> */}
 
 <Route path="/Login" element={<LoginUser/>}/>
 <Route path="/Register" element={<RegisterUser/>}/>
 <Route path="*" element={<NotFound/>}/>


 {/* <Route path="/Email" element={
 <Email emailadrees={emailadrees} emaildomain={emaildomain} emailspam={emailspam} emailinput={emailinput} setEmailinput={setEmailinput} showresult={showresult}/>}>
  */}



  
{/* </Route> */}
  </Routes>
  </BrowserRouter>


  );
}

export default App;
// {
//   "status": "success",
//   "data": {
//       "email_address": "test@mail7.io",
//       "domain": "mail7.io",
//       "valid_syntax": true,
//       "disposable": true,
//       "webmail": false,
//       "deliverable": true,
//       "catch_all": true,
//       "gibberish": false,
//       "spam": false
//   }
// }