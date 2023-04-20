import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyles } from "./styles/global";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
