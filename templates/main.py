from fastapi import FastAPI, BackgroundTasks, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
import time

app = FastAPI()
templates = Jinja2Templates(directory="templates")

# This is your "Background Worker" function
def log_heavy_task(message: str):
    time.sleep(5) # Simulating a slow process (like sending an email or updating data)
    print(f"Background worker successfully finished: {message}")

@app.get("/", response_class=HTMLResponse)
async def read_faq(request: Request, background_tasks: BackgroundTasks):
    # Trigger the background worker without making the user wait for it to finish
    background_tasks.add_task(log_heavy_task, "FAQ page was viewed!")
    
    # Instantly load the page for the user
    return templates.TemplateResponse("faq.html", {"request": request})
