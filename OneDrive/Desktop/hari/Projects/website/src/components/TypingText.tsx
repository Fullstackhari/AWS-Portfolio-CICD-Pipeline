import { useEffect, useState } from "react";

interface Props {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

const TypingText = ({ phrases, typingSpeed = 80, deletingSpeed = 40, pauseTime = 1500 }: Props) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pauseTime);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timeout = setTimeout(() => {
        setText((t) =>
          deleting ? current.substring(0, t.length - 1) : current.substring(0, t.length + 1)
        );
      }, deleting ? deletingSpeed : typingSpeed);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, phrases, typingSpeed, deletingSpeed, pauseTime]);

  return <span className="cursor-blink gradient-text">{text}</span>;
};

export default TypingText;
