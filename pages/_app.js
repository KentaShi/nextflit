import "@/styles/globals.css"

import { Roboto_Slab } from "next/font/google"
const roboto = Roboto_Slab({ weight: "400", subsets: ["vietnamese"] })

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}
