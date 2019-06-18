import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'

const CREATE_ARRAY = 'bingo/CREATE_ARRAY'
const GAME_STATUS = 'bingo/GAME_STATUS'

export const createArray = createAction(CREATE_ARRAY)
export const gameStatus = createAction(GAME_STATUS)

const initialState = {
  tableOne: [],
  tableTwo: [],
  isStarted: false
}

export default handleActions(
  {
    [CREATE_ARRAY]: (state, action) => {
      return produce(state, draft => {})
    },
    [GAME_STATUS]: (state, action) => {
      return produce(state, draft => {
        draft.isStarted = action.payload
      })
    }
  },
  initialState
)
