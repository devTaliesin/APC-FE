import { ComponentProps, SVGProps } from 'react';
import styles from '../styles/Button.module.scss'

interface IconButtonProps extends ComponentProps<'div'> {
    onClick?: () => void;
}
const IconButton = ({onClick, }: IconButtonProps) => {

    return (
        <div className={styles.iconButton} onClick={onClick}>

        </div>
    )
}

export default IconButton