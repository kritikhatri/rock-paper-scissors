import { useState } from "react";

export default function App() {
  const [userMove, setUserMove] = useState("");
  const [computerMove, setComputerMove] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState({ user: 0, computer: 0 });

  const moves = ["Rock", "Paper", "Scissor"];

  // Emoji mapping
  const emojiMap = {
    Rock: "🪨",
    Paper: "📄",
    Scissor: "✂️",
  };

  const handleClick = (move) => {
    setUserMove(move);
    console.log(move);

    const randomIndex = Math.floor(Math.random() * moves.length);
    const compMove = moves[randomIndex];
    setComputerMove(compMove);

    let gameResult = "";

    if (move === compMove) {
      gameResult = "Draw";
    } else if (
      (move === "Rock" && compMove === "Scissor") ||
      (move === "Paper" && compMove === "Rock") ||
      (move === "Scissor" && compMove === "Paper")
    ) {
      gameResult = "You Win 🎉";
      setScore((prev) => ({ ...prev, user: prev.user + 1 }));
    } else {
      gameResult = "Computer Wins 🤖";
      setScore((prev) => ({ ...prev, computer: prev.computer + 1 }));
    }

    setResult(gameResult);
  };

  return (
    <div>
      <h1>Computer vs You</h1>

      <button onClick={() => handleClick("Rock")}>🪨</button>
      <button onClick={() => handleClick("Paper")}>📄</button>
      <button onClick={() => handleClick("Scissor")}>✂️</button>

      <h2>Your Move: {emojiMap[userMove]}</h2>
      <h2>Computer Move: {emojiMap[computerMove]}</h2>

      <h2>{result}</h2>

      <h3>
        Score → You: {score.user} | Computer: {score.computer}
      </h3>
    </div>
  );
}
