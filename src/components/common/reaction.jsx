import React, { useState, useEffect } from "react";

const Reaction = (props) => {
  const [like, setLike] = useState(false);
  let classes = props.className;
  const { idUser, idPost, handleLike } = props;
  if (!like) classes += " far";
  else classes += " fas";

  useEffect(() => {
    setLike(props.liked);
  }, [props.liked]);

  function handleClick(e) {
    e.preventDefault();
    handleLike(idPost, idUser);
    setLike(!like);
  }

  return (
    <i
      onClick={handleClick}
      className={classes}
      style={{ cursor: "pointer" }}
    ></i>
  );
};

export default Reaction;
