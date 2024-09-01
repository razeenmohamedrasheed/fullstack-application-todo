from fastapi import APIRouter,HTTPException,status
from models.todos import Todos


router = APIRouter(
    tags= ["TodoService"]
)

@router.post('/todos',status_code=status.HTTP_201_CREATED)
def createTodo(payload:Todos):
    return payload