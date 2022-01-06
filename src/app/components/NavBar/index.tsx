/**
 *
 * NavBar
 *
 */
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Link,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link as ReactLink } from 'react-router-dom';

interface Props {}
export function NavBar(props: Props) {
  const { t } = useTranslation();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <ReactLink to={'/'}>{t('nikolayPavlin', 'Николай Павлин')}</ReactLink>
          <Stack direction={'row'} spacing={14}>
            <Link
              rounded={'md'}
              _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
              }}
              href={'https://blog.pavlin.tech'}
              isExternal={true}
            >
              {t('articles', 'Статьи')}
            </Link>
          </Stack>
          <Stack direction={'row'}>
            <Button
              bg={useColorModeValue('gray.400', 'orange.200')}
              onClick={toggleColorMode}
            >
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Flex>
      </Box>
    </>
  );
}
