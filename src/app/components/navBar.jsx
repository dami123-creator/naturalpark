import '../styles/navBar.css';

const NavBar = () => {
    return(
    <header id="header">
        <div class="container">
            <div id="logo" class="pull-left">
                <a href="index.html" class="scrollto"><img src="assets/img/logo.png" alt="" title=""/></a>
        </div>
        <nav id="nav-menu-container">
            <ul class="nav-menu">
                <li class="menu-active"><a href="">Home</a></li>
                <li><a href="#about">¿Quiénes somos?</a></li>
                <li><a href="#speakers">Presupuestos</a></li>
                <li><a href="#venue">Sobre nosotros</a></li>
                <li><a href="#trabajos">Trabajos</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
        </div>
    </header>
    )
}

export default NavBar;