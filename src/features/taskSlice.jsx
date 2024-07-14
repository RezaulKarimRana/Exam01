import { createSlice } from "@reduxjs/toolkit";
const taskSlice = createSlice({
  name: "task",
  initialState: {
    taskList: [],
  },
  reducers: {
    addTask: (state, action) => {
      if (action.payload != "undefined") {
        state.taskList = [...state.taskList, action.payload];
        localStorage.setItem("tasks", JSON.stringify(state.taskList));
      }
    },
    updateTask: (state, action) => {
      if (state.action != "undefined") {
        const { id, name, title, description } = action.payload;
        const task = state.taskList.find((x) => x.id == id);
        if (task) {
          task.name = name;
          task.title = title;
          task.description = description;
          localStorage.setItem("tasks", JSON.stringify(state.taskList));
        }
      }
    },
    deleteTask: (state, action) => {
      if (action.payload != "undefined") {
        state.taskList = state.taskList.filter((x) => x.id !== action.payload);
        localStorage.setItem("tasks", JSON.stringify(state.taskList));
      }
    },
  },
});
export const { addTask, updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
