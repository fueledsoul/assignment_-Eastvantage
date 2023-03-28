import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Users() {
  // State to set data from api
  const [data, setData] = useState("");

  //   Function to fetch data from API
  async function fetchData() {
    try {
      const response = await axios.get("https://randomuser.me/api");
      // console.log(response.data.results[0].name.first);
      let response_data;
      localStorage.setItem("Data", JSON.stringify(response.data.results[0]));
      response_data = JSON.parse(localStorage.getItem("Data"));
      setData(response_data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="main">
      <div>
        <div className="card_div">
          <h3>User Details</h3>
          <div className="inner_div">
            <p>
              Name : {data.name?.title} {data.name?.first} {data.name?.last}
            </p>
            <p>Email : {data?.email}</p>
          </div>
          <button className="btn" onClick={fetchData}>
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
}
