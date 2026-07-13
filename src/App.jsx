import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import Loader from "./components/Loader/Loader";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import BackToTop from "./components/BackToTop/BackToTop";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";

import EmailDashboard from "./components/EmailDashboard/EmailDashboard";
import EmailDetail from "./components/EmailDashboard/EmailDetail";

// Admin
import Login from "./components/Admin/Login";
import ProtectedRoute from "./components/Admin/ProtectedRoute";


function PortfolioPage() {

  return (
    <>

      <ScrollProgress />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Experience />

      <Education />

      <Portfolio />

      <Services />

      <Testimonials />

      <Contact />

      <Footer />

      <BackToTop />

    </>
  );

}



function App() {


  const [loading, setLoading] = useState(true);



  useEffect(() => {


    const timer = setTimeout(() => {

      setLoading(false);

    }, 1800);



    return () => clearTimeout(timer);


  }, []);




  if (loading) {

    return <Loader />;

  }



  return (

    <BrowserRouter>


      <Helmet>

        <title>
          Sandhya Patel | .NET Full Stack Developer
        </title>


        <meta
          name="description"
          content="Professional portfolio of Sandhya Patel, a .NET Full Stack Developer specializing in ASP.NET Core, React, SQL Server, C#, Web API, and modern web development."
        />


        <meta
          name="keywords"
          content=".NET, ASP.NET Core, React, SQL Server, C#, Portfolio, Full Stack Developer, Sandhya Patel"
        />


        <meta
          name="author"
          content="Sandhya Patel"
        />


        <meta
          property="og:title"
          content="Sandhya Patel | .NET Full Stack Developer"
        />


        <meta
          property="og:description"
          content="Professional portfolio showcasing ASP.NET Core, React, SQL Server, and Full Stack Development projects."
        />


        <meta
          property="og:type"
          content="website"
        />


        <meta
          property="og:image"
          content="/preview.png"
        />


        <meta
          property="og:url"
          content="https://your-domain.com"
        />


        <meta
          name="twitter:card"
          content="summary_large_image"
        />


      </Helmet>



      <Routes>


        {/* Main Portfolio */}

        <Route

          path="/"

          element={
            <PortfolioPage />
          }

        />



        <Route

        path="/admin/login"

        element={
            <Login />
        }

        />



        <Route

        path="/emails"

        element={

            <ProtectedRoute>

                <EmailDashboard />

            </ProtectedRoute>

        }

        />



        <Route

        path="/emails/:id"

        element={

            <ProtectedRoute>

                <EmailDetail />

            </ProtectedRoute>

        }

        />

      </Routes>



    </BrowserRouter>

  );

}


export default App;