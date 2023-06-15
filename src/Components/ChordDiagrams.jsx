import {useState, useCallback, useEffect} from "react";
import chordDiagramsStyles from "./chordDiagramsStyles.module.css"

const ChordDiagrams = ({wheelKey, notes}) => {

    const [chordsToRender, setChordsToRender] = useState(null);
    const [test, setTest] = useState(null);

    const chordArrLoop = useCallback(() =>{
        let chords = null;
        for(let i = 0; i < notes.length; i++){
            if(wheelKey === notes[i].note){
                chords = notes[i].notesInThisKey;
            }else{
                console.log("something went wrong: ", wheelKey, notes[i].note, i)
            }
        }
        setChordsToRender(chords);
    }, [wheelKey, notes])

    const diagramMapping = useCallback(() => {
        let mappedChords = null;
        if(chordsToRender !== null){
            mappedChords = chordsToRender.map((chord, index) =>  <iframe src={`https://api.uberchord.com/v1/embed/chords/${chord}#autosize-noicon`} className={chordDiagramsStyles.chordDiagramsIframe} key={index}/> )
        }
        setTest(mappedChords);
    }, [chordsToRender]);

    useEffect(()=>{
        chordArrLoop()
    }, [chordArrLoop])

    useEffect(()=>{
        diagramMapping()
    },[diagramMapping])
    

    return(
    <div className={chordDiagramsStyles.chordDiagramsContainer}>
        <h2>Chords in this key</h2>
        <ul className={chordDiagramsStyles.chordDiagramsList}>
           {test}
        </ul>
    </div>
    )  
}

export default ChordDiagrams;