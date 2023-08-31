import 'bootstrap/dist/css/bootstrap.css';

interface NavbarProps {
    setIsHome: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Navbar({ setIsHome }: NavbarProps) {

    const handleHomeClick = () => {
        setIsHome(true); // Update isHome state to true
    };

    const handleFinishedClick = () => {
        setIsHome(false); // Update isHome state to false
    };

    return (
        <nav className='navbar navbar-light bg-light'>
            <img src="https://img.icons8.com/?size=512&id=42763&format=png" alt="logo" width={45} height={45} />
            <div>
                <a href="#" className='navbar-brand' onClick={handleHomeClick}>Home</a>
                <a href="#" className='navbar-brand' onClick={handleFinishedClick}>Finished</a>
            </div>
        </nav>
    );
}