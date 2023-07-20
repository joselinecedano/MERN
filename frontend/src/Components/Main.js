import React from "react";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Index from "../Pages/Index";
import Show from "../Pages/Show";

const Main = () => {
  const [skeleton, setSkeleton] = useState(null);

  const URL = process.env.REACT_APP_URL;

  //****************** */
  //* INDEX
  //****************** */
  const getBones = async () => {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setSkeleton(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

  //****************** */
  //* CREATE
  //****************** */
  const createBones = async (skeleton) => {
    //make post request to create bones
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(skeleton),
    });
    //update list of skeletons
    getBones();
  };

  //****************** */
  //* UPDATE
  //****************** */
  const updateBones = async (skeleton, id) => {
    // make PUT request to update skeleton
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(skeleton),
    });
    //update list of skeletons
    getBones();
  };

  //****************** */
  //* DELETE
  //****************** */
  const deleteBones = async (id) => {
    await fetch(URL + id, {
      method: "DELETE",
    });
    // update list of skeletons
    getBones();
  };

  useEffect(() => {
    getBones();
  }, []);

  return (
    // <div>Main</div>
    <main>
      <Routes>
        <Route
          path="/"
          element={<Index skeleton={skeleton} createBones={createBones} />}
        />
        <Route
          path="/skeleton/:id"
          element={
            <Show
              skeleton={skeleton}
              updateBones={updateBones}
              deleteBones={deleteBones}
            />
          }
        />
      </Routes>
    </main>
  );
};

export default Main;
