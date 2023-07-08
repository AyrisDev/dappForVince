import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
