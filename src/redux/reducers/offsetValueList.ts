
export default function offsetValueList(state = { actualOffset: 0 }, action: any) {
  switch (action.type) {
    case 'SET_OFFSET': {
      const { actualOffset } = action.payload;
      return {
        ...state,
        actualOffset
      }
    }
    default:
      return state;
  }
}
