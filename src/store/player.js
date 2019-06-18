import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'

const INITIALIZE = 'player/INITIALIZE'
const COUNT_BINGO = 'player/COUNT_BINGO'
const CHANGE_TURN = 'player/CHANGE_TURN'

export const initialize = createAction(INITIALIZE)
export const countBingo = createAction(COUNT_BINGO)
export const changeTurn = createAction(CHANGE_TURN)

const initialState = {
  playerOne: {
    turn: true,
    count: 0
  },
  playerTwo: {
    turn: false,
    count: 0
  }
}

export default handleActions(
  {
    [INITIALIZE]: _ => initialState,
    [COUNT_BINGO]: (state, action) => {
      return produce(state, draft => {
        const { payload } = action
        if (payload === 'one') draft.playerOne.count++
        else draft.playerTwo.count++
      })
    },
    [CHANGE_TURN]: (state, action) => {
      return produce(state, draft => {
        const { payload } = action
        if (payload === 'one') draft.playerOne.turn = !draft.playerOne.turn
        else draft.playerTwo.turn = !draft.playerTwo.turn
      })
    }
  },
  initialState
)
