import 'bootstrap/dist/css/bootstrap.css';


export default function Navbar() {
    return (
        <nav className='navbar navbar-light bg-light'>
            <img src="https://img.icons8.com/?size=512&id=42763&format=png" alt="logo" width={45} height={45} />
            <div>
                <a href="/" className='navbar-brand'>Home</a>
                <a href="/finished" className='navbar-brand'>Finished</a>
            </div>
        </nav>
    );
}