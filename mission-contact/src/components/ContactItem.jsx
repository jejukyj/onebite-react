import './ContactItem.css';
import { memo, useContext } from 'react';
import { ContactDispatchContext } from '../App';

function ContactItem({ id, name, contact }) {
  const { onDeleteContact } = useContext(ContactDispatchContext);
  const onClickDeleteButton = () => {
    onDeleteContact(id);
  };
  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{contact}</div>
      <button onClick={onClickDeleteButton}>🗑️ Remove</button>
    </div>
  );
}

export default memo(ContactItem);
