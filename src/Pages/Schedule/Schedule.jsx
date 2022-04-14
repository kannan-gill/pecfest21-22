import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Schedule() {
  const navigate = useNavigate()
  useEffect(() => {
    window.open("https://www.google.com/", "_blank");
    navigate("/");
  })
  return (
    <></>
  )
}

export default Schedule