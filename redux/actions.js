export const addEvent = (selectedEvent) => async (dispatch) => {
  dispatch({type: 'ADD_EVENT',payload:selectedEvent});
};
