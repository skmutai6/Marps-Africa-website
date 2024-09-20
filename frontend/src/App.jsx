import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Home from "./pages/Home";
import Blogs from "./pages/blogs/Blogs";
import BlogPost from "./pages/blogs/BlogPost";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import NoPage from "./pages/NoPage";
import Book_Appoitment from "./pages/Book_Appoitment";
import SoftDev from "./pages/services/SoftDev";
import MobiDev from "./pages/services/MobiDev";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import WebDev from "./pages/services/WebDev";
import BulkSms from "./pages/services/BulkSms";
import PayIntergration from "./pages/services/PayIntergration";
import Research from "./pages/services/Research";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<BlogPost />} />
          <Route path="/services/software-development" element={<SoftDev />} />
          <Route path="/services/mobile-app-development" element={<MobiDev />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/website-design" element={<WebDev />} />
          <Route path="/services/bulk-sms" element={<BulkSms />} />
          <Route path="/services/payment-integration" element={<PayIntergration />} />
          <Route path="/services/market-research" element={<Research />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element = {<Portfolio/>} />
          <Route path="about" element={<About />} />
          <Route path="appoitment" element = {<Book_Appoitment/>} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
