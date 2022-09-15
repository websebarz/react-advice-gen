import { useEffect, useState } from "react";

function Window() {
  interface Advice {
    slip: {
      id: number;
      advice: string;
    };
  }

  const [adviceEl, setAdviceEl] = useState<Advice>({
    slip: {
      id: 0,
      advice: "",
    },
  });
  const [clicked, setClicked] = useState(false);

  const toggleEl = () => {
    setClicked((prevState) => !prevState);
  };

  useEffect(() => {
    const getData = () => {
      fetch("https://api.adviceslip.com/advice")
        .then((res) => res.json())
        .then((data) => setAdviceEl(data));
    };

    getData();
  }, [clicked]);
  // console.log(adviceEl);

  return (
    <div className="container--el">
      <h2 className="advice-title--el">ADVICE #{adviceEl.slip.id}</h2>
      <p className="advice--el">{adviceEl.slip.advice}</p>
      <div className="underline--el">
        <hr className="line--el" />
        <span className="under--el"></span>
        <span className="under--el"></span>
        <hr className="line--el" />
      </div>
      <span className="dice--el" onClick={toggleEl}>
        <span>
          <i className="drop--el">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                fill="#202733"
              />
            </svg>
          </i>
        </span>
      </span>
    </div>
  );
}

export default Window;
