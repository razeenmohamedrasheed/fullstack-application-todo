from fastapi import FastAPI
from routers import registration,todos 
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI(title="BackendServices")


@app.get('/')
def welcome():
    return "welcome"


app.include_router(registration.router)
app.include_router(todos.router)

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
