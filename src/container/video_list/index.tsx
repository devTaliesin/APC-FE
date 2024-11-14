import MiniVideoView from "./mini_video_view"
import styles from "../../styles/VideoList.module.scss"
import videoListHook from "../../hooks/video_list_hook"
import {VideoSourceStore} from "../../stores/video_source_store"

const VideoList = () => {
    const { videoSourceArray } = VideoSourceStore();
    videoListHook();
    return (
        <div className={styles.videoList}>
        {videoSourceArray &&
        videoSourceArray.map((videoSource)=>
            <MiniVideoView
            videoSource={videoSource}
            key={`${videoSource.id}`}
            />
        )}
        </div>
    )
}

export default VideoList