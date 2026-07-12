import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

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
    <>
      <Helmet>
        <title>Sandhya Patel | .NET Full Stack Developer</title>

        <meta
          name="description"
          content="Professional portfolio of Sandhya Patel, a .NET Full Stack Developer specializing in ASP.NET Core, React, SQL Server, C#, Web API, and modern web development."
        />

        <meta
          name="keywords"
          content=".NET, ASP.NET Core, React, SQL Server, C#, Portfolio, Full Stack Developer, Sandhya Patel"
        />

        <meta name="author" content="Sandhya Patel" />

        <meta
          property="og:title"
          content="Sandhya Patel | .NET Full Stack Developer"
        />

        <meta
          property="og:description"
          content="Professional portfolio showcasing ASP.NET Core, React, SQL Server, and Full Stack Development projects."
        />

        <meta property="og:type" content="website" />

        <meta property="og:image" content="/preview.png" />

        <meta property="og:url" content="https://your-domain.com" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Sandhya Patel | .NET Full Stack Developer"
        />

        <meta
          name="twitter:description"
          content="Professional portfolio showcasing Full Stack Development projects."
        />
      </Helmet>

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

export default App;