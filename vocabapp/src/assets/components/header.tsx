import React from 'react';

interface HeaderProps {
    title:string;
    image?:string;
  }
  


const Header: React.FC<HeaderProps> = ({title,image}) => {
  return (
    <div className = "fixed left-0 top-0 h-1/10 flex flex-row justify-center items-center footer font-sans font-bold bg-fiblue text-neutral-content p-3 ">
       <img className = "h-[5vh]" src = {image}/> <h1> {title} </h1>
    </div>

  );
};

export default Header;