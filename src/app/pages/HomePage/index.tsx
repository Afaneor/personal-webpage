import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Accordion, SimpleGrid, Heading } from '@chakra-ui/react'
import { Bio } from '../../components/Bio'
import { Model } from '../../components/Model/Loadable'
import { Responsibility } from 'app/components/Responsibility'
import { ReactNode } from 'react'

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
  )
}

export function HomePage() {
  const { t } = useTranslation()
  const workingResponsibilities = [
    {
      position: t('CTO', 'CTO'),
      company: 'Nova',
      start: '09-2021',
    },
    {
      position: t('teamlead', 'Руководитель команды разработки'),
      company: 'Nova',
      start: '06-2020',
      end: '09-2021',
    },
    {
      position: t('developer', 'Разработчик'),
      company: 'Nova',
      start: '03-2019',
      end: '06-2020',
    },
    {
      position: t('analytic', 'Аналитик'),
      company: 'MGTS',
      start: '12-2017',
      end: '03-2019',
    },
  ]

  const studyResponsibilities = [
    {
      position: t('magistrate', 'Магистратура'),
      company: t('fu', 'Финансовый Университет'),
      start: '2018',
      end: '2020',
    },
    {
      position: t('bachelor', 'Бакалавр'),
      company: t('mtuci', 'МТУСИ'),
      start: '2014',
      end: '2018',
    },
  ]
  return (
    <>
      <Helmet>
        <title>{t('homepage', 'Домашняя страница')}</title>
      </Helmet>
      <SimpleGrid minChildWidth={'250px'} gap={5}>
        <Model />
        <Bio />
      </SimpleGrid>
      <Section>
        <>{t('work', 'Работа')}</>
      </Section>
      <Accordion allowMultiple>
        {workingResponsibilities.map((responsibility, index) => {
          return (
            <Responsibility
              key={index}
              position={responsibility.position}
              company={responsibility.company}
              start={responsibility?.start}
              end={responsibility?.end}
            />
          )
        })}
      </Accordion>
      <Section>
        <>{t('study', 'Учеба')}</>
      </Section>
      <Accordion allowMultiple>
        {studyResponsibilities.map((responsibility, index) => {
          return (
            <Responsibility
              key={index}
              position={responsibility.position}
              company={responsibility.company}
              start={responsibility?.start}
              end={responsibility?.end}
            />
          )
        })}
      </Accordion>
      <Section>
        <>{t('projects', 'Проекты')}</>
      </Section>
    </>
  )
}
