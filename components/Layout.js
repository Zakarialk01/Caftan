
import Navbar from "./Navbar/Navbar";
import Annoucements from "./Annoucements";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <>
    <Annoucements />
    <Navbar />
      <main>
        {children}
      </main>
      <Footer />
   
   
    </>
  );
};

export default Layout;
