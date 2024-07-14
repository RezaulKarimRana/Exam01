import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { updateTask } from "../features/taskSlice";

const UpdateTask = ({
  setVisible,
  editedId,
  editedName,
  editedTitle,
  editedDescription,
  setEditedName,
  setEditedTitle,
  setEditedDescription,
}) => {
  const dispatch = useDispatch();
  const handleEdit = () => {
    const updatedValues = {
      id: editedId,
      name: editedName,
      title: editedTitle,
      description: editedDescription,
    };
    dispatch(updateTask(updatedValues));
    toast.success("successfully task updated", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      theme: "light",
    });
    setVisible(false);
  };
  return (
    <>
      <Helmet>
        <title>Update Task</title>
      </Helmet>
      <ToastContainer />
      <div className="w-full h-screen bg-[rgba(255,255,255,0.8)] fixed top-0 left-0 flex justify-center items-center">
        <div className="w-2/5  bg-white shadow-md rounded-md px-4 py-5 box-border">
          <div>
            <div className="relative">
              <h1 className="font-mono text-3xl text-black text-center mb-4">
                Update Your Task
              </h1>
              <div
                className="absolute top-0 right-3 w-9 h-9 rounded-full flex items-center justify-center bg-slate-300 cursor-pointer"
                onClick={() => setVisible(false)}
              >
                <RxCross2 />
              </div>
            </div>
            <input
              placeholder="Please enter name"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              className="w-full rounded-md border border-blue-300 p-2 outline-none"
            />
            <input
              placeholder="Please enter title"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="w-full rounded-md border border-blue-300 p-2 mt-3 outline-none"
            />
            <textarea
              placeholder="Please enter description"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              className="w-full rounded-md border border-blue-300 p-2 mt-3 outline-none resize-none"
              rows={4}
              maxLength={200}
            />
            <div className="flex justify-end">
              <span className="text-gray-400">
                {200 - editedDescription.length} characters remaining
              </span>
            </div>
            <button
              className="bg-[#333] text-white text-base font-mono px-5 py-2 rounded-md mt-3"
              onClick={handleEdit}
            >
              Update Task
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateTask;
