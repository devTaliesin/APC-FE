import styles from "../../styles/SideBar.module.scss"
import OperateStore from "../../stores/operate_store.ts"

const FullSideBar = () => {
    const {sideBarSizeFlag} = OperateStore()
    return (
        <div className={styles.fullSideBar}>

        </div>
    )
}

export default FullSideBar