const initialState = [];
/* const initialState = [{a: 1}, {b: 2}]; */

export const userReducer = (state=initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'LOGIN':
      return payload;
    case 'REGISTER':
      return payload;
    case 'AUTH':
      return payload;
    default:
      return state;
  }
};
