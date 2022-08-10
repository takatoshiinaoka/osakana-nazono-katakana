import { Fish } from '@/types/Fish'
import { GameMode } from '@/types/GameMode'
import { Box, Button, VStack, ButtonGroup } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'

type AnswerLocationState = {
  state: {
    gameMode: GameMode
    result: boolean
    fish: Fish
  }
}

export const Answer = () => {
  const { state } = useLocation() as AnswerLocationState
  const result = state.result

  return (
    <div>
      <VStack justify="center" height="100vh">
        <Box height="500px" width="90%">
          <VStack justify="center" height="100%" spacing={10}>
            <img src={state.fish.imageUrl} width={400} />
            <Box bg="white" css={{ padding: 15, borderRadius: 10 }}>
              <VStack gap={1}>
                {result ? <div>⭕️正解⭕️</div> : <div>❌不正解❌</div>}
                <div>
                  <b>{state.fish.name_japanese}</b>の英名は
                  <b>{state.fish.name_english}</b>
                  です。
                </div>
                <div>
                  <div>{state.fish.explanation}</div>
                </div>
              </VStack>
            </Box>
            <ButtonGroup>
              <VStack gap={2}>
                <Link
                  to={{
                    pathname: '/',
                  }}
                  state={{
                    getby: 'question',
                    gameMode: state.gameMode,
                  }}
                >
                  <Button size="lg" css={{ width: '100%' }}>
                    次の問題へ
                  </Button>
                </Link>
                <Link
                  to={{
                    pathname: '/',
                  }}
                >
                  <Button size="lg" css={{ width: '100%' }}>
                    Topへ戻る
                  </Button>
                </Link>
              </VStack>
            </ButtonGroup>
          </VStack>
        </Box>
      </VStack>
    </div>
  )
}
