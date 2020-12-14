import React from 'react'
import { TagItem, CloseButton } from './styles'

export default function Tag({ children, close }) {
    return (
        <span style={{ marginRight: '0.5rem', display: 'flex', alignItems: 'center' }}>
            <TagItem>{children}</TagItem>
            <CloseButton onClick={close}>x</CloseButton>
        </span>
    )
}