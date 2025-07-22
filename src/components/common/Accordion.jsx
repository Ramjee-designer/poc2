import React, { useState } from "react";
import data from "../../data.json"; 
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const accordionData = Object.values(data.accordionData); 

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      {accordionData.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            className="accordion-title"
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {openIndex === index && (
            <div className="accordion-content">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
