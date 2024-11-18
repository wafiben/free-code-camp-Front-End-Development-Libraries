import { useState } from "react";

type Quotion = {
  id: number;
  quote: string;
  author: string;
  textColor: string;
};

type Props = {
  quotions: Quotion[];
  setBackgroundColorOfBox: (color: string) => void;
};

interface Quote {
  quote: string;
  author: string;
}

export const Quotation: React.FC<Props> = ({
  quotions,
  setBackgroundColorOfBox,
}) => {
  const [count, setCount] = useState(0);
  const [{ quote, author }, setElement] = useState<Quote>({
    quote: quotions[0].quote,
    author: quotions[0].author,
  });

  const [color, setColor] = useState(quotions[0].textColor);

  const handleClick = () => {
    const nextCount = count + 1;
    setCount(nextCount);

    if (quotions[nextCount]) {
      let color = quotions[nextCount].textColor;

      setElement({
        quote: quotions[nextCount].quote,
        author: quotions[nextCount].author,
      });
      setColor(color);
      setBackgroundColorOfBox(color);
    } else {
      setElement({ quote: quotions[0].quote, author: quotions[0].author });
      setCount(0);
      setColor(quotions[0].textColor);
      setBackgroundColorOfBox(quotions[0].textColor);
    }
  };

  return (
    <>
      <div
        style={{
          color: color,
          width:"400px"
        }}
      >
        <div>
          <div>
            {quote}
            <p>-{author}</p>
          </div>
          <div>
            <button
              style={{ backgroundColor: color, color: "white", border: "none" }}
              onClick={handleClick}
            >
              New quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
