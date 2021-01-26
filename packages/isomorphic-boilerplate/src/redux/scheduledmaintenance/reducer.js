// import clone from 'clone';
import actions from "./actions";
const initState = {
  scheduledmaintenances:[],  
  scheduledmaintenance:{},
  codeName:"",
  smID:null
};

export default function cardReducer(state = initState, { type, ...action }) {
  switch (type) {
    case actions.ADD_SM_SUCCESS:
      return {
        ...state,      
        codeName:action.data.strCode,
        smID:action.data.id,     
      };
  
    case actions.GET_SM_REDUCER: {
    
      return {
        ...state,
        scheduledmaintenances:action.data,  
        scheduledmaintenance:{},
        isDelete: false,        
      };
    }
    case actions.GET_SM_BYID_REDUCER: {
      return {
        ...state,
        scheduledmaintenance: action.data,
        isDelete: false,
      };
    }    
    case actions.DELETE_SM_SUCCESS:
      return {
        ...state,     
        isDelete: true,
      };
  
    default:
      return state;
  }
}
