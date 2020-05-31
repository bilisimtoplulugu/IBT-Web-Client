const initialState = [];
/* const initialState = [{a: 1}, {b: 2}]; */

export default (state=initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'GET':
      return payload;
    default:
      return state;
  }
};
