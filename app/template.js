
"use client";


import { useEffect, useState } from "react";

import ScrollToTop from './components/scrollToTop/scrollToTop';


export default function Template({ children}) {


    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        const currentProgress = window.scrollY;
        if (currentProgress > 100) {
          setBackToTop(true);
        } else {
          setBackToTop(false);
        }
      });
    });

    return <div> 
        {children}
        {backToTop && <ScrollToTop />}
        </div>
}