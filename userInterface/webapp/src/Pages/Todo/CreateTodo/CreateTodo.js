import { Button, Card, CardBody, DatePicker, Input, Textarea, User } from '@nextui-org/react'
import React, { useState } from 'react'

function CreateTodo() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [todoData,setTodoData] = useState({
        todoname:'',
        todoDesc:'',
    })

    const handleChangeData = (e)=>{
        const {name,value} = e.target
        setTodoData((prevtodoData)=>({
            ...prevtodoData,
            [name]:value
        }))
    }

    const handleDateChange = (date) => {
        setSelectedDate(date); 
        console.log('Selected Date:', date)
      };

    const handleAddtodo =(e)=>{
        e.preventDefault()
        console.log(todoData)
    }
    return (
        <div>
            <Card className="m-4 p-3 dark text-foreground bg-background">
                <CardBody>
                    <form onSubmit={handleAddtodo}>
                        <Input
                            isRequired
                            type="text"
                            label="Task Name"
                            name='todoname'
                            value={todoData.todoname}
                            onChange={handleChangeData}
                            placeholder="Enter your Task"
                            className="max-w-l mt-3"
                        />
                        <DatePicker
                            isRequired
                            label="Task date"
                            showMonthAndYearPickers
                            onChange={handleDateChange} 
                            className="max-w-l mt-3" />
                        <Textarea
                            isRequired
                            label="Description"
                            name='todoDesc'
                            value={todoData.todoDesc}
                            onChange={handleChangeData}
                            placeholder="Enter your description"
                            className="max-w-l mt-3"
                        />
                        <Button color="primary" type='submit' className="max-w-xs mt-3 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                            Add Todo
                        </Button>
                    </form>
                </CardBody>
            </Card>
        </div>
    )
}

export default CreateTodo