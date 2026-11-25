import { useState } from 'react';

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className ={`navbar ${open ? 'open' : ' '}`}>
        <div className="topbar">
        <span className="logo">Logo</span>

        <button className="hamburger" onClick={() => setOpen(true)} aria-label="Open menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
        
        <button className="close" onClick={() => setOpen(flase)} aria-label="Close menu">
            X
        </button>
        </div>

        <nav className={`menu ${open ? 'show' :''}`}>
            <div className='links'>
                <a href="#">Home</a>
                <a href="#">How it works</a>
                <a href="#">Features</a>
                <a href="#">Pricing</a>
            </div>

            <button className="create-account">Create Account</button>
        </nav>
        </header>
    );
}

export default Navbar;