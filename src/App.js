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
  const setFilter = useStore((state) => state.setFilter);

  return (
    <input value={filter} onChange={(e) => setFilter(e.target.value)} />
  )
}

function App() {
  return (
    <div className="App">
      <div>
        <FilterInput /> 
      </div>
    </div>
  );
}

export default App;
