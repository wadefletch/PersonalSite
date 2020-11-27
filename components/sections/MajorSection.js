import React, { useRef, useState } from "react";

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
            setActive === "active" ? "rotate-0" : "-rotate-90"
        );
    }

    return (
        <div className="flex flex-col">
            <button className={ `cursor-pointer py-1 flex items-center focus:outline-none border-none ${ setActive }` } onClick={ toggleAccordion }>
                <div className="font-semibold flex-1 text-left text-2xl text-gray-300">{ props.title }</div>
                <div className="hidden sm:inline mr-2 text-gray-400 text-sm">{ props.subtitle }</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={ `${ setRotate } ` + 'transform transition text-xl text-gray-500 mr-1 w-5' }>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M15 19l-7-7 7-7"/>
                </svg>
            </button>
            <div
                ref={ content }
                style={ { maxHeight: `${ setHeight }`, transition: "max-height 500ms ease" } }
                className="overflow-auto"
            >
                <div className="pb-3 text-sm">
                    { props.children }
                </div>
            </div>
        </div>
    );
}

export default MajorSection;
