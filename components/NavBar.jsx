import React from "react"
import styles from "../styles/navbar.module.css"
const NavBar = ({ username }) => {
    return (
        <div className='container'>
            <ul>
                <li>Home</li>
                <li>My List</li>
            </ul>
            <nav>
                <div>
                    <button>
                        <p>{username}</p>
                    </button>
                </div>
                <div>
                    <p>Sign Out</p>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
