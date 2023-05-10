import wheelStyles from "./wheelStyles.module.css";

const Wheel = () =>{

    return(
    <>
        <div className={wheelStyles.wheelContainer}>
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
        <button>SPIN!</button>
    </>
    )
};

export default Wheel;