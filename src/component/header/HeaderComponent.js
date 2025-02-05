import React from "react";

const Header = () => {
    return (
        <header className="bg-primary text-white py-3 px-4 d-flex justify-content-between align-items-center">
            <h1 className="h4 fw-bold">My Website</h1>
            <nav>
                <ul className="nav">
                    <li className="nav-item"><a href="#" className="nav-link text-white">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link text-white">About</a></li>
                    <li className="nav-item"><a href="#" className="nav-link text-white">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;