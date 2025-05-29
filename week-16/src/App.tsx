import { useState } from "react";
import NavBar from "./components/NavBar";
import PageFooter from "./components/PageFooter";
import TaskForm from "./components/TaskForm";
import Container from "react-bootstrap/Container";
import TaskList from "./components/TaskList";
import type { Task } from "./models/Task";

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [editingTask, setEditingTask] = useState<Task | null>(null)

  const startEditing = (task: Task) => {
    setEditingTask(task)
  }

  const addTask = (title: string, description: string) => {
    const newTask = {
      id: Date.now(),
      title,
      description
    }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const updateTask = (id: number, title: string, description: string) => {
   setTasks(tasks.map(task => 
      task.id === id ? { ...task, title, description } : task
    ));
    setEditingTask(null)
  }

  const handleSubmit = (title: string, description: string) => {
    if(editingTask) {
      updateTask(editingTask.id, title, description)
    } else {
      addTask(title, description)
    }
  }

  return (
    <div>
      <NavBar />
        <Container>
          <h1 className="text-center my-2">Task Manager</h1>
          <p className="text-center text-muted mb-4">Add, update, and delete your tasks</p>
          <TaskForm
            onSubmit={handleSubmit}
            editingTask={editingTask}
          />
          <TaskList
            tasks={tasks}
            onDelete={deleteTask}
            onEdit={startEditing} 
          />
        </Container>
      <PageFooter />
    </div>
  );
}

export default App;