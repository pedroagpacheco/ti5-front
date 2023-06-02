import { Header } from 'common/components/header'
import { ActivationPanel } from 'common/components/activationPanel'

import './app.scss'

const App = () => (
  <div className="w-screen h-screen">
    <Header title='Chuvarduino' />
    <ActivationPanel />
  </div>
)

export default App
