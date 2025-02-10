import './ContactEditor.css';
import { useState, useRef, useContext } from 'react';
import { ContactDispatchContext } from '../App';

export default function ContactEditor() {
  const { onAddContact } = useContext(ContactDispatchContext);
  const [state, setState] = useState({
    name: '',
    contact: '',
  });
  const nameRef = useRef();
  const contactRef = useRef();

  const onChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = (e) => {
    if (state.name === '') {
      nameRef.current.focus();
      return;
    } else if (state.contact === '') {
      contactRef.current.focus();
      return;
    }
    onAddContact(state.name, state.contact);
    setState({
      // 입력창 초기화
      name: '',
      contact: '',
    });
  };

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input
          ref={nameRef}
          name="name"
          value={state.name}
          onChange={onChangeState}
          className="name"
          placeholder="이름 ..."
        />
        <input
          ref={contactRef}
          name="contact"
          value={state.contact}
          onChange={onChangeState}
          className="contact"
          placeholder="연락처(이메일) ..."
        />
      </div>
      <button onClick={onSubmit}>Add</button>
    </div>
  );
}
