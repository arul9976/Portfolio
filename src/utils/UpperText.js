import React from 'react'

const UpperText = (TextName) => {
    return TextName.charAt(0).toUpperCase() + TextName.substring(1)
}

export default UpperText