import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'

const COUNT_BINGO = 'player/COUNT_BINGO'

export const createArray = createAction(COUNT_BINGO)

const initialState = {
  playerOne: {},
  playerTwo: {}
}

export default handleActions(
  {
    [COUNT_BINGO]: (state, action) => {
      return produce(state, draft => {})
    }
  },
  initialState
)
