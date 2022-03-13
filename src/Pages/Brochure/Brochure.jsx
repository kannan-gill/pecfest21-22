import React, { useEffect } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const Brochure = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const storage = getStorage();
    getDownloadURL(ref(storage, "Marketing Brochure.pdf"))
      .then((url) => {

        const xhr = new XMLHttpRequest();
        xhr.responseType = "blob";
        xhr.onload = (event) => {
          const blob = xhr.response;
          saveBlob(blob, "Brochure.pdf")
        };
        xhr.open("GET", url);
        xhr.send();

        navigate(-1);
      })
      .catch((error) => {
        console.log(error)
      });
  }, [navigate]);

  const saveBlob = (blob, fileName) => {
    let a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = fileName;
    a.dispatchEvent(new MouseEvent('click'));
}

  return <></>
};

export default Brochure;
