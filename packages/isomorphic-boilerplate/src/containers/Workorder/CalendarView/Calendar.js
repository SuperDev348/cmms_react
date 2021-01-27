import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import Input, { InputSearch } from '@iso/components/uielements/input';
import { Col, Row } from "antd";
// import ModalEvents from './ModalEvents';
import notification from '@iso/components/Notification';
import calendarActions from '@iso/redux/calendar/actions';
import { useHistory } from "react-router-dom";
import WorkOrderFilterModal from "../../../component/WorkOrderFilterModal";
import WorkOrderActions from "../../../redux/workorder/actions";
import userAction from "../../../redux/user/actions";
import { CalendarStyleWrapper } from './Calendar.styles';


const Localizer = momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(Calendar);
const { changeView, changeEvents } = calendarActions;
const { initData ,getCalendarData,updateCalendarData} = WorkOrderActions;
const {getAllUserData}=userAction;

const rowStyle = {
  width: "100%",
  display: "flex",
  flexFlow: "row wrap",
  // marginTop:"-20px",
  // background: "#e0e7ed",
  //height: "38px",
  // marginLeft:"2px",
  paddingBottom:'10px'
  // borderBottom: "1px solid rgb(174,193,208)"
};
const checkInvalid = (val) => {
  let res = "";
  if(val != null && val != undefined)
    res = val;
  return res;
}
const title = (user, hour, date) => {
  let res = "";
  if(user != "")
    res += user + ", ";
  if(hour != "")
    res += hour + ", ";
  if(date != "")
    res += date;
  return res;
}
const mapToRBCFormat = e =>
  Object.assign({}, e, {
    // title: title(checkInvalid(e.assignedUser), checkInvalid(e.intEstimatedHour), checkInvalid(e.dtmSuggestedCompletionDate)),
    start: new Date(e.start),
    end: new Date(e.end)
  });
const getIndex = (events, selectedEvent) =>
  events.findIndex((event) => event.id == selectedEvent.id);


export default function DndCalendar() {
  let history = useHistory();
  const { events, view, workorders } = useSelector(state => state.Workorders);
  const {  users } = useSelector(state => state.Users);
  const [workOrderFilterModalActive,setWorkOrderFilterModalActive]=React.useState(false);
  const [filterTxt,setFilterTxt]=React.useState('(Built in Filter) All Work Orders');
  const [filtered, setFiltered] = React.useState([]);
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    view: view,
    modalVisible: false,
    selectedData: undefined,
  });

  React.useEffect(() => {
       dispatch(getCalendarData());
       dispatch(initData());
      dispatch(getAllUserData());
  }, []);
   
  React.useEffect(() => {
  console.log(events,'this is events');
  setFiltered(events);
}, [events]);

  
  const onSelectEvent = selectedData => {
    console.log(selectedData,'selectedData');
  
    history.push(`/dashboard/workorder/${selectedData.id}`);
    //setState({ ...state, modalVisible: 'update', selectedData });
  };
  const onSelectSlot = selectedData => {
    console.log('selectSlot',selectedData);
    // setState({ ...state, modalVisible: 'new', selectedData });
  };

  const onView = view => {
    console.log(view);
    view = "123";
   dispatch(changeView("view"));
  };
  const moveEvent = ({ event, start, end, isAllDay: droppedOnAllDaySlot }) => {
    let allDay = event.allDay;
    // console.log(event,start,end,'tttt');
    // console.log( new moment(start).format('YYYY-MM-DD HH:mm:ss'));
    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true;
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false;
    }
    // const updatedEvent = { ...event, start, end, allDay };
    // const idx = getIndex(events, updatedEvent);
    // const nextEvents = [...events];
    // nextEvents.splice(idx, 1, updatedEvent);
    
    // dispatch(changeEvents(nextEvents));
    let prevStartDate = new moment(events[getIndex(events, event)].start).toDate();
    let startDate = new moment(start).toDate();
    var diff =(startDate.getTime() - prevStartDate.getTime()) / 1000;
    diff /= (60 * 60);
    let diffHour = Math.round(diff);
    let estimatedHour = events[getIndex(events, event)].intEstimatedHour + diffHour;

    var sendData={};
    sendData.intEstimatedHour = estimatedHour >= 0? estimatedHour: 0;
    dispatch(updateCalendarData(sendData, event._id));

    notification(
      'success',
      'Move event successfully',
      `${event.title} was dropped onto ${event.start}`
    );
  };

  const resizeEvent = ({ event, start, end }) => {
    const nextEvents = events.map(existingEvent => {
      return existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent;
    });

    dispatch(updateCalendarData(nextEvents));
    
    notification(
      'success',
      'Resize event successfully',
      `${event.title} was resized to ${start}-${end}`
    );
  };

  

  const handleCancel=()=>{
    setWorkOrderFilterModalActive(false);
  }
  const selectedFilter=(row)=>{
    var temp=[];
    let full_name="";
    if(Object.keys(row).length ===0){
      setFiltered(events);
      setFilterTxt('(Built in Filter) All Work Orders')
      return;
    }
    if(row._id==localStorage.getItem("user_id")){
      full_name="My Work Order";
      events.forEach((item) => {    
        var rowId=item.intAssignedUserId!=null?item.intAssignedUserId._id:"";
        if(rowId==row._id){
          temp.push(item);
        }
      })
    }
    else if(row.bolGroup){
      let groupId=row._id;
      var temp_array=[];
      for(var i=0;i<users.length;i++){
        if(users[i].strGroupIds!=undefined){
          var temp_a=users[i].strGroupIds;
          temp_a=temp_a.split(",");
          if(temp_a.indexOf(groupId)!==-1){
            temp_array.push(users[i]._id);
          }        
        }
      }
      temp_array.push(row._id);    
      events.forEach((item) => {    
        //console.log(item.intAssignedUserId._id,'item.intAssignedUserId')
        if(temp_array.indexOf(item.intAssignedUserId!=null?item.intAssignedUserId._id:"")!=-1){
          temp.push(item);
        }
      })
      setFiltered(temp);
      full_name="Group: "+row.strFullName;
    }
    else{
      full_name="User: "+row.strFullName;
      events.forEach((item) => {    
        var rowId=item.intAssignedUserId!=null?item.intAssignedUserId._id:"";
        if(rowId==row._id){
          temp.push(item);
        }
      })
    }
    setFiltered(temp);
    console.log(temp);
    setFilterTxt('(Built in Filter) '+full_name)
  }
  return (
 
    <CalendarStyleWrapper className="isomorphicCalendarWrapper">
    <Row style={rowStyle} gutter={16} justify="start">
      <Col md={8} sm={8} xs={12} >
      <div style={{ position: "relative" }}>
          <Input
            value={filterTxt}
            placeholder=""
            style={{ width: "300px" }}
            onChange={()=>setWorkOrderFilterModalActive(true)}
          />
          <i
            className="ionicons ion-arrow-down-b"
            onClick={()=>{setWorkOrderFilterModalActive(true)}}
            style={{
              fontSize: "25px",
              cursor: "pointer",
              position: "absolute",
              marginLeft: "5px",
              marginTop:"4px"
            }}
          ></i>
          </div>    
      </Col>
    </Row>
      {/* <ModalEvents
        modalVisible={state.modalVisible}
        selectedData={state.selectedData}
        setModalData={setModalData}
      /> */}
      <DragAndDropCalendar
        className="isomorphicCalendar"
        selectable
        localizer={Localizer}
        events={filtered.map(mapToRBCFormat)}
        onEventDrop={moveEvent}
        views={['month', 'week','day']}
        resizable
        onEventResize={resizeEvent}
        onSelectEvent={onSelectEvent}
        // onSelectSlot={onSelectSlot}
        onView={onView}
        defaultView="month"
        defaultDate={new Date()}
        step={60}
      />

      <WorkOrderFilterModal 
        visible={workOrderFilterModalActive}
        title="WORK ORDER FILTER"       
        selectUser={selectedFilter}
        onCancel={handleCancel}
      >
      </WorkOrderFilterModal>
    </CalendarStyleWrapper>
    
  );
}
