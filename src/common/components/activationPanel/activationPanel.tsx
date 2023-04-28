import { useState, useEffect } from 'react'

import { get } from 'common/services/api'

const ActivationPanel = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [actualData, setActualData] = useState({})
  
  const onClickHandler = async () => {
    setActualData(await get('http://localhost:5000/api/Chuvarduino/GetSensorData'))
  }

  const toggleActive = () => {
    setIsOpen(!isOpen)
    onClickHandler()
  }

  return (
    <div className="w-full mb-2 items-center flex flex-col">
      <h1 className="my-16 text-5xl">
        {isOpen ? 'A janela está aberta' : 'A janela está fechada'}
      </h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-32"
        onClick={() => {
          toggleActive()
        }}>
        {isOpen ? 'Fechar Janela' : 'Abrir Janela'}
      </button>
    </div>
  )
}

export default ActivationPanel
