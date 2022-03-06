import './styles.css'
function NavBar(){
    const items = document.querySelectorAll('.menu a[href^="#"]')
    items.forEach(item =>{
        item.addEventListener('click', scrollToId);

    })
    const scrollToId = (event)=>{
        event.preventDefault();
        const element = event.target;
        const id = element.getAttribute('href');
        const to = document.querySelector(id).offsetTop;
        window.scroll({
            top:to - 90,
            behavior: "smooth",
        })
    }
    return(
        <nav className='menu' >
            <ul>
                <li><a href="#home" >Home</a></li>
                <li><a href="#about" >Sobre Mim</a></li>
                <li><a href="#servicos" >Serviços</a></li>
                <li><a href="#portfolio" >Portfolio</a></li>
                <li><a href="#contato" >Contato</a></li>
            </ul>
        </nav>
    )
}
export default NavBar;