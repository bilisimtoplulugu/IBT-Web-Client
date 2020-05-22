export const addEvent = (selectedEvent) => async (dispatch) => {
  console.log(selectedEvent);
  dispatch({type: 'ADD_EVENT',payload:selectedEvent});
};
