import {
  Admin,
  Resource
} from "react-admin";
import { dataProvider } from "./providers/dataProvider";
import { AdminList } from "./pages/Admin/Admins";
import { AdminCreate } from "./pages/Admin/Create";
import { AdminEdit } from "./pages/Admin/Edit";
import { EmployeeList } from "./pages/Employee/Employees";
import { EmployeeCreate } from "./pages/Employee/Create";
import { EmployeeEdit } from "./pages/Employee/Edit";
import { ProjectList } from "./pages/Projects/Projects";
import { ProjectCreate } from "./pages/Projects/Create";
import { ProjectEdit } from "./pages/Projects/Edit";
import ProjectShow from "./pages/Projects/Show";
import authProvider from './providers/authProvider';
import NotFound from './pages/misc/NotFound';
import Dashboard from './pages/misc/Dashboard';
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
      <Resource name="Admin"
        icon={AdminPanelSettingsIcon}
        list={AdminList}
        create={AdminCreate}
        edit={AdminEdit} />
      <Resource name="Employee"
        list={EmployeeList}
        icon={UserIcon}
        create={EmployeeCreate}
        edit={EmployeeEdit} />
      <Resource name="Project"
        list={ProjectList}
        icon={PostIcon}
        create={ProjectCreate}
        edit={ProjectEdit}
        show={ProjectShow} />
    </Admin>
  );
};

export default App;