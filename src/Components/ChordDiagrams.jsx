import {useState} from "react";
import chordDiagramsStyles from "./chordDiagramsStyles.module.css"

const ChordDiagrams = ({wheelKey, notes}) => {

    const [chordsToRender, setChordsToRender] = useState(null);
    
    let i = 0;
    while(i < notes.length){
        if(wheelKey === notes[i].note){
            setChordsToRender(notes[i].notesInThisKey)
            break;
        }else{
            i++;
        }

        if(chordsToRender){
            break;
        }
    }

    if(chordsToRender){
        //UberChord embed content SDK spinnet
        !function(e,r,d){var t,c=e.getElementsByTagName(r)[0];e.getElementById(d)||(t=e.createElement(r),t.id=d,t.src="https://uberchord-backend.firebaseapp.com/uberchord-embed-sdk.js",c.parentNode.insertBefore(t,c))}(document,"script","uberchord-jssdk");

        return(
        <div className={chordDiagramsStyles.chordDiagramsContainer}>
            <h2>Chords in this key</h2>
            <ul>
                {
                    chordsToRender.map((chord) => <li data-autosize="1" data-no-icon="1" className="uberchord-chord" data-chord-name={`${chord},,`} key={chord}/>)
                }
            </ul>
        </div>
        )
    }   
}

export default ChordDiagrams;