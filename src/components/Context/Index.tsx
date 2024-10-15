"use client";

import React, { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { Navigation } from "../UI";

interface TypeOfContext {
  isAuthenticated:boolean;
  setIsAuthenticated:(b:boolean)=>void;
  theme:string|undefined,
  setTheme:(s:string)=>void;
  setTheme2:(s:string)=>void;
}

// export const experimental_ppr = true
export const Context = createContext<TypeOfContext>({
  isAuthenticated: false,
  setIsAuthenticated: function (): void {
    throw new Error("Function not implemented.");
  },
  theme: "",
  setTheme: function (): void {
    throw new Error("Function not implemented.");
  },
  setTheme2: function (): void {
    throw new Error("Function not implemented.");
  },
});

export function ContextProvider({ children }: { children: React.ReactNode }) {

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [theme, setTheme] = useState<string|undefined>(undefined);

  useEffect(() => {
    try {
      const localTheme = localStorage?.getItem("theme");
      if (localTheme) {
        document.documentElement.setAttribute("data-theme", localTheme);
        setTheme(localTheme);
      } else {
        setTheme("light");
      }
    } catch (err) {
      console.log("error loading the color theme",err);
    }
  }, [theme]);

  const setTheme2 = (theme: string) => {
    localStorage.setItem("theme", theme);
    document.querySelector("html")?.getAttribute("data-theme");
    document.querySelector("html")?.setAttribute("data-theme", theme);
  };

  // const getTheme = () => {
  //   return localStorage.getItem("theme") || undefined;
  // };


  const items =[
    {label:'Home', key:0},
    {label:'Input', key:1},
    {label:'Button', key:2},
    {label:'Icon', key:3},
  ]

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        setTheme,
        setTheme2,
        theme,
      }}
    >
      <div style={{ visibility: theme ? "visible" : "hidden",display:'flex' }}>
        <Navigation items={items}/>
        { children }
      </div>

      {/* <button 
      onClick={()=>{
        if(document.documentElement.getAttribute('data-theme')==='dark'){
          document.documentElement.setAttribute('data-theme', '');
          localStorage.setItem('theme','')
        }else{
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme','dark')
        }
      }}>
        button
      </button> */}
    </Context.Provider>
  );
}

export function GetContext() {
  return useContext(Context);
}
