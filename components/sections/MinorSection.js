import React, { useRef, useState } from "react";

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
            setActive === "active" ? "rotate-0" : "-rotate-90"
        );
    }

    return (
        <div className="flex flex-col">
            <button className={ `cursor-pointer pb-1 flex items-center focus:outline-none border-none ${ setActive }` } onClick={ toggleAccordion }>
                <div className="flex-1 text-left text-sm text-gray-400">{ `${ setShow } ` + props.title }</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={ `${ setRotate } ` + ' transition transform text-xl text-gray-500 mr-1 w-3' }>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M15 19l-7-7 7-7"/>
                </svg>
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
