// import clone from 'clone';
import actions from './actions';
const initState = {  
  scheduleddrills:[],
  scheduleddrill:{},
  isDelete:false,
};

export default function cardReducer(state = initState, { type, ...action }) {
  switch (type) {
    case actions.ADD_SUCCESS:
      return {
        ...state,             
        scheduleddrills: [],        
      };
    case actions.ADD_FAILED:
      return {
        ...state,        
        scheduleddrills: [],             
      };
    case actions.GET_SCHEDULED_DRILL_REDUCER: {
      return {
        ...state,
        scheduleddrills: action.scheduleddrills,      
        isDelete:false
      };
    }
    case actions.GET_SCHEDULED_DRILL_BY_ID_REDUCER: {
      return {
        ...state,
        scheduleddrill: action.scheduleddrill,        
      };
    }
    case actions.UPDATE_SUCCESS:
      return {
        ...state,      
        scheduleddrills: [],
        //isUpdateUser:true
      };
     case actions.DELETE_FAILED:
        return {
          ...state,    
          isDelete:false
        };
        case actions.DELETE_SUCCESS:
          return {
            ...state, 
           // assets:[],         
            isDelete:true
          };  
    default:
      return state;
  }
}
