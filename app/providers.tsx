'use client'

import React from 'react'
import { StyledComponentsRegistry } from '../lib/StyledComponentsRegistry'
import { ContentProvider } from '../state/ContentContext'
import { ThemeColorProvider } from '../state/ThemeColorProvider'
import Layout from '../components/Layout'

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps): JSX.Element {
  return (
    <StyledComponentsRegistry>
      <ThemeColorProvider>
        <ContentProvider>
          <Layout>{children}</Layout>
        </ContentProvider>
      </ThemeColorProvider>
    </StyledComponentsRegistry>
  )
}