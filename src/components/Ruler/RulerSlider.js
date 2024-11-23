import React, { useRef, useState } from "react";
import "./RulerSlider.scss"; // Import the SCSS file for styling

const decimalToFraction = (decimal) => {
  const fractionMap = {
    0.125: "1/8",
    0.25: "1/4",
    0.375: "3/8",
    0.5: "1/2",
    0.625: "5/8",
    0.75: "3/4",
    0.875: "7/8",
  };

  return fractionMap[decimal] || decimal.toString();
};

const RangeSlider = ({ min = 1, max = 100, val = 2, n = 5, onChange }) => {
  const inputRef = useRef(null);
  const getSliderPosition = () => {
    if (inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect();
      console.log("Slider position:", rect.left, rect.top);
      console.log("Slider width:", rect.width);
    }
  };
  const generateRangeArray = (start, end, step) => {
    const rangeArray = [];

    for (let i = start; i <= end; i += step) {
      const intPart = Math.floor(i);
      const decimalPart = i % 1;

      const fractionText =
        decimalPart === 0
          ? intPart.toString()
          : `${decimalToFraction(decimalPart)}`;

      rangeArray.push({
        value: i,
        text: fractionText,
      });
    }
    return rangeArray;
  };

  const rangeArray = generateRangeArray(min, max, 0.125);
  const [value, setValue] = useState(val);

  const handleInputChange = (e) => {
    console.log("valyeee", e.target.value);
    setValue(+e.target.value);
    onChange(+e.target.value);
    console.log(getSliderPosition());
  };

  const dynamicBarHeight = (text) => {
    if (text === "1/2") {
      return "medium";
    } else if (!text.includes("/")) {
      return "largest";
    } else if (text === "7/8" || text === "1/8") {
      return "smallest";
    } else if (text === "1/4" || text === "3/4") {
      return "smaller";
    } else {
      return "smallest"; // If no condition matches, return a default value
    }
  };
  console.log("valllll", val);

  return (
    <form
      className="myForm"
      style={{ "--min": min, "--val": value, "--max": max, "--n": n }}
    >
      <input
        id="r"
        type="range"
        min={min}
        value={val}
        max={max}
        step={0.125}
        list="l"
        onInput={handleInputChange}
        ref={inputRef}
      />
      <datalist id="l">
        {rangeArray?.map((item, index) => (
          <option
            className={dynamicBarHeight(item.text)}
            key={index}
            value={item.value}
            style={{ fontSize: "10px" }}
          >
            {item.text}
          </option>
        ))}
      </datalist>
    </form>
  );
};

export default RangeSlider;
