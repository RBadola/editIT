import { useState } from 'react'
import FilterState from './components/FilterState'
import ImageView from './components/ImageView'
import Screen from './components/Screen'

function App() {
  return (
    <FilterState>

      <div className="h-screen w-screen flex md:flex-col lg:flex-row bg-slate-600 justify-center items-center space-x-5 ">
        <Screen />
        <ImageView />
      </div>
    </FilterState>
  )
}

export default App
