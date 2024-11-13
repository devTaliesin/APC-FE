import { ComponentProps, ReactNode } from 'react';
import styles from '../styles/Button.module.scss'

interface IconButtonProps extends ComponentProps<'div'> {
    onClick?: () => void;
    icon: string
}
const IconButton = ({onClick, icon}: IconButtonProps) => {

    return (
        <div className={styles.iconButton} onClick={onClick}>
            <img src={icon} alt={icon.split('/').pop()}/>
        </div>
    )
}

export default IconButton