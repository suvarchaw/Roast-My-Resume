# 🧠 Roast My Résumé

**Roast My Résumé** is a hilarious AI-powered web app that absolutely *destroys* your résumé — in style.  
Upload your résumé, pick a roast personality, and let AI unleash chaos. Powered by **Google Gemini 2.0 Flash**.

[🌐 Live Demo](https://roastmyresume1.netlify.app/)

<img width="1470" height="956" alt="Screenshot 2025-10-17 at 6 05 21 PM" src="https://github.com/user-attachments/assets/6c581df3-6da7-4cf5-82b9-721843d31fb8" />
<img width="1470" height="956" alt="Screenshot 2025-10-17 at 6 05 49 PM" src="https://github.com/user-attachments/assets/71870fbe-7ff2-4228-a1d6-a7d32cc166ab" />
<img width="1470" height="956" alt="Screenshot 2025-10-17 at 6 06 02 PM" src="https://github.com/user-attachments/assets/9e79a658-9958-4546-ad81-28222ec6110d" />
<img width="1470" height="956" alt="Screenshot 2025-10-17 at 6 06 27 PM" src="https://github.com/user-attachments/assets/836f7309-8aca-4f23-a37f-2af11bf895b6" />


---

## 🚀 Features

- 📄 Upload or paste your résumé (PDF, DOCX, or plain text)
- 🤖 Choose your roast personality:
  - **Unhinged HR** – caffeine, sarcasm, and chaos  
  - **LinkedIn Bro** – motivational yet painfully cringe  
  - **Bestie Mode** – your brutally honest best friend  
  - **Chaos Recruiter** – dark corporate humor at its peak  
- 💬 AI-Generated savage reviews with humor and feedback  
- 🌈 Sleek dark UI with **glass morphism** and **neon glow**
- 🎭 Share your roast on social media or copy the text
- ⚡ Fast, responsive, and mobile-friendly

---

## 🧰 Tech Stack

| Layer | Technology |
|:------|:------------|
| **Frontend** | Next.js 14 (React Framework) |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **AI Engine** | Google Gemini 2.0 Flash API |
| **Deployment** | Netlify |
| **Fonts** | Space Grotesk & Inter |

---

## 🛠️ Setup & Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/suvarchaw/Roast-My-Resume.git
   cd Roast-My-Resume
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Create Environment File**
   ```bash
   # In the project root, create a .env.local file and add:
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```

5. **Open in Browser**  
   Go to 👉 [http://localhost:3000](http://localhost:3000)

---

## 🌍 Deployment (Netlify)

1. Push your code to GitHub  
2. Go to **Netlify Dashboard → Add new site → Import from GitHub**  
3. Add environment variable:
   - Key: `GEMINI_API_KEY`
   - Value: your Gemini API key  
4. Deploy 🚀  

---

## 🎨 UI & Design

- Dark theme with glowing effects  
- Subtle glass blur and gradients  
- Smooth entrance animations using **Framer Motion**  
- Fully responsive for mobile and desktop  

---

## ⚙️ How It Works

1. User uploads or pastes their résumé  
2. User selects a roast personality  
3. The résumé + prompt are sent to the **Next.js API route**  
4. API connects to **Gemini 2.0 Flash** model  
5. Gemini returns a roast response → displayed on screen  

---

## ⚠️ Disclaimer

This app is purely for fun and entertainment.  
The AI’s feedback is meant as humor — don’t take it seriously! 😆

---

## 🧑‍💻 Developer

**Developed by:** [Suvarcha Wadhwa](https://github.com/suvarchaw)

---

## 🪪 License

No official license. All rights reserved by the developer.
