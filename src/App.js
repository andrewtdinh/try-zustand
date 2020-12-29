import './App.css';
import create from 'zustand';

const useStore = create((set) => ({
  filter: '',
  pokemon: [],
  setFilter: (filter) => set((state) => ({
    ...state,
    filter,
  })),
  setPokemon: (pokemon) => set((state) => ({
    ...state,
    pokemon,
  })),
}))

const FilterInput = () => {
  const filter = useStore((state) => state.filter);
  return (
    <input value={filter} />
  )
}

function App() {
  return (
    <div className="App">
      <div>
      </div>
    </div>
  );
}

export default App;
