import { motion } from 'framer-motion';
import { useState } from 'react';

export default function RoastDisplay({ roast, badges, onReset }) {
  const [copied, setCopied] = useState(false);
  
  const shareText = "just got my résumé absolutely destroyed by AI 😛 no survivors";
  const shareUrl = "https://roast-my-resume.vercel.app";
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(roast);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl mx-auto"
    >
      {/* Main roast card */}
      <div className="glass-effect rounded-3xl border border-white/10 p-6 md:p-10 mb-6 relative overflow-hidden">
        {/* Decorative gradient */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-500/20 to-purple-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/20 to-pink-500/20 blur-3xl rounded-full" />
        
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                className="text-6xl"
              >
                😛
              </motion.div>
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-1">
                  you got cooked
                </h2>
                <p className="text-gray-500 text-sm">no survivors fr</p>
              </div>
            </div>
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-gray-400 hover:text-white transition-all text-sm font-medium"
            >
              {copied ? '✓ copied' : 'copy'}
            </button>
          </div>

          {/* Roast content */}
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-6 border border-white/5">
            <p className="text-white text-base md:text-lg leading-relaxed whitespace-pre-wrap font-medium">
              {roast}
            </p>
          </div>

          {/* Badges */}
          {badges && badges.length > 0 && (
            <div className="mb-8">
              <p className="text-gray-500 text-sm font-semibold mb-3 uppercase tracking-wider">
                achievements unlocked
              </p>
              <div className="flex flex-wrap gap-3">
                {badges.map((badge, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: idx * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity" />
                    <span className="relative block px-5 py-2.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-xl text-sm border border-white/20">
                      {badge}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <motion.button
              onClick={onReset}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl transition-all"
            >
              🔄 roast another
            </motion.button>
            <motion.a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-xl transition-all text-center border border-blue-400/20"
            >
              share on 𝕏
            </motion.a>
            <motion.a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl transition-all text-center border border-blue-500/20"
            >
              post on linkedin
            </motion.a>
          </div>
        </div>
      </div>

      {/* Fun stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-3 gap-4 text-center"
      >
        <div className="glass-effect rounded-2xl p-4 border border-white/10">
          <div className="text-2xl font-black text-white mb-1">😛</div>
          <p className="text-xs text-gray-500 font-medium">emotional damage</p>
        </div>
        <div className="glass-effect rounded-2xl p-4 border border-white/10">
          <div className="text-2xl font-black text-white mb-1">🔥</div>
          <p className="text-xs text-gray-500 font-medium">heat level: max</p>
        </div>
        <div className="glass-effect rounded-2xl p-4 border border-white/10">
          <div className="text-2xl font-black text-white mb-1">😭</div>
          <p className="text-xs text-gray-500 font-medium">recovery time: 3-5 days</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
