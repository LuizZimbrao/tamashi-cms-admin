import { BrowserRouter } from 'react-router-dom';

import NavigateBar from "../NavigateBar/NavigateBar";

import Routes from '../../Routes';

import styles from "./App.module.css";
import getCookie from '../../utils/getCookie';

function App() {
  const token = getCookie("token");
  
  return (
    <BrowserRouter>
      <div className={styles["aplication--container"]}>
        {token ? <NavigateBar /> : null}
        <div className={styles["aplication--content"]}>
          <Routes />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
