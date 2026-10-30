import { useEffect } from "react"
import AuthenticationStore from "../stores/authentication"
import Login from "../components/loginPage";

const IndexPage = props => {
  const auth = AuthenticationStore.useContainer();
  useEffect(() => {
    if (auth.isAuthenticated) {
      window.location.href = '/home';
    }
  }, [auth.isAuthenticated]);

  if (auth.isPending || auth.isAuthenticated) {
    return null;
  }

  return <Login />;
}

export default IndexPage;