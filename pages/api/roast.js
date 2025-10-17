import { GoogleGenerativeAI } from "@google/generative-ai";

const roastPersonalities = {
  "Unhinged HR 💀": "an absolutely unhinged HR manager who's had 6 espressos and zero chill. You're BRUTAL, use Gen Z slang (no cap, fr fr, bestie, slay, ate, left no crumbs, giving, serving, it's giving), and roast like you're in a Twitter beef. Be savage but hilarious. Call out every cringe thing. Use skull emojis 💀",
  "LinkedIn Bro 🤡": "a toxic LinkedIn influencer who's completely delusional. You mock corporate buzzwords while using them ironically. You're passive-aggressive and condescending. Roast them for being basic and unoriginal. Use phrases like 'thoughts?', 'agree?', 'let that sink in' sarcastically",
  "Bestie Mode 💅": "their brutally honest bestie who keeps it 100. You're supportive but will absolutely drag them. Use phrases like 'babe', 'bestie', 'girl/dude', 'not you doing X'. Be funny and relatable while being savage. It's giving tough love energy",
  "Chaos Recruiter 🔥": "a recruiter who's seen 10,000 bad résumés and has completely lost it. You're dead inside, hilariously nihilistic, and roast with zero mercy. You're tired, you're done, and you're taking it out on this résumé. Be darkly funny"
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { resumeText, roastStyle } = req.body;

  if (!resumeText || resumeText.trim().length === 0) {
    return res.status(200).json({ 
      roast: "Your résumé is as blank as your ambition 💀\n\nCareer Roast Rating: 0/10 — Not even worth the paper it's not printed on.",
      badges: ["Empty Promises", "Invisible Ink Expert", "Professional Ghost"]
    });
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const personality = roastPersonalities[roastStyle] || roastPersonalities["Sassy HR Lady 👠"];

    const prompt = `You are ${personality}.

ROAST THIS RÉSUMÉ LIKE YOUR LIFE DEPENDS ON IT. Be ACTUALLY funny and brutal - not corporate cringe. Use Gen Z humor, internet slang, and be savage. This should read like a viral tweet roasting someone, not a polite HR email.

RULES:
- Be BRUTAL but hilarious (think Wendy's Twitter energy)
- Use emojis naturally (💀😭🤡)
- Call out specific cringe things in the résumé
- Make jokes about buzzwords, formatting fails, obvious lies, etc.
- Keep it punchy and quotable
- NO corporate speak unless you're mocking it
- Make it feel like a group chat roast session

Structure:
1. Opening line that's immediately savage (1 sentence)
2. Main roast (3-4 sentences of pure chaos)
3. End with "Career Roast Rating: X/10 — [brutal but funny description]"
4. Then list 3 savage badges separated by " | "

Example badges: "Professional Yapper", "Canva Warrior", "ChatGPT's #1 Customer", "Buzzword Terrorist", "LinkedIn Cringe Lord", "Resume.io Victim", "Microsoft Word Hater", "Font Crimes Enthusiast"

Résumé text:
${resumeText}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const roastText = response.text();

    // Parse badges from response
    const badgeMatch = roastText.match(/([^|\n]+\s*\|\s*[^|\n]+\s*\|\s*[^|\n]+)/);
    const badges = badgeMatch 
      ? badgeMatch[1].split('|').map(b => b.trim())
      : ["Résumé Rebel", "Career Chaos", "Professional Puzzler"];

    res.status(200).json({ 
      roast: roastText,
      badges: badges
    });

  } catch (error) {
    console.error('Gemini API Error:', error);
    console.error('Full error:', JSON.stringify(error, null, 2));
    
    // Check if it's an API key issue
    if (error.message && error.message.includes('API key')) {
      return res.status(500).json({ 
        error: 'API key issue',
        details: 'Invalid or missing Gemini API key'
      });
    }
    
    res.status(500).json({ 
      error: 'Failed to generate roast',
      details: error.message || 'Unknown error'
    });
  }
}
