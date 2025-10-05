import { BrowserRouter, Routes, Route } from "react-router";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import Home from "../pages/Home";
import PostProperty from "../pages/PostProperty";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import About from "../pages/About";
import PropertyListing from "../pages/PropertyListing";
import Contact from "../pages/Contact";
import GetOwnerDetails from "../pages/GetOwnerDetails";
Contact;

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/postproperty" element={<PostProperty />} />
        <Route path="/propertylisting" element={<PropertyListing />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/owner-details" element={<GetOwnerDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
