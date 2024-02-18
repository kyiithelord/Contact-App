import React, { useEffect, useState } from "react";
import { getContactData } from "../service/contact.service";
import LoadingComponents from "../components/Loading.components";
import ContactCardComponents from "../components/ContactCard.components";
const ContactPage = () => {
  const [items, setItems] = useState({
    loading: true,
    data: null,
    error: null,
  });
  useEffect(() => {
    // const getData = async () => {
    //   const res = await getContactData();
    // };
    // getData();
    (async () => {
      setItems((pre) => ({ ...pre, loading: true }));
      const res = await getContactData();
      if (res.error) {
        setItems((pre) => ({ ...pre, loading: false, error: res.msg }));
      } else {
        setItems((pre) => ({ ...pre, loading: false, data: res }));
      }
    })();
  }, []);
  return (
    <div className="w-full h-full flex justify-center flex-col">
      {items.loading ? (
        <LoadingComponents />
      ) : (
        <>
          {items.error ? (
            <h1>{items.error}</h1>
          ) : (
            items.data.map((i) => <ContactCardComponents data={i} key={i.id} />)
          )}
        </>
      )}
    </div>
  );
};

export default ContactPage;
