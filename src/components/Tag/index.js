import React,{ useContext } from 'react'
import { TagItem, CloseButton } from './styles'
import {FilterContext} from '../../context/filter'

export default function Tag({ children, item }) {
    const { remove } = useContext(FilterContext)
    return (
        <span style={{ margin: '0.5rem', display: 'flex', alignItems: 'center' }}>
            <TagItem>{children}</TagItem>
            <CloseButton onClick={() => remove(item)}>x</CloseButton>
        </span>
    )
}