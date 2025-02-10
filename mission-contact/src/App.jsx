import ContactEditor from './components/ContactEditor';
import ContactList from './components/ContactList';
import './App.css';
import { useReducer, useRef, useCallback, createContext, useMemo } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [action.data, ...state];
    case 'DELETE':
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

export const ContactStateContext = createContext();
export const ContactDispatchContext = createContext();

function App() {
  const [contacts, dispatch] = useReducer(reducer, []);

  const idRef = useRef(0);

  const onAddContact = useCallback((name, contact) => {
    console.log(name, contact);
    dispatch({
      type: 'ADD',
      data: {
        id: idRef.current++,
        name,
        contact,
      },
    });
  }, []);

  const onDeleteContact = useCallback((targetId) => {
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    });
  }, []);

  const memoizedDispatch = useMemo(() => {
    return { onAddContact, onDeleteContact };
  }, []);

  return (
    <div className="App">
      <h2>Contact List</h2>
      <ContactStateContext.Provider value={contacts}>
        <ContactDispatchContext.Provider value={memoizedDispatch}>
          <section>
            <ContactEditor />
          </section>
          <section>
            <ContactList />
          </section>
        </ContactDispatchContext.Provider>
      </ContactStateContext.Provider>
    </div>
  );
}

export default App;
