import whiteLogo from '../images/white.jpg'
import colorLogo from '../images/color.png'

const Nav  = ({minimal, setShowModal, showModal, setIsSignUp }) => {

    const handleClick =() => {
        setShowModal(true)
        setIsSignUp(false)
    }
    
    const authToken = true
    return (
       <nav>
           <div className="logo-container">
           <img className="logo" src={minimal ? colorLogo : whiteLogo}/>
           </div>

            {!authToken && !minimal && <button 
                className='nav-button'
                onClick={handleClick}
                disabled={showModal}
                >Log in</button>}
         
       </nav>
    )
}  


export default Nav