import { Provider } from 'react-redux'
import ListaDeContatos from './containers/ListaDeContatos'
import EstiloGlobal from './styles'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <ListaDeContatos />
    </Provider>
  )
}

export default App
