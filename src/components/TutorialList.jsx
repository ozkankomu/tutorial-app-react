import React from "react";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import EditTutorial from "./EditTutorial";

const TutorialList = ({ tutorials, getTutorials }) => {
  const [currentData, setCurrentData] = useState({
    id: "",
    title: "",
    description: "",
  });
  const deleteTutorial = async (id) => {
    const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";

    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  const editTutorial = async (id, data) => {
    const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";
    try {
      await axios.put(`${url}/${id}`, data);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  const handleEdit = (item) => {
    setCurrentData({
      id: item.id,
      title: item.title,
      description: item.description,
    });
  };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials?.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center text-nowrap">
                  <FaEdit
                    size={20}
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#edit-modal"
                    className="me-2 text-warning"
                    onClick={() => handleEdit(item)}
                  />
                  <AiFillDelete
                    size={22}
                    type="button"
                    className="text-danger "
                    onClick={() => deleteTutorial(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditTutorial
        currentData={currentData}
        setCurrentData={setCurrentData}
        editTutorial={editTutorial}
      />
    </div>
  );
};

export default TutorialList;
