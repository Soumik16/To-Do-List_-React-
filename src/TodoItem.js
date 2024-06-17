import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({ task, index, removeTask, updateTask, toggleCompletion }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(task.text);

    const handleUpdate = () => {
        updateTask(index, editText);
        setIsEditing(false);
    };

    return (
        <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
            {isEditing ? (
                <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onBlur={handleUpdate}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleUpdate();
                        }
                    }}
                />
            ) : (
                <span onClick={() => toggleCompletion(index)}>{task.text}</span>
            )}
            <div>
                <FontAwesomeIcon
                    icon={faEdit}
                    className="icon edit-icon"
                    onClick={() => setIsEditing(true)}
                />
                <FontAwesomeIcon
                    icon={faTrash}
                    className="icon delete-icon"
                    onClick={() => removeTask(index)}
                />
            </div>
        </div>
    );
};

export default TodoItem;
