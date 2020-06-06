const initialState = [];
/* const initialState = [{a: 1}, {b: 2}]; */

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'LOGIN':
      return payload;
    case 'REGISTER':
      return payload;
    case 'AUTH':
      return payload;
    case 'LOGOUT':
      return [];
    default:
      return state;
  }
};
