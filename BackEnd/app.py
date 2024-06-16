import io
import base64
import requests
from PIL import Image
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


HUGGINGFACE_ACCESS_TOKEN = "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"


API_URL = "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0"
headers = {"Authorization": f"Bearer {HUGGINGFACE_ACCESS_TOKEN}"}


class ImageResponse(BaseModel):
    image: str


@app.get("/", response_model=ImageResponse)
def query(prompt: str):
    """
    This function is responsible for handling the API request and returning the generated image.

    Parameters:
    prompt (str): The text prompt that will be used to generate the image.

    Returns:
    dict: A dictionary containing the base64-encoded image string.

    The function performs the following steps:
    1. Prints the received prompt.
    2. Prepares the payload with the prompt.
    3. Sends a POST request to the Hugging Face API with the payload.
    4. Opens the received image data using the PIL library.
    5. Saves the image data to a buffer in PNG format.
    6. Encodes the buffer data to base64.
    7. Returns a dictionary containing the base64-encoded image string.
    """
    print(prompt)
    payload = {"inputs": prompt}
    response = requests.post(API_URL, headers=headers, json=payload)

    image = Image.open(io.BytesIO(response.content))
    buffer = io.BytesIO()
    image.save(buffer, format="PNG")
    img_str = base64.b64encode(buffer.getvalue()).decode("utf-8")

    return {"image": img_str}
