import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlay } from '@fortawesome/free-solid-svg-icons';
// import { faPause } from '@fortawesome/free-solid-svg-icons';
// import { faRefresh } from '@fortawesome/free-solid-svg-icons';



interface MenuProps {
    options: string[];
    handler?:any;
  }
  


const Menu: React.FC<MenuProps> = ({options}) => {
  return (
    <div className = "border">
        
        {options.map((option) => 
            (<div className= "btn btn-primary">{option}</div>)
            )}

    </div>

  );
};

export default Menu;