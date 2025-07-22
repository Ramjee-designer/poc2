import { useState } from "react";
import data from "../data.json";

export default function Tabs({producttab}) {
  // const producttab = Object.values(data.producttab);
  const [activeTab, setActiveTab] = useState(0);
  const tabData = producttab[activeTab];
  return (
    <div className="container">
      <div className="tab-container">
        {/* Tab headers */}
        <div className="product-tab">
          {producttab.map((tab, index) => (
            <button
              key={index}
              className={`tab-title ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="tab-content">
          {tabData.subtitle && (
            <h4 className="shipping-title">{tabData.subtitle}</h4>
          )}
          {tabData.paragraph1 && <p>{tabData.paragraph1}</p>}

          {tabData.listpoint && (
            <ul className="tab-list">
              {Object.values(tabData.listpoint).map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}
          <p dangerouslySetInnerHTML={{__html:tabData.content}}></p>
        </div>
      </div>
    </div>
  );
}
