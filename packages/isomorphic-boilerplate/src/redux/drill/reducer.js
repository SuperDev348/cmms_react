// import clone from 'clone';
import actions from './actions';
const initState = {  
  drills:[],
  drill:{},
  isDelete:false,
};

export default function cardReducer(state = initState, { type, ...action }) {
  switch (type) {
    case actions.ADD_SUCCESS:
      return {
        ...state,             
        drills: [],        
      };
    case actions.ADD_FAILED:
      return {
        ...state,        
        drills: [],             
      };
    case actions.GET_DRILL_REDUCER: {
      return {
        ...state,
        drills: action.drills,      
        isDelete:false
      };
    }
    case actions.GET_DRILL_BY_ID_REDUCER: {
      return {
        ...state,
        drill: action.drill,        
      };
    }
    case actions.UPDATE_SUCCESS:
      return {
        ...state,      
        drills: [],
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
