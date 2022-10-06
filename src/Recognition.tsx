import styled from "styled-components"

interface RecognitionProps {
    url: string;
}
export default function Recognition({url} : RecognitionProps) {
    return (
        <div>
            <img src={url}/>
        </div>
    )
}

