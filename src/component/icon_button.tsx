import { ComponentProps } from 'react';
import styles from '../styles/Button.module.scss'

interface IconButtonProps extends ComponentProps<'div'> {
    onClick?: () => void;
    icon?: string
    className?: string
}
const IconButton = ({onClick, icon, className}: IconButtonProps) => {

    return (
        <div className={className || styles.iconButton} onClick={onClick}>
            {icon && <img src={icon} alt={icon.split('/').pop()}/>}
        </div>
    )
}

export default IconButton