import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingAnimation = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const languages = [
    { name: 'Telugu', text: 'కార్తికేయ' },
    { name: 'Hindi', text: 'कार्तिकेय' },
    { name: 'Tamil', text: 'கார்த்திகேய' },
    { name: 'Japanese', text: 'カルティケーヤ' },
    { name: 'Chinese', text: '卡尔蒂凯亚' },
    { name: 'Marathi', text: 'कार्तिकेय' },
    { name: 'Kannada', text: 'ಕಾರ್ತಿಕೇಯ' },
    { name: 'Assamese', text: 'কাৰ্তিকেয়' },
    { name: 'Malayalam', text: 'കാർത്തികേയ' },
    { name: 'Russian', text: 'Картикея' },
    { name: 'English', text: 'KARTHIKEYA' },
  ];

  useEffect(() => {
    if (currentIndex < languages.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 350);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setIsComplete(true);
        setTimeout(() => {
          onComplete();
        }, 200);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: isComplete ? '-100%' : 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.15 }}
              className="text-center"
            >
              <motion.h1
                className="text-white text-6xl sm:text-8xl font-bold"
                style={{ fontFamily: currentIndex < 6 ? 'serif' : 'sans-serif' }}
              >
                {languages[currentIndex].text}
              </motion.h1>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation;

