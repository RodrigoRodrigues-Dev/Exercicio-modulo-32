import { ControlsContainer, BtnAddContact } from './styled';
import { useDispatch } from 'react-redux';
import { openAddModal } from '../../store/reducers/contacts';

const Controls = () => {
  const dispatch = useDispatch();

  return (
    <ControlsContainer>
      <div onClick={() => dispatch(openAddModal())}>
        <BtnAddContact>+ Add Contact</BtnAddContact>
      </div>
    </ControlsContainer>
  );
};

export default Controls;
