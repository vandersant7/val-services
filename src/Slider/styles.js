import styled from "styled-components";

export const StyledSlider = styled.div`
    width: 100%;
    height: 500px;
    overflow: hidden;
    position: relative;

    .slider-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        position: absolute;

        &:hover img {
            transform: scale(1.1);
        }
    }
`