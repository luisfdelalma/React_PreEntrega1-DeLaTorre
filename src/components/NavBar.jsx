import React from 'react'
import carrito from '../images/shopping-cart.png'

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <h1 class="navbar-brand" href="#">TodoMotos</h1>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Redes Sociales</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Acerca de Nosotros</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorías
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Motocicletas</a></li>
                                <li><a class="dropdown-item" href="#">Accesorios</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <img src={carrito} alt="cart-icon" width="30" height="24" />
                            </a>
                        </li>
                        <li class="nav-item">
                            <h1 class="nav-link" href="#" color='blue'>4</h1>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar