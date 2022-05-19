import React, { useState, useEffect } from "react";
import api from "../../../services/api";
import ListItem from "../../molecules/InsuranceItem";

const InsuranceList = () => {
  const [data, setData] = useState();
  const [err, setErr] = useState();
  const [loading, setLoading] = useState(true);
  const listData = () => {
    api
      .get("booking")
      .then((response) => {
        setData(response.data.policies);
        setLoading(false);
      })
      .catch((error) => {
        setErr("Sorry, we have a problem to load de content");
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    listData();
  }, [loading]);

  return (
    <>
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : data && data.length ? (
        data.map((item, i) => <ListItem item={item} key={i} />)
      ) : !err ? (
        <p>No product</p>
      ) : (
        <div className="alert alert-danger mt-4" role="alert">
          {err}
        </div>
      )}
    </>
  );
};

export default InsuranceList;
