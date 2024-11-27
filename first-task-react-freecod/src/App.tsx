import { SetStateAction, useState } from "react";
import { Quotation } from "./components/ quotation";
import "./App.css";

function App() {
  const quotions = [
    {
      id: 1,
      quote: "There are no traffic jams along the extra mile",
      author: "Roger Staubach",
      textColor: "rgb(155, 89, 182)",
    },
    {
      id: 2,
      quote: `You may be disappointed if you fail, but you are doomed if you don't try`,
      author: "Beverly Sills",
      textColor: "rgb(251, 105, 100)",
    },
    {
      id: 3,
      quote:
        "You take your life in your own hands, and what happens? A terrible thing, no one to blame",
      author: "Erica Jong",
      textColor: "purple",
    },
    {
      id: 4,
      quote: "If the wind will not serve, take to the oars",
      author: "Latin Proverb",
      textColor: "rgb(44, 62, 80)",
    },
  ];

  const [backgroundColor, setBackgroundColorOfBox] = useState(
    quotions[0].textColor
  );

  return (
    <div
      className="App"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <div className="wrapped-bloc">
        <Quotation
          quotions={quotions}
          setBackgroundColorOfBox={(color: string) => setBackgroundColorOfBox(color)}
        />
      </div>
    </div>
  );
}

export default App;
