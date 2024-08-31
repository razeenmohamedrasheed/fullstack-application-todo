from fastapi import APIRouter,status,HTTPException
from models.registration import UserData,UserLogin
from passlib.context import CryptContext
from utilities.dbutils import DButils

router = APIRouter(
    tags=["Authorosiation"]
)

pwd_context = CryptContext(schemes=["argon2"], deprecated="auto")

@router.post('/registration',status_code=status.HTTP_201_CREATED)
async def userRegistration(payload:UserData):
    try:
        db = DButils()
        hashed_password = pwd_context.hash(payload.password) 
        columns = ['username','email','password','contact']
        values = (
            payload.username,
            payload.email,
            hashed_password,
            payload.contact
        )
        db.insert_query("userdetails",columns,values)
        return {'success'}
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,detail=f"An error occurred during registration: {str(e)}")
    
    
@router.post('/login',status_code=status.HTTP_200_OK)
def userLogin(payload:UserLogin):
    try:
         db = DButils()
         user_data = db.select_query("userdetails")
         if len(user_data) == 0:
                 return HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="User Not Found")
         for data in user_data:
             current_password = pwd_context.verify(payload.password,data['password'])
             if data['username'] == payload.username and current_password:
                 return {
                      "Login success"
                 }
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,detail=f"An error occurred during Login: {str(e)}")