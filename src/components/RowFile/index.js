import styles from './index.module.sass';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default function RowFile({setViewPop}){
    return <div className={styles.rowFile}>
        <div className={styles.title}>
            <div className={styles.iconFile}>
            <span className={`material-icons ${styles.pdfIcon}`}>
                text_snippet
            </span>
            </div>
            <div className={styles.titleFile}>Titulo del documento</div>
        </div>
        <div className={styles.description}>Descripcion del documento descripcion del documento Descripcion del documento descripcion del documento Descripcion del documento descripcion del documento Descripcion del documento descripcion del documento Descripcion del documento descripcion del documento Descripcion del documento descripcion del documento Descripcion del documento descripcion del documento Descripcion del documento descripcion del documento </div>
        <div className={styles.controls}>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button onClick={() => setViewPop(true)}>Ver</Button>
                <Button>Favoritos</Button>
            </ButtonGroup>
        </div>
    </div>
}