import { TbWorld } from "react-icons/tb";
import { FaCcVisa, FaCar } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { IoAirplaneSharp } from "react-icons/io5";
import { MdLocalOffer } from "react-icons/md";
import "../styles/icons.css";

const iconData = [
  { icon: <TbWorld className="icon" />, text: "Worldwide Hotel" },
  { icon: <FaCcVisa className="icon" />, text: "Visa processing" },
  { icon: <FaCar className="icon" />, text: "Car rentals" },
  { icon: <BiSupport className="icon" />, text: "Support 24/7" },
  { icon: <IoAirplaneSharp className="icon" />, text: "Air ticketing" },
  { icon: <MdLocalOffer className="icon" />, text: "Best price & offer" },
];

export default function Icons() {
  return (
    <div className="container">
      {iconData.map((item, index) => (
        <div key={index} className="card">
          <div>{item.icon}</div>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
