import "../../Style.css"
import "./home-style.css"
function Home () {
    return (
        <div className='container'>
                <div className='text-container'>
                    <h2 className='subtitle'>About us</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div>
                    <img className='home-img' src="https://seedabit.org.br/assets/img/Ciranda1_2019_04.jpg" alt="Ciranda seed"/>
                </div>
                
            </div>
    )
}
export default Home;