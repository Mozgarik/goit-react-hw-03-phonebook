import React, {Component} from "react"
import AddContact from "components/AddContact/AddContact"
import { nanoid } from "nanoid"
import { ContactList } from "components/AddContact/ContactList"
import { Filter } from "components/Filter/Filter"
import s from './components/AddContact/Form.module.css'

 class App extends Component {
  state = {
    contacts: [ 
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
  ],
    filter: '',
  }
  
  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'))
    if(contacts) {
      this.setState({contacts: contacts})
    }
  }

  componentDidUpdate(PrevProps, prevState) {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }

  formSubmitHandler = data => {
    const item = {id: nanoid(), name: data.name, number: data.number}  
    const isUnique = this.state.contacts.some(el => el.name === data.name)
    if(!isUnique){
      this.setState(prevState => ({ 
      contacts: [...prevState.contacts, item]
     }))
    } else alert('error')
  }

  onHandleChangeFilter = filter => {
    this.setState(prevState => ({
        ...prevState, filter
    }))
  }

  onRenderContacts = () => {
    const {filter, contacts} = this.state
    const lowerFilter = filter.toLowerCase()
    return contacts.filter(el => el.name.toLowerCase().includes(lowerFilter))
  }
 
  onDeleteContacts = id => {
    this.setState(prevState => ({
    contacts: prevState.contacts.filter(el => el.id !== id)
    }))
  }

  onUpdateLocalStorage() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    const localContacts = localStorage.getItem('contacts')
    const parseContacts = JSON.parse(localContacts)
    this.setState({contacts: parseContacts})
    }
 
  render() {
  
    return (
     <div className={s.formContact}>
       <h1>Phonebook</h1>
   <AddContact 
   onSubmit = {this.formSubmitHandler}
   />
   <h2>Contacts</h2>
   <Filter
   filterState = {this.onHandleChangeFilter}
   />
  <ContactList
  contacts = {this.onRenderContacts()}
  onDelete = {this.onDeleteContacts}
  />
  
     </div>
    )
  }
 }


export default App