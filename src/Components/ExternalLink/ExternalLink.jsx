import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ExternalLink = ({url}) => {

    
    const navigate = useNavigate();
    

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