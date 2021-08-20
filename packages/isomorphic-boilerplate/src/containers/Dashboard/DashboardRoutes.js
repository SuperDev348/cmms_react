import React, { lazy, Suspense } from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import Loader from '@iso/components/utility/loader';

const routes = [
  {
    path: '',
    component: lazy(() => import('../DashboardHomePage')),
    exact: true,
  },

  {
    path: 'calendar',
    component: lazy(() =>
    import('../Workorder/CalendarView/Calendar')),    
  },
  {
    path: 'kanban',
    component: lazy(() =>
    import('../ScrumBoard/index')),    
  },
  {
    path: 'authCheck',
    component: lazy(() => import('../AuthCheck')),
  },
  {
    path: 'user/add',
    component: lazy(() => import('../User/AddUser')),
  },
  {
    path: 'user/edit/:userId',
    component: lazy(() => import('../User/EditUser')),
  },
  {
    path: 'user',
    component: lazy(() => import('../User/Users')),
  },
  {
    path: 'usergroup/add',
    component: lazy(() => import('../Usergroup/AddUserGroup')),
  },
  {
    path: 'usergroup/edit/:groupId',
    component: lazy(() => import('../Usergroup/EditUserGroup')),
  },
  {
    path: 'usergroup',
    component: lazy(() => import('../Usergroup/UserGroup')),
  },
  {
    path: 'business',
    component: lazy(() => import('../Business/EditBusiness')),
  },
  {
    path: 'cmmssetting',
    component: lazy(() => import('../CmmsSetting/CmmsSetting')),
  },
  {
    path: 'asset/equipment/:assetId',
    component: lazy(() => import('../Asset/Equipment/EditAsset')),
  },
  {
    path: 'asset/add/equipment',
    component: lazy(() => import('../Asset/Equipment/AddAsset')),
  },
  {
    path: 'asset/facility/:assetId',
    component: lazy(() => import('../Asset/Facility/EditAsset')),
  },
  {
    path: 'asset/add/facility',
    component: lazy(() => import('../Asset/Facility/AddAsset')),
  },
  {
    path: 'asset/tool/:assetId',
    component: lazy(() => import('../Asset/Tools/EditAsset')),
  },
  {
    path: 'asset/add/tools',
    component: lazy(() => import('../Asset/Tools/AddAsset')),
  },
  
  {
    path: 'asset',
    component: lazy(() => import('../Asset/Assets')),
  },
  {
    path: 'assetCategory',
    component: lazy(() => import('../BlankPage')),
  },
  {
    path: 'workorder/add',
    component: lazy(() => import('../Workorder/SingleWorkOrder')),
  },
  {
    path: 'workorder/:id',
    component: lazy(() => import('../Workorder/SingleWorkOrder')),
  },
  {
    path: 'workorder',
    component: lazy(() => import('../Workorder/Workorder')),
  },
  {
    path: 'drill/add',
    component: lazy(() => import('../Drill/AddDrill')),
  },
  {
    path: 'drill/:id',
    component: lazy(() => import('../Drill/EditDrill')),
  },
  {
    path: 'drill',
    component: lazy(() => import('../Drill/Drills')),
  },
  {
    path: 'audit/add',
    component: lazy(() => import('../Aduit/AddAduit')),
  },
  {
    path: 'audit/:id',
    component: lazy(() => import('../Aduit/EditAudit')),
  },
  {
    path: 'audit',
    component: lazy(() => import('../Aduit/Aduits')),
  },
  {
    path: 'scheduleddrill/add',
    component: lazy(() => import('../ScheduledDrill/AddScheduledDrill')),
  },
  {
    path: 'scheduleddrill/:id', 
    component: lazy(() => import('../ScheduledDrill/EditScheduledDrill')),
  },
  {
    path: 'scheduleddrill', 
    component: lazy(() => import('../ScheduledDrill/ScheduledDrills')),
  },
  {
    path: 'scheduledaudit/add',
    component: lazy(() => import('../ScheduledAudit/AddScheduledAudit')),
  },
  {
    path: 'scheduledaudit/:id', 
    component: lazy(() => import('../ScheduledAudit/EditScheduledAudit')),
  },
  {
    path: 'scheduledaudit', 
    component: lazy(() => import('../ScheduledAudit/ScheduledAudits')),
  },
  {
    path: 'scheduledmaintenance/add',
    component: lazy(() => import('../ScheduledMaintenace/AddScheduledMaintenace')),
  },
  {
    path: 'scheduledmaintenance/:id',
    component: lazy(() => import('../ScheduledMaintenace/EditScheduledMaintenace')),
  },
  {
    path: 'scheduledmaintenance',
    component: lazy(() => import('../ScheduledMaintenace/ScheduledMaintenace')),
  },
  
  {
    path: 'project/add',
    component: lazy(() => import('../Project/AddProject')),
  },
  {
    path: 'project/edit/:id',
    component: lazy(() => import('../Project/EditProject')),
  },
  {
    path: 'project',
    component: lazy(() => import('../Project/Project')),
  },
  // {
  //   path: 'scheduling',
  //   component: lazy(() => import('../Scheduling/Scheduling')),
  // },
  // {
  //   path: 'asset',
  //   component: lazy(() => import('../Asset/Assets')),
  // },
];

export default function AppRouter() {
  const { url } = useRouteMatch();
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {routes.map((route, idx) => (
          <Route exact={route.exact} key={idx} path={`${url}/${route.path}`}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </Suspense>
  );
}
