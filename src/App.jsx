import Day from "./components/Day";
import styles from "./index.css"

function App() {
  const week = ['Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado', 'Domingo'];

  return (
    <main>
      <h1 className="titulo">Planner Semanal</h1>
      <div className="days">{week.map(day => <Day key={day} day={day}/>)}</div>
    </main>
  )
}

export default App
