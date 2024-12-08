import { useState } from "react";
import { Previwer } from "../previewer/previwer";

export const Editor: React.FC = () => {
  const [show, setShow] = useState<boolean>(true);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      { (
        <div className= {show ? `bloc` :`soc`}>
          <div className="head">
            <h5>Editor</h5>
            <button className="button" onClick= {() => handleClick()}>
              big
            </button>
          </div>
          <div className="content">content papapapapapa</div>
        </div>
      )}
      <div>
      <Previwer show={show} />
      </div>
    </div>
  );
};
