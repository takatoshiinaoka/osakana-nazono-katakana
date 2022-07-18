import { VStack, Button, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const Start = () => {
  return (
    <div>
      <VStack justify="center" height="100vh">
        <Box
          bg="white"
          height="300px"
          width="90%"
          css={{ borderRadius: '10px' }}
        >
          <VStack justify="center" height="100%" spacing={10}>
            <Button size="lg">
              <Link to={{ pathname: '/' }} state={{ getby: 'derick' }}>
                どりーさん専用
              </Link>
            </Button>
            <Button size="lg">
              <Link
                to={{
                  pathname: '/',
                }}
                state={{ getby: 'question', gameMode: 'marine-world' }}
              >
                クイズスタート
              </Link>
            </Button>
          </VStack>
        </Box>
      </VStack>
    </div>
  )
}
