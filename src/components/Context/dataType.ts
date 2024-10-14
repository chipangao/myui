declare module typeOfContext {

  type context = {
    isAuthenticated:boolean;
    setIsAuthenticated:(b:boolean)=>void;
    theme:string,
    setTheme:(s:string)=>void;
    setTheme2:(s:string)=>void;
    // getTheme:()=>void;
  }
}