import React from 'react'
import { Card, Button, Stack } from 'react-bootstrap'
import {Pencil, Trash} from 'react-bootstrap-icons'
import type { Task } from '../models/Task'

interface TaskListProps {
    tasks: Task[];
    onDelete: (id: number) => void;
    onEdit: (task: Task) => void;
}

const TaskList: React.FC<TaskListProps> = ({tasks, onDelete, onEdit}) => {
  if(tasks.length === 0) {
    return <p className='text-center text-muted my-4'>No tasks yet. Add a new task to get started!</p>
  }
  
    return (
    <Stack gap={3}>
        {tasks.map(task => (
            <Card key={task.id}>
                <Card.Body className='d-flex justify-content-between align-items-start'>
                    <div>
                        <Card.Title>{task.title}</Card.Title>
                        <Card.Text>{task.description}</Card.Text>
                    </div>
                    <div className='d-flex gap-2'>
                        <Button
                            variant='outline-primary'
                            onClick={() => onEdit(task)}
                            size='sm'
                        >
                            <Pencil />
                        </Button>
                        <Button
                            variant='outline-danger'
                            onClick={() => onDelete(task.id)}
                            size='sm'
                        >
                            <Trash/>
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        ))}
    </Stack>
  )
}

export default TaskList