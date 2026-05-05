import { useEffect, useState } from 'react';

const AnimatedText = ({ words, delay = 150, pauseTime = 1500, eraseDelay = 100, cursor = true }) => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timer;
    const i = loopNum % words.length;
    const fullText = words[i];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      }, eraseDelay);
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }, delay);
    }

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, words, delay, pauseTime, eraseDelay]);

  return (
    <span>
      <span>{currentText}</span>
      {cursor && <span className="inline-block ml-1 animate-pulse">|</span>}
    </span>
  );
};

export default AnimatedText;
