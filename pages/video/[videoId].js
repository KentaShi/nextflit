import { useRouter } from "next/router"
import React from "react"
import Modal from "react-modal"
import styles from "../../styles/video.module.css"

Modal.setAppElement("#__next")

const Video = () => {
    const router = useRouter()
    const videoId = router.query.videoId

    return (
        <div>
            <Modal
                className='absolute left-0 right-0 my-0 mx-auto w-[800px] bottom-10 bg-black10 top-[10%] outline-none rounded-xl border border-solid border-black30'
                isOpen={true}
                contentLabel='Watch the video'
                onRequestClose={() => router.back()}
                overlayClassName={styles.overlay}
            >
                <div>
                    <iframe
                        className={styles.videoPlayer}
                        id='ytplayer'
                        type='text/html'
                        width='100%'
                        height='360'
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&origin=http://example.com&controls=0&rel=0`}
                        frameborder='0'
                    ></iframe>
                </div>
            </Modal>
        </div>
    )
}

export default Video
