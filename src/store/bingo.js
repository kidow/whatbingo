import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'

const CREATE_TABLE = 'bingo/CREATE_TABLE'
const GAME_STATUS = 'bingo/GAME_STATUS'
const CHECK_CELL = 'bingo/CHECK_CELL'

export const createTable = createAction(CREATE_TABLE)
export const gameStatus = createAction(GAME_STATUS)
export const checkCell = createAction(CHECK_CELL)

const initialState = {
  tableOne: [],
  tableTwo: [],
  isStarted: false
}

export default handleActions(
  {
    [CREATE_TABLE]: (state, action) => {
      return produce(state, draft => {
        const { tableOne, tableTwo } = action.payload
        draft.tableOne = tableOne
        draft.tableTwo = tableTwo
      })
    },
    [GAME_STATUS]: (state, action) => {
      return produce(state, draft => {
        draft.isStarted = action.payload
      })
    },
    [CHECK_CELL]: (state, action) => {
      return produce(state, draft => {
        const { index, player } = action.payload
        if (player === 'one') draft.tableOne[index] = 0
        else draft.tableTwo[index] = 0
      })
    }
  },
  initialState
)
