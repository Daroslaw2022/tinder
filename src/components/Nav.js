import whiteLogo from '../images/white.jpg'
import colorLogo from '../images/color.png'

const Nav  = ({minimal}) => {

    return (
       <nav>
           <div className="logo-container">
           <img className="logo" src={minimal ? colorLogo : whiteLogo}/>
           </div>

            {!authToken && <button>Log in</button>
            <p>sss</p>
            <p>sss</p>
       </nav>
    )
}  


export default Nav