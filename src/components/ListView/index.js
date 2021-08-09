import styles from './index.module.sass';

//Components
import RowFile from '../RowFile';

const files = [0,0,0,0,0,0,0,0,0,0];

export default function ListView({setViewPop}){
    return <div className={styles.ListView}>
        {
            files.map((file, index) => {
                return <RowFile key={index} setViewPop={setViewPop} />
            })
        }
    </div>
}