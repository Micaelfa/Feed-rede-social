import styles from './Avatar.module.css';

export function Avatar({ noBorder = true, src}) {
    return(
        <img className={noBorder ? styles.avatarnoBorder : styles.avatar} src={src} />
    );
}