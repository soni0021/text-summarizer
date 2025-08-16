const textArea = document.getElementById("text_to_summarize");
const charCount = document.getElementById('char-count');
const submitButton = document.getElementById("submit-button");
const defaultTextBtn = document.getElementById("default-text-btn");
const summarizedTextArea = document.getElementById("summary");
const copyBtn = document.getElementById("copyButton");

submitButton.disabled = true;

// Sample text for testing
const sampleText = `Artificial Intelligence (AI) has emerged as one of the most transformative technologies of the 21st century, revolutionizing industries and reshaping how we live and work. From virtual assistants like Siri and Alexa to advanced machine learning algorithms that power recommendation systems, AI is becoming increasingly integrated into our daily lives.

The field of AI encompasses various subfields, including machine learning, natural language processing, computer vision, and robotics. Machine learning, in particular, has seen remarkable advancements with the development of deep learning neural networks that can process vast amounts of data and identify complex patterns.

In healthcare, AI is being used to diagnose diseases, predict patient outcomes, and develop personalized treatment plans. Medical imaging systems powered by AI can detect early signs of cancer and other conditions with remarkable accuracy, often outperforming human radiologists.

The business world has also embraced AI for process automation, customer service, and data analysis. Companies are using AI-powered chatbots to handle customer inquiries, predictive analytics to forecast market trends, and intelligent automation to streamline operations.

However, the rapid advancement of AI also raises important ethical considerations. Issues such as algorithmic bias, privacy concerns, and the potential impact on employment need to be carefully addressed. As AI systems become more sophisticated, ensuring they are developed and deployed responsibly becomes increasingly crucial.

The future of AI holds immense promise, with potential applications ranging from autonomous vehicles and smart cities to advanced scientific research and space exploration. As we continue to push the boundaries of what's possible, it's essential to balance innovation with ethical considerations and ensure that AI benefits all of humanity.`;

textArea.addEventListener('input', function() {
  charCount.textContent = `${textArea.value.length}/100,000 characters`;
});

textArea.addEventListener("input", verifyTextLength);
submitButton.addEventListener("click", submitData);
defaultTextBtn.addEventListener("click", addDefaultText);

function verifyTextLength(e) {
  const textarea = e.target;

  if (textarea.value.length > 200 && textarea.value.length < 100000) {
    submitButton.disabled = false;
    submitButton.style.opacity = "1";
  } else {
    submitButton.disabled = true;
    submitButton.style.opacity = "0.6";
  }
}

function addDefaultText() {
  textArea.value = sampleText;
  charCount.textContent = `${textArea.value.length}/100,000 characters`;
  verifyTextLength({ target: textArea });
  
  // Add a subtle animation effect
  textArea.style.transform = "scale(1.02)";
  setTimeout(() => {
    textArea.style.transform = "scale(1)";
  }, 200);
}

copyBtn.addEventListener("click", function () {
  copyToClipboard(summarizedTextArea.value);
  console.log("TEXT: ",summarizedTextArea.value);
});

function submitData(e) {
  console.log("Submitted\n");

  submitButton.classList.add("submit-button--loading");

  const text_to_summarize = textArea.value;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "text_to_summarize": text_to_summarize
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch('/api/summarize', requestOptions)
    .then(response => response.text())
    .then(summary => {
      summarizedTextArea.value = summary;
      submitButton.classList.remove("submit-button--loading");
      copyBtn.style.display = "inline-block";
      
      // Add success animation
      summarizedTextArea.style.transform = "scale(1.02)";
      setTimeout(() => {
        summarizedTextArea.style.transform = "scale(1)";
      }, 200);
    })
    .catch(error => {
      console.log(error.message);
      submitButton.classList.remove("submit-button--loading");
      
      // Show error message
      summarizedTextArea.value = "Sorry, there was an error generating the summary. Please try again.";
      summarizedTextArea.style.color = "#e74c3c";
      setTimeout(() => {
        summarizedTextArea.style.color = "#333";
      }, 3000);
    });
}

function copyToClipboard(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  
  // Show success message
  const originalText = copyBtn.innerHTML;
  copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
  copyBtn.style.background = 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)';
  
  setTimeout(() => {
    copyBtn.innerHTML = originalText;
    copyBtn.style.background = 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)';
  }, 2000);
}