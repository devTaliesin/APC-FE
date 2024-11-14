import VideoSourceForm from "./video_source_form"
import styles from "../../styles/Modal.module.scss"

const Modal = () => {
 return (
    <div className={styles.container}>
        <VideoSourceForm/>
    </div>
 )
}

export default Modal