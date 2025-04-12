const GROQ_API_KEY = "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";

function getGreetingTime() {
  const hour = new Date().getHours();
  if (hour < 12) return "morning";
  if (hour < 18) return "afternoon";
  return "evening";
}

async function getLLMMessage(userName = "legend") {
  const timeOfDay = getGreetingTime();
  const url = window.location.href;
  const domain = window.location.hostname;
  const path = window.location.pathname;

  let prompt;

  if (domain.includes("leetcode.com")) {
    if (path.startsWith("/problems/")) {
      prompt = `You're on a LeetCode problem page: ${url}. Can you tell the user (named ${userName}) what this problem teaches — like key concepts or problem type? Be short, clear, and encouraging.`;
    } else {
      prompt = `It's the ${timeOfDay}. Greet ${userName} in a cool way — mention they're on LeetCode, and ask if they’re solving problems or just checking their rating.`;
    }
  } else {
    // Generic greeting
    prompt = `It's the ${timeOfDay}. Greet ${userName} in a friendly way, with also tell the information of the website ${url} to the user. In frendily way Example: if user go to the whatsapp then say that hey boss your again on the website, one more if we visit the zomato then say hey boss you are hungrey ording some thing like. Make sure not to repeat the same text all the time`;
  }

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${GROQ_API_KEY}`
    },
    body: JSON.stringify({
      model: "llama3-8b-8192",
      messages: [
        { role: "system", content: "You're a friendly AI that greets users based on time, their name, and the site they're on." },
        { role: "user", content: prompt }
      ],
      temperature: 0.7
    })
  });

  const data = await response.json();
  return data.choices?.[0]?.message?.content || `Good ${timeOfDay}, ${userName}!`;
}

(async () => {
  const userName = "Aadesh Kumar";

  // Create floating div
  const container = document.createElement("div");
  container.id = "ai-greeter";
  container.textContent = "...";
  document.body.appendChild(container);

  // Get message from LLM
  try {
    const message = await getLLMMessage(userName);
    container.textContent = message;
  } catch (err) {
    console.error("Groq failed:", err);
    container.textContent = "Have a great day!";
  }

  // Auto-hide after 15 seconds
  setTimeout(() => {
    container.remove();
  }, 30000);
})();
