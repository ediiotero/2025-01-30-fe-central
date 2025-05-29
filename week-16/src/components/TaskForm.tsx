import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

interface TaskFormProps {
    onSubmit: (title: string, description: string) => void;
    editingTask: {id: number, title: string, description: string} | null;
}

const TaskForm: React.FC<TaskFormProps> = ({onSubmit, editingTask}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        if(editingTask) {
            setTitle(editingTask.title)
            setDescription(editingTask.description)
        }
    }, [editingTask])

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        if(!title.trim() || !description.trim()) return;

        onSubmit(title, description);
        setTitle('')
        setDescription('')
    }

  return (
    <Form onSubmit={handleSubmit} className='bg-light p-4 rounded shadow-sm mb-4'>
        <Form.Group className='mb-3'>
            <Form.Label>Title:</Form.Label>
            <Form.Control
                type='text'
                value={title}
                onChange={event => setTitle(event.target.value)}
                placeholder='Enter task title'
                required
            />
        </Form.Group>
        <Form.Group className='mb-3'>
            <Form.Label>Description:</Form.Label>
            <Form.Control
                as='textarea'
                rows={3}
                value={description}
                onChange={event => setDescription(event.target.value)}
                placeholder='Enter task description'
                required
            />
        </Form.Group>

        <Button type='submit'>
            {editingTask ? 'Update Task' : 'Add Task'}
        </Button>
    </Form>
  )
}

export default TaskForm