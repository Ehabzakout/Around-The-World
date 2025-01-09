import { useEffect, useState } from "react";
import dark from "../assets/images/dark_mode_54dp_5F6368_FILL0_wght400_GRAD0_opsz48.png";
import light from "../assets/images/light_mode_54dp_5F6368_FILL0_wght400_GRAD0_opsz48.png";

  const theme:string="w-6 h-6 object-cover rounded-full p-1 transtion duration-500"

export default function Switcher() {
const [sw,setSw]=useState<string>('light')
const localTheme:string= localStorage.getItem("theme")||'';
useEffect(()=>{toggelDark(localTheme)})
const toggelDark =(theme:string)=>{
    if(theme ==='')return 
if(theme ==="dark"){
    document.documentElement.classList.add(theme) 
}
else {
    document.documentElement.classList.remove("dark")
}
localStorage.setItem("theme",theme)
setSw(theme)
}
  return (
    <>
      <div className={`w-16 h-8 rounded-full ${sw==="dark"?"bg-zinc-700":"bg-zinc-300"}  flex items-center justify-around `}>
          <button><img src={dark} onClick={()=>toggelDark("dark")} className={`${theme} ${sw ==="dark"?"bg-zinc-100":""}  `}></img></button>
          <button><img src={light} onClick={()=>toggelDark("light")} className={`${theme} ${sw ==="light"?"bg-zinc-100":""}`}></img></button>
      </div>
      
    </>
  );
}
