import React, { useRef, useState } from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MajorSection(props) {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion__icon");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : '2000px'
        );
        setRotateState(
            setActive === "active" ? "transition duration-200 ease-in-out" : "transition duration-200 ease-in-out transform -rotate-90"
        );
    }

    return (
        <div className="flex flex-col">
            <button className={ `cursor-pointer py-1 flex items-center focus:outline-none border-none ${ setActive }` } onClick={ toggleAccordion }>
                <div className="font-semibold flex-1 text-left text-2xl text-gray-300">{ props.title }</div>
                <div className="hidden sm:inline mr-2 text-gray-400 text-sm">{ props.subtitle }</div>
                <FontAwesomeIcon icon={ faChevronLeft } className={ `${ setRotate } ` + ' text-sm text-gray-400 mr-1' }/>
            </button>
            <div
                ref={ content }
                style={ { maxHeight: `${ setHeight }`, transition: "max-height 500ms ease" } }
                className="overflow-auto"
            >
                <div className="pb-3 text-gray-400 text-sm">
                    { props.children }
                </div>
            </div>
        </div>
    );
}

export default MajorSection;
