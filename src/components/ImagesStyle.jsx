import styled from 'styled-components';

export const ImageRow = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center; 
    margin-top: 75px;
    margin-left: 20px;
    gap: 40px;
`;

export const Img = styled.img`
    width: 40px;
    height: auto;
    transition: transform 0.2s, filter 0.2s;
    
    &:hover {
        transform: scale(1.1); 
        filter: brightness(1.2); 
        cursor: pointer;
    }
`;
