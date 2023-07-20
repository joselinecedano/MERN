import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Index = (props) => {

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

  return (props.skeleton ? loaded() : loading() );
};

export default Index;
