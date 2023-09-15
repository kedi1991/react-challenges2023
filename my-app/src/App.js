import css from './App.module.css';
import Sidebar from './components/Sidebar';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}

      <Sidebar> </Sidebar>
      <StatefulGreeting myname="Peter">

      </StatefulGreeting>

    </div>
  );
}

export default App;