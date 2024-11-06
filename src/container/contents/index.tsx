import MetadataMonitor from "./metadata_monitor"
import SelectedVideoView from "./selected_video_view"

import styles from '../../styles/Contents.module.scss'

const Contents = () => {
    
    return (
        <div className={styles.contents}>
            <SelectedVideoView/>
            <MetadataMonitor/>
        </div>
    )
}
export default Contents