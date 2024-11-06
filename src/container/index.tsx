
import SideBar from "./side_bar"
import VideoList from "./video_list"
import Contents from "./contents"

import styles from '../styles/Container.module.scss'
const Container = () => {
    return (
        <div className={styles.container}>
            <SideBar/>
            <VideoList/>
            <Contents/>
        </div>
    )
}

export default Container