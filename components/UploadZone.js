import { useState } from 'react';
import { motion } from 'framer-motion';

export default function UploadZone({ onTextExtracted }) {
  const [isDragging, setIsDragging] = useState(false);
  const [pastedText, setPastedText] = useState('');

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file) {
      await processFile(file);
    }
  };

  const handleFileInput = async (e) => {
    const file = e.target.files[0];
    if (file) {
      await processFile(file);
    }
  };

  const processFile = async (file) => {
    const fileType = file.name.split('.').pop().toLowerCase();
    
    if (!['txt', 'pdf', 'docx', 'doc'].includes(fileType)) {
      alert('bruh upload a real file (.txt, .pdf, .docx)');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      if (text && text.trim().length > 0) {
        onTextExtracted(text);
      } else {
        alert('file is empty bestie, try pasting text instead');
      }
    };
    reader.onerror = () => {
      alert('error reading file 💀 just paste the text');
    };
    reader.readAsText(file);
  };

  const handlePaste = () => {
    if (pastedText.trim()) {
      onTextExtracted(pastedText);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <motion.div
        className={`relative border-2 border-dashed rounded-3xl p-12 md:p-16 text-center transition-all overflow-hidden ${
          isDragging 
            ? 'border-pink-500 bg-pink-500/10 scale-[1.02]' 
            : 'border-white/20 glass-effect'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        whileHover={{ scale: 1.01 }}
      >
        <motion.div 
          className="text-7xl mb-6 inline-block"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          📄
        </motion.div>
        <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
          drop your résumé
        </h3>
        <p className="text-gray-400 mb-6 text-sm md:text-base">
          .pdf, .docx, or .txt • we'll roast whatever you got
        </p>
        <input
          type="file"
          accept=".pdf,.docx,.txt"
          onChange={handleFileInput}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="inline-block px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-xl cursor-pointer hover:shadow-lg hover:shadow-pink-500/50 transition-all"
        >
          browse files
        </label>
      </motion.div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/10"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-black text-gray-500 font-medium">or paste it</span>
        </div>
      </div>

      <div className="glass-effect rounded-3xl p-6 border border-white/10">
        <textarea
          value={pastedText}
          onChange={(e) => setPastedText(e.target.value)}
          placeholder="paste your résumé text here and prepare for destruction..."
          className="w-full h-48 bg-black/40 text-white placeholder-gray-600 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-pink-500/50 resize-none border border-white/5 font-mono text-sm"
        />
        <button
          onClick={handlePaste}
          disabled={!pastedText.trim()}
          className="mt-4 w-full px-6 py-3 bg-white/10 hover:bg-white/20 disabled:bg-white/5 disabled:text-gray-600 text-white font-bold rounded-xl transition-all border border-white/10"
        >
          {pastedText.trim() ? 'lock in 🔒' : 'paste something first'}
        </button>
      </div>
    </div>
  );
}
