import React from 'react'
import { Link } from '@reach/router'

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link class="navbar-brand" to="/">Dash | Mi menú digital</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor02">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                </li>
                </ul>
                {/* <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search" />
                <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form> */}
                <Link to='/logout'>Salir</Link>
            </div>
            </nav>
    )
}

export default NavBar