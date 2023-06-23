import Head from "next/head"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import styles from "../styles/login.module.css"
import Link from "next/link"
import { validateEmail } from "@/utils/validator"
import { useRouter } from "next/router"
import { magic } from "@/lib/magicClient"

const Login = () => {
    const [email, setEmail] = useState("")
    const [userMsg, setUserMsg] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const handleComplete = () => {
            setIsLoading(false)
        }
        router.events.on("routeChangeComplete", handleComplete)
        router.events.on("routeChangeError", handleComplete)
        return () => {
            router.events.off("routeChangeComplete", handleComplete)
            router.events.off("routeChangeError", handleComplete)
        }
    }, [router])

    const handleOnChangeEmail = (e) => {
        setUserMsg("")
        const email = e.target.value

        setEmail(email)
    }
    const handleLoginWithEmail = async (e) => {
        e.preventDefault()

        if (email) {
            if (validateEmail(email)) {
                try {
                    setIsLoading(true)
                    const didToken = await magic.auth.loginWithMagicLink({
                        email,
                    })
                    if (didToken) {
                        router.push("/")
                    }
                } catch (error) {
                    console.log("something went wrong", error)
                    setIsLoading(false)
                }
            } else {
                setIsLoading(false)
                setUserMsg(`${email} is invalid`)
            }
        } else {
            setIsLoading(false)
            setUserMsg("Please enter your email address")
        }
    }
    return (
        <div
            className={`flex flex-col items-center justify-start min-h-screen ${styles.container}`}
        >
            <Head>
                <title>Nextflit Sign In</title>
            </Head>

            <header className='flex justify-between w-full py-8'>
                <div className='px-4 flex flex-row'>
                    <Link
                        className='flex font-medium items-center text-white10 mb-4'
                        href='/'
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
                </div>
            </header>
            <main className='w-full h-full relative flex z-10 justify-center'>
                <div className='flex flex-col pb-24 pt-8 bg-black20 h-1/3 px-12 rounded-md min-w-[240px]'>
                    <h1 className='text-white10 font-bold text-4xl mb-8'>
                        Sign In
                    </h1>
                    <input
                        onChange={handleOnChangeEmail}
                        type='email'
                        placeholder='Email address'
                        className='p-2 text-black30 w-full h-12 outline-none rounded-md min-w-[240px] text-xl'
                    />
                    <p className='my-2'>{userMsg}</p>
                    <button
                        className='bg-red10 px-12 py-2 text-2xl text-white10 w-full rounded-md mt-6'
                        onClick={handleLoginWithEmail}
                    >
                        {isLoading ? "Loading..." : "Sign In"}
                    </button>
                </div>
            </main>
        </div>
    )
}

export default Login
