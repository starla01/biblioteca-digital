import styles from './index.module.sass';

//Constantes
import { AGENDA_SOCIAL } from '../../constants/agenda-social';
import { ASUNTOS_PUBLICOS } from '../../constants/asuntos-publicos';
import { ASUNTOS_REGULATORIOS } from '../../constants/asuntos-regulatorios';
import { COMUNICACION_Y_DESARROLLO } from '../../constants/comunicacion-y-desarrollo';
import { CONSEJO_DIRECTIVO } from '../../constants/consejo-directivo';
import { COVID_19 } from '../../constants/covid-19';
import { EXPANSION_DEL_ACCESO } from '../../constants/expansion-del-acceso';
import { PROPIEDAD_INSDUTRIAL } from '../../constants/propiedad-industrial';
import { UNCATEGORIZED } from '../../constants/uncategorized';


const MENU = [
    {
        "label": "Agenda Social",
        "id": "agenda-social",
        "content": AGENDA_SOCIAL
    },
    {
        "label": "Asuntos Públicos",
        "id": "asuntos-publicos",
        "content": ASUNTOS_PUBLICOS
    },
    {
        "label": "Asuntos Regulatorios",
        "id": "asuntos-regulatorios",
        "content": ASUNTOS_REGULATORIOS
    },
    {
        "label": "Comunicacion y Desarrollo",
        "id": "comunicacion-y-desarrollo",
        "content": COMUNICACION_Y_DESARROLLO
    },
    {
        "label": "Consejo Directivo",
        "id": "consejo-directivo",
        "content": CONSEJO_DIRECTIVO
    },
    {
        "label": "COVID 19",
        "id": "covid-19",
        "content": COVID_19
    },
    {
        "label": "Expansion del Acceso",
        "id": "expansion-del-acceso",
        "content": EXPANSION_DEL_ACCESO
    },
    {
        "label": "Propiedad Industrial",
        "id": "propiedad-industrial",
        "content": PROPIEDAD_INSDUTRIAL
    },
    {
        "label": "No Categorizado",
        "id": "uncategorized",
        "content": UNCATEGORIZED
    },
]

export default function Menu({ setContent, setViewMenu }) {
    console.log({setViewMenu})
    return <div className={styles.menu}>
        <h2 className={styles.title}>Filtros</h2>
        <div className={styles.closer} onClick={() => setViewMenu(false)}>
            <span className="material-icons">
                close
            </span>
        </div>
        {
            MENU.map((option, key) => {
                return <div className={styles.option} key={key} onClick={() => {
                    setViewMenu(false);
                    setContent(option.content)
                }}>
                    {option?.label}
                </div>
            })
        }
    </div>
}