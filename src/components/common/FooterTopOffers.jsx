import WordWide from "../../assets/icons/WordWide";
import data from "../../../src/data.json";



const iconTextItems = Object.values(data.FooterTopOffers);

export default function FooterTopOffers() {

  return (
    <div className="container">
      <ul className="icon-text-con">
        {iconTextItems.map((item, index) => (
          <li key={index}>
            <div className="circle-point">{item.points}</div>
            <h4 className="icon-title">{item.title}</h4>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
