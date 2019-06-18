import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'

const CREATE_ARRAY = 'bingo/CREATE_ARRAY'

export const createArray = createAction(CREATE_ARRAY)

const initialState = {
  tableOne: [],
  tableTwo: []
}

export default handleActions(
  {
    [CREATE_ARRAY]: (state, action) => {
      return produce(state, draft => {})
    }
  },
  initialState
)
