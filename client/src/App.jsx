import { BrowserRouter, Routes ,Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Jobs } from "./pages/Jobs";
import { Profile } from "./pages/Profile";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Navbar } from "./componants/Navbar";

const App = ()=>{
  return (
  <>
  <BrowserRouter>
  <Navbar />
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />

       
  </Routes>
  </BrowserRouter>
  </>
  );
};
export default App ;
