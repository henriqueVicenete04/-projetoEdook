import{Link} from 'react-router-dom'
import Back from './components/img/botao.png'
import MyDropzone from "../drop" 

import './post.css'

function adicionar (){
    return(
        <div>
            <header>
                    <div className="container">

                        <Link to="/" >
                            <img src={Back} style={{width: '50px'}} />
                        </Link>
                        
                    </div>
            </header>
            <div className='main'>
                    <div className='card-post'>
                        <h1>criar postagens</h1>
                        <div className='line-post'></div>
                        
                            <form>
                            <div className='card-doby-post'>
                                <div className='fields'>
                                    <label>Titulo</label>
                                    <input type="text" />
                                </div>

                                <div className='fields'>
                                    <label>descrição </label>
                                    <input type="text" />
                                </div>

                                <div className='box'>
                                    <p>tema do livros:</p>
                                    <select name="cars">
                                        <option value="poesia">poesia</option>
                                        <option value="prosa">prosa</option>
                                        <option value="romance">romance</option>
                                        <option value="fantasia">fantasia</option>
                                        <option value="Biografia">Biografia</option>
                                    </select> 
                                  
                                </div>

                                
                                <div className='Upload'><MyDropzone /></div>
                                

                                <div className='btn-post'>
                                    <button type='submit'>enviar</button>
                                </div>

                                </div> 
                            </form>
                        
                       
                        
                    </div>
                

                </div>
            </div>    

    


        
    )
}

export default adicionar