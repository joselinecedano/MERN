import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Index = (props) => {
  //state to hold formData
  const [newForm, setNewForm] = useState({
    name: '',
    age: '',
    description: '',
  });

  //handleChange function for form
  const handleChange = (e) => {
    setNewForm({...newForm, [e.target.name]: e.target.value});
  }

  //handleSubmit fundtion for form
  const handleSubmit = (e) => {
    e.preventDefault();
    props.createBones(newForm);
    setNewForm({
        name:'',
        age: '', 
        description: '',
    });
  };

  //loaded function
  const loaded = () => {
    return props.skeleton.map((skeleton) => (
      <div key={skeleton.id} className="skeleton">
        <Link to={`/skeleton/${skeleton._id}`}>
          <h1>{skeleton.name}</h1>
        </Link>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>
  }

  return (
    <section>
        <br/>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
         <input
          type="number"
          value={newForm.age}
          name="age"
          placeholder="age"
          onChange={handleChange}
        />
         <input
          type="text"
          value={newForm.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
        <input type="submit" value="Create Skeleton" />
        </form>
        {props.skeleton ? loaded() : loading()}
    </section>
  );
};

export default Index;
