import { useState } from "react";
import "./styles.css";

// var likeCounter = 0;
const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "🤣": "Rolling on the floor laughing",
  "😁": "Beaming face with smiling eyes",
  "😅": "Grinning face with sweat",
  "😍": "Smiling face with heart eyes",
  "😎": "Smiling face with sunglasses",
  "😂": "Face with tears of joy",
  "😊": "Smiling face with smiling eyes",
  "😒": "Unamused face",
  "👌": "OK Hand",
  "😘": "Face blowing a kiss",
  "🎉": "Part popper",
  "👍": "Thumbs up",
  "🙌": "Raising Hands",
  "✌": "Victory Hand",
  "😋": "Face savouring food",
  "🥰": "Smiling face with hearts",
  "😴": "Sleeping face",
  "😭": "Loudly crying face",
  "🥱": "Yawning face",
  "🤭": "Face with hand over mouth",
  "🥳": "Partying face",
  "😇": "Smiling face with halo",
  "🤧": "Sneezing face",
  "🤞": "Crossed fingers",
  "👋": "Weaving hand",
  "🤝": "Handshake",
  "🙏": "Folded hands",
  "✨": "Sparkles",
  "🔥": "Fire",
  "❄": "Snowflake",
  "❤": "Red Heart",
  "💖": "Sparkling Heart"
  /** add some more to show how the app now expands when there's new data */
};
const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  var [meaning, setMeaning] = useState("");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>Emoji interpreter</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji"}
        style={{
          padding: "1rem",
          minWidth: "80%"
        }}
      />
      <h2> {emoji} </h2> {/** Concept 1: JSX */}
      <h3> {meaning} </h3> {/** how much part is re-rendered. */}
      <div className="emojis">
        {
          
          emojis.map((emoji) => (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{
                fontSize: "2rem",
                padding: "0.5rem",
                cursor: "pointer",
                width: "80%"
              }}
            >
              {" "}
              {emoji}{" "}
            </span>
          ))
        }
      </div>
    </div>
  );
}
