const EditTutorial = ({ editTutorial, currentData, setCurrentData }) => {
  const handleClick = () => {
    editTutorial(currentData.id, currentData);
  };

  return (
    <div>
      <div
        className="modal fade"
        id="edit-modal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Tutorial
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <input
                type="text"
                required
                className="form-control"
                value={currentData.title}
                onChange={(e) =>
                  setCurrentData({
                    ...currentData,
                    title: e.target.value,
                  })
                }
                placeholder="Please enter the 'title' you want to change."
                id="title"
              />

              <input
                className="form-control"
                type="text"
                required
                placeholder="Please enter the 'description' you want to change."
                value={currentData.description}
                id="description"
                onChange={(e) =>
                  setCurrentData({
                    ...currentData,
                    description: e.target.value,
                  })
                }
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"
                className="dsdsdsdsds btn btn-danger"
                onClick={() => handleClick(currentData.id)}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTutorial;
