import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Email from "./pages/SignUp/email/Email";
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
import User from "./pages/SignUp/User";

function App() {
  return (
    <>
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Email />} />
            <Route path="/login" element={<LogEmail />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/name" element={<Name />} />
            <Route path="/address" element={<Address />} />
            <Route path="/tag" element={<Tag />} />
            <Route path="/bvn" element={<Bvn />} />
            <Route path="/password" element={<Password />} />
            <Route path="/accCreate" element={<AccCreate />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/preset" element={<Preset />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </Router>
      </>
    </>
  );
}

export default App;
