import Image from "next/image"
import { Roboto_Slab } from "next/font/google"
import Head from "next/head"
import Banner from "@/components/Banner"
import NavBar from "@/components/NavBar"

const roboto = Roboto_Slab({ weight: "400", subsets: ["vietnamese"] })

export default function Home() {
    return (
        <div className=''>
            <Head>
                <title>Nextflit</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <NavBar username='kenta.nam.97@gmail.com' />
            <Banner
                title='Clifford the red dog'
                subTitle='a very cute dog'
                imgUrl='/static/clifford.webp'
            />

            {/* <NavBar/>
            <Card/> */}
        </div>
    )
}
