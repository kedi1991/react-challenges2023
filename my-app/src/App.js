import css from './App.module.css';
import NavBarSimple from './components/NavBarSimple';
import Sidebar from './components/Sidebar';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithRespose from './components/StatefulGreetingWithResponse';
import ClassEvents from './components/events/ClassEvents';
import FunctionalEvents from './components/events/FunctionalEvents';
import Car from './components/nested/Car';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}

      <Sidebar> </Sidebar>
      <StatefulGreeting myname="Peter">

      </StatefulGreeting>
      <StatefulGreetingWithRespose></StatefulGreetingWithRespose>

      <NavBarSimple>

      </NavBarSimple>

      <ClassEvents>

      </ClassEvents>
      <FunctionalEvents>

      </FunctionalEvents>

      <Car sizeT = "20" costT="15,000" yearT="1995" sizeB="5" costB="98,000" yearB="2021" >

      </Car>

    </div>
  );
}

export default App;