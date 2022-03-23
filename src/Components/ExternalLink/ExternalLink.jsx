import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

const ExternalLink = ({url}) => {

    
    const navigate = useNavigate();

    let callRefLink = React.createRef();
    
    function handleClick(e){
      callRefLink.current.click();
    }

    useEffect(() => {
        handleClick();
        navigate(-1);
    }, []);

  return (
    <a href={url} ref={callRefLink} onClick={handleClick} target="_blank"> </a>
  )
}

export default ExternalLink;