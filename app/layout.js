
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";

import "./globals.css";

export const metadata = {
  title: "Movies Site",
  description: "A Site To Download Movies And Series",
};



export default function RootLayout({ children }) {
 

  return (
    <html lang="fa" dir="rtl" class="dark">
      <body className="dark:theme-dark bg-color-4">
        <Navbar />
        
        <div className="w-full relative  custom-transition  ">
          {children}
        </div>

        <Footer />

      
      </body>
    </html>
  );
}
