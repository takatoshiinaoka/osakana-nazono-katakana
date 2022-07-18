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
            <Link to={{ pathname: '/' }} state={{ getby: 'derick' }}>
              <Button size="lg">どりーさん専用</Button>
            </Link>
            <Link
              to={{
                pathname: '/',
              }}
              state={{ getby: 'question', gameMode: 'marine-world' }}
            >
              <Button size="lg">クイズスタート</Button>
            </Link>
          </VStack>
        </Box>
      </VStack>
    </div>
  )
}
