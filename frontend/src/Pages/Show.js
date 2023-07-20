import React from "react";
import { useParams } from "react-router-dom";

const Show = (props) => {
  const params = useParams();
  const id = params.id;
  const bones = props.skeleton;
  const bone = bones.find((b) => b._id === id);

  return (
    <div className="bone">
      <h1>{bone.name}</h1>
      <h3>{bone.age} years old</h3>
      <h2>{bone.description}</h2>
    </div>
  );
};

export default Show;
