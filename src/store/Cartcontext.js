import React from 'react'

const Cartcontext = React.createContext({
    items: [],

    addItems : (item) => {},
    removeItems : (id) => {}
})

export default Cartcontext