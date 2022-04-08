import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import { generatePecfestId } from "services";

const VerifyEmail = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    generatePecfestId(userId)
      .then(() => {
        navigate(`/`);
      })
      .catch((error) => {
        toast.error("Something went wrong");
        navigate(`/`);
      });
  }, []);

  return (
    <></>
  )
}

export default VerifyEmail;