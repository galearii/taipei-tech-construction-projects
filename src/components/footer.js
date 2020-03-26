import React from "react";

function Footer() {
  return(
    <footer className="bg-blue-800 border-b-4 border-solid border-gray-800">
      <nav className="md:flex md:justify-between max-w-4xl mx-auto p-4 md:p-8">
        <ul className="text-white text-sm">
          <li>
            <a
              className="font-bold no-underline text-white"
              href="https://sec.ntut.edu.tw/"
            >
              國立臺北科技大學秘書室
            </a>
          </li>
          <li>
            10608 台北市忠孝東路三段 1 號 行政大樓 8 樓
          </li>
          <li>
            TEL: 886-2-2771-2171 #1000
          </li>
          <li>
            FAX: 886-2-2751-8845
          </li>
        </ul>

        <p>
          <a
            className="block rounded p-4 text-xl text-white bg-green-500 hover:bg-green-700 mt-4 md:mt-0 text-center md:text-left"
            href="https://newgiving.ntut.edu.tw/"
          >
            前往臺北科技大學捐贈網站
            <svg
              className="w-4 inline-block ml-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 125">
                <path d="M50 2.5C23.8 2.5 2.5 23.8 2.5 50S23.8 97.5 50 97.5 97.5 76.2 97.5 50 76.2 2.5 50 2.5zm16.4 50.7L48 71.5c-.9.9-2 1.3-3.2 1.3s-2.3-.4-3.2-1.3c-1.7-1.7-1.7-4.6 0-6.3L56.9 50 41.7 34.8c-1.7-1.7-1.7-4.6 0-6.3 1.7-1.7 4.6-1.7 6.3 0l18.4 18.3c.8.8 1.3 2 1.3 3.2s-.5 2.3-1.3 3.2z" fill="#fff"/>
            </svg>
          </a>
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
