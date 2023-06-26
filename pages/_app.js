import Layout from "@/components/Layout"
import Loading from "@/components/Loading"
import { magic } from "@/lib/magicClient"
import "@/styles/globals.css"

import { Roboto_Slab } from "next/font/google"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
const roboto = Roboto_Slab({ weight: "400", subsets: ["vietnamese"] })

export default function App({ Component, pageProps }) {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const routing = async () => {
            const isLoggedIn = await magic.user.isLoggedIn()

            if (isLoggedIn) {
                router.push("/")
            } else {
                router.push("/login")
            }
        }
        //routing()
    }, [])
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

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
    //return isLoading ? <Loading /> : <Component {...pageProps} />
}
