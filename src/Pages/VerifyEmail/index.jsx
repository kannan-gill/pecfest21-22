import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import { getDocById, updateDoc } from "services";

// generate random alpha numeric string of length 5 and check if it is unique
const generatePecfestId = (pecfestIdListParam) => {
  let pecfestIdList = pecfestIdListParam;
  if(!pecfestIdListParam)  pecfestIdList = [];
  let pecfestId = "";
  do {
    pecfestId = `PECFEST-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
  } while (pecfestIdList.includes(pecfestId));
  return pecfestId;
}

const VerifyEmail = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    debugger;
    Promise.all([
      getDocById("stats", "pecfestIdList"),
      getDocById("users", userId),
    ])
      .then(([{value: pecfestIdList}, user]) => {
        const pecfestId = generatePecfestId(pecfestIdList);
        const userData = { ...user };
        userData.pecfestId = pecfestId;
        Promise.all([
          updateDoc("stats", "pecfestIdList", {value: [...pecfestIdList, pecfestId]}),
          updateDoc("users", userId, userData),
        ])
          .then(() => {
            navigate(`/`);
          })
          .catch((error) => {
            console.log(error);
            toast.error("Something went wrong");
            navigate(`/`);
          });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong");
        navigate(`/`);
      });
  }, []);

  return (
    <div>JUST WAIT MAN</div>
  )
}

export default VerifyEmail;