import React, {useState} from 'react';
import { Range, getTrackBackground } from "react-range";
import './InputRange.css'

function InputRange (propsObj) {

    let { min, max, name, onInput, step, value, thumbValue } = propsObj;

    const [dragged, setDragged] = useState(false)

    const STEP = parseInt(step);
    const MIN = parseInt(min);
    const MAX = parseInt(max);
    const VALUE = [value];
    const [liWidth, setLiwidth] = useState(20);
    const getList = () => {
        let ranger = document.getElementById("tracker-wraper")
        console.log("==data==", STEP, MIN, MAX, VALUE)
        let noOfSteps = (MAX - MIN)/STEP + 1
        console.log("noOfSteps==>",noOfSteps);
        if (ranger){

            // console.log("==ranger==>",ranger.clientWidth/noOfSteps + 12.5);
            let calWidth = ranger.clientWidth/noOfSteps + 12.5
            console.log("==calWidth==>",calWidth);
            setLiwidth(calWidth)
            document.getElementById("waterMark").style.width = `${calWidth}px`;
        }

        let liArray = []
        for(let i=0; i<noOfSteps-1; i++){
            if (i<noOfSteps-2){
                liArray.push(<li key={i} id="waterMark" style={{width: `${liWidth}px`}}>.</li>)
            }else {
                liArray.push(<li key={i} id="waterMark" style={{width: `5px`}}>.</li>)
            }
        }
        return liArray;
    };
    return (
        <div className='input-wraper'>
            <Range
                values={VALUE}
                step={dragged ? STEP : STEP/5}
                min={MIN}
                max={MAX}
                onChange={(values) => {
                    let event = {
                        target: {
                            value: values[0]%STEP === 0 || dragged?
                                values[0] :
                                 ( values[0]/STEP > VALUE[0]/STEP )  ?
                                    (values[0] - values[0]%STEP + STEP) :
                                    (values[0] - values[0]%STEP) ,
                            name
                        }
                    }
                    onInput(event)
                }}
                renderTrack={({ props, children }) => (
                    <div
                        onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                        className='tracker-wraper'
                        id='tracker-wraper'
                        style={{...props.style}}
                    >
                        {console.log("==props.onMouseDown==", props)}
                        <div
                            ref={props.ref}
                            className='tracker-container'
                            style={{
                                background: getTrackBackground({
                                    values: VALUE,
                                    colors: ["#6ce488", "#fff"],
                                    min: MIN,
                                    max: MAX
                                }),
                                alignSelf: "center"
                            }}
                        >
                            {children}
                            <ul className="range-labels">
                                {getList()}
                            </ul>
                            <ul className="last-mark">
                                <li>.</li>
                            </ul>

                        </div>
                    </div>
                )}
                renderThumb={({ props, isDragged }) => (
                    <div
                        {...props}
                        style={{...props.style}}
                        className='thumb-wraper'
                    >
                        {setDragged(isDragged)}
                        <div className='thumb-container'>
                            {/*{console.log("==props==", props)}*/}
                            {thumbValue}
                        </div>
                    </div>
                )}
            />


            {/*<div className="range">*/}
                {/*<input type="range" min="1" max="7" steps="1" value="1"/>*/}
            {/*</div>*/}
            {/*{getList()}*/}
        </div>
    );
}

export default InputRange;