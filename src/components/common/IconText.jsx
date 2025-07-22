import WordWide from "../../assets/icons/WordWide";
import Returns from "../../assets/icons/ReturnIcon";
import Warranty from "../../assets/icons/WarrantyIcon";
import Checkout from "../../assets/icons/SecureCheckout";
import data from "../../data.json";

const Icons = { WordWide, Returns, Warranty, Checkout };
const iconTextItems = Object.values(data.IconTextContent);

export default function IconText() {
  return (
    <div className="container">
      <ul className="icon-text-con">
        {iconTextItems.map((item, index) => {
          const IconComponent = Icons[item.icon];
          return (
            <li key={index}>
              <IconComponent />
              <p className="icon-title">{item.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
