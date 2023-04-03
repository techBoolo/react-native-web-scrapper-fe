import { Provider as ReduxStoreProvider } from 'react-redux'
import reduxStore from './redux/store.js'
import { Main } from './navigation/index.js'

export default function App() {
  return (
    <ReduxStoreProvider store={reduxStore}>
      <Main />
    </ReduxStoreProvider>
  );
}

