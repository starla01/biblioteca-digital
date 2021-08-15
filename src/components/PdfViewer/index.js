import styles from './index.module.sass';

const file = '/Documents/La_importancia_de_la_investigacion.pdf';

export default function PdfViwer({setViewPop, files}){
    const { path, file} = files;
    return <div className={styles.ppdfViwer}>
        <div className={styles.close} onClick={() => setViewPop(false)}>
        <span className={`material-icons ${styles.closeIcon}`}>
            highlight_off
        </span>
        </div>
        <div className={styles.view}>
            <iframe src={`${path}${file}`} height="100%" width="100%" />
        </div>
    </div>
}