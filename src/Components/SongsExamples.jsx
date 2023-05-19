import { Spotify } from "react-spotify-embed";
import songsExamplesStyles from "./songsExamplesStyles.module.css";
import { useEffect } from "react";

const SongsExamples = ({wheelKey}) => {
    const keyExamples = [
        {key: "F", examples: [
            "https://open.spotify.com/track/5b8FtevTVz8xVF6E208xeV",
            "https://open.spotify.com/track/02VBYrHfVwfEWXk5DXyf0T",
            "https://open.spotify.com/track/7wkgkIBYBH3xV2ob9Zmh87"
        ]},
        {key: "C", examples: [
            "https://open.spotify.com/track/7lAK3oHbfEnvUQWosrMMpR",
            "https://open.spotify.com/track/7DfFc7a6Rwfi3YQMRbDMau",
            "https://open.spotify.com/track/3UoULw70kMsiVXxW0L3A33"
        ]},
        {key: "G", examples: [
            "https://open.spotify.com/track/0BgPrNelWyvk0C5recZeKE",
            "https://open.spotify.com/track/3QRQwnaENDNslrc5tNUGgE",
            "https://open.spotify.com/track/6XKvPNWlmnN0gJejCKm1k7"
        ]},
        {key:"D", examples: [
            "https://open.spotify.com/track/5o4yGlG0PfeVUa6ClIyOxq",
            "https://open.spotify.com/track/4iG2gAwKXsOcijVaVXzRPW",
            "https://open.spotify.com/track/6BrMEbPSSj55nQhkgf6DnE"
        ]},
        {key:"A", examples: [
            "https://open.spotify.com/track/2fuYa3Lx06QQJAm0MjztKr",
            "https://open.spotify.com/track/0uLI1jac8ZJSSRG4QJDo3J",
            "https://open.spotify.com/track/01y5BLAsXWirQHZdWluxM0"
        ]},
        {key:"E", examples: [
            "https://open.spotify.com/track/1WN4uNclrDuczTO3bCr8s1",
            "https://open.spotify.com/track/39mFvV6GKL4dPnowjaJLs8",
            "https://open.spotify.com/track/33HRECrmuelZxOpid6XTNX"
        ]},
        {key: "B", examples: [
            "https://open.spotify.com/track/4CQPDA0aTZ1XtPhQFeRSeP",
            "https://open.spotify.com/track/5oeOWXjH8NZFOWP0SpSXqV",
            "https://open.spotify.com/track/2wUlYDGGXlSvm2NkGj0Qio"
        ]},
        {key: "F#", examples: [
            "https://open.spotify.com/track/7KA4W4McWYRpgf0fWsJZWB",
            "https://open.spotify.com/track/7dVDWf0wud70V4PgYfKnaG",
            "https://open.spotify.com/track/2h1tUggJBTBYNbi2SqM4tK"
        ]},
        {key: "C#", examples: [
            "https://open.spotify.com/track/5ZNdRdZ2inm4ksA8keadDs",
            "https://open.spotify.com/track/4Uiw0Sl9yskBaC6P4DcdVD",
            "https://open.spotify.com/track/2073QOEC8rBtSyTsRyaWiP"
        ]},
        {key: "Ab", examples: [
            "https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT",
            "https://open.spotify.com/track/0FrT8a39eo6siL1yIxVGTP",
            "https://open.spotify.com/track/1Qrg8KqiBpW07V7PNxwwwL"
        ]},
        {key: "Eb", examples: [
            "https://open.spotify.com/track/7LVHVU3tWfcxj5aiPFEW4Q",
            "https://open.spotify.com/track/2IJRcC95cUWXYaygvXDZAD",
            "https://open.spotify.com/track/0rKtyWc8bvkriBthvHKY8d"

        ]},
        {key: "Bb", examples: [
            "https://open.spotify.com/track/5TxRUOsGeWeRl3xOML59Ai",
            "https://open.spotify.com/track/6PGoSes0D9eUDeeAafB2As",
            "https://open.spotify.com/track/6wVViUl2xSRoDK2T7dMZbR"
        ]}
    ];

    
    for(let i = 0; i < keyExamples.length; i++){
        console.log("loop: ", wheelKey, keyExamples[i].key)
        if(wheelKey == keyExamples[i].key){
            return(
                <>
                    <div className={songsExamplesStyles.songList}>
                        <h2>Songs in this key</h2>
                        <Spotify wide link={keyExamples[i].examples[0]}/>
                        <Spotify wide link={keyExamples[i].examples[1]}/>
                        <Spotify wide link={keyExamples[i].examples[2]}/>
                        <div className={songsExamplesStyles.chordProgContainer}>
                            <h2>Chord progressions examples</h2>
                            <div className={songsExamplesStyles.chordProgList}>
                                <div className={songsExamplesStyles.chordProg}>
                                    <p>I-V-vi-IV</p>
                                </div>
                                <div className={songsExamplesStyles.chordProg}>
                                    <p>I-IV-V</p>
                                </div>
                                <div className={songsExamplesStyles.chordProg}>
                                    <p>ii-V-I</p>
                                </div>
                                <div className={songsExamplesStyles.chordProg}> 
                                    <p>I-vi-IV-V</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={songsExamplesStyles.chordDiagramsContainer}>
                        <h2>Guitar chords in this key</h2>
                        <div className={songsExamplesStyles.chordDiagramsList}>

                        </div>
                    </div>
                </>

            )
        
        }else{
            console.log("bug",wheelKey == keyExamples[i].key)
            
        }
    }
}

export default SongsExamples;