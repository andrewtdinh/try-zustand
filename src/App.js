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

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
