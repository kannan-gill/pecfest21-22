import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

const VerifyEmail = () => {
  const { userId } = useParams();

  useEffect(() => {
    
  }, []);

  return (
    <div>VerifyEmail</div>
  )
}

export default VerifyEmail;