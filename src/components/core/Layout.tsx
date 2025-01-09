import Header from "@components/Header";
import Footer from "@components/Footer";

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
