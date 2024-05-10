import React from "react";

const ShopForm = ({
  handleSubmit,
  nameValue,
  setNameValue,
  detailsValue,
  setDetailsValue
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter shop category"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="3"
            placeholder="Enter shop name"
            value={detailsValue}
            onChange={(e) => setDetailsValue(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default ShopForm;
