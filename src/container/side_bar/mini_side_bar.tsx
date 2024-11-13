import styles from "../../styles/SideBar.module.scss";
import buttonStyles from "../../styles/Button.module.scss";
import OperateStore from "../../stores/operate_store.ts";
import IconButton from "../../component/icon_button.tsx";
import { VideoSourceStore } from "../../stores/video_source_store.ts";

import plus from '../../assets/d.png';
import cam from '../../assets/mdi_webcam.png';
import setting from '../../assets/weui_setting-filled.png';
import sideBarSize from '../../assets/si_swap-horiz-fill.png';


const MiniSideBar = () => {
    const {sideBarSizeFlag, changeVideoSourceFormFlag, changeSideBarSizeFlag} = OperateStore();
    const {videoSourceArray} = VideoSourceStore();
    return (
        !sideBarSizeFlag &&
        <div className={styles.miniSideBar}>
            <IconButton
            onClick={changeSideBarSizeFlag}
            icon={sideBarSize}
            />
            <line className={styles.line}/>
            {videoSourceArray &&
            videoSourceArray.map((videonSource)=>
                <IconButton
                key={`${videonSource.id}`}
                onClick={() => {}}
                icon={cam}
            />
            )}

            <IconButton
            onClick={changeVideoSourceFormFlag}
            icon={plus}
            />
            <div 
            className={buttonStyles.settingButton}
            >
                <IconButton
                    onClick={() => {}}
                    icon={setting}
                    />
            </div>
        </div>
    )
}

export default MiniSideBar