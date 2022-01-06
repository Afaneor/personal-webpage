/**
 *
 * Bio
 *
 */
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Heading } from '@chakra-ui/react';

interface Props {}

export function Bio(props: Props) {
  const { t } = useTranslation();
  return (
    <Box>
      <Box textAlign={'center'}>
        <Heading as="h1" size={'md'}>
          {t('nikolayPavlin', 'Николай Павлин')}
        </Heading>
        <Heading as="h2" size={'sm'}>
          {t('profession', '(Разработчик | Руководитель | Спикер)')}
        </Heading>
      </Box>
      <Box>
        {t(
          'description',
          'Павлин Николай, Руководитель департамента техонологий в компании Нова. Николай с отличием закончил московский технический университет связи и информатики. Позже получил степень магистра в финансовом университете при презеденте РФ. В 2019 году присоединился к команде компании Нова на позицию software-инженера. В 2020 году возглавил команду разработки. В 2021 году возглавил департамент технологий. Компания Нова предоставляет технологические решения в сфере IoT и промышленных информационных систем. Решения компании помогают компаниям автоматизировать процессы и проводить аналитику на основе данных, получаемых с носимых устройств. Николай Павлин регулярно принимает участие в роли спикера на мероприятиях связанных с охраной труда. Является преподавателем в московском техническом университете связи и информатики.',
        )}
      </Box>
    </Box>
  );
}
