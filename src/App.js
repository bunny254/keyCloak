import useAuth from "./siteComponents/hooks/useAuth";
//import LandingPage from "./siteComponents/landingPage";
import Protected from "./siteComponents/protected";
import Public from "./siteComponents/public";

function App() {
  const isLogin = useAuth();
  return isLogin? <Protected/> : <Public/>
}

export default App;
