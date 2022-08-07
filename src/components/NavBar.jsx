import{Link} from 'react-router-dom'

import'./NavBar.css'



function NavBar() {
    return (
        <header>
        <div className="container">
            <div className="logo" >
                <h1>Edook</h1>
            </div>

            <div className="btn-newPost" >

                <Link to="/src/components/post/post.jsx" >
                    <button>Add new Post</button>
                </Link>

            </div>
           
        </div>
    </header>
    );
}

export default NavBar