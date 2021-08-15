import styles from './index.module.sass';

//Components
import RowFile from '../RowFile';

export default function ListView({setViewPop, content, setFile}){
    return <div className={styles.ListView}>
        {
            content.map((file, index) => {
                return <RowFile key={index} setViewPop={setViewPop} files={file} setFile={setFile} />
            })
        }
    </div>
}