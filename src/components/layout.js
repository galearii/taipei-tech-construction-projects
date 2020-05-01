import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Helmet } from "react-helmet";

function Layout({ children }) {
  return (
    <div className="flex flex-col font-sans min-h-screen text-gray-900 bg-gray-100">
      <Helmet>
        <meta charSet="utf-8" />
        <title>臺北科技大學校園整建工程</title>
      </Helmet>

      <Header />

      <main className="flex flex-col flex-1 max-w-6xl mx-auto px-4 py-8 md:p-8 w-full bg-white">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
