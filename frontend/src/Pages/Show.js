import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Show = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  const bones = props.skeleton;
  const bone = bones.find((b) => b._id === id);

  //state for form
  const [editForm, setEditForm] = useState(bone);

  //handleChange for form
  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  //handleSubmit for form
  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateBones(editForm, bone._id);
    //redirect back to index
    navigate("/");
  };
  return (
    <div className="bone">
      <h1>{bone.name}</h1>
      <h3>{bone.age} years old</h3>
      <h2>{bone.description}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="number"
          value={editForm.age}
          name="age"
          placeholder="age"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
        <input type="submit" value="Update Person" />
      </form>
    </div>
  );
};

export default Show;
