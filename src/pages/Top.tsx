import { Box, Button, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

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
          <VStack justify="center" height="100%" spacing={20}>
            <div>御魚 なぞの カタカナ</div>
            <Button size="lg">
              <Link
                to={{
                  pathname: `/`,
                }}
                state={{
                  getby: 'start',
                }}
              >
                Start
              </Link>
            </Button>
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
