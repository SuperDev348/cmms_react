import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input, { Textarea,InputSearch } from '@iso/components/uielements/input';
import Modal from '@iso/components/Feedback/Modal';
import Select, { SelectOption } from '@iso/components/uielements/select';
// import TableWrapper from "@iso/containers/Tables/AntTables/AntTables.styles";
// import Checkbox, { CheckboxGroup } from '@iso/components/uielements/checkbox';
import { Col, Row } from "antd";
// import ContentHolder from '@iso/components/utility/contentHolder';
// import notification from '@iso/components/Notification';

import './table.css'
// import {
//   ActionBtn,
//   Fieldset,
//   Form,
//   Label, 
// } from './UsersContentModal.styles';


const Option = SelectOption;
export default function (props) {
  const {  visible,title} = props; 
  React.useEffect(() => {
  }, [visible]);

  const [data, setData] = React.useState([]);
  const dispatch = useDispatch();
  const categoryList=["Security","ISM","Statutory","Other","Survey","Crew","SOLAS","Abandon Ship","Collision","Fire","Fire & Safety Gear","Medical","Quarterly Table Top First Aid","Quarterly Table Top Contingency Plan Exercises"];
  // const { status } = useSelector((state) => state.WorkOrderStatus);
  const rowStyle = {
    width: "100%",
    display: "flex",
    flexFlow: "row wrap",
  };

const onRowClick=(id,str)=>{
  props.selectedDrillCategory(id,str);
  props.onCancel();
 
}
 return (
   <div>
     <Modal
       visible={visible}
       onClose={props.onCancel}
      //  okText="New"
       title={title}
       footer={null}      
       onCancel={props.onCancel}
     >
       <div>
         {/* <Row style={rowStyle} gutter={16} justify="start">
           <Col md={12} sm={12} xs={24}></Col>
           <Col md={12} sm={12} xs={24}>
             <InputSearch
               placeholder="input search text"
               // value={category}
               // onChange={onCategorySearchChange}
               style={{ width: "100%" }}
             />
           </Col>
         </Row> */}
       </div>
       <div style={{ marginTop: "3px", height: "270px",overflow:"auto" }}>
         <table>
           <thead>
             <tr>
               <th style={{ width: "70%" }}>
                 <span className="listHeaderLabel35">Name</span>
               </th>
               <th style={{ width: "*" }}>
                 <span className="listHeaderLabel35"></span>
               </th>              
             </tr>
           </thead>

           <tbody>
           {          
              categoryList.map((value,index)=>{
                return  <tr
                  className="listRow"
                  key={index}
                  onClick={() => {
                    onRowClick(index,value);
                  }}
                >
                  <td className="column">
                   <p className="context">{value}</p>
                  </td>
                  <td className="column">
                    <p className="context"></p>
                  </td>               
                </tr>    
              })
            } 
           </tbody>
         </table>
       </div>
     </Modal>
     {/* <Modal
      visible={newModalActive}
      width={350}
      onClose={()=>{setNewModalActive(false)}}     
      title="WORK ORDER STATUS"  
      onOk={onSave}
      onCancel={()=>{setNewModalActive(false)}}
    >
        
        <Form>
          <Fieldset>
           
            <Row style={rowStyle} gutter={16} justify="start">
              <Col md={17} sm={17} xs={24} >
              <Label>Name</Label>
              <Input
                label="Name"
                placeholder=""       
                value={strName}  
                onChange={(event)=>setStrName(event.target.value)}    
            />
                </Col>
                <Col md={7} sm={7} xs={24} >
                      <Label>Control</Label>
                    <Select
                      defaultValue={intControlID}
                      onChange={(event)=>{setIntControlID(event)}}
                      // style={{ width: '120px' }}
                    >
                         <Option value="100">Pending</Option> 
                        <Option value="102">Closed</Option>
                        <Option value="101">Active</Option>
                        <Option value="103">Draft</Option>
                    </Select>
                  
                </Col>
            </Row>
          </Fieldset>          
        </Form>
      </Modal> */}
   </div>
 );
}