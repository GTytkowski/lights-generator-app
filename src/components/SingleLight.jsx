import { useState } from "react";
import LightTurnedOff from "/images/light-turned-off.svg"
import LightBlue from "/images/light-blue.svg"
import LightGreen from "/images/light-green.svg"
import LightOrange from "/images/light-orange.svg"
import LightRed from "/images/light-red.svg"
import LightPink from "/images/light-pink.svg"
import LightYellow from "/images/light-yellow.svg"

const lights = [LightBlue, LightGreen, LightOrange, LightRed, LightPink, LightYellow]

export const SingleLight = () =>{
    const[isOn, setOn] = useState(true);

    const getRandomIndex = () => {
        return Math.floor(Math.random() * lights.length);
    }

    const imageSrc = isOn ? lights[getRandomIndex()] : LightTurnedOff;

    const handleToggle = () => {
        setOn(!isOn)
    }

    return <img onClick={handleToggle} src={imageSrc} alt="Single light" />
};