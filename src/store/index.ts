import { configureStore } from '@reduxjs/toolkit';

const movementState = {
  isNodding: false,
};

function movementStateReducer(state = movementState, action: { type: string }) {
  if (action.type === 'startNod') {
    return { ...state, isNodding: true };
  }
  if (action.type === 'stopNod') {
    return { ...state, isNodding: false };
  }
  if (action.type === 'toggleNod') {
    return { ...state, isNodding: !state.isNodding };
  }
  return state;
}

const store = configureStore({
  reducer: { movements: movementStateReducer },
});

export default store;
