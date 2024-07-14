import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/taskSlice";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const AddTask = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [canAdd, setCanAdd] = useState(false);
  const task = {
    id: "",
    name: "",
    title: "",
    description: "",
    createdAt: "",
    updatedAt: "",
  };
  const dispatch = useDispatch();
  const handleAddTask = (e) => {
    e.preventDefault();
    if (name != "" && title != "" && description != "") {
      task.id = Date.now().toString(32);
      task.name = name;
      task.title = title;
      task.description = description;
      task.createdAt = new Date().toString();
      dispatch(addTask(task));
      setName("");
      setTitle("");
      setDescription("");
      setCanAdd(false);
      toast.success("successfully task added", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });
    } else {
      toast.error("Please fill required field", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });
    }
  };
  return (
    <>
      <Helmet>
        <title>Add Task</title>
      </Helmet>
      <ToastContainer />
      <div className="w-full flex justify-center items-center mt-40">
        <div className="w-2/4  bg-white shadow-md rounded-md px-4 py-5 box-border">
          <div>
            <h1 className="font-mono text-3xl text-black text-center mb-4">
              Add your task
            </h1>
            <input
              placeholder="Please enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border border-blue-300 p-2 outline-none"
            />
            <input
              placeholder="Please enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-md border border-blue-300 p-2 mt-3 outline-none"
            />
            <textarea
              placeholder="Please enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-md border border-blue-300 p-2 mt-3 outline-none resize-none"
              rows={4}
              maxLength={200}
            />
            <div className="flex justify-end">
              <span className="text-gray-400">
                {200 - description.length} characters remaining
              </span>
            </div>
            <div className="flex">
              <input
                type="checkbox"
                onChange={(e) => setCanAdd(!canAdd)}
                value={canAdd}
              />
              <label className="mx-5">i want to add this task</label>
            </div>
            <button
              disabled={!canAdd}
              className="bg-[#333] text-white text-base font-mono px-5 py-2 rounded-md mt-3"
              onClick={handleAddTask}
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTask;
