import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Privacypolicy from './components/Privacypolicy';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // ✅ Control whether to show the Privacy Policy page or main website
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />

      {/* ✅ Conditional Rendering:
          If Privacy Policy is open -> Show that page only
          Otherwise -> Show the main website
      */}
      {showPrivacy ? (
        <Privacypolicy onClose={() => setShowPrivacy(false)} />
      ) : (
        <>
          <Header />
          <About />
          <Projects />
          <Testimonials />
          <Contact />
          {/* ✅ Pass function to open Privacy Policy */}
          <Footer onPrivacyClick={() => setShowPrivacy(true)} />
        </>
      )}
    </div>
  );
}

export default App;
