import './App.css';
import Menu from './components/Menu';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Routes from './Route';



function App() {
  
  return (
    <Router>
    <div className="wrapper">
         <Menu/>
        <Switch>
        {showContenMenu(Routes)}

          

          
        
        </Switch>
        
    </div>
   
    </Router>
  );
}

 function showContenMenu(Routes){
   
  const Result = Routes.map((route, index)=>(
    
            <Route
              key={index}
              path= {route.path}
              exact = {route.exact}
              component = {route.main}
            >
            </Route>
          ))
  return Result;
}


export default App;
