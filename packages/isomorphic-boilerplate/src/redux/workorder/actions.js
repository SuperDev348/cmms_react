const actions = {
  GET_WORKORDERS: "GET_WORKORDERS",
  GET_CALENDAR_DATAS: "GET_CALENDAR_DATAS",
  GET_WORKORDER_CALENDAR_REDUCER:"GET_WORKORDER_CALENDAR_REDUCER",
  ADD_WORKORDER: "ADD_WORKORDER",
  ADD_WORKORDER_FROM_TASK:"ADD_WORKORDER_FROM_TASK",
  ADD_WORKORDER_SUCCESS: "ADD_WORKORDER_SUCCESS",
  ADD_FAILED: "ADD_FAILED",
  GET_WORKORDER_REDUCER: "GET_WORKORDER_REDUCER",
  GET_WORK_ORDER_BY_ID: "GET_WORK_ORDER_BY_ID",
  GET_BY_ID_REDUCER: "GET_BY_ID_REDUCER",
  UPDATE_WORKORDER: "UPDATE_WORKORDER",
  UPDATE_WORKORDER_CALENDAR:"UPDATE_WORKORDER_CALENDAR",
  UPDATE_SUCCESS:'UPDATE_SUCCESS',
  DELETE_WORKORDER:'DELETE_WORKORDER',
  DELETE_SUCCESS:'DELETE_SUCCESS',
  DELETE_FAILED:'DELETE_FAILED',

  initData: () => ({ type: actions.GET_WORKORDERS }),
  getCalendarData: () => ({ type: actions.GET_CALENDAR_DATAS }),
  add: (sendData) => {
    return (dispatch, getState) => {
      dispatch({ type: actions.ADD_WORKORDER, payload: { sendData: sendData } });
    };
  },
  addWorkOrder: (sendData) => {
    return (dispatch, getState) => {
      dispatch({ type: actions.ADD_WORKORDER_FROM_TASK, payload: { sendData: sendData } });
    };
  },
  getById: (id) => {
    return (dispatch) => {
      dispatch({ type: actions.GET_WORK_ORDER_BY_ID, payload: { id: id } });
    };
  },
  deleteData: (selected) => {
    return (dispatch) => {
      dispatch({
        type: actions.DELETE_WORKORDER,
        payload: {id:selected}
      });
    };
  },
  updateData: (sendData, id) => {
    return (dispatch) => {
      dispatch({
        type: actions.UPDATE_WORKORDER,
        payload: { sendData: sendData, id: id },
      });
    };
  },
  updateCalendarData: (sendData, id) => {
    return (dispatch) => {
      dispatch({
        type: actions.UPDATE_WORKORDER_CALENDAR,
        payload: { sendData: sendData, id: id },
      });
    };
  },
};
export default actions;
