import React from 'react';

export default function handleEndPoint(props) {
    const onClick = (e) => {
      const newTab = e.metaKey || e.ctrlKey;
      const externalLink = props.href.startsWith("http");
    
  
      if (!newTab || !externalLink) {
        e.preventDefault();
        history.push(props.href);
      }
  };
  
  return (
    <a href={props.href} onClick={onClick}>
      {props.children}
    </a>
    )
  };