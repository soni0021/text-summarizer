<h1 align="center">AI Text Summarizer</h1>





</div>

<div align="center">
<h2>🎉 Welcome to the AI Text Summarizer Web App repository! This application leverages the power of artificial intelligence to provide concise summaries of long texts. Whether you have a lengthy article, research paper, or any other text document that you want to summarize quickly, this app can assist you.</h2>
</div>


## ✨Features

- **Text Summarization**: Paste any text into the text area and get a concise summary.
- **Default Text**: Use the default text button to add dummy text for testing.
- **Responsive Design**: The app is responsive and works well on various devices.
- **Loading State**: The submit button shows a loading spinner while the text is being summarized.

## 💻Technology Stack



### **API:** Google Gemini 2.5 Flash model for text summarization


## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- Google Gemini API key

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/vansh-codes/AI-Text-Summarizer-App.git
   ```
2. Create a `.env` file in the root directory and add your Google Gemini API key:
   ```bash
   GEMINI_API_KEY=your_gemini_api_key
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the application:
   ```bash
   npm start
   ```
5. Open `localhost:3000` in your web browser to start using the application.


## Usage

1. Open the application in your browser.
2. Paste your text into the "Paste in some text to summarize" text area. Ensure that the text length is between 200 and 100,000 characters.
3. Click the "Summarize" button to get a concise summary of the text.
4. Optionally, click the "Add Default Text" button to insert dummy text into the text area for testing purposes.
   
```bash
.
├── public
│   └── index.html        # HTML for the app
│   └── stylesheet.css    # CSS styles for the app
│   └── script.js         # script for the app
│── index.js         
│── summarize.js         
├── .env                  # Environment variables (not committed to version control)
├── .gitignore            # Files and directories to ignore in git
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

### **API Integration**
The app uses the Google Gemini 2.5 Flash model for text summarization. The API call is made using the `@google/generative-ai` library in the `summarize.js` file. Ensure that your Google Gemini API key is set correctly in the `.env` file.




## 🔗Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vanshchaurasiya24)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://www.twitter.com/vanshchaurasiy4) <p align="right"><a href="#top">BACK TO TOP</a></p>
