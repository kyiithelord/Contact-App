import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleContact } from "../service/contact.service";
import { LoadingComponents } from "../components";

const DetailContactPage = () => {
  const { id } = useParams();
  const [items, setItems] = useState({
    loading: true,
    data: null,
    error: null,
  });
  useEffect(() => {
    (async () => {
      setItems((pre) => ({ ...pre, loading: true }));
      const res = await getSingleContact(id);
      if (res.error) {
        setItems((pre) => ({ ...pre, loading: false, error: res.msg }));
      } else {
        setItems((pre) => ({ ...pre, loading: false, data: res }));
      }
    })();
  }, [id]);
  return (
    <div className="w-full h-full flex justify-center flex-col">
      {items.loading ? (
        <LoadingComponents />
      ) : (
        <>
          {items.error ? (
            <h1>{items.error}</h1>
          ) : (
            <div className="flex  flex-col">
              <div className="flex">
                <label htmlFor="">Name : </label>
                <h1>{items.data.name}</h1>
              </div>
              <div className="flex">
                <label htmlFor="">Phone :</label>
                <h1>{items.data.phone}</h1>
              </div>
              <div className="flex">
                <label htmlFor="">Email :</label>
                <h1>{items.data.email}</h1>
              </div>
              <div className="flex">
                <label htmlFor="">Address :</label>
                <h1>{items.data.address}</h1>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DetailContactPage;
