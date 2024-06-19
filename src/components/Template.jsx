import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Template() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Template;
