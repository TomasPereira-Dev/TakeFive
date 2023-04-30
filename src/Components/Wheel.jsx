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
            {//<div className={wheelStyles.minorKeys}>
             //   <div className={wheelStyles.aMinor}><p>Am</p></div>
             //   <div className={wheelStyles.eMinor}><p>Em</p></div>
             //   <div className={wheelStyles.bMinor}><p>Bm</p></div>
             //   <div className={wheelStyles.fSharpMinor}><p>F#m</p></div>
             //   <div className={wheelStyles.cSharpMinor}><p>C#m</p></div>
             //   <div className={wheelStyles.gSharpMinor}><p>G#m/Ab#</p></div>
             //   <div className={wheelStyles.dSharpMinor}><p>D#m/Ebm</p></div>
             //   <div className={wheelStyles.aSharpMinor}><p>A#m/Bbm</p></div>
             //   <div className={wheelStyles.fMinor}><p>Fm</p></div>
             //   <div className={wheelStyles.cMinor}><p>Cm</p></div>
             //   <div className={wheelStyles.gMinor}><p>Gm</p></div>
             //   <div className={wheelStyles.dMinor}><p>Dm</p></div>
             //</div>
            }
        </div>
        <button>SPIN!</button>
    </>
    )
};

export default Wheel;