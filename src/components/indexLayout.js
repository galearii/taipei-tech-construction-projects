import React from "react";
import Header from "./header";
import Footer from "./footer";
import HeroImage from "../images/hero.jpg";

function IndexLayout({ children }) {
  return (
    <div className="flex flex-col font-sans min-h-screen text-gray-900">
      <Header />

      <div className="h-64 bg-center bg-no-repeat bg-cover"
           style={{ backgroundImage: "url(" + HeroImage + ")" }} >
        <div className="max-w-4xl mx-auto text-center text-4xl pt-20">
          <div className="w-4/5 mx-auto py-2 text-white"
               style={{ background: "rgba(34,193,195,0.7)", background: "linear-gradient(79deg, rgba(34,193,195,0.7) 0%, rgba(253,187,45,0.8) 100%)" }}>
            一磚一瓦<br/>
            永續北科
          </div>
        </div>
      </div>

      <main className="flex flex-col flex-1 max-w-4xl mx-auto px-4 py-8 md:p-8 w-full">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default IndexLayout;
