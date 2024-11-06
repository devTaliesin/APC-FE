import FullSideBar from "./full_side_bar"
import MiniSideBar from "./mini_side_bar"
import styles from "../../styles/SideBar.module.scss"
import OperateStore from "../../stores/operate_store.ts"

const SideBar = () => {
    const {sideBarSizeFlag} = OperateStore()
    return (
        <div className={styles.sideBar}>
            {sideBarSizeFlag ? 
                <FullSideBar/> :
                <MiniSideBar/>
            }
        </div>
    )
}

export default SideBar