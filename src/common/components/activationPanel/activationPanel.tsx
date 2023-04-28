import { useState } from 'react'
import { get } from 'common/services/api'

const onClickHandler = () => {
  get('https://localhost:5000/api/Chuvarduino/GetSensorData')
}

const ActivationPanel = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleActive = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="w-full mb-2 items-center flex flex-col">
      <h1 className="my-16 text-5xl">
        {isOpen ? 'A janela está aberta' : 'A janela está fechada'}
      </h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-32"
        onClick={() => {
          toggleActive();
          onClickHandler();
        }}>
        {isOpen ? 'Fechar Janela' : 'Abrir Janela'}
      </button>
    </div>
  )
}

export default ActivationPanel
