import React, { useState } from "react";

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

const Task = ({ task, onDelete, onUpdate }: TaskProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDescription, setUpdatedDescription] = useState(
    task.description
  );

  const handleUpdate = () => {
    onUpdate(task.id, { title: updatedTitle, description: updatedDescription });
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    // <div classNameName="bg-red-500 w-[250px] h-[100px] rounded-lg">
    //   <input classNameName="bg-red-500 h-[100%] w-[100%] py-2 border-none text-black rounded-lg overflow-hidden" />
    // </div>
    <div className="bg-white rounded-lg max-w-[250px]">
      <div className="bg-[#007bff] flex justify-between rounded-t-lg text-white p-[10px]">
        <input
          type="text"
          className="text-lg font-bold"
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
        />
        <button onClick={handleDelete} className="text-red-500">
          Del
        </button>
      </div>
      <div className="p-[10px]">
        <form className="text-black">
          <div className="mb-[20px]">
            <textarea
              className="outline-none rounded-none resize-none border-none overflow-hidden w-[100%] h-[100%]"
              id="task-description"
              rows={5}
              cols={30}
              placeholder="Enter task description"
              onChange={(e) => setUpdatedDescription(e.target.value)}
              value={updatedDescription}
            ></textarea>
            <button
              onClick={handleUpdate}
              className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Task;
