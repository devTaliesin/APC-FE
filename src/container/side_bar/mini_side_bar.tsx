import styles from "../../styles/SideBar.module.scss"
import OperateStore from "../../stores/operate_store.ts"
import IconButton from "../../component/icon_button.tsx"
import { VideoSourceStore } from "../../stores/video_source_store.ts"


const MiniSideBar = () => {
    const {sideBarSizeFlag, changeVideoSourceFormFlag} = OperateStore();
    const {videoSourceArray} = VideoSourceStore();
    return (
        <div className={styles.miniSideBar}>
            {videoSourceArray &&
            videoSourceArray.map((videonpSource)=>
                <IconButton 
                onClick={() => {}}
            />
            )}

            <IconButton
                onClick={changeVideoSourceFormFlag}
            />
        </div>
    )
}

export default MiniSideBar