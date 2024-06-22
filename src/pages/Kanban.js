// src/pages/Kanban.js
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Kanban = () => {
  const [tasks, setTasks] = useState([
    { id: '1', content: 'Task 1' },
    { id: '2', content: 'Task 2' },
    { id: '3', content: 'Task 3' },
    { id: '4', content: 'Task 4' },
    // Add more tasks as needed
  ]);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const newTasks = Array.from(tasks);
    const [removed] = newTasks.splice(source.index, 1);
    newTasks.splice(destination.index, 0, removed);

    setTasks(newTasks);
  };

  return (
    <div>
      <h2>Kanban</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ backgroundColor: '#f0f0f0', padding: 8, width: 300 }}
            >
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        userSelect: 'none',
                        padding: 16,
                        margin: '0 0 8px 0',
                        backgroundColor: '#fff',
                        border: '1px solid lightgray',
                        ...provided.draggableProps.style,
                      }}
                    >
                      {task.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Kanban;
