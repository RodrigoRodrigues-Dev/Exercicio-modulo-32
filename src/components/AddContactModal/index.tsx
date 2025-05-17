import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ModalStyled, InputStyled, Overlay, BtnAddContact } from './styled';
import { closeAddModal, addContact } from '../../store/reducers/contacts';

const AddContactModal = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const id = Math.floor(Math.random() * 100000) + 1;

  const handleAddContact = () => {
    const infosContact = { id, name, phone, email };

    dispatch(addContact(infosContact));
    dispatch(closeAddModal());
  };

  return (
    <>
      <ModalStyled>
        <h3>Add Contact</h3>

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

        <BtnAddContact onClick={handleAddContact}>Adicionar</BtnAddContact>
      </ModalStyled>

      <Overlay onClick={() => dispatch(closeAddModal())} />
    </>
  );
};

export default AddContactModal;
