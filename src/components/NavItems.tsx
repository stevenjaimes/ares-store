"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { useEffect, useRef, useState } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

const NavItems = () => {
  const [activeIndex, seTactiveIndex] = useState<null | number>(null);


  useEffect(() => {
    const handler = (e: KeyboardEvent)=>{

      if(e.key == 'Escape'){
        seTactiveIndex(null)        
      }
    }

    document.addEventListener('keydown', handler)

    return()=>{
      document.removeEventListener ('keydown', handler)
    }
  
  }, [])
  


  const isAnyOpen = activeIndex !== null 

  const navRef = useRef<HTMLDivElement | null >(null)

  useOnClickOutside(navRef, () => seTactiveIndex(null))


  return (
    <div className="flex gap-4 h-full"  ref={navRef} >
      {PRODUCT_CATEGORIES.map((category, i) => {
        const handleOpen = () => {
          console.log(`que es esto ${activeIndex} `)
          if (activeIndex === i) {
            seTactiveIndex(null);
          } else {
            seTactiveIndex(i);
          }
        };

        const isOpen = i === activeIndex;
        console.log(`saber si el elemento esta abierto ${isOpen}`)

        return (
          <NavItem
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            key={category.value}
            isAnyOpen={isAnyOpen}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
