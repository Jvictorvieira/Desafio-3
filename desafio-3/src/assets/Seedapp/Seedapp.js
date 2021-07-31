import "../../Style.css"
import "./seedapp-style.css"

function Seedapp () {
    return (
        <div className='container'>
                <div className='text-container'>
                    <h2 className='subtitle'>Seed app</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div>
                    <img className='seedapp-img' src="https://cdn.pixabay.com/photo/2018/08/18/13/26/interface-3614766_960_720.png" alt='apps'/>
                </div>
                
            </div>
    )
}
export default Seedapp;