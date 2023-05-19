import { useRef, useState } from "react";
import wheelStyles from "./wheelStyles.module.css";
import SongsExamples from "./SongsExamples";

const Wheel = () =>{

    const wheelRef = useRef(null);
    const [wheelKey, setWheelKey] = useState("C");

    const notes = [
        {
            note: "F",
            angle: 15
        },
        {
            note: "C",
            angle: 345
        },
        {
            note: "G",
            angle: 315
        },
        {
            note: "D",
            angle: 285
        },
        {
            note: "A",
            angle: 255
        },
        {
            note: "E",
            angle: 225
        },
        {
            note: "B",
            angle: 195
        },
        {
            note: "Gb",
            angle: 165
        },
        {
            note: "Db",
            angle: 135
        },
        {
            note: "Ab",
            angle: 105
        },
        {
            note: "Eb",
            angle: 75
        },
        {
            note: "Bb",
            angle: 45
        }
    ]

    const spinButtonHandler = () => {
        const angleToRotate = Math.floor(Math.random() * 11);
        wheelRef.current.style.transform = `rotate(${notes[angleToRotate].angle}deg)`;
        setWheelKey(notes[angleToRotate].note);
        console.log(notes[angleToRotate].angle, notes[angleToRotate].note)
    }

    console.log(wheelKey, "wheelkey state")


    return(
    <>
        <div className={wheelStyles.mainContainer}>
            <div className={wheelStyles.wheelWrapper}>
                <div className={wheelStyles.arrowContainer}>
                    <img src="..\src\assets\arrow.svg" alt="arrow" />
                </div>
                <div className={wheelStyles.wheelContainer} ref={wheelRef}>
                    <div className={wheelStyles.majorKeys}>
                        <div className={`${wheelStyles.cMajor} ${wheelStyles.note}`}>
                            <div className={wheelStyles.noteText}>
                                <p>C</p>
                            </div>
                        </div>
                        <div className={`${wheelStyles.gMajor} ${wheelStyles.note}`}>
                            <div className={wheelStyles.noteText}>
                                <p>G</p>
                            </div>
                        </div>
                        <div className={`${wheelStyles.dMajor} ${wheelStyles.note}`}>
                            <div className={wheelStyles.noteText}>
                                <p>D</p>
                            </div>
                        </div>
                        <div className={`${wheelStyles.aMajor} ${wheelStyles.note}`}>
                            <div className={wheelStyles.noteText}>
                                <p>A</p>
                            </div>
                        </div>
                        <div className={`${wheelStyles.eMajor} ${wheelStyles.note}`}>
                            <div className={wheelStyles.noteText}>
                                <p>E</p>
                            </div>
                        </div>
                        <div className={`${wheelStyles.bMajor} ${wheelStyles.note}`}>
                            <div className={wheelStyles.noteText}>
                                <p>B/Cb</p>
                            </div>
                        </div>
                        <div className={`${wheelStyles.fSharpMajor}  ${wheelStyles.note}`}>
                            <div className={wheelStyles.noteText}>
                                <p>F#/Gb</p>
                            </div>
                        </div>
                        <div className={`${wheelStyles.cSharpMajor}  ${wheelStyles.note}`}>
                            <div className={wheelStyles.noteText}>
                                <p>Db/C#</p>
                            </div>
                        </div>
                        <div className={`${wheelStyles.aFlatMajor}  ${wheelStyles.note}`}>
                            <div className={wheelStyles.noteText}>
                                <p>Ab</p>
                            </div>
                        </div>
                        <div className={`${wheelStyles.eFlatMajor}  ${wheelStyles.note}`}>
                            <div className={wheelStyles.noteText}>
                                <p>Eb</p>
                            </div>
                        </div>
                        <div className={`${wheelStyles.bFlatMajor}  ${wheelStyles.note}`}>
                            <div className={wheelStyles.noteText}>
                                <p>Bb</p>
                            </div>
                        </div>
                        <div className={`${wheelStyles.fMajor}  ${wheelStyles.note}`}>
                            <div className={wheelStyles.noteText}>
                                <p>F</p>
                            </div>
                        </div>
                    </div>
                    <div className={wheelStyles.minorKeys}>
                        <div className={`${wheelStyles.aMinor} ${wheelStyles.note}`}>
                            <div className={wheelStyles.noteText}>
                                <p>Am</p>
                            </div>
                        </div>
                        <div className={`${wheelStyles.eMinor} ${wheelStyles.note}`}>
                            <div className={wheelStyles.noteText}>
                                <p>Em</p>
                            </div>
                        </div>
                        <div className={`${wheelStyles.bMinor} ${wheelStyles.note}`}>
                            <div className={wheelStyles.noteText}>
                                <p>Bm</p>
                            </div>
                        </div>
                        <div className={`${wheelStyles.fSharpMinor} ${wheelStyles.note}`}>
                            <div className={wheelStyles.noteText}>
                                <p>F#m</p>
                            </div>
                        </div>
                        <div className={`${wheelStyles.cSharpMinor} ${wheelStyles.note}`}>
                            <div className={wheelStyles.noteText}>
                                <p>C#m</p>
                            </div>
                        </div>
                        <div className={`${wheelStyles.aFlatMinor} ${wheelStyles.note}`}>
                            <div className={wheelStyles.noteText}>
                                <p>Abm</p>
                            </div>
                        </div>
                        <div className={`${wheelStyles.eFlatMinor} ${wheelStyles.note}`}>
                            <div className={wheelStyles.noteText}>
                                <p>Ebm</p>
                            </div>
                        </div>
                        <div className={`${wheelStyles.bFlatMinor} ${wheelStyles.note}`}>
                            <div className={wheelStyles.noteText}>
                                <p>Bbm</p>
                            </div>
                        </div>
                        <div className={`${wheelStyles.fMinor} ${wheelStyles.note}`}>
                            <div className={wheelStyles.noteText}>
                                <p>Fm</p>
                            </div>
                        </div>
                        <div className={`${wheelStyles.cMinor} ${wheelStyles.note}`}>
                            <div className={wheelStyles.noteText}>
                                <p>Cm</p>
                            </div>
                        </div>
                        <div className={`${wheelStyles.gMinor} ${wheelStyles.note}`}>
                            <div className={wheelStyles.noteText}>
                                <p>Gm</p>
                            </div>
                        </div>
                        <div className={`${wheelStyles.dMinor} ${wheelStyles.note}`}>
                            <div className={wheelStyles.noteText}>
                                <p>Dm</p>
                            </div>
                        </div>
                    </div>
            </div>
                <button onClick={spinButtonHandler} className={wheelStyles.wheelBtn}>Give me a key!</button>
            </div>
            <SongsExamples wheelKey={wheelKey}/>
        </div>

    </>
    )
};

export default Wheel;