import { Header } from 'common/components/header'
import { ActivationPanel } from 'common/components/activationPanel'

import './app.scss'

const App = () => (
  <div className="w-screen h-screen">
    <Header title='Chuvarduino' />
    <ActivationPanel />
    <h1 className="max-w-7xl mx-auto my-8 text-2xl">Estatísticas:</h1>
  </div>
)

export default App
