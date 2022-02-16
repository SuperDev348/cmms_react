import React from "react";   
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";         
import Button from "@iso/components/uielements/button";
import Input, { InputGroup, Textarea } from "@iso/components/uielements/input";
// import DateTimePicker from "react-datetime-picker";
import { DatePicker } from 'antd';
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import { TableTabsStyle } from "./Asset.styles";
import Tabs, { TabPane } from "@iso/components/uielements/tabs";
import PageWrapper from "./SingleAudit.styles";
// import Checkbox from '@iso/components/uielements/checkbox';
// import workorderAction from "../../redux/workorder/actions";
import { Col, Row, Form } from "antd";
import moment from "moment";
import { NCR ,Report,Plan,Inspection} from "./Tabviews/Tabviews";
import { direction } from '@iso/lib/helpers/rtl';
// import WorkOrderStatusModal from "../../component/WorkOrderStatusModal";
// import MaintenanceTypeModal from "../../component/MaintenanceTypeModal";
import DrillCategoryModal from "../../component/DrillCategoryModal";
import DrillTypeModal from "../../component/DrillTypeModal";
import DrillFrequencyModal from "../../component/DrillFrequencyModal";
// import ProjectModal from "../../component/ProjectModal";
import AssetModal from "../../component/AssetModal"
import UsersContentModal from '../../component/UsersContentModal';
import UsersContentModal1 from '../../component/UsersContentModal';
import AuditStatusModal from '../../component/AuditStatusModal';
import newInnerImg  from '../../assets/images/new-inner-list.png';
import auditAction from '../../redux/audit/actions';

import {
  Fieldset,
  // Form,
  Label, 
} from "../Asset/Facility/OnlineContent.styles";
const FormItem = Form.Item;
const { getById, updateData, deleteData } = auditAction;
function callback(key) {}

const rowStyle = {
  width: "100%",
  display: "flex",
  flexFlow: "row wrap",
};
const colStyle = {
  marginBottom: "16px",
};
const gutter = 16;
const margin = {
  margin: direction === 'rtl' ? '0 0 8px 8px' : '0 8px 8px 0',
};

export default function (props) {
  const dispatch = useDispatch();
  let history = useHistory();
  const { id } = useParams();
  const { audit, isDelete } = useSelector((state) => state.Audit);

  const [assetModalActive, setAssetModalActive] = React.useState(false);
  const [auditorModalActive, setAuditorModalActive] = React.useState(false);
  const [auditeeModalActive, setAuditeeModalActive] = React.useState(false);
  const [statusModalActive, setStatusModalActive] = React.useState(false);

  const [strPassState, setStrPassState]=React.useState("");
  const [strStatus, setStrStatus]=React.useState("");
  const [strTitle, setStrTitle]=React.useState("");
  const [strCode, setStrCode]=React.useState("");
  const [strVessel,setStrVessel]=React.useState("");
  const [strAuditor,setStrAuditor]=React.useState("");
  const [strAuditee,setStrAuditee]=React.useState("");
  const [strISMReference,setStrISMReference]=React.useState("");
  const [strSMSReference,setStrSMSReference]=React.useState("");
  const [aPlan, setAPlan]=React.useState(null);
  const [aReport, setAReport]=React.useState(null);
  const [aNCRCAR, setANCRCAR]=React.useState(null);
  
  const [strPlanAuditPlan,setStrPlanAuditPlan]=React.useState("");
  const [strPlanDate,setStrPlanDate]=React.useState("");
  const [strPlanOpenMeetingBegin,setStrPlanOpenMeetingBegin]=React.useState("");
  const [strPlanOpenMeetingClose,setStrPlanOpenMeetingClose]=React.useState("");
  const [strPlanOpenMeetingPresent,setStrPlanOpenMeetingPresent]=React.useState("");
  const [strPlanOpenMeetingDetail,setStrPlanOpenMeetingDetail]=React.useState("");
  const [strPlanConductAuditBegin,setStrPlanConductAuditBegin]=React.useState("");
  const [strPlanConductAuditClose,setStrPlanConductAuditClose]=React.useState("");
  const [strPlanConductAuditDetail,setStrPlanConductAuditDetail]=React.useState("");
  const [strPlanCloseMeetingBegin,setStrPlanCloseMeetingBegin]=React.useState("");
  const [strPlanCloseMeetingClose,setStrPlanCloseMeetingClose]=React.useState("");
  const [strPlanCloseMeetingPresent,setStrPlanCloseMeetingPresent]=React.useState("");
  const [strPlanCloseMeetingDetail,setStrPlanCloseMeetingDetail]=React.useState("");

  const [aInspectionData, setAInspectionData] = React.useState([]);

  const [strReportAuditReport,setStrReportAuditReport]=React.useState("");
  const [strReportDate,setStrReportDate]=React.useState("");
  const [strReportNCRCARNo,setStrReportNCRCARNo]=React.useState("");
  const [strReportNCStatement,setStrReportNCStatement]=React.useState("");
  const [strReportImmediateAction,setStrReportImmediateAction]=React.useState("");
  const [strReportImmediateCompletionDate,setStrReportImmediateCompletionDate]=React.useState("");
  const [strReportFurtherAction,setStrReportFurtherAction]=React.useState("");
  const [strReportFurtherCompletionDate,setStrReportFurtherCompletionDate]=React.useState("");
  const [strReportFollowUpDetail,setStrReportFollowUpDetail]=React.useState("");
  const [strReportCorrectiveAction,setStrReportCorrectiveAction]=React.useState("");

  const [strNCRPersonName,setStrNCRPersonName]=React.useState("");
  const [strNCRDate,setStrNCRDate]=React.useState("");
  const [strNCRState,setStrNCRState]=React.useState("");
  const [strNCRISMPart,setStrNCRISMPart]=React.useState("");
  const [strNCRSMSPart,setStrNCRSMSPart]=React.useState("");
  const [strNCRCorrectiveAction,setStrNCRCorrectiveAction]=React.useState("");
  const [strNCRImmediateAction,setStrNCRImmediateAction]=React.useState("");
  const [strNCRImmediatePersonName,setStrNCRImmediatePersonName]=React.useState("");
  const [strNCRImmediateCompetionDate,setStrNCRImmediateCompetionDate]=React.useState("");
  const [strNCRFurtherAction,setStrNCRFurtherAction]=React.useState("");
  const [strNCRFurtherPersonName,setStrNCRFurtherPersonName]=React.useState("");
  const [strNCRFurtherCompetionDate,setStrNCRFurtherCompetionDate]=React.useState("");
  const [strNCRVerificationCorrectiveAction,setStrNCRVerificationCorrectiveAction]=React.useState("");
  const [strNCRFollowUpDetail,setStrNCRFollowUpDetail]=React.useState("");
  const [strNCRCorrectiveActionClose,setStrNCRCorrectiveActionClose]=React.useState("");
  
  const planInfo=(info)=>{
    setStrPlanAuditPlan(info.strPlanAuditPlan);
    setStrPlanDate(info.aPlanDate);
    setStrPlanOpenMeetingBegin(info.aPlanOpenMeetingBegin);
    setStrPlanOpenMeetingClose(info.aPlanOpenMeetingClose);
    setStrPlanOpenMeetingPresent(info.aPlanOpenMeetingPresent);
    setStrPlanOpenMeetingDetail(info.strPlanOpenMeetingDetail);
    setStrPlanConductAuditBegin(info.aPlanConductAuditBegin);
    setStrPlanConductAuditClose(info.aPlanConductAuditClose);
    setStrPlanConductAuditDetail(info.strPlanConductAuditDetail);
    setStrPlanCloseMeetingBegin(info.aPlanCloseMeetingBegin);
    setStrPlanCloseMeetingClose(info.aPlanCloseMeetingClose);
    setStrPlanCloseMeetingPresent(info.aPlanCloseMeetingPresent);
    setStrPlanCloseMeetingDetail(info.strPlanCloseMeetingDetail);
  };
  const inspectionInfo = (info) => {
    setAInspectionData(info);
  };
  const reportInfo=(info)=>{
    setStrReportAuditReport(info.strReportAuditReport);
    setStrReportDate(info.aReportDate);
    setStrReportNCRCARNo(info.strReportNCRCARNo);
    setStrReportNCStatement(info.strReportNCStatement);
    setStrReportImmediateAction(info.strReportImmediateAction);
    setStrReportImmediateCompletionDate(info.aReportImmediateCompletionDate);
    setStrReportFurtherAction(info.strReportFurtherAction);
    setStrReportFurtherCompletionDate(info.aReportFurtherCompletionDate);
    setStrReportFollowUpDetail(info.strReportFollowUpDetail);
    setStrReportCorrectiveAction(info.strReportCorrectiveAction);
  };
  const NCRInfo=(info)=>{
    setStrNCRPersonName(info.strNCRPersonName);
    setStrNCRDate(info.aNCRDate);
    setStrNCRState(info.strNCRState);
    setStrNCRISMPart(info.strNCRISMPart);
    setStrNCRSMSPart(info.strNCRSMSPart);
    setStrNCRCorrectiveAction(info.strNCRCorrectiveAction);
    setStrNCRImmediateAction(info.strNCRImmediateAction);
    setStrNCRImmediatePersonName(info.strNCRImmediatePersonName);
    setStrNCRImmediateCompetionDate(info.aNCRImmediateCompetionDate);
    setStrNCRFurtherAction(info.strNCRFurtherAction);
    setStrNCRFurtherPersonName(info.strNCRFurtherPersonName);
    setStrNCRFurtherCompetionDate(info.aNCRFurtherCompetionDate);
    setStrNCRVerificationCorrectiveAction(info.strNCRVerificationCorrectiveAction);
    setStrNCRFollowUpDetail(info.strNCRFollowUpDetail);
    setStrNCRCorrectiveActionClose(info.strNCRCorrectiveActionClose);
  };
  const onUpdate = (status) => {
    var sendData = {
      "smsAuditPlan": {
        "strInternalSmsAuditPlan" : strPlanAuditPlan,
        "aDate" : strPlanDate,
        "aOpenMeetingBegin" : strPlanOpenMeetingBegin,
        "aOpenMeetingClose" : strPlanOpenMeetingClose,
        "aOpenMeetingPresent" : strPlanOpenMeetingPresent,
        "strOpenMeetingDetails" : strPlanOpenMeetingDetail,
        "aConductAuditBegin" : strPlanConductAuditBegin,
        "aConductAuditClose" : strPlanConductAuditClose,
        "strConductAuditDetail" : strPlanConductAuditDetail,
        "aCloseMeetingBegin" : strPlanCloseMeetingBegin,
        "aCloseMeetingClose" : strPlanCloseMeetingClose,
        "aCloseMeetingPresent" : strPlanCloseMeetingPresent,
        "strCloseMeetingDetails" : strPlanCloseMeetingDetail
      },
      "smsAuditInspection" : aInspectionData,
      "smsAuditReport": {
        "strInternalSmsAuditReport": strReportAuditReport,
        "aDate": strReportDate,
        "strNCRCARNo": strReportNCRCARNo,
        "strNCStatement": strReportNCStatement,
        "strImmediateAction": strReportImmediateAction,
        "aImmediateCompletionDate": strReportImmediateCompletionDate,
        "strFurtherAction": strReportFurtherAction,
        "aFurtherCompletionDate": strReportFurtherCompletionDate,
        "strFollowUpDetail": strReportFollowUpDetail,
        "strCorrectiveAction": strReportCorrectiveAction,

      },
      "NCRCAR": {
        "strNCRPersonName": strNCRPersonName,
        "aReportDate": strNCRDate,
        "strNCState": strNCRState,
        "strISMPart": strNCRISMPart,
        "strSMSPart": strNCRSMSPart,
        "strCorrectiveAction": strNCRCorrectiveAction,
        "strImmediateAction": strNCRImmediateAction,
        "strImmediatePersonName": strNCRImmediatePersonName,
        "aImmediateCompetionDate": strNCRImmediateCompetionDate,
        "strFurtherAction": strNCRFurtherAction,
        "strFurtherPersonName": strNCRFurtherPersonName,
        "aFurtherCompetionDate": strNCRFurtherCompetionDate,
        "strVerificationCorrectiveAction": strNCRVerificationCorrectiveAction,
        "strFollowUpDetail": strNCRFollowUpDetail,
        "strCorrectiveActionClose": strNCRCorrectiveActionClose
      },
      "strStatus": strStatus,
      "strDepartmentVessel" : strVessel,
      "strAuditor" : strAuditor,
      "strAuditee" : strAuditee,
      "strTitle" : strTitle,
      "strSMSReference" : strSMSReference,
      "strISMReference" : strISMReference
    };
    console.log(sendData);
    dispatch(updateData(sendData, id));
  };

  const handleCancel = () => {
    // setStatusModalActive(false);
    // setMaintainTypeModalActive(false);
    // setPriorityModalActive(false);
    // setProjectModalActive(false);
    setAssetModalActive(false);
    setAuditorModalActive(false);
    setAuditeeModalActive(false);
    setStatusModalActive(false);
    // setOtherAssetModalActive(false);
  };
  const selectedAsset = (row) => {
    setStrVessel(row.strName);
    // setStrAssets(row.strName+"("+row.strCode+")");
    // setStrAssetIds(row._id.toString()) ;   
  }
  const selectAuditor = (row) => {
    setStrAuditor(row.bolGroup?"Any member of the '"+row.strFullName+"' grop":row.strFullName);    
  }
  const selectAuditee = (row) => {
    setStrAuditee(row.bolGroup?"Any member of the '"+row.strFullName+"' grop":row.strFullName);    
  }
  const selectStatus = (row) => {
    setStrStatus(row.strName);
  }
  const changePassState = (state) => {
    setStrPassState(state);
    if(state == "fail")
      setStrStatus("NCR");
    else
      setStrStatus("complete");
  };
  const onDelete = () => {
    dispatch(deleteData(id));
    history.push("/dashboard/audit");
  };
  React.useEffect(() => {
    dispatch(getById(id));
  }, []);
  React.useEffect(() => {
    if(Object.keys(audit).length !== 0){
      if(audit.audit._id != id)
        return;
      // console.log(audit);
      setStrTitle(audit.audit.strTitle);
      setStrStatus(audit.audit.strStatus);
      setStrCode(audit.audit.strCode);
      setStrVessel(audit.audit.strDepartmentVessel);
      setStrAuditor(audit.audit.strAuditor);
      setStrAuditee(audit.audit.strAuditee);
      setStrISMReference(audit.audit.strISMReference);
      setStrSMSReference(audit.audit.strSMSReference);
      setAPlan(audit.audit.aSmsAuditPlan);
      setAInspectionData(audit.audit.aSmsAuditInspection);
      setAReport(audit.audit.aSmsAuditReport);
      setANCRCAR(audit.audit.aNCRCAR);
    }
  }, [audit])

  return (
    <LayoutWrapper>
      <div className="PageHeader">
        <Link to={"/dashboard/audit"} style={margin}>
          <Button color="primary">
            <span>Back</span>
          </Button>
        </Link>
        <Button type="primary" onClick={onUpdate}  className="updateBtn" style={margin}>
          <span>Update</span>
        </Button>
        <Button type="danger" onClick={onDelete}  className="deleteBtn" style={margin}>
          <span>Delete</span>
        </Button>
      </div>
      <TableTabsStyle className="isoLayoutContentAsset">
        <h4 style={{ marginBottom: "15px" }}>Audit Code: {strCode}</h4>  
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={20} sm={20} xs={24} style={colStyle}>
            <Row style={rowStyle} gutter={gutter} justify="start">
              <Col md={6} sm={6} xs={12} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>Title</Label>
                    <Input
                      label="Title"
                      placeholder=""
                      value={strTitle}
                      onChange={ (event) => {
                        setStrTitle(event.target.value);
                      }}
                      style={{ width: "90%" }}
                    />                     
                  </Fieldset>
                </Form>
              </Col>
              <Col md={6} sm={6} xs={12} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>Department/Vessel</Label>
                    <div style={{ position: "relative" }}>
                      <Input
                        label="Vessel"
                        placeholder=""
                        value={strVessel}
                        style={{ width: "90%" }}
                      />   
                      <i
                        className="ionicons ion-arrow-down-b"
                        onClick={()=>{setAssetModalActive(true)}}
                        style={{
                          fontSize: "25px",
                          cursor: "pointer",
                          position: "absolute",
                          marginLeft: "5px",
                        }}
                      ></i> 
                    </div>            
                  </Fieldset>
                </Form>
              </Col>
            </Row>
            <Row style={rowStyle} gutter={gutter} justify="start">
              <Col md={6} sm={6} xs={12} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>Auditor</Label>
                    <div style={{position:"relative"}}>  
                    <Input
                      label="Auditor"
                      placeholder=""
                      value={strAuditor}
                      style={{ width: "90%" }}
                    />   
                    <i className="ionicons ion-arrow-down-b"
                      onClick={()=>{setAuditorModalActive(true)}}
                      style={{ fontSize: "25px", cursor: "pointer" , 
                      position: "absolute",marginLeft:'4px'}}
                    ></i>
                    </div>
                  </Fieldset>
                </Form>
              </Col>
              <Col md={6} sm={6} xs={12} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>Auditee</Label>
                    <div style={{position:"relative"}}> 
                      <Input
                        label="Auditee"
                        placeholder=""
                        value={strAuditee}
                        style={{ width: "90%" }}
                      />
                      <i className="ionicons ion-arrow-down-b"
                        onClick={()=>{setAuditeeModalActive(true)}}
                        style={{ fontSize: "25px", cursor: "pointer" , 
                        position: "absolute",marginLeft:'4px'}}
                      ></i>    
                    </div>             
                  </Fieldset>
                </Form>
              </Col>
            </Row>
            <Row style={rowStyle} gutter={gutter} justify="start">
              <Col md={6} sm={6} xs={12} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>Audit Status</Label>
                    <div style={{position:"relative"}}>
                    <Input
                      label="Auditor"
                      placeholder=""
                      value={strStatus}
                      style={{ width: "90%" }}
                    />   
                    <i className="ionicons ion-arrow-down-b"
                      onClick={()=>{setStatusModalActive(true)}}
                      style={{ fontSize: "25px", cursor: "pointer",
                      position: "absolute",marginLeft:'4px'}}
                    ></i>   
                    </div>
                  </Fieldset>
                </Form>
              </Col>
              <Col md={6} sm={6} xs={12} style={colStyle}>
                <Form>
                  <Fieldset>
                      <Label>ISM Reference</Label>                   
                      <Input                       
                          placeholder=""
                          value={strISMReference}
                          onChange={ (event) => {
                          setStrISMReference(event.target.value);
                          }}
                          style={{ width: "90%" }}
                      />                     
                  </Fieldset>
                </Form>
              </Col>
              <Col md={6} sm={6} xs={12} style={colStyle}>
                  <Form>
                  <Fieldset>
                      <Label>SMS Reference</Label>                 
                      <Input                       
                          placeholder=""
                          value={strSMSReference}
                          onChange={ (event) => {
                          setStrSMSReference(event.target.value);
                          }}
                      />    
                  </Fieldset>
                  </Form>
              </Col>
            </Row>
          </Col>
        </Row>
        <Tabs defaultActiveKey="1"  className="isoTableDisplayTab" onChange={callback}>
          <TabPane tab="Audit Inspection" key="1" >
            <Inspection
              inspectionInfo={inspectionInfo}
              data = {aInspectionData}
            ></Inspection>
          </TabPane>
          <TabPane tab="Audit Plan" key="2" >
            <Plan
              data={aPlan}
              planInfo={planInfo}
            ></Plan>
          </TabPane>
          <TabPane tab="Audit Report" key="3" >
              <Report
                data={aReport}
                reportInfo={reportInfo}
                changePassState={changePassState}
              ></Report>
          </TabPane>  
          { strPassState == "fail" &&
            <TabPane tab="NCR/CAR" key="4" >
              <NCR
                data={aNCRCAR}
                NCRInfo={NCRInfo}
              ></NCR>
            </TabPane>                         
          }  
        </Tabs>
      </TableTabsStyle>
      <AssetModal
       visible={assetModalActive}      
       title="ASSETS"
       selectedAsset={selectedAsset}
       onCancel={handleCancel}
      ></AssetModal>
      < UsersContentModal
        visible={auditorModalActive}
        title="Auditor"
        group="all"
        selectUser={selectAuditor}
        onCancel={handleCancel}
      >
      </UsersContentModal>
      < UsersContentModal1
        visible={auditeeModalActive}
        title="Auditee"
        group="all"
        selectUser={selectAuditee}
        onCancel={handleCancel}
      >
      </UsersContentModal1>
      < AuditStatusModal
        visible={statusModalActive}
        title="Auditee"
        group="all"
        selectStatus={selectStatus}
        onCancel={handleCancel}
      >
      </AuditStatusModal>
    </LayoutWrapper>
  );
}
