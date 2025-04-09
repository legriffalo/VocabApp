import React from 'react';

interface viewerProps {
   content: React.ComponentType; 
  }
  


const Viewer: React.FC<viewerProps> = ({ content: Content }) => {
  return (
    <div className = "border">
      <Content />

    </div>

  );
};

export default Viewer;