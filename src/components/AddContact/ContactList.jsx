import { ContactItem } from "./ContactItem"
import { nanoid } from "nanoid"
import PropTypes from 'prop-types';


export function ContactList({contacts, onDelete}) {
    return (
        <div>
             <ul>
                 {contacts.map(el => {
                     return  <ContactItem
                 name = {el.name}
                 number = {el.number}
                 key = {nanoid()} 
                 id = {el.id}
                 deleteItem = {onDelete}
                    />  
                 })}
             </ul>
        </div>
       
    )
}

ContactList.propTypes = {
    onDelete: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired
}