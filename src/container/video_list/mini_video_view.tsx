import IconButton from "../../component/icon_button"
import webSocket from "../../hooks/websocket"
import { VideoSourceInterface } from "../../interfaces/video_source.interface"
import styles from "../../styles/VideoList.module.scss"
import minus from "../../assets/typcn_minus.png"
import edit from "../../assets/cuida_edit-outline.png"

interface MiniVideoViewProps {
    videoSource: VideoSourceInterface
} 
const MiniVideoView = ({ videoSource }:MiniVideoViewProps) => {
    // webSocket(videoSource.onvif, 'low')
    return (
        <div className={styles.miniVideoViewContainer}>
            <div className={styles.absoluteContainer}> 
                <IconButton
                    icon={minus}
                    onClick={() => {
                }}
                />
                <IconButton
                    icon={edit}
                    onClick={() => {
                }}
                />
            </div>
            <div className={styles.miniVideoView}>
            </div>
        </div>
    )
}

export default MiniVideoView