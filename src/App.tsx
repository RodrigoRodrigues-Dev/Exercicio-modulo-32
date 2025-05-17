import { Reset } from './styles/GlobalStyles';
import LayoutContainer from './components/LayoutContainer/styled';
import Header from './components/Header';
import Controls from './components/Controls';
import TotalContacts from './components/TotalContacts';
import Footer from './components/Footer';
import ListContacts from './containers/ListContacts';
import AddContactModal from './components/AddContactModal';
import { useSelector } from 'react-redux';
import type { RootState } from './store';
import EditContactModal from './components/EditContactModal';

function App() {
  const addIsVisible = useSelector(
    (state: RootState) => state.addContact.isAddModalOpen
  );

  const editIsVisible = useSelector(
    (state: RootState) => state.addContact.isEditModalOpen
  );

  return (
    <>
      <Reset />
      <Header />
      <LayoutContainer>
        {addIsVisible && <AddContactModal />}
        {editIsVisible && <EditContactModal />}
        <ListContacts />
        <TotalContacts />
        <Controls />
      </LayoutContainer>
      <Footer />
    </>
  );
}

export default App;
