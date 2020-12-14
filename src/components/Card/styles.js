import styled, { css } from "styled-components"

const CardContainer = styled.div`
    width: 100%;
    background: var(--card-background);
    padding: 2rem;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;

    @media(max-width: 880px) {
        flex-direction: column;
        align-items: center;
    }
    @media(max-width: 400px) {
        position: relative;
        align-items: flex-start;
    }
`
const CardSkills = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`

const CardProfileImage = styled.img`
    width: 100%;

    @media(max-width: 400px) {
        position: absolute;
        top: -20px;
        left: 30px;
        width: 3rem;
    }
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

    @media(max-width: 880px) {
        padding: 1rem;
        border-bottom: 1px solid var(--light-grayish-cyan-filter-tablets);
        margin-bottom: 1rem;
    }
    @media(max-width: 400px) {
        grid-template-columns: 1fr;
    }
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
    margin: 0.5rem;
    font-size: 0.9rem;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    ${props => props.active && css`
        background: var(--desaturated-dark-cyan);
        color: var(--light-grayish-cyan-background);
    `}
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