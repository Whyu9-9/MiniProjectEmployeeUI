import {
  Admin,
  Resource
} from "react-admin";
import { dataProvider } from "../providers/dataProvider";
import { AdminList } from "../components/Admin/Admins";
import { AdminCreate } from "../components/Admin/Create";
import { AdminEdit } from "../components/Admin/Edit";
import { EmployeeList } from "../components/Employee/Employees";
import { EmployeeCreate } from "../components/Employee/Create";
import { EmployeeEdit } from "../components/Employee/Edit";
import { ProjectList } from "../components/Projects/Projects";
import { ProjectCreate } from "../components/Projects/Create";
import { ProjectEdit } from "../components/Projects/Edit";
import ProjectShow from "../components/Projects/Show";
import authProvider from '../providers/authProvider';
import NotFound from '../components/misc/NotFound';
import Dashboard from '../components/misc/Dashboard';
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/People';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const App = () => {
  return (
    <Admin
      catchAll={NotFound}
      dashboard={Dashboard}
      authProvider={authProvider}
      dataProvider={dataProvider}>
      <Resource name="Admin" icon={AdminPanelSettingsIcon} list={AdminList} create={AdminCreate} edit={AdminEdit} />
      <Resource name="Employee" list={EmployeeList} icon={UserIcon} create={EmployeeCreate} edit={EmployeeEdit} />
      <Resource name="Project" list={ProjectList} icon={PostIcon} create={ProjectCreate} edit={ProjectEdit} show={ProjectShow} />
    </Admin>
  );
};

export default App;