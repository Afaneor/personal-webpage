import * as React from 'react'
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

interface ResponsibilityProps {
  position: string
  company: string
  children?: ReactNode
  start?: string
  end?: string
}

export function Responsibility({
  position,
  company,
  children,
  start,
  end,
}: ResponsibilityProps) {
  const { t } = useTranslation()

  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            <>
              {position} ({company}) {start} -{' '}
              {end || t('now', 'настоящее время')}
            </>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>{children}</AccordionPanel>
    </AccordionItem>
  )
}
