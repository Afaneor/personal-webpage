/**
 *
 * Responsibilities
 *
 */
import * as React from 'react';
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {}

export function Responsibilities({
  position,
  company,
  children,
  start,
  end,
}: {
  position: string;
  company: string;
  children?: ReactNode;
  start?: string;
  end?: string;
}) {
  const { t } = useTranslation();

  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            {position} ({company}) {start} -{' '}
            {end || t('now', 'настоящее время')}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>{children}</AccordionPanel>
    </AccordionItem>
  );
}
