import Image from "next/image"
import { Roboto_Slab } from "next/font/google"
import Head from "next/head"
import Banner from "@/components/Banner"
import NavBar from "@/components/NavBar"
import Card from "@/components/Card"
import SectionCards from "@/components/SectionCards"

const roboto = Roboto_Slab({ weight: "400", subsets: ["vietnamese"] })

export default function Home() {
    const disneyVideos = [
        { imgUrl: "/static/clifford.webp" },
        { imgUrl: "/static/clifford.webp" },
        { imgUrl: "/static/clifford.webp" },
        { imgUrl: "/static/clifford.webp" },
        { imgUrl: "/static/clifford.webp" },
    ]
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
            <div className='mt-6'>
                <SectionCards
                    title={"Disney"}
                    videos={disneyVideos}
                    size={"large"}
                />
                <SectionCards
                    title={"Watch It Again"}
                    videos={disneyVideos}
                    size={"small"}
                />
            </div>
            {/* <SectionCards title={"Watch It Again"} />
            <SectionCards title={"Disney"} /> */}
        </div>
    )
}
