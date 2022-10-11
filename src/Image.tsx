import styled from "styled-components"

interface ImageProps {
    url: string;
}
export default function Image({url} : ImageProps) {
    return (
        <div>
            <img src={url}/>
        </div>
    )
}

