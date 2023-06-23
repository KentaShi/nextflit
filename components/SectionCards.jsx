import React from "react"
import styles from "../styles/section_cards.module.css"
import Card from "./Card"

const SectionCards = ({ title, videos = [], size }) => {
    return (
        <section className='text-blue20 bg-black50 px-4'>
            <h2 className='text-white10 font-bold text-3xl'>{title}</h2>
            <div className='flex flex-row py-7 mt-6 mr-3 overflow-x-scroll overflow-y-hidden'>
                {videos.map((v, index) => (
                    <Card
                        key={index}
                        id={index}
                        imgUrl={v.imgUrl}
                        size={size}
                    />
                ))}
            </div>
        </section>
    )
}

export default SectionCards
