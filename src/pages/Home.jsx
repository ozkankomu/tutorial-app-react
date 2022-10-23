import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";

const Home = () => {
  const [tutorials, setTotorials] = useState([]);

  const getTutorials = async () => {
    const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";

    const { data } = await axios(url);

    setTotorials(data);
  };

  useEffect(() => {
    getTutorials();
  }, []);

  return (
    <div>
      <AddTutorial getTutorials={getTutorials} />
      <TutorialList tutorials={tutorials} getTutorials={getTutorials} />
    </div>
  );
};

export default Home;
