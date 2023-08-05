import SharedLayout from "./components/SharedLayout/SharedLayout";
import StartedForm from "./components/StartedForm/StartedForm";
import Icons from './components/Icons/Icons';
import { GlobalStyles } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import darkTheme from "./styles/darkTheme";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
      <GlobalStyles/>
      <SharedLayout>
        <Icons/>
        <StartedForm/>
        </SharedLayout>
      </ThemeProvider>
    </div>
  );
}

export default App;
