import React from 'react'

const CreateContext = React.createContext({
    items:[],
    totalAmount:0,
    addItem: (item) =>{},
    removeItem: (id) =>{}
})

export default CreateContext;