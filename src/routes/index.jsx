import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ROUTES } from '../utils'

const MY_ROUTES = () => {
  return (
    <div>
      <Routes>
        {
          ROUTES.map((item) => (
            <Route
              key={item.id}
              path={item.route}
              element={item.page}
            />
          ))
        }
      </Routes>
    </div>
  )
}

export default MY_ROUTES
