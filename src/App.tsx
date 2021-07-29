import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'
import { Room } from './pages/Room';

import { AuthContextProvider } from './contexts/AuthContext';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from "./styles/theme/GlobalStyles";
import { defaultTheme } from "./styles/theme/Themes";
import { AdminRoom } from './pages/AdminRoom';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Router>
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rooms/new" component={NewRoom} />
            <Route path="/rooms/:id" component={Room} />
            <Route path="/admin/rooms/:id" component={AdminRoom} />
          </Switch>
        </AuthContextProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
