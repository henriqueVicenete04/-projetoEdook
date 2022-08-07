import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'; 
import Home from './components/home';
import Adicionar from './components/post/post'


function App() {
    return (
        <Router>
           
                    <Routes>   
                        <Route exact path='/' element={<Home />} > </Route>

                        <Route exact path='/src/components/post/post.jsx' element={<Adicionar />}> </Route>
                    </Routes>  
        </Router>
    )

}

export default App;