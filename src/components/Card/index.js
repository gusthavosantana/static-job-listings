import React from 'react'
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
              <CardTag>{item.role}</CardTag>
              <CardTag>{item.level}</CardTag>
              {item.languages.map(current => <CardTag>{current}</CardTag>)}
              {item.tools.map(current => <CardTag>{current}</CardTag>)}
          </CardSkills>
        </CardContainer>
    )
}