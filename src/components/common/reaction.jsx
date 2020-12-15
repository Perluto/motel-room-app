import React, { useState } from "react";

const Reaction = (props) => {
  const [like, setLike] = useState(true);
  let classes = props.className;
  if (!like) classes += " far";
  else classes += " fas";
  return (
    <i
      onClick={() => setLike(!like)}
      className={classes}
      style={{ cursor: "pointer" }}
    ></i>
  );
};

export default Reaction;
