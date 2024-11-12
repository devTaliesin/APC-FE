import * as Dialog from '@radix-ui/react-dialog'
import OperateStore from '../../stores/operate_store'
import styles from '../../styles/Modal.module.scss'

const VideoSourceForm = () => {
    const { videoSourceFormFlag, changeVideoSourceFormFlag } = OperateStore()
 return ( 
    <div className={styles.videoSourceForm}>
        <Dialog.Root open={videoSourceFormFlag}>
            <Dialog.Portal>
                <Dialog.Overlay className={styles.dialogOverlay} />
                <Dialog.Content className={styles.dialogContent}>
                <Dialog.Title>Auto Open Modal</Dialog.Title>
                <Dialog.Description>This modal opened automatically!</Dialog.Description>
                <button className={styles.submitButton}onClick={changeVideoSourceFormFlag}>Close Modal</button>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    </div>
 )
}

export default VideoSourceForm