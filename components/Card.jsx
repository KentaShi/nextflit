import Image from "next/image"
import React, { useState } from "react"
import styles from "../styles/card.module.css"
import { motion } from "framer-motion"
import cls from "classnames"

const Card = ({
    imgUrl = "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    size = "medium",
    id,
}) => {
    const [imgSrc, setImgSrc] = useState(imgUrl)

    const classMap = {
        small: styles.smItem,
        medium: styles.mdItem,
        large: styles.lgItem,
    }
    const handleImageError = () => {
        console.log("Image Error")
        setImgSrc(
            "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        )
    }

    const scale = id === 0 ? { scaleY: 1.1 } : { scale: 1.1 }
    return (
        <div className='mr-1 cursor-pointer'>
            <motion.div
                whileHover={{ ...scale }}
                className={cls(styles.imgMotionWrapper, classMap[size])}
            >
                <Image
                    src={imgSrc}
                    alt='clifford'
                    fill
                    onError={handleImageError}
                    className='top-0 right-0 bottom-0 left-0 rounded-md object-cover object-center block max-w-full'
                />
            </motion.div>
        </div>
    )
}

export default Card
