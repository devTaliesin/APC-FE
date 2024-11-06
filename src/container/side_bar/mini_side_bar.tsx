import styles from "../../styles/SideBar.module.scss"
import OperateStore from "../../stores/operate_store.ts"

const MiniSideBar = () => {
    const {sideBarSizeFlag} = OperateStore()
    return (
        <div className={styles.miniSideBar}>

        </div>
    )
}

export default MiniSideBar