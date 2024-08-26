// src/routes.js
import Index from 'views/Index.js';
import Register from 'views/auth/Register.js';
import Login from 'views/auth/Login.js';
import Profile from 'views/clinic/Profile.js';
import PatientPage from 'views/clinic/PatientPage.js';
import AppointmentPage from 'views/clinic/AppointmentPage.js';
import TreatmentPage from 'views/clinic/TreatmentPage.js';
import MedicationPage from 'views/clinic/MedicationPage.js';
import StaffPage from 'views/clinic/StaffPage.js';
import UserPage from 'views/clinic/UserPage.js';
import CheckupPage from 'views/clinic/CheckupPage.js';

import Patients from 'views/clinic/Patients.js';
import Maps from 'views/examples/Maps.js';
import Tables from 'views/examples/Tables.js';
import Icons from 'views/examples/Icons.js';

var routes = [
  {
    path: '/index',
    name: 'Dashboard',
    icon: 'ni ni-tv-2 text-primary',
    component: <Index />,
    layout: '/admin',
    roles: ['admin', 'staff', 'doctor', 'patient'],
  },
  {
    path: '/patients',
    name: 'Patients',
    icon: 'ni ni-single-02 text-yellow',
    component: <PatientPage />,
    layout: '/admin',
    roles: ['admin', 'staff', 'doctor'],
  },
  {
    path: '/appointments',
    name: 'Appointments',
    icon: 'ni ni-calendar-grid-58 text-red',
    component: <AppointmentPage />,
    layout: '/admin',
    roles: ['admin', 'staff', 'doctor'],
  },
  {
    path: '/treatments',
    name: 'Treatments',
    icon: 'ni ni-ambulance text-orange',
    component: <TreatmentPage />,
    layout: '/admin',
    roles: ['admin', 'doctor'],
  },
  {
    path: '/medications',
    name: 'Medications',
    icon: 'ni ni-favourite-28 text-blue',
    component: <MedicationPage />,
    layout: '/admin',
    roles: ['admin', 'doctor'],
  },
  {
    path: '/staff',
    name: 'Staff',
    icon: 'ni ni-badge text-green',
    component: <StaffPage />,
    layout: '/admin',
    roles: ['admin'],
  },
  {
    path: '/users',
    name: 'Users',
    icon: 'ni ni-circle-08 text-pink',
    component: <UserPage />,
    layout: '/admin',
    roles: ['admin'],
  },
  {
    path: '/checkups',
    name: 'Checkups',
    icon: 'ni ni-check-bold text-info',
    component: <CheckupPage />,
    layout: '/admin',
    roles: ['admin', 'staff', 'doctor'],
  },
  {
    path: '/patientsori',
    name: 'Pasien',
    icon: 'ni ni-single-02 text-yellow',
    component: <Patients />,
    layout: '/admin',
  },
  {
    path: '/icons',
    name: 'Icons',
    icon: 'ni ni-planet text-blue',
    component: <Icons />,
    layout: '/admin',
  },
  {
    path: '/maps',
    name: 'Maps',
    icon: 'ni ni-pin-3 text-orange',
    component: <Maps />,
    layout: '/admin',
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    icon: 'ni ni-single-02 text-yellow',
    component: <Profile />,
    layout: '/admin',
  },
  {
    path: '/tables',
    name: 'Tables',
    icon: 'ni ni-bullet-Page-67 text-red',
    component: <Tables />,
    layout: '/admin',
  },
  {
    path: '/login',
    name: 'Login',
    icon: 'ni ni-key-25 text-info',
    component: <Login />,
    layout: '/auth',
  },
  {
    path: '/register',
    name: 'Register',
    icon: 'ni ni-circle-08 text-pink',
    component: <Register />,
    layout: '/auth',
  },
];
export default routes;
