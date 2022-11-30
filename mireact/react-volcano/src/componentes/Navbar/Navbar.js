import './Navbar.css'
import Button from '../Button/Button';
import CartWidget from '../CartWidget/CartWidget';


const Navbar = () => {

    const handleOnClick = () =>{
        alert('Ha hecho click en Home')
    }

    const handleOnClick1 = () =>{
        alert('Para contactarnos enviar email a bk_volcano@hotmail.com')
    }

    const handleOnClick2 = () =>{
        alert('Somos una tienda de instrumentos online desde noviembre de 2022')
    }

    return (
        <nav>
            <img className='imgnav' src={'./images/electric-guitar-light.png'} alt='guitar-logo'/>
            <Button text='Home' func={handleOnClick}/>
            <Button text='Contactenos' func={handleOnClick1}/>
            <Button text='Nosotros' func={handleOnClick2}/>
            
            <CartWidget/>
        </nav>
    )


}
export default Navbar