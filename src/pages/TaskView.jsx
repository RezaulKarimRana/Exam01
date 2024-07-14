import { formatDistance } from "date-fns";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../features/taskSlice";
import UpdateTask from "../component/UpdateTask";

const TaskView = () => {
  const perRow = 3;
  const [next, setNext] = useState(3);
  const [visible, setVisible] = useState(false);
  const [editedId, setEditedId] = useState(0);
  const [editedName, setEditedName] = useState("");
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const tasks = useSelector((state) => state.task.taskList);
  const dispatch = useDispatch();
  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };
  const handleLoadMore = () => {
    setNext((prev) => prev + 3);
  };
  const handleUpdateTask = (task) => {
    setVisible(true);
    setEditedId(task.id);
    setEditedName(task.name);
    setEditedTitle(task.title);
    setEditedDescription(task.description);
  };
  if (visible) {
    return (
      <UpdateTask
        setVisible={setVisible}
        editedId={editedId}
        editedName={editedName}
        editedTitle={editedTitle}
        editedDescription={editedDescription}
        setEditedName={setEditedName}
        setEditedTitle={setEditedTitle}
        setEditedDescription={setEditedDescription}
      />
    );
  }
  return (
    <>
      <Helmet>
        <title>Task List</title>
      </Helmet>
      <div className="container">
        <div className="grid grid-cols-3 gap-x-3 mt-5">
          {tasks?.slice(0, next).map((task, index) => (
            <div
              key={task.id}
              className="shadow-sm bg-white rounded-md px-4 py-3 border border-slate-500"
            >
              <h1 className="font-mono text-xl font-bold">Name: {task.name}</h1>
              <h1 className="font-mono text-xl font-bold">
                Title: {task.title}
              </h1>
              <h1 className="font-sans text-lg font-normal">
                Description: {task.description}
              </h1>
              <span className="text-base font-mono text-slate-500">
                {formatDistance(task.createdAt, new Date(), {
                  addSuffix: true,
                })}
              </span>
              <div className="flex items-center justify-end gap-x-3 mt-5">
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="px-5 py-2 bg-red-400 text-white font-medium rounded-md"
                >
                  Delete
                </button>
                <button
                  className="px-5 py-2 bg-slate-400 text-white font-medium rounded-md"
                  onClick={() => handleUpdateTask(task)}
                >
                  Update
                </button>
              </div>
            </div>
          ))}
        </div>
        {tasks.length > next && (
          <div className="text-center">
            <button
              onClick={handleLoadMore}
              className="px-4 py-2 bg-cyan-800 rounded-md text-white mt-5"
            >
              Load More...
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default TaskView;
