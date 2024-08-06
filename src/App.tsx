import { FC } from "react";
import Routes from "./app/routes/router";
import { Provider } from "react-redux";
import { store } from "./app/store";

const App: FC = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
