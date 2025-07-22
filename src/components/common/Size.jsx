import React, { useState } from "react";

const SizeSelector = () => {
  const sizes = ["S", "M", "L"];
  const [selectedSize, setSelectedSize] = useState("S");

  return (
    <div className="color-con">
      <div className="size-text">Size : </div>
      <div className="box-h">
        {sizes.map((size) => (
          <label key={size} className="size-box">
            <input
              type="radio"
              name="radio"
              value={size}
              checked={selectedSize === size}
              onChange={() => setSelectedSize(size)}
            />
            <span className="checkmark"></span>
            <p className="size-t">{size}</p>
          </label>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
