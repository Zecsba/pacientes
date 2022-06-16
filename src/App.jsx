import {useState} from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'

function App() {

  const [pacientes, setPacientes] = useState([]) 
  const [paciente, setPaciente] = useState({})

  return (
    <div className='container mx-auto mt-3'>
      <Header />
      <div className='md:flex mt-12'>

        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
        />
        <ListadoPacientes 
        pacientes={pacientes}
        setPaciente={setPaciente}
        />

      </div>
    </div>
  )
}

export default App