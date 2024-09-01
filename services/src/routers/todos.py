from fastapi import APIRouter,HTTPException,status
from utilities.dbutils import DButils
from models.todos import Todos


router = APIRouter(
    tags= ["TodoService"]
)

@router.post('/todos',status_code=status.HTTP_201_CREATED)
async def createTodo(payload:Todos):
    try:
        db = DButils()
        columns = ['todoname','description','userid','date']
        values = (payload.todoName,payload.todoDesc,payload.userId,payload.todoDate)
        db.insert_query('todos',columns,values)
        return{
            "message":"success"
        }
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,detail=f"Error {e}")
    

@router.get('/todos/id',status_code=status.HTTP_200_OK)
async def getTodo(id):
    try:
        db = DButils()
        query = f"""select * from todos where userid = '{id}' """
        data  = db.execute_query(query,True)
        return{
                    "message":"Success",
                    "data":data
            }
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,detail=f"Error {e}")