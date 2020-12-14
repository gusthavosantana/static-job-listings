import styled from "styled-components";

const TagItem = styled.span`
    background: var(--light-grayish-cyan-background);
    color: var(--desaturated-dark-cyan);
    padding: 0.5rem;
    font-size: 0.9rem;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
`
const CloseButton = styled.span`
    padding: 0.4rem;
    color: white;
    font-weight: bold;
    background: var(--very-dark-grayish-cyan);
    border-radius: 0 3px 3px 0;
    cursor: pointer;
`

export { TagItem, CloseButton }