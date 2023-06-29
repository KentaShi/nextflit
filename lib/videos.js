import videosData from "../data/videos.json"

const fetchVideos = async (url) => {
    const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
    const BASE_URL = "youtube.googleapis.com/youtube/v3"

    const res = await fetch(`https://${BASE_URL}/${url}&key=${YOUTUBE_API_KEY}`)
    return await res.json()
}

const getCommonVideos = async (url) => {
    try {
        const isDev = process.env.DEVELOPMENT
        const data = await fetchVideos(url)

        if (data?.error) {
            console.error("Youtube API error: " + data)
            return []
        }

        return data.items.map((item) => {
            const id = item?.id?.videoId || item.id
            const snippet = item?.snippet
            return {
                title: snippet?.title,
                imgUrl: snippet?.thumbnails?.high?.url,
                id,
                description: snippet?.description,
                channelTitle: snippet?.channelTitle,
                publishTime: snippet?.publishedAt,
                statistics: item?.statistics
                    ? item.statistics
                    : { viewCount: 0 },
            }
        })
    } catch (error) {
        console.error("Something went wrong when getting videos library", error)
        return []
    }
}

export const getVideos = (querySearch) => {
    const URL = `search?part=snippet&maxResults=10&q=${querySearch}&type=video`
    return getCommonVideos(URL)
}

export const getPopularVideos = () => {
    const URL =
        "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=VN"
    return getCommonVideos(URL)
}

export const getYoutubeVideoById = (videoId) => {
    const URL = `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}`
    return getCommonVideos(URL)
}
