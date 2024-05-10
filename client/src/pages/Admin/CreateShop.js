import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Modal } from "antd";
import ShopForm from "./../../components/Form/ShopForm";

const CreateShop = () => {
  const [shops, setShops] = useState([]);
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedDetails, setUpdatedDetails] = useState("");

  // Handle Form Submission for Shop Creation
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/Shop/create-Shop`,
        { name, details }
      );
      if (data?.success) {
        toast.success(`${name} is created`, {
          autoClose: 3000,
        });
        getAllShop(); // Update the shop list after creation
        setName(""); // Clear the input fields after successful creation
        setDetails("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in input form");
    }
  };

  // Get all Shops
  const getAllShop = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/Shop/get-Shop`
      );
      if (data?.success) {
        setShops(data?.shops);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting Shop");
    }
  };

  useEffect(() => {
    getAllShop();
  }, []);

  // Update shop
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/Shop/update-Shop/${selected._id}`,
        { name: updatedName, details: updatedDetails }
      );
      if (data.success) {
        toast.success(`${updatedName} is updated`);
        setSelected(null);
        setUpdatedName("");
        setUpdatedDetails("");
        setVisible(false);
        getAllShop();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  // Delete shop
  const handleDelete = async (shopId) => {
    try {
      const { data } = await axios.delete(
        `${process.env.REACT_APP_API}/api/v1/Shop/delete-Shop/${shopId}`
      );
      if (data.success) {
        toast.success(`Shop is deleted`);
        getAllShop();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Dashboard - Create Shop"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Manage Shop</h1>
            <div className="p-3 w-50">
              <ShopForm
                handleSubmit={handleSubmit}
                nameValue={name}
                setNameValue={setName}
                detailsValue={details}
                setDetailsValue={setDetails}
              />
            </div>
            <div className="w-75">
              <div>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Category</th>
                      <th scope="col">Shop Names</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shops.map((shop) => (
                      <tr key={shop._id}>
                        <td>{shop.name}</td>
                        <td>{shop.details}</td>
                        <td>
                          <button
                            className="btn btn-primary ms-2"
                            onClick={() => {
                              setVisible(true);
                              setUpdatedName(shop.name);
                              setUpdatedDetails(shop.details);
                              setSelected(shop);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger ms-2"
                            onClick={() => handleDelete(shop._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <Modal
              onCancel={() => setVisible(false)}
              footer={null}
              visible={visible}
            >
              <ShopForm
                nameValue={updatedName}
                setNameValue={setUpdatedName}
                detailsValue={updatedDetails}
                setDetailsValue={setUpdatedDetails}
                handleSubmit={handleUpdate}
              />
            </Modal>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateShop;
