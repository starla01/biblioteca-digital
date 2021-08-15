import styles from './index.module.sass';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

//Components
import Search from '../Search';
import Menu from '../Menu';

export default function Header({setContent}){
    return <div className={styles.header}>
        <Menu setContent={setContent} />
        <div className={styles.logo}>   
            <img src="images/amiif-logo.jpg" width="150" alt="AMIIF Digital - La Transformación Digital es ahora" />
        </div>
        <div className={styles.containerSearch}>
            <Search />
        </div>
        <div className={styles.controls}>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button>Buscar</Button>
                <Button>Filtrar</Button>
            </ButtonGroup>
        </div>

    </div>
}