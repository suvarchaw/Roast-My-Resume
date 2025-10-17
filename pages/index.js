import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import UploadZone from '../components/UploadZone';
import RoastDisplay from '../components/RoastDisplay';

export default function Home() {
  const [step, setStep] = useState('upload'); // 'upload', 'loading', 'result'
  const [resumeText, setResumeText] = useState('');
  const [roastStyle, setRoastStyle] = useState('Unhinged HR 💀');
  const [roastResult, setRoastResult] = useState(null);

  const roastStyles = [
    'Unhinged HR 💀',
    'LinkedIn Bro 🤡',
    'Bestie Mode 💅',
    'Chaos Recruiter 🔥'
  ];

  const handleTextExtracted = (text) => {
    setResumeText(text);
  };

  const handleRoast = async () => {
    if (!resumeText.trim()) {
      alert('Please upload or paste your résumé first!');
      return;
    }

    setStep('loading');

    try {
      const response = await fetch('/api/roast', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resumeText, roastStyle }),
      });

      const data = await response.json();
      
      if (data.error) {
        alert('Failed to generate roast: ' + data.error);
        setStep('upload');
        return;
      }

      setRoastResult(data);
      setStep('result');
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again!');
      setStep('upload');
    }
  };

  const handleReset = () => {
    setStep('upload');
    setResumeText('');
    setRoastResult(null);
  };

  return (
    <>
      <Head>
        <title>Roast My Résumé 😛</title>
        <meta name="description" content="Get your résumé absolutely destroyed by AI" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>😛</text></svg>" />
      </Head>

      {/* Animated background */}
      <div className="fixed inset-0 gradient-bg opacity-20 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,110,0.1),transparent_50%)] pointer-events-none" />

      <div className="relative min-h-screen py-8 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.div
              className="inline-block mb-6"
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
            >
              <span className="text-8xl md:text-9xl fire-animation inline-block">😛</span>
            </motion.div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-4 tracking-tight">
              roast my résumé
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-pink-500" />
              <p className="text-lg md:text-xl text-gray-400 font-medium">
                get absolutely destroyed by AI
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500" />
            </div>

          </motion.div>

          {/* Upload Step */}
          <AnimatePresence mode="wait">
            {step === 'upload' && (
              <motion.div
                key="upload"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <UploadZone onTextExtracted={handleTextExtracted} />

                {resumeText && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-2xl mx-auto space-y-6"
                  >
                    <div className="glass-effect rounded-3xl p-6 scan-line">
                      <label className="block text-white font-bold mb-4 text-lg">
                        pick your roaster
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {roastStyles.map((style) => (
                          <button
                            key={style}
                            onClick={() => setRoastStyle(style)}
                            className={`px-4 py-3 rounded-xl font-semibold transition-all ${
                              roastStyle === style
                                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white neon-glow'
                                : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                            }`}
                          >
                            {style}
                          </button>
                        ))}
                      </div>
                    </div>

                    <motion.button
                      onClick={handleRoast}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-8 py-5 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 text-white text-xl font-black rounded-2xl neon-glow relative overflow-hidden group"
                    >
                      <span className="relative z-10">destroy my résumé 😛</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* Loading Step */}
            {step === 'loading' && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                    scale: { duration: 1, repeat: Infinity }
                  }}
                  className="text-9xl mb-8 inline-block"
                >
                  😛
                </motion.div>
                <motion.h2 
                  className="text-3xl md:text-4xl font-black text-white mb-4"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {roastStyle.split(' ')[0]} is cooking...
                </motion.h2>
                <div className="flex items-center justify-center gap-2 text-gray-400">
                  <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}>.</motion.span>
                  <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}>.</motion.span>
                  <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}>.</motion.span>
                </div>
                <p className="text-gray-500 mt-4">this bout to be devastating fr</p>
              </motion.div>
            )}

            {/* Result Step */}
            {step === 'result' && roastResult && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <RoastDisplay
                  roast={roastResult.roast}
                  badges={roastResult.badges}
                  onReset={handleReset}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 text-gray-600 text-sm"
        >
          <p>all roasts are jokes (mostly)</p>
        </motion.footer>
      </div>
    </>
  );
}
