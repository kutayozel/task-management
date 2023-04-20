import React, { useState } from "react";
import Task from "./Task";

type TaskProps = {
  task: {
    id: number;
    title: string;
    description: string;
  };
  onDelete: (id: number) => void;
  onUpdate: (
    id: number,
    updatedTask: { title: string; description: string }
  ) => void;
};

const TaskList = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const handleAddTask = () => {
    const newTask: TaskProps = {
      task: {
        id: Date.now(),
        title: "New Task",
        description: "",
      },
      onDelete: () => {},
      onUpdate: () => {},
    };
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>My Tasks</h1>
      <button onClick={handleAddTask}>Add Task</button>
      {tasks.map((task) => (
        <Task
          key={task.task.id}
          id={task.task.id}
          title={task.task.title}
          description={task.task.description}
        />
      ))}
    </div>
  );
};

export default TaskList;
