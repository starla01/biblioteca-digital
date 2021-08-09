import styles from './index.module.sass';

//Components
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';

export default function Search(){

    return <div className={styles.Search}>
        <form noValidate autoComplete="off" className={styles.form}>
            <TextField id="standard-basic" label="Buscar un archivo" className={styles.textField}  />
        </form>
    </div>
}