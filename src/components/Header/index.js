import styles from './index.module.sass';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

//Components
import Search from '../Search';

export default function Header(){
    return <div className={styles.header}>
        <div className={styles.logo}>
            <img src="http://www.amiifdigital.org/images/logoFooter.png" width="150" alt="Amiif ~Biblioteca digital" />
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