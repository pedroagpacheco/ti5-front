import { useState, useEffect } from 'react'
import { get, post } from 'common/services/api'
import Switch from '@mui/material/Switch';
import classNames from 'classnames';

const ActivationPanel = () => {
  const [actualData, setActualData] = useState({})
  const [checked, setChecked] = useState(true)
  
  const fetchActualState = async () => {
    setActualData(await get('/dados'))
  }

  const onClickHandler = async () => {
    await post('/dados', { estado: actualData[0]?.estado == 1 ? 0 : 1 })

    fetchActualState()
  }

  const toggleActive = () => {
    onClickHandler()
  }

  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  };

  useEffect(() => {
    console.log(checked)
  }, [checked])

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
      <div className="max-w-7xl mb-8">
        <Switch onChange={handleSwitch} checked={checked} />
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
        {actualData[0]?.estado == 1 ? 'Fechar Janela' : 'Abrir Janela'}
      </button>
    </div>
  )
}

export default ActivationPanel
