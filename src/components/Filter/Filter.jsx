import PropTypes from 'prop-types';
import s from '../AddContact/Form.module.css'

export function Filter({filterState}) {
    return (
        <form>
            <label>
                <input type='text' className={s.contactInput} placeholder="Filter" onChange={(e) => filterState(e.target.value)} />
            </label>
        </form>
    )
}

Filter.propTypes = {
    filterState: PropTypes.func.isRequired
}