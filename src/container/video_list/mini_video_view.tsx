import webSocket from "../../hooks/websocket"
import { VideoSourceArray } from "../../stores/video_source_store"
import styles from "../../styles/VideoList.module.scss"

interface MiniVideoViewProps {
    videoSource: VideoSourceArray
} 
const MiniVideoView = ({ videoSource }:MiniVideoViewProps) => {
    webSocket(videoSource.onvif, 'low')
    return (
        <div className={styles.miniVideoView}>

        </div>
    )
}

export default MiniVideoView