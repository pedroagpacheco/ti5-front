import { createRoot } from 'react-dom/client'
import { App } from 'common/components/app'

import 'core-js/features/array/flat-map'
import 'core-js/features/map'
import 'core-js/features/promise'
import 'core-js/features/set'
import 'raf/polyfill'
import 'whatwg-fetch'

import './style.scss'

const container = document?.getElementById('app-root')
const root = createRoot(container)
root.render(<App />)
