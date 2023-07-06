import { useState } from "react";
import Background from "./background/Background.jsx";
import Box from "./box/Box.jsx";

const initialPosition = {
    x: 0,
    y: 0
};

const UpdatingObjects = () => {
    const [shape, setShape] = useState({
        color: "orange",
        position: initialPosition
    });

    function handleMove(dx, dy) {
        let nextXPosition = shape.position.x + dx;
        let nextYPosition = shape.position.y + dy;
        let nextPosition = { x: nextXPosition, y: nextYPosition };
        setShape({
            ...shape,
            position: nextPosition
        });
    }

    function handleColorChange(e) {
        setShape({
            ...shape,
            color: e.target.value
        });
    }

    return (
        <>
            <select value={shape.color} onChange={handleColorChange}>
                <option value="orange">orange</option>
                <option value="lightpink">lightpink</option>
                <option value="aliceblue">aliceblue</option>
            </select>
            <Background position={initialPosition} />
            <Box color={shape.color} position={shape.position} onMove={handleMove}>
                Drag me!
            </Box>
        </>
    );
}

export default UpdatingObjects