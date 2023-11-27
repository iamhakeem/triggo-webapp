import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Email from "./pages/SignUp/Email";
import Verify from "./pages/SignUp/Verify";
import Name from "./pages/SignUp/Name";
import Address from "./pages/SignUp/Address";
import Tag from "./pages/SignUp/Tag";
import Bvn from "./pages/SignUp/Bvn";
import Password from "./pages/SignUp/Password";
import AccCreate from "./pages/SignUp/AccCreate";
import LogEmail from "./pages/LogIn/LogEmail";
import Reset from "./pages/LogIn/Reset";
import Preset from "./pages/LogIn/Preset";
import Dashboard from "./pages/Dashboard/dashboard";
import Settings from "./pages/Dashboard/Settings";
import Profile from "./pages/SignUp/Profile";
import Onboard from "./pages/Onboard";

function App() {
  return (
    <>
      <>
        <Router>
          <Routes>
            <Route path='/' element={<Onboard />} />
            <Route path='/email' element={<Email />} />
            <Route path='/login' element={<LogEmail />} />
            <Route path='/verify' element={<Verify />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/name' element={<Name />} />
            <Route path='/address' element={<Address />} />
            <Route path='/tag' element={<Tag />} />
            <Route path='/bvn' element={<Bvn />} />
            <Route path='/password' element={<Password />} />
            <Route path='/accCreate' element={<AccCreate />} />
            <Route path='/reset' element={<Reset />} />
            <Route path='/preset' element={<Preset />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </Router>
      </>
    </>
  );
}

export default App;
