import React from "react";
import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div className="flex flex-col font-sans min-h-screen text-gray-900 bg-gray-100">
      <Header />

      <main className="flex flex-col flex-1 max-w-6xl mx-auto px-4 py-8 md:p-8 w-full bg-white">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
