const initialState = [];
/* const initialState = [{a: 1}, {b: 2}]; */

export const eventReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'ADD_EVENT':
      return payload;
    default:
      return state;
  }
};
