export const getCommonVideos = async (url) => {
    try {
        const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY
        const BASE_URL = "youtube.googleapis.com/youtube/v3"

        const res = await fetch(
            `https://${BASE_URL}/${url}&key=${YOUTUBE_API_KEY}`
        )

        const data = await res.json()
        console.log(data)
        if (data?.error) {
            console.error("Youtube API error: " + data.error)
            return []
        }

        return data.items.map((item) => {
            const id = item?.id?.videoId || item.id
            return {
                title: item?.snippet?.title,
                imgUrl: item?.snippet?.thumbnails?.high?.url,
                id,
            }
        })
    } catch (error) {
        console.error("Something went wrong when getting videos library", error)
        return []
    }
}

export const getVideos = (querySearch) => {
    const URL = `search?part=snippet&maxResults=25&q=${querySearch}&type=video`
    return getCommonVideos(URL)
}

export const getPopularVideos = () => {
    const URL =
        "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=VN"
    return getCommonVideos(URL)
}
