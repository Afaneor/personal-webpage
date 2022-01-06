import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import {
  Accordion,
  SimpleGrid,
  Heading,
  Spinner,
  Box,
} from '@chakra-ui/react';
import { Bio } from '../../components/Bio';
import { Model } from '../../components/Model/Loadable';
import { Responsibilities } from 'app/components/Responsibilities';
import { ReactNode } from 'react';

const Section = ({ children }: { children: ReactNode }) => {
  return (
    <Heading
      mt={'15px'}
      mb={'5px'}
      as="h3"
      size="md"
      style={{ textDecoration: 'underline' }}
    >
      {children}
    </Heading>
  );
};

export function HomePage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('homepage', 'Домашняя страница')}</title>
      </Helmet>
      <SimpleGrid minChildWidth={'250px'} gap={5}>
        <Model />
        <Bio />
      </SimpleGrid>
      <Section>{t('work', 'Работа')}</Section>
      <Accordion defaultIndex={[]} allowMultiple>
        <Responsibilities
          position={t('CTO', 'CTO')}
          company="Nova"
          start="09-2021"
        />
        <Responsibilities
          position={t('teamlead', 'Руководитель команды разработки')}
          company="Nova"
          start="06-2020"
          end="09-2021"
        />
        <Responsibilities
          position={t('developer', 'Разработчик')}
          company="Nova"
          start="03-2019"
          end="06-2020"
        />
        <Responsibilities
          position={t('analytic', 'Аналитик')}
          company="MGTS"
          start="12-2017"
          end="03-2019"
        />
      </Accordion>
      <Section>{t('study', 'Учеба')}</Section>
      <Accordion defaultIndex={[]} allowMultiple>
        <Responsibilities
          position={t('magistrate', 'Магистратура')}
          company={t('fu', 'Финансовый Университет')}
          start="2018"
          end="2020"
        />
        <Responsibilities
          position={t('bachelor', 'Бакалавр')}
          company={t('mtuci', 'МТУСИ')}
          start="2014"
          end="2018"
        />
      </Accordion>
      <Section>{t('projects', 'Проекты')}</Section>
    </>
  );
}
