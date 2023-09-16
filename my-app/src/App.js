import css from './App.module.css';
import Sidebar from './components/Sidebar';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithRespose from './components/StatefulGreetingWithResponse';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}

      <Sidebar> </Sidebar>
      <StatefulGreeting myname="Peter">

      </StatefulGreeting>
      <StatefulGreetingWithRespose></StatefulGreetingWithRespose>

    </div>
  );
}

export default App;