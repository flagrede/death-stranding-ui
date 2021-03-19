import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import App from './App'
import { setup } from 'twind'

setup({
  theme: {
    extend: {
      colors: {
        menu: {
          effect: '#1EA5C7',
          header: '#3F575A',
          category: '#3F4F81',
          item: '#3E5E8D',
          text: '#90BDBE',
        },
      },
    },
  },
})

ReactDOM.render(<App />, document.getElementById('root'))
