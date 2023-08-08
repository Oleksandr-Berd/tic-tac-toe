import { useState } from "react";


import SharedLayout from "./components/SharedLayout/SharedLayout";
import StartedForm from "./components/StartedForm/StartedForm";
import { GlobalStyles } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import darkTheme from "./styles/darkTheme";
import GameBoard from "./components/GameBoard/GameBoard";

const App: React.FC = (): JSX.Element => {
  const [playersMark, setPlayersMark] = useState<{ player1: string; player2: string }>({
    player1: "",
    player2: "",
  });

  const handleSubmit = (playerMark: string):void => {
    
    if (playerMark === "x") {
      setPlayersMark({ player1: playerMark, player2: "o" });
    } else {
      setPlayersMark({ player1: playerMark, player2: "x" });
    }
  };

  const { player1, player2 } = playersMark
  
  
  return (
    <div className="App" id="app">
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <SharedLayout>
          {player1 && player2 ? <GameBoard player1={player1} player2={player2} /> : <StartedForm submit={handleSubmit}/>}
          
        </SharedLayout>
      </ThemeProvider>
    </div>
  );
};

export default App;
