import React from 'react'

export default function StyleText({style,children}) {
  return (
    <p className={`text-blanco ${style}`}>
        {children}
    </p>
    )
}
;