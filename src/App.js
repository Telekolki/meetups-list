import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <div>
        <Todo text="Refresh React" />
        <Todo text="Learn Next.JS" />
        <Todo text="Learn D3" />
        <Todo text="Finish the portfolio project" />
      </div>
    </div>
  );
}

export default App;
