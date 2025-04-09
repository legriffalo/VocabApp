import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Footer: React.FC = () => {
  return (
    <div className = "fixed h-[5vh] w-full left-0 bottom-0 flex flex-row text-white text-xl bg-fiblue p-2 gap-3">
        <a href = 'https://github.com/legriffalo' target = "_blank">
                <FontAwesomeIcon icon={faGithub} className = "text-white"/>
        </a>
        <a href = 'https://www.linkedin.com/in/nick-griffiths-7b139198/' target = "_blank" >
                <FontAwesomeIcon icon={faLinkedin} className = "text-white" />
        </a>

</div>

  )
};

export default Footer;



