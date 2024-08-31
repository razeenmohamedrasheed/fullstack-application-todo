from pydantic import BaseModel

class UserData(BaseModel):
    username:str
    email:str
    contact:str
    password:str

class UserLogin(BaseModel):
    username:str
    password:str