import { ListContactsStyled } from './styled';
import CardContact from '../../components/CardContact';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const ListContacts = () => {
  const contacts = useSelector((state: RootState) => state.addContact.items);

  return (
    <>
      {contacts.length > 0 && (
        <ListContactsStyled>
          {contacts.map((contact, index) => (
            <CardContact
              key={index}
              $id={contact.id!}
              $name={contact.name!}
              $telphone={contact.phone!}
            />
          ))}
        </ListContactsStyled>
      )}
    </>
  );
};

export default ListContacts;
