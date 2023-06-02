import { useState, useEffect } from 'react'

import { get, post } from 'common/services/api'
import Switch from '@mui/material/Switch';
import classNames from 'classnames';

const ActivationPanel = () => {
  const [actualData, setActualData] = useState({automatico:"1", estado:"0", valor:"500"})
  const checked = actualData?.automatico == '1'
  
  const fetchActualState = async () => {
    setActualData(await get('/dados'))
  }

  const onClickHandler = async () => {
    await post('/dados', {
      estado: actualData?.estado == '1' ? '0' : '1',
      automatico: '0',
      valor: actualData?.valor
    })

    fetchActualState()
  }

  const toggleActive = () => {
    onClickHandler()
  }

  const handleSwitch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    await post('/dados', {
      estado: actualData?.estado,
      automatico: event.target.checked == true ? '1' : '0',
      valor: actualData?.valor
    })

    fetchActualState()
  };

  useEffect(() => {
    setInterval(() => {
      fetchActualState()
    } , 1000)
  }, [])

  return (
    <div className="w-full mb-2 items-center flex flex-col">
      <h1 className="my-16 text-5xl">
        {actualData?.estado == '1' ? 'A janela está aberta' : 'A janela está fechada'}
      </h1>
      <div className="max-w-7xl mb-8 text-xl">
        Automático: <Switch onChange={handleSwitch} checked={actualData?.automatico == '1'} />
      </div>
      <button
        className={classNames('py-2 px-4 rounded w-32', {
          'bg-blue-500 hover:bg-blue-700 text-white': !checked,
          'bg-gray-500 hover:bg-gray-700 text-black': checked
        })}
        disabled={checked}
        onClick={() => {
          toggleActive()
        }}>
        {actualData?.estado == '1' ? 'Fechar Janela' : 'Abrir Janela'}
      </button>
      <h1 className="max-w-7xl mx-auto my-8 text-2xl">Valor atual de leitura: {actualData?.valor}</h1>
    </div>
  )
}

export default ActivationPanel
