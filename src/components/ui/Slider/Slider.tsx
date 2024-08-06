import { FC, ReactNode, useEffect, useState } from "react";

interface ISliderProps {
  children: ReactNode[];
}

const Slider: FC<ISliderProps> = ({ children }) => {
  let [currentSlide, setCurrentSlide] = useState(0);

  const prev = () => {
    currentSlide === 0
      ? setCurrentSlide(children.length - 1)
      : setCurrentSlide(currentSlide - 1);
  };

  const next = () => {
      setCurrentSlide((currentSlide) => currentSlide === children.length - 1  ? 0 : ++currentSlide);
  };
  console.log(currentSlide)

  useEffect(() => {
    const autoplay = setInterval(next, 3000);
    return () => clearInterval(autoplay)
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {children}
      </div>
      <button onClick={() => next()}>next</button>
    </div>
  );
};
export default Slider;
