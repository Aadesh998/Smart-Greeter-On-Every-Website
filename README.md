# 🌟 AI Greeter - Chrome Extension

**AI Greeter** is a lightweight Chrome extension that brings some good vibes every time you open a new tab or visit a new site. It greets you based on the time of day, your name, and the site you’re visiting — sometimes even offering motivational nudges on platforms like LeetCode!

## 🚀 Features

- 🤖 Smart greetings powered by Groq's LLaMA3 model  
- 🕒 Time-based dynamic messages (morning, afternoon, evening)  
- 🌐 Website-aware — changes greeting depending on what site you’re on  
- 💬 Custom messages on LeetCode, WhatsApp, Zomato, and more  
- ✨ Auto-disappears after 20 seconds to stay out of your way

## 🛠️ How It Works

The extension injects a small script into every page you visit. It checks:
- The time of day
- The website’s URL
- The page path (for special treatment like LeetCode problem pages)

Then, it sends a prompt to Groq’s LLaMA3 model to generate a friendly message just for you!

## 📁 File Structure

```text
ai-greeter/
│
├── content.js       # Injected script that fetches greeting & displays it
├── style.css        # Styles for the floating message box
├── icon.png         # Extension icon (16x16)
├── manifest.json    # Chrome extension config
└── README.md        # This file
```
## 🔒 Note on API Key

This project uses Groq's API with a hardcoded key in `content.js`.  
⚠️ **For security, never expose your real API key in public repositories!**

Instead:

- Use environment variables  
- Load the key securely from background scripts  
- Or mock the API for public demos  

## 🙌 Example Greetings

- **On LeetCode problem page:**  
  *“Hey Aadesh! This one looks like a great dynamic programming practice — go crush it!”*

- **On Zomato:**  
  *“Hey boss! Midnight cravings? What’s cookin’ today?”*

- **On WhatsApp Web:**  
  *“Back to catching up, Aadesh? Hope those chats bring a smile 😄”*


## 🧠 Powered By

- [Groq API](https://groq.com/)  
- LLaMA3 (via `llama3-8b-8192` model)  
- JavaScript (Vanilla)  
- Chrome Extensions (Manifest v1)
