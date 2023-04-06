import React from "react";
import avatar from "../../../assets/default-avatar.svg";
export function Person({ name, nickName = "shakeAndBake", images }) {
  //if images is there then get me the first. If first one exists get me the small property...
  //   const img = images && images[0] && images[0].small && images[0].small.url;
  //make above code shorter using optional chaining
  const img = images?.[0]?.small?.url || avatar;
  return (
    <div>
      <img src={img} alt={name} style={{ width: "50px" }} />
      <h2>{name}</h2>
      <p>Nickname : {nickName}</p>
    </div>
  );
}
