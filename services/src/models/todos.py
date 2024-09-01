from pydantic import BaseModel

class Todos(BaseModel):
    userId:int
    todoName:str
    todoDate:str
    todoDesc:str