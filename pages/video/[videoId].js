import { useRouter } from "next/router"
import React from "react"
import Modal from "react-modal"
import styles from "../../styles/video.module.css"
import { getYoutubeVideoById } from "@/lib/videos"

Modal.setAppElement("#__next")

export async function getStaticProps(context) {
    const videoId = context.params.videoId
    const videoArray = await getYoutubeVideoById(videoId)

    return {
        props: {
            video: videoArray.length > 0 && videoArray[0],
        },
        revalidate: 10, // In seconds
    }
}
export async function getStaticPaths() {
    const listVideos = ["78CY6VPfZBk", "40AW_948DWk", "-3WX0sNxjIk"]

    // Get the paths we want to pre-render based on posts
    const paths = listVideos.map((videoId) => ({
        params: { videoId },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: 'blocking' } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: "blocking" }
}

const Video = ({ video }) => {
    const router = useRouter()
    const videoId = router.query.videoId
    const {
        title,
        description,
        channelTitle,
        statistics: { viewCount } = { viewCount: 0 },
        publishTime,
    } = video

    return (
        <div>
            <Modal
                className='absolute left-0 right-0 my-0 mx-auto w-[800px] bottom-10 bg-black10 top-[10%] outline-none rounded-xl border border-solid border-black30'
                isOpen={true}
                contentLabel='Watch the video'
                onRequestClose={() => router.back()}
                overlayClassName={styles.overlay}
            >
                <iframe
                    className={styles.videoPlayer}
                    id='ytplayer'
                    type='text/html'
                    width='100%'
                    height='360'
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=0&origin=http://example.com&controls=0&rel=0`}
                    frameborder='0'
                ></iframe>
                <div className='py-0 px-12'>
                    <div className='grid grid-cols-2 gap-8'>
                        <div className='max-h-[50vh] overflow-x-hidden overflow-y-scroll'>
                            <p className='text-lg mt-6 mb-2'>{publishTime}</p>
                            <p className='text-lg text-white10'>{title}</p>
                            <p className='mb-2 mt-3'>{description}</p>
                        </div>
                        <div className='text-white10 leading-7 flex flex-col'>
                            <p className='text-sm ml-0 break-words mt-6 subtextwrapper'>
                                <span className='text-gray10'>Cast: </span>
                                <span className='text-white30 m-0'>
                                    {channelTitle}
                                </span>
                            </p>
                            <p className='text-sm ml-0 break-words mt-6 subtextwrapper'>
                                <span className='text-gray10'>View: </span>
                                <span className='viewcount'>{viewCount}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Video
