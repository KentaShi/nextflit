import Image from "next/image"
import React from "react"
import styles from "../styles/banner.module.css"
import { useRouter } from "next/router"

const Banner = ({ title, subTitle, imgUrl, videoId }) => {
    const router = useRouter()
    const handleOnPlay = () => {
        console.log("onPlay")
        router.push(`video/${videoId}`)
    }

    return (
        <div className='w-[100%] h-[80vh] relative'>
            <div className='absolute w-[100%] h-[100%] z-10'>
                <div className='flex flex-col justify-start px-16 h-[100%] mt-24 md:w-[40%]'>
                    <div className='flex'>
                        <p className='text-6xl text-red font-extrabold'>N</p>
                        <p className='text-base text-gray20 self-center'>
                            S E R I E S
                        </p>
                    </div>
                    <h3
                        className={`text-2xl lg:text-6xl font-extrabold ${styles.textStroke2Black}`}
                    >
                        {title}
                    </h3>
                    <h3
                        className={`text-lg lg:text-2xl text-white10 fon ${styles.textStroke1Gray}`}
                    >
                        {subTitle}
                    </h3>
                    <div className='flex flex-row w-[100%]'>
                        <button
                            className='flex items-center justify-center px-5 mt-5 rounded-lg bg-white10 py-2 w-32'
                            onClick={handleOnPlay}
                        >
                            <Image
                                src='/static/play_arrow.svg'
                                width={32}
                                height={32}
                                alt='Play Arrow'
                            />
                            <span className='playText text-[#1f2937] font-semibold text-lg lg:text-xl leading-7 pl-1 text-center'>
                                Play
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div
                className='absolute w-[100%] h-[100%] bottom-0 bg-cover bannerImg'
                style={{
                    backgroundImage: `url(${imgUrl})`,
                    backgroundPosition: "50% 50%",
                }}
            ></div>
        </div>
    )
}

export default Banner
