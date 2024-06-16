

# Stable Diffusion Image Generator | BackEnd


This FastAPI application generates images based on text prompts using the Stable Diffusion model from Hugging Face.


---

## 🚀 Features

- **Generate Images from Text Prompts:** Input a text prompt and receive a generated image.
- **CORS Support:** Configured to allow cross-origin requests.

---

## 💻 Installation

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/KushanManahara/-AI-Image-Generator-with-Stable-Diffusion.git
   ```

2. **Navigate to the project directory:**
   ```sh
   cd AI-Image-Generator-with-Stable-Diffusion/BackEnd
   ```

3. **Create a virtual environment and activate it:**
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

4. **Install dependencies:**
   ```sh
   pip install -r requirements.txt
   ```

5. **Run the application:**
   ```sh
   fastapi dev app.py
   ```
---

## 🔑 Environment Variables

Make sure to set your Hugging Face access token:

- `HUGGINGFACE_ACCESS_TOKEN`: Your Hugging Face API access token.

You can set this variable in your environment or directly in the script.

---

## 🚀 Usage

1. **Start the FastAPI server:**
   ```sh
   fastapi dev app.py
   ```

2. **Generate an image:**
   Open your browser and go to `http://127.0.0.1:8000/?prompt=your_text_prompt`, replacing `your_text_prompt` with your desired input.

3. **Example:**
   ```sh
   curl -X 'GET' \
     'http://127.0.0.1:8000/?prompt=A beautiful sunset over the mountains' \
     -H 'accept: application/json'
   ```
---

## 📚 Lessons Learned

Throughout the development of this project, we have learned:

- **Integrating FastAPI with external APIs:** Handling requests and responses effectively.
- **Image processing:** Converting images to base64 and handling image data in memory.
- **CORS Middleware:** Configuring FastAPI to allow cross-origin requests.

---

## 💡 Skills

Working on this project has helped develop the following skills:

- **API Development:** Building and deploying FastAPI applications.
- **Image Processing:** Using Python's PIL library for image manipulation.
- **RESTful Services:** Consuming external APIs and handling JSON responses.

---
## 🤝 Contributing

We welcome contributions to improve this project! To contribute, please follow these steps:

1. **Fork the repository:**
   Click the "Fork" button at the top right of this page to create a copy of this repository in your GitHub account.

2. **Clone your forked repository:**
   ```sh
   git clone https://github.com/KushanManahara/-AI-Image-Generator-with-Stable-Diffusion.git
   ```

3. **Create a new branch:**
   ```sh
   git checkout -b feature-branch
   ```

4. **Make your changes:**
   Implement your changes and commit them with a clear and descriptive message.

5. **Push to the branch:**
   ```sh
   git push origin feature-branch
   ```

6. **Open a pull request:**
   Navigate to the original repository and open a pull request with a detailed description of your changes.

Thank you for contributing!

Feel free to customize this README.md file to better suit your project's specifics.

---


## 🧑‍💼 About Me
### Kushan Manahara

I'm a final year undergraduate student pursuing Computer Engineering at the University of Peradeniya. My passion lies in research, AI development, and automation. I thrive on exploring new technologies and pushing the boundaries of what's possible in the realm of artificial intelligence.

Whether it's diving into the intricacies of machine learning algorithms or crafting seamless user experiences through full stack development, I'm driven by a relentless curiosity and a desire to make meaningful contributions to the field of technology.

Feel free to reach out if you'd like to collaborate on exciting projects or discuss ideas at the intersection of technology and innovation.


Connect with me on [LinkedIn]([Your_LinkedIn_Profile_URL](https://www.linkedin.com/in/kushan-manahara/))

---

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://kushan-portfollio.vercel.app/)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kushan-manahara/)

---

## ✍️ Authors
- [@KushanManahara](https://github.com/KushanManahara/)

---

## 🎖️ Badges
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)