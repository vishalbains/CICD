import React, { useState, useEffect } from "react";
import AOS from "aos";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Layout from "./layout/Layout";
import Page from "./Files/Components/Page";
import HomePage2 from "./Files/Components/HomePage2";
import Career from "./Files/Components/Career";
import Casestudy from "./Files/Components/Casestudy";
import Contactus from "./Files/Components/Contactus";
import Portfolio from "./Files/Components/Portfolio";
import TestimonialSingle from "./Files/Components/TestimonialSingle";
import Blog from "./Files/Blogs/Blog";
import Blogsingle from "./Files/Blogs/Blogsingle";
import Design from "./Files/Services/Design";
import Development from "./Files/Services/Development";
import Marketing from "./Files/Services/Marketing";
import CloudComputing from "./Files/Services/cloudComputing/CloudComputing";
import Blockchain from "./Files/Services/blockchain/Blockchain";
import Web from "./Files/Services/Web";
import Mobile from "./Files/Services/Mobile";
import Aboutus from "./Files/Components/Aboutus";

import "./App.scss";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "lightgallery/css/lightgallery.css";
import "lightgallery.js/dist/css/lightgallery.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/js/bootstrap.min.js";

const routesToRedirect = [
  "/drupal",
  "/blog/tag/ppc",
  "/archieve",
  "/blog/tag/keralarelieffund",
  "/blog/tag/google-seo",
  "/blog/tag/shopify-web-development",
  "/blog/tag/website-development-services-from-kindlebit",
  "/portfolio/dot-net",
];

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage2 />} />
            {/* {routesToRedirect.map((route, index) => (
              <Route
                key={index}
                path={route}
                element={<Navigate to="/" replace={true} />}
              />
            ))} */}
            <Route path="/career" element={<Career />} />
            <Route path="/career/:sub" element={<Career />} />
            <Route path="/career/:sub/:sub" element={<Career />} />
            <Route path="/case-study" element={<Casestudy />} />
            <Route path="/case-study/:sub" element={<Casestudy />} />
            <Route path="/contact-us" element={<Contactus />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/testimonials" element={<TestimonialSingle />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<Blogsingle />} />
            <Route path="/ux-ui-designing" element={<Design />} />
            <Route path="/web-design" element={<Design />} />
            <Route path="/design" element={<Design />} />
            <Route path="/design/:sub/" element={<Design />} />
            <Route path="/design/:sub/:sub" element={<Design />} />
            <Route path="/zoho" element={<Development />} />
            <Route path="/wordpress" element={<Development />} />
            <Route path="/umbraco" element={<Development />} />
            <Route path="/embedded-application" element={<Development />} />
            <Route path="/android-application" element={<Development />} />
            <Route path="/mobile-apps-development" element={<Development />} />
            <Route path="/e-commerce-development" element={<Development />} />
            <Route
              path="/web-application-development"
              element={<Development />}
            />
            <Route
              path="/bigcommerce-website-development-services"
              element={<Development />}
            />
            <Route path="/development" element={<Development />} />
            <Route path="/development/:sub" element={<Development />} />
            <Route path="/development/:sub/:sub" element={<Development />} />
            <Route path="/seo-services" element={<Marketing />} />
            <Route path="/youtube-ads" element={<Marketing />} />
            <Route path="/twitter-ads" element={<Marketing />} />
            <Route path="/email-marketing-services" element={<Marketing />} />
            <Route path="/content-writing-services" element={<Marketing />} />
            <Route path="/app-store-optimization" element={<Marketing />} />
            <Route path="/digital-marketing" element={<Marketing />} />
            <Route path="/digital-marketing/:sub" element={<Marketing />} />
            <Route
              path="/digital-marketing/:sub/:sub"
              element={<Marketing />}
            />
            <Route path="/backup-management" element={<CloudComputing />} />
            <Route path="/server-management" element={<CloudComputing />} />
            <Route path="/cloud-computing" element={<CloudComputing />} />
            <Route path="/cloud-computing/:sub" element={<CloudComputing />} />
            <Route
              path="/cloud-computing/:sub/:sub"
              element={<CloudComputing />}
            />
            <Route
              path="/cryptocurrency-development"
              element={<Blockchain />}
            />
            <Route path="/web-3" element={<Blockchain />} />
            <Route path="/web-3/:sub" element={<Blockchain />} />
            <Route path="/web-3/:sub/:sub" element={<Blockchain />} />
            <Route path="/azure" element={<Web />} />
            <Route path="/magento" element={<Web />} />
            <Route path="/frontend-development" element={<Web />} />
            <Route path="/vue-js" element={<Web />} />
            <Route path="/angular-js" element={<Web />} />
            <Route path="/aws-development-services" element={<Web />} />
            <Route
              path="/laravel-application-development-services"
              element={<Web />}
            />
            <Route path="/web" element={<Web />} />
            <Route path="/web/:sub/:sub" element={<Web />} />
            <Route path="/web/:sub" element={<Web />} />
            <Route path="/ionic-application" element={<Mobile />} />
            <Route path="/mobile" element={<Mobile />} />
            <Route path="/mobile/:sub/" element={<Mobile />} />
            <Route path="/mobile/:sub/:sub" element={<Mobile />} />
            <Route path="/about-us" element={<Aboutus />} />
            {/* <Route path="*" element={<Page />} /> */}
          </Route>
        </Routes>

    </>
  );
}

export default App;
