import React, { useState } from "react";

const Practical7 = (props) => {
  const [myInfo, setMyinfo] = useState({
    name: "",
    college: "",
  });
  const displayInfo = () => {
    if (window.confirm("you want to show your inforamation")) {
      setMyinfo({
        name: props.name,
        college: props.college,
      });
    }
    else{
      setMyinfo({
        name: "",
        college: ""
      });
    }
  };
  const { title, price, author } = { ...props.bookinfo };
  return (
    <div className="my-5">
      <center>
        <h1>
          MY Information : {title} {price} {author} {myInfo.name} {" "}
          {myInfo.college}
        </h1>
        <button className="btn btn-primary" onClick={displayInfo}>
          Show Info
        </button>
      </center>
    </div>
  );
};

export default Practical7;
