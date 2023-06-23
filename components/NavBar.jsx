import React, { useEffect, useState } from "react"
import styles from "../styles/navbar.module.css"
import Link from "next/link"
import { useRouter } from "next/router"
import Image from "next/image"
import { magic } from "@/lib/magicClient"

const NavBar = () => {
    const router = useRouter()

    const [showDropdown, setShowDropdown] = useState(false)
    const [username, setUsername] = useState("")

    useEffect(() => {
        const getUsername = async () => {
            try {
                const { email, publicAddress } = await magic.user.getMetadata()
                if (email) {
                    setUsername(email)
                }
            } catch (error) {
                console.log("Error getting username", error)
            }
        }
        getUsername()
    }, [])

    const handleClickHome = (e) => {
        e.preventDefault()
        router.push("/")
    }
    const handleClickMyList = (e) => {
        e.preventDefault()
        router.push("/browse/my-list")
    }

    const handleShowDropdown = (e) => {
        e.preventDefault()
        setShowDropdown(!showDropdown)
    }
    const handleLogOut = async (e) => {
        e.preventDefault()
        router.push("/login")
        try {
            await magic.user.logout()
            console.log(await magic.user.isLoggedIn())
        } catch (error) {
            console.log("Error logging out", error)
        }
    }
    return (
        <div
            className={`text-white10 fixed top-0 w-[100%] z-50 ${styles.container}`}
        >
            <div className='px-4 flex flex-col p-5 md:px-16 md:flex-row md:items-center'>
                <Link
                    className='flex font-medium text-base items-center text-white10 mb-4 md:mb-0'
                    href={"/"}
                >
                    <div className='text-red w-32'>
                        <Image
                            alt='Nextflit logo'
                            src='/static/netflix.svg'
                            width={128}
                            height={34}
                        />
                    </div>
                </Link>
                <ul className='flex flex-row w-[50%] ml-6 text-base list-none md:ml-12'>
                    <li
                        onClick={handleClickHome}
                        className='font-semibold text-base cursor-pointer mr-3 md:mr-5'
                    >
                        Home
                    </li>
                    <li onClick={handleClickMyList} className='cursor-pointer'>
                        My List
                    </li>
                </ul>
                <nav className='flex items-start ml-auto'>
                    <div>
                        <button
                            onClick={handleShowDropdown}
                            className='flex items-center overflow-hidden text-white10'
                        >
                            <p className='text-base'>{username}</p>
                            {showDropdown ? (
                                <Image
                                    src={"/static/expand_less.svg"}
                                    width={24}
                                    height={24}
                                    alt='expand less'
                                />
                            ) : (
                                <Image
                                    src={"/static/expand_more.svg"}
                                    width={24}
                                    height={24}
                                    alt='expand more'
                                />
                            )}
                        </button>

                        {showDropdown && (
                            <div
                                className={`absolute ml-auto mt-2 py-2 px-2 bg-black50 text-white10 rounded border-blue shadow ${styles.navDropdown}`}
                            >
                                <div>
                                    <button
                                        onClick={handleLogOut}
                                        className={`${styles.linkName} block px-2 text-base rounded cursor-pointer hover:underline`}
                                    >
                                        Sign Out
                                    </button>
                                    <div className='py-2'></div>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar
