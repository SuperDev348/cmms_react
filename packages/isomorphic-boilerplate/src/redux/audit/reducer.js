// import clone from 'clone';
import actions from './actions';
const initState = {  
  audits:[],
  audit:{},
  isDelete:false,
};

export default function cardReducer(state = initState, { type, ...action }) {
  switch (type) {
    case actions.ADD_SUCCESS:
      return {
        ...state,             
        audits: [],        
      };
    case actions.ADD_FAILED:
      return {
        ...state,        
        audits: [],             
      };
    case actions.GET_AUDIT_REDUCER: {
      return {
        ...state,
        audits: action.audits,      
        isDelete:false
      };
    }
    case actions.GET_AUDIT_BY_ID_REDUCER: {
      return {
        ...state,
        audit: action.audit,        
      };
    }
    case actions.UPDATE_SUCCESS:
      return {
        ...state,      
        audits: [],
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
