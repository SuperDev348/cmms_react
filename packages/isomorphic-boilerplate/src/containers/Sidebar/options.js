const options = [
  // {
  //   key: 'blankPage',
  //   label: 'sidebar.blankPage',
  //   leftIcon: 'ion-document',
  // },
  // {
  //   key: 'authCheck',
  //   label: 'sidebar.authCheck',
  //   leftIcon: 'ion-chatbubbles',
  // },
  // {
  //   key: 'user',
  //   label: 'sidebar.Users',
  //   leftIcon: 'ion-document',
  // },
  {
    key: 'dashboards',
    label: 'sidebar.dashboard',
    leftIcon: 'ion-android-options',
    children: [
      {
        key: 'calendar',
        label: 'sidebar.calendar',
      },
      // {
      //   key: 'kanban',
      //   label: 'sidebar.kanban',
      // },
        
    ],
  },
  {
    key: 'assets',
    label: 'sidebar.Assets',
    leftIcon: 'ion-bag',
    children: [
      {
        key: 'asset',
        label: 'sidebar.allAssets',
      },
        
    ],
  },
  {
    key: 'Maintenance',
    label: 'siderbar.Maintenance',
    leftIcon: 'ion-ios-paper',
    children: [
      {
        key: 'workorder',
        label: 'sidebar.WorkOrder',       
      },  
      {
        key:'scheduledmaintenance',
        label:'sidebar.ScheduledMaintenance'
      },
      {
        key: 'project',
        label: 'sidebar.Project',
      },   
    ],
  },
  {
    key: 'Safety',
    label: 'sidebar.Safety',
    leftIcon: 'ion-clipboard',
    children: [
      {
        key: 'audit',
        label: 'sidebar.Aduit',       
      },  
      {
        key: 'scheduledaudit',
        label: 'sidebar.ScheduledAduit',
      },  
      {
        key:'drill',
        label:'sidebar.Drill'
      },
      {
        key:'scheduleddrill',
        label:'sidebar.ScheduledDrill'
      }     
    ],
  },
  
  {
    key: 'settings',
    label: 'siderbar.Settings',
    leftIcon: 'ion-bag',
    children: [
      {
        key: 'user',
        label: 'sidebar.Users',
      },
      {
        key: 'usergroup',
        label: 'sidebar.Groups',
      },
      {
        key: 'business',
        label: 'sidebar.Business',
      },  
      {
        key: 'cmmssetting',
        label: 'sidebar.cmmsSettings',
      },     
    ],
  },
  // {
  //   key: 'scheduling',
  //   label: 'sidebar.Business',
  //   leftIcon: 'ion-calendar',
  // },
];
export default options;
