import React, {useState} from 'react';
import InputRange from "./InputRange";

function App() {

    const [bodyInjuryRange, setBodyInjuryRange] = React.useState(50);

    const handleRange = (event) => {
        // console.log("==event==", event);
        let {value, name} = event.target;
        console.log("==handleRange==", value, name);
        setBodyInjuryRange(value)
    }
    return (
        <div>
            <InputRange name="bodyInjuryRange"
                        value={bodyInjuryRange}
                        min="50"
                        max="400"
                        step="50"
                        className="slider"
                        onInput={handleRange}
                        thumbValue={`$${bodyInjuryRange}`}
            />
            <InputRange name="bodyInjuryRange"
                        value={bodyInjuryRange}
                        min="50"
                        max="400"
                        step="50"
                        className="slider"
                        onInput={handleRange}
                        thumbValue={`$${bodyInjuryRange}`}
            />
            <InputRange name="bodyInjuryRange"
                        value={bodyInjuryRange}
                        min="50"
                        max="400"
                        step="50"
                        className="slider"
                        onInput={handleRange}
                        thumbValue={`$${bodyInjuryRange}`}
            />
            <InputRange name="bodyInjuryRange"
                        value={bodyInjuryRange}
                        min="50"
                        max="400"
                        step="50"
                        className="slider"
                        onInput={handleRange}
                        thumbValue={`$${bodyInjuryRange}`}
            />
            <InputRange name="bodyInjuryRange"
                        value={bodyInjuryRange}
                        min="50"
                        max="400"
                        step="50"
                        className="slider"
                        onInput={handleRange}
                        thumbValue={`$${bodyInjuryRange}`}
            />
            <InputRange name="bodyInjuryRange"
                        value={bodyInjuryRange}
                        min="50"
                        max="400"
                        step="50"
                        className="slider"
                        onInput={handleRange}
                        thumbValue={`$${bodyInjuryRange}`}
            />
            <InputRange name="bodyInjuryRange"
                        value={bodyInjuryRange}
                        min="50"
                        max="400"
                        step="50"
                        className="slider"
                        onInput={handleRange}
                        thumbValue={`$${bodyInjuryRange}`}
            />
            <InputRange name="bodyInjuryRange"
                        value={bodyInjuryRange}
                        min="50"
                        max="400"
                        step="50"
                        className="slider"
                        onInput={handleRange}
                        thumbValue={`$${bodyInjuryRange}`}
            />
            <InputRange name="bodyInjuryRange"
                        value={bodyInjuryRange}
                        min="50"
                        max="400"
                        step="50"
                        className="slider"
                        onInput={handleRange}
                        thumbValue={`$${bodyInjuryRange}`}
            />
            <InputRange name="bodyInjuryRange"
                        value={bodyInjuryRange}
                        min="50"
                        max="400"
                        step="50"
                        className="slider"
                        onInput={handleRange}
                        thumbValue={`$${bodyInjuryRange}`}
            />
        </div>
    );
}

export default App;
