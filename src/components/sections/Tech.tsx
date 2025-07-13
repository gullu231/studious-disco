import { BallCanvas } from "../canvas";
import { useAccentColor } from "../../utils/useAccentColor";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";


import React from "react";

const shuffleArray = (array: any[]) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const Tech = () => {
  const accent = useAccentColor();
  const [shuffled, setShuffled] = React.useState(technologies);

  const handleShuffle = () => {
    setShuffled(shuffleArray(shuffled));
  };

  return (
    <>
      <div className="flex justify-center mb-6">
        <button
          className="px-4 py-2 rounded-lg font-bold border-2"
          style={{ borderColor: accent, color: accent }}
          onClick={handleShuffle}
        >
          Shuffle
        </button>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {shuffled.map((technology) => (
          <div className="h-28 w-28" key={technology.name}>
            <BallCanvas icon={technology.icon} accent={accent} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
