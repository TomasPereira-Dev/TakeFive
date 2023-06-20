import { useRef, useState } from "react";
import wheelStyles from "./wheelStyles.module.css";
import SongsExamples from "./SongsExamples";
import ChordDiagrams from "./ChordDiagrams";

const Wheel = () =>{

    const wheelRef = useRef(null);
    const [wheelKey, setWheelKey] = useState("C");

    const notes = [
        {
            note: "F",
            angle: 15,
            notesInThisKey: ["Bb", "F", "C", "G", "D", "A", "E"]
        },
        {
            note: "C",
            angle: 345,
            notesInThisKey: ["F", "C", "G", "D", "A", "E", "B"]
        },
        {
            note: "G",
            angle: 315,
            notesInThisKey: ["C", "G", "D", "A", "E", "B", "Gb"]
        },
        {
            note: "D",
            angle: 285,
            notesInThisKey: ["G", "D", "A", "E", "B", "Gb", "Db"]
        },
        {
            note: "A",
            angle: 255,
            notesInThisKey: ["D", "A", "E", "B", "Gb", "Db", "Ab"]
        },
        {
            note: "E",
            angle: 225,
            notesInThisKey: ["A", "E", "B", "Gb", "Db", "Ab", "Eb"]
        },
        {
            note: "B",
            angle: 195,
            notesInThisKey: ["E", "B", "Gb", "Db", "Ab", "Eb", "Bb"]
        },
        {
            note: "Gb",
            angle: 165,
            notesInThisKey: ["B", "Gb", "Db", "Ab", "Eb", "Bb", "F"]
        },
        {
            note: "Db",
            angle: 135,
            notesInThisKey: ["Gb", "Db", "Ab", "Eb", "Bb", "F", "C"]
        },
        {
            note: "Ab",
            angle: 105,
            notesInThisKey: ["Db", "Ab", "Eb", "Bb", "F", "C", "G"]
        },
        {
            note: "Eb",
            angle: 75,
            notesInThisKey: ["Ab", "Eb", "Bb", "F", "C", "G", "D"]
        },
        {
            note: "Bb",
            angle: 45,
            notesInThisKey: ["Eb", "Bb", "F", "C", "G", "D", "A"]
        }
    ]

    const spinButtonHandler = () => {
        const angleToRotate = Math.floor(Math.random() * 11);
        wheelRef.current.style.transform = `rotate(${notes[angleToRotate].angle}deg)`;
        setWheelKey(notes[angleToRotate].note);
    }

    return(
    <>
    <div className={wheelStyles.mainContainer}>
            <div className={wheelStyles.wheelWrapper}>
                <div className={wheelStyles.noteNumberContainer}>
                    <div className={wheelStyles.noteNumber}>
                        <div className={wheelStyles.noteNumberText}>
                            <p>IV</p>
                        </div>
                    </div>
                    <div className={wheelStyles.noteNumber}>
                        <div className={wheelStyles.noteNumberText}>
                            <p>I</p>
                        </div>
                    </div>
                    <div className={wheelStyles.noteNumber}>
                        <div className={wheelStyles.noteNumberText}>
                            <p>V</p>
                        </div>
                    </div>
                    <div className={wheelStyles.noteNumber}>
                        <div className={wheelStyles.noteNumberText}>
                            <p>ii</p>
                        </div>
                    </div>
                    <div className={wheelStyles.noteNumber}>
                        <div className={wheelStyles.noteNumberText}>
                            <p>vi</p>
                        </div>
                    </div>
                    <div className={wheelStyles.noteNumber}>
                        <div className={wheelStyles.noteNumberText}>
                            <p>iii</p>
                        </div>
                    </div>
                    <div className={wheelStyles.noteNumber}>
                        <div className={wheelStyles.noteNumberText}>
                            <p>viiº</p>
                        </div>
                    </div> 
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
                                <p>Gb/F#</p>
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
            <div className={wheelStyles.songsAndChordsContainer}>
                <SongsExamples wheelKey={wheelKey} notes={notes}/>
                <ChordDiagrams wheelKey={wheelKey} notes={notes}/>
            </div>

        </div>
    </>
    )
};

export default Wheel;