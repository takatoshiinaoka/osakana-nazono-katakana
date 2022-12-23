import { Box, Button, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import osakanaImage from '~/favicon.png'

export const Top = () => {
  return (
    <div>
      <VStack justify="center" height="100vh">
        <Box
          bg="white"
          height="300px"
          width="90%"
          css={{ borderRadius: '10px' }}
        >
          <VStack justify="center" height="100%" spacing={5}>
            <Text fontSize="xl">御魚 なぞの カタカナ</Text>
            <img src={osakanaImage} width={150} alt="ネコサメ" />
            <Link
              to={{
                pathname: `/`,
              }}
              state={{
                getby: 'start',
              }}
            >
              <Button size="lg">Start</Button>
            </Link>
          </VStack>
        </Box>
      </VStack>
      {import.meta.env.VITE_DEBUG && (
        <div>
          <Link
            to={{
              pathname: `/`,
            }}
            state={{
              getby: '',
            }}
          >
            デバッグページ（本番では表示されません）
          </Link>
        </div>
      )}
    </div>
  )
}
