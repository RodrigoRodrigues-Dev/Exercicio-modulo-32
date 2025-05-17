import { TotalContactsContainer, ValueText, TotalText } from './styled';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const TotalContacts = () => {
  const contacts = useSelector((state: RootState) => state.addContact.items);

  return (
    <TotalContactsContainer>
      <TotalText>Total contacts</TotalText>
      <ValueText>({contacts.length})</ValueText>
      <span>Load more?</span>
    </TotalContactsContainer>
  );
};

export default TotalContacts;
