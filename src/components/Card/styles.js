import styled from "styled-components"

const CardContainer = styled.div`
    width: 100%;
    background: var(--card-background);
    padding: 2rem;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
`
const CardSkills = styled.div`
    display: flex;
    align-items: center;
`

const CardProfileImage = styled.img`
    width: 100%;
`
const CardCompany = styled.span`
    margin-right: 5px;
    color: var(--desaturated-dark-cyan);
    font-size: 0.8rem;
    font-weight: bold;
`
const CardProfileContainer = styled.div`
    display: grid;
    grid-template-columns: 5rem 1fr;
    grid-gap: 15px;
    align-items: center;
`
const CardBadge = styled.span`
    padding: 0.4rem;
    font-size: 0.6rem;
    font-weight: bold;
    border-radius: 15px;
    text-transform: uppercase;
    background-color: ${props => props.backgroundColor};
    color: white;
    margin-right: 3px;
`
const CardProfilePosition = styled.div`
    margin: 0.8rem 0;
    font-weight: bold;
`
const CardProfileFooter = styled.div`
    font-size: 0.9rem;
    color: var(--dark-grayish-cyan);
`
const CardTag = styled.span`
    background: var(--light-grayish-cyan-background);
    color: var(--desaturated-dark-cyan);
    padding: 0.5rem;
    margin-right: 0.5rem;
    font-size: 0.9rem;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
`

export { 
    CardContainer,
    CardProfileContainer,
    CardProfileImage,
    CardCompany,
    CardBadge,
    CardProfilePosition,
    CardProfileFooter,
    CardSkills,
    CardTag
}