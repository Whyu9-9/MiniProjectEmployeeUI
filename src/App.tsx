import {
  Admin,
  Resource
} from "react-admin";
import { dataProvider } from "../hooks/dataProvider";
import { AdminList } from "../components/Admins";
import authProvider from '../hooks/authProvider';
import NotFound from '../components/NotFound';
import Dashboard from '../components/Dashboard';

const App = () => {
  return (
    <Admin
      catchAll={NotFound}
      dashboard={Dashboard}
      authProvider={authProvider}
      dataProvider={dataProvider}>
      <Resource name="Admin" list={AdminList} />
    </Admin>
  );
};

export default App;