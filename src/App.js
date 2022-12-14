import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Register2 from './Component/Auth/Register';
// import Login from './Component/Auth/Login';
// import Login from './Component/Loginpage/Login/Login';
// import Register from './Component/Loginpage/Register/Register';
// import WebsiteLogin from './Component/Loginpage/Websitelogin/WebsiteLogin';
import Home from './Component/Pages/Home/Home';
import Footer from './Component/Share/Footers/Footer';
import Navigaition from './Component/Share/Headers/Navigation';
import Dashboard from './Component/Dashboard/Dashboard';
import Service from './Component/Pages/Services/ServiceMain/Service';
import Ducoment from './Component/Pages/Services/Ducoments/Ducoment';
import About from './Component/Pages/About/About';
import ContactDetails from './Component/Pages/ContactDetails/ContactDetails';
import FaqAccordion from './Component/Pages/FaqAccordion/Faq';
import Quate from './Component/Pages/Quate/Quate';
import Login from "./Component/Auth/Login";
import Register from "./Component/Auth/Register"
import { useSelector } from 'react-redux';
import ForgetPassword from './Component/ForgetPassword/ForgetPassword';
import TeakEmail from './Component/ForgetPassword/TeakEmail';
import RingLoader from "react-spinners/RingLoader";

function App() {
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <>
      {
        loading ? <div className='prelodar'> <RingLoader color={"#D11046"} loading={loading} size={90} /></div> :

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<><Navigaition /> <Home /><Footer /></>}>
              </Route>
              <Route path="/home" element={<><Navigaition /> <Home /><Footer /> </>}> </Route>
              <Route path="/service" element={<><Navigaition /> <Service /> <Footer /></>}> </Route>
              <Route path="/service/:id" element={<><Navigaition /> <Ducoment /> <Footer /></>}> </Route>
              <Route path="/about" element={<><Navigaition /> <About /> <Footer /></>}> </Route>
              <Route path="/contact" element={<><Navigaition /> <ContactDetails /> <Footer /></>}> </Route>
              <Route path="/faq" element={<><Navigaition /> <FaqAccordion /> <Footer /></>}> </Route>
              <Route path="/quate" element={<><Navigaition /> <Quate /> <Footer /></>}> </Route>
              <Route path="/login" element={<><Navigaition /><Login /><Footer /></>}></Route>
              <Route path="/register" element={<><Navigaition /><Register /><Footer /></>}> </Route>
              {/* <Route path="/login2" element={<><Navigaition /> <Login/> </>}> </Route> */}
              <Route path="/dashboard" element={<Dashboard />}> </Route>

              {/* http://localhost:3000/reset-password/${userExists._id}/${token} */}

              <Route path={`/reset-password/:id/:token`} element={<ForgetPassword />}> </Route>

              <Route path={`/forget-password`} element={<TeakEmail />}> </Route>
            </Routes>
          </BrowserRouter>
      }
    </>
  );
}
export default App;

