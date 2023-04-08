import { configureStore } from '@reduxjs/toolkit';

const movementState = {
  isNodding: false,
};

const cameraMoveState = {
  zoomIn: false,
};

function movementReducer(state = movementState, action: { type: string }) {
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

function cameraMoveReducer(state = cameraMoveState, action: { type: string }) {
  if (action.type === 'toggleZoom') {
    return { ...state, zoomIn: !state.zoomIn };
  }
  return state;
}

const store = configureStore({
  reducer: {
    movements: movementReducer,
    cameraMoves: cameraMoveReducer,
  },
});

export default store;
