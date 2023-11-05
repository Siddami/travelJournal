import Navbar from './components/Navbar'
import Locations from './components/Locations'
import data from './data'
import './index.css'

function App() {

  const location = data.map((item) => {
    return(
      <Locations
        key = {item.id}
        {...item}
      />
    )
  })

  return (
    <>
      <Navbar/>
      {location}
    </>
  )
}

export default App
