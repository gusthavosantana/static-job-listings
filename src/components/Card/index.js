import React, { useContext } from 'react'
import { FilterContext } from '../../context/filter'
import { 
    CardContainer,
    CardProfileContainer,
    CardProfileImage,
    CardCompany,
    CardBadge,
    CardProfilePosition,
    CardProfileFooter,
    CardSkills,
    CardTag
} from './styles';

export default function Card({ item }) {
    const { filter, toggle } = useContext(FilterContext)
    const tags = [
        item.role,
        item.level,
        ...item.languages,
        ...item.tools
    ]
    return (
        <CardContainer>
            <CardProfileContainer>
                <CardProfileImage src={item.logo} />
                <div>
                    <div>
                        <CardCompany>{item.company}</CardCompany>
                        {item.new && <CardBadge backgroundColor="var(--desaturated-dark-cyan)">New!</CardBadge>}
                        {item.featured && <CardBadge backgroundColor="var(--very-dark-grayish-cyan)">Featured</CardBadge>}
                    </div>
                    <CardProfilePosition>{item.position}</CardProfilePosition>
                    <CardProfileFooter>
                        <span>{item.postedAt} - </span>
                        <span>{item.contract} - </span>
                        <span>{item.location}</span>
                    </CardProfileFooter>
                </div>
            </CardProfileContainer>
            <CardSkills>
                {tags.map(tagValue => (
                    <CardTag key={tagValue} onClick={() => toggle(tagValue)} active={filter.items.includes(tagValue)}>
                        {tagValue}
                    </CardTag>
                ))}
            </CardSkills>
        </CardContainer>
    )
}