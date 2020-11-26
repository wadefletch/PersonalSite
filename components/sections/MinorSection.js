import React, { useRef, useState } from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MinorSection(props) {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion__icon");
    const [setShow, setShowState] = useState("Show")

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setShowState(setActive === "" ? "Hide" : "Show");
        setHeightState(
            setActive === "active" ? "0px" : `${ content.current.scrollHeight }px`
        );
        setRotateState(
            setActive === "active" ? "transition duration-150 ease-in-out" : "transition duration-150 ease-in-out transform -rotate-90"
        );
    }

    return (
        <div className="flex flex-col">
            <button className={ `cursor-pointer pb-1 flex items-center focus:outline-none border-none ${ setActive }` } onClick={ toggleAccordion }>
                <div className="flex-1 text-left text-sm text-gray-400">{ `${ setShow } ` + props.title }</div>
                <FontAwesomeIcon icon={ faChevronLeft } className={ `${ setRotate } ` + ' text-gray-500 mr-1' }/>
            </button>
            <div
                ref={ content }
                style={ { maxHeight: `${ setHeight }`, transition: "max-height 150ms ease" } }
                className="overflow-auto"
            >
                <div className="text-gray-400 text-xs py-1">
                    { props.children }
                </div>
            </div>
        </div>
    );
}

export default MinorSection;
