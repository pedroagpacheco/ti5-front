import { useState, useEffect } from 'react'

import { post } from 'common/services/api'

const ActivationPanel = () => {
  const [actualData, setActualData] = useState({})
  
  const fetchActualState = async () => {
    setActualData(await post('/api/Chuvarduino/GetSensorData'))
  }

  const onClickHandler = async () => {
    await post(
      `/api/Chuvarduino/PostWindowMovement?estado=${actualData[0]?.estado == 1 ? 0 : 1}`
    )

    fetchActualState()
  }

  const toggleActive = () => {
    onClickHandler()
  }

  useEffect(() => {
    setTimeout(() => {
      fetchActualState()
    } , 1000)
  }, [])

  return (
    <div className="w-full mb-2 items-center flex flex-col">
      <h1 className="my-16 text-5xl">
        {actualData[0]?.estado == 1 ? 'A janela está aberta' : 'A janela está fechada'}
      </h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-32"
        onClick={() => {
          toggleActive()
        }}>
        {actualData[0]?.estado == 1 ? 'Fechar Janela' : 'Abrir Janela'}
      </button>
    </div>
  )
}

export default ActivationPanel
