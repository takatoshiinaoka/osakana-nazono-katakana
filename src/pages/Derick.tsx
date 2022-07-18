import { Box, Button, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const Derick = () => {
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
            <div>どりーさん専用ページ</div>
            <Button size="lg">
              <Link
                to={{ pathname: '/' }}
                state={{ getby: 'question', gameMode: 'shark' }}
              >
                🦈サメモード🦈
              </Link>
            </Button>
            <Button size="lg">
              <Link
                to={{ pathname: '/' }}
                state={{ getby: 'question', gameMode: 'marine-world' }}
              >
                🐬マリンワールドモード🐧
              </Link>
            </Button>
          </VStack>
        </Box>
      </VStack>
    </div>
  )
}
