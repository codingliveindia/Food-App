import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { Provider as StoreProvider } from 'react-redux'

import Navigation from './src/routes/navigation'
import { perisister, store } from './src/redux/store'
import { PersistGate } from 'redux-persist/integration/react'
const App = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate persistor={perisister} >
        <Navigation />
      </PersistGate>
    </StoreProvider >
  )
}

export default App