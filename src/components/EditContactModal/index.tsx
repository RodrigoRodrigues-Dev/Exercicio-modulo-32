import React, { useEffect, useState } from 'react';
import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeEditModal,
  deleteContact,
  updateContact
} from '../../store/reducers/contacts';
import {
  ModalStyled,
  InputStyled,
  Overlay,
  BtnAddContact,
  BtnDeleteContact
} from './styled';

const EditContactModal = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState<string | undefined>();
  const [phone, setPhone] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();

  const selectContact = useSelector(
    (state: RootState) => state.addContact.selected
  );

  useEffect(() => {
    setName(selectContact?.name);
    setPhone(selectContact?.phone);
    setEmail(selectContact?.email);
  }, [selectContact]);

  const handleAddContact = () => {
    const infosContactUpdate = {
      id: selectContact?.id,
      name,
      phone,
      email
    };

    dispatch(updateContact(infosContactUpdate));
    dispatch(closeEditModal());
  };

  const handleDelContact = () => {
    dispatch(deleteContact(selectContact?.id));
    dispatch(closeEditModal());
  };

  console.log(selectContact?.id);

  return (
    <>
      <ModalStyled>
        <h3>Edit Contact</h3>

        <label htmlFor="name">Name</label>
        <InputStyled
          id="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <label htmlFor="phone">Telefone</label>
        <InputStyled
          id="phone"
          type="tel"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />

        <label htmlFor="email">E-mail</label>
        <InputStyled
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <BtnAddContact onClick={handleAddContact}>Editar</BtnAddContact>
        <BtnDeleteContact onClick={handleDelContact}>Deletar</BtnDeleteContact>
      </ModalStyled>

      <Overlay onClick={() => dispatch(closeEditModal())} />
    </>
  );
};

export default EditContactModal;
