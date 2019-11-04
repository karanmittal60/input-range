import React, {useState} from 'react';
import { Range, getTrackBackground } from "react-range";
import './InputRange.css'

function InputRange (propsObj) {

    let { min, max, name, onInput, step, value, thumbValue } = propsObj;

    const [dragged, setDragged] = useState(false)

    const STEP = parseInt(step);
    const MIN = parseInt(min);
    const MAX = parseInt(max);
    const VALUE = [value]

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
                        style={{...props.style}}
                    >
                        {/*{console.log("==props.onMouseDown==", props.onMouseDown)}*/}
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
                            {thumbValue}
                        </div>
                    </div>
                )}
            />
        </div>
    );
}

export default InputRange;