import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function DropDown({ name, list }) {
     const [dropDown, setDropDown] = useState(false);
     return (
          <div className="overflow-hidden">
               <button onClick={() => setDropDown(!dropDown)} className="w-full flex flex-wrap justify-between items-center">
                    <span className="py-3 hover:text-white">{name}</span>
                    <span className="h-8 w-8 leading-8 text-sm text-center text-dark-80 bg-white/10 rounded-full hover:bg-white/20"><FontAwesomeIcon icon={faAngleDown} /></span>
               </button>
               <ul className={`w-full ml-4 sl-animation ${dropDown ? 'max-h-[50rem]' : 'max-h-0'}`}>
                    {list && list.map((list, index) => (<li key={index}><a href="" className="block py-3 hover:text-white">{list}</a></li>))}
               </ul>
          </div>)
}