import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Announcement from "../components/Announcement/Announcement";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer/Footer";
import Label from "../components/Label/Label";
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Products/Products";
import Slider from "../components/slider/Slider";
import { LOG_IN } from "../redux/User/userTypes";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Slider />
      <Label label="Categories" />
      <Categories />
      <Label label="Products" />
      <Products />
      <Footer />
    </div>
  );
}

export default HomePage;
