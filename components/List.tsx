'use client'
import React, { FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components'

interface ListProps {
  children: ReactNode
  ordered?: boolean
  className?: string
}

const List: FunctionComponent<ListProps> = ({ children, ordered = false, className }) => {
  const Component = ordered ? StyledOrderedList : StyledUnorderedList
  return <Component className={className}>{children}</Component>
}

const baseListStyles = `
  margin: 0;
  padding-left: 1.5rem;
  
  li {
    margin-bottom: 0.75rem;
    line-height: 1.6;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`

const StyledUnorderedList = styled.ul`
  ${baseListStyles}
  list-style-type: disc;
`

const StyledOrderedList = styled.ol`
  ${baseListStyles}
  list-style-type: decimal;
  
  li {
    margin-bottom: 1.5rem;
  }
`

export default List