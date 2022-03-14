import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

const ExternalLink = ({url}) => {

    
    const navigate = useNavigate();
    console.log(useLocation());
    

    useEffect(() => {
        window.open(url, "_blank");
    }, []);

    useEffect(() => {
        navigate(-1);
    }, []);

  return (
    <> </>
  )
}

export default ExternalLink;