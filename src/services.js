import { firestore } from "./config";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  setDoc,
  addDoc,
  query,
  where,
} from "firebase/firestore";

export const getList = async (collectionParam) => {
  const resCollection = collection(firestore, collectionParam);
  const resSnap = await getDocs(resCollection);

  const resList = resSnap.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return resList;
};

export const getDocById = async (collectionParam, docIdParam) => {
  const docRef = doc(firestore, collectionParam, docIdParam);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { ...docSnap.data(), id: docSnap.id };
  } else {
    throw Error("No such document exists");
  }
};

export const getListRealTime = (collectionParam, callbackFunction) => {
  const cleanup = onSnapshot(
    collection(firestore, collectionParam),
    (docList) => {
      const data = docList.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      callbackFunction(data);
    }
  );
  // call this to stop getting realtime updates
  return cleanup;
};

export const getListRealTimeFiltered = (
  collectionParam,
  filterKey,
  filterParam,
  filterKey2,
  filterParam2,
  callbackFunction
) => {
  const queryRef = query(
    collection(firestore, collectionParam),
    where(filterKey, "==", filterParam),
    where(filterKey2, "==", filterParam2)
  );
  const cleanup = onSnapshot(queryRef, (querySnapshot) => {
    const data = querySnapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });
    callbackFunction(data);
  });
  // call this to stop getting realtime updates
  return cleanup;
};

export const getDocByIdRealTime = (
  collectionParam,
  docIdParam,
  callbackFunction
) => {
  const cleanup = onSnapshot(
    doc(firestore, collectionParam, docIdParam),
    (doc) => {
      callbackFunction({ ...doc.data(), id: doc.id });
    }
  );
  // call this to stop getting realtime updates
  return cleanup;
};

export const updateDoc = async (collectionParam, docIdParam, body) =>
  await setDoc(doc(firestore, collectionParam, docIdParam), body);

export const createDoc = async (collectionParam, body) =>
  await addDoc(collection(firestore, collectionParam), body);

export const getUserByEmail = async (emailParam) => {
  const queryRef = query(
    collection(firestore, "users"),
    where("email", "==", emailParam)
  );

  const querySnapshot = await getDocs(queryRef);
  const data = querySnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  if (data.length > 0) {
    return data[0];
  } else {
    throw Error("No such user exists");
  }
};

export const getUserByEmailLive = (emailParam, callbackFunction) => {
  const queryRef = query(
    collection(firestore, "users"),
    where("email", "==", emailParam)
  );
  const cleanup = onSnapshot(queryRef, (querySnapshot) => {
    const data = querySnapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });

    if (data.length > 0) {
      callbackFunction(data[0]);
    } else {
      throw Error("No such user exists");
    }
  });
  return cleanup;
};

export const getUsersInPECIdArray = async (idArrayParam) => {
  const queryRef = query(
    collection(firestore, "users"),
    where("pecfestId", "in", idArrayParam)
  );

  const querySnapshot = await getDocs(queryRef);
  const data = querySnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return data;
};
