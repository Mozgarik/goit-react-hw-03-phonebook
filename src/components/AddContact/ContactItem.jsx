import PropTypes from 'prop-types';
import s from './Form.module.css'

export function ContactItem({name, number, id, deleteItem}) {
    return(
        <li>
            {name}: {number} <button className={s.buttonDelete} id={id} onClick={e => deleteItem(e.currentTarget.id)}>Delete</button>
        </li>
    )
}

ContactItem.propTypes = {
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        deleteItem: PropTypes.func.isRequired
}