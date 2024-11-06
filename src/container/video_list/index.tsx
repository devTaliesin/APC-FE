import MiniVideoView from "./mini_video_view"

import styles from "../../styles/VideoList.module.scss"

const VideoList = () => {
    return (
        <div className={styles.videoList}>
            <MiniVideoView/>
            <MiniVideoView/>
        </div>
    )
}

export default VideoList