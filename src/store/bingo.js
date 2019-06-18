import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'

const INITIALIZE = 'bingo/INITIALIZE'
const CREATE_TABLE = 'bingo/CREATE_TABLE'
const GAME_STATUS = 'bingo/GAME_STATUS'
const CHECK_CELL = 'bingo/CHECK_CELL'
const STACK_UP = 'bingo/STACK_UP'

export const initialize = createAction(INITIALIZE)
export const createTable = createAction(CREATE_TABLE)
export const gameStatus = createAction(GAME_STATUS)
export const checkCell = createAction(CHECK_CELL)
export const stackUp = createAction(STACK_UP)

const initialState = {
  tableOne: [],
  tableTwo: [],
  isStarted: false,
  stack: []
}

export default handleActions(
  {
    [INITIALIZE]: _ => initialState,
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
        const { row, cell, player } = action.payload
        if (player === 'one') draft.tableOne[row][cell] = 0
        else draft.tableTwo[row][cell] = 0
      })
    },
    [STACK_UP]: (state, action) => {
      return produce(state, draft => {
        draft.stack.push(action.payload)
      })
    }
  },
  initialState
)
