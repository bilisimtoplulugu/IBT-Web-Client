const initialState = [];
/* const initialState = [{a: 1}, {b: 2}]; */

export const eventReducer = (state = "5ec8c1784d408b3ba419df07", action) => {
  const {type, payload} = action;
  switch (type) {
    case 'ADD_EVENT':
      return payload;
    default:
      return state;
  }
};
