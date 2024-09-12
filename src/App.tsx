import { useState } from "react";

import "./App.css";

const randomSentences = [
  "The quick brown fox jumps over the lazy dog",
  "The five boxing wizards jump quickly",
  "How vexingly quick daft zebras jump",
  "Jackdaws love my big sphinx of quartz, my humps and my topaz",
  "Pack my box with five dozen liquor jugs",
];

function App() {
  const [searchWord, setSearchWord] = useState("");

  const handleHighlightWord = (fullSentence: string, searchWord: string) => {
    if (searchWord.trim() === "") return fullSentence;
    const searchWordIndex = fullSentence
      .toLowerCase()
      .indexOf(searchWord.toLowerCase());

    if (searchWordIndex === -1) return fullSentence;

    const firstHalf = fullSentence.slice(0, searchWordIndex);
    const secondHalf = fullSentence.slice(searchWordIndex + searchWord.length);
    return (
      <>
        {firstHalf.length * 16 > 250 ? "..." + firstHalf.slice(-10) : firstHalf}
        <span
          style={{
            backgroundColor: "yellow",
            color: "black",
            fontWeight: 600,
          }}
        >
          {fullSentence.slice(
            searchWordIndex,
            searchWordIndex + searchWord.length
          )}
        </span>
        {secondHalf}
      </>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Highlight the search word</h1>
      <input
        type="text"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
      />
      <div
        style={{
          maxWidth: 250,
        }}
      >
        {randomSentences.map((sentence, index) => (
          <p
            key={index}
            style={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
              fontSize: 16,
            }}
          >
            {handleHighlightWord(sentence, searchWord)}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
