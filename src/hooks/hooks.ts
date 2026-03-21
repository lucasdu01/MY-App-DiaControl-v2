import { useState } from "react";


// Hook personalizado para gerenciar os estados de visibilidade dos modais de glicemia
export function useGlicemiaModals() {
    // Modal Add
    const [modalAddVisible, setModalAddVisible] = useState(false);	// estado que controla a visibilidade do modal de registro de glicemia

    const openModalAdd = () => setModalAddVisible(true);
    const closeModalAdd = () => setModalAddVisible(false);

    // Modal Edit
    const [modalEditVisible, setModalEditVisible] = useState(false);	// estado que controla a visibilidade do modal de edição de registro de glicemia

    const openModalEdit = () => setModalEditVisible(true);
    const closeModalEdit = () => setModalEditVisible(false);

    // Modal Delete
    const [modalDeleteVisible, setModalDeleteVisible] = useState(false);	// estado que controla a visibilidade do modal de confirmação de exclusão

    const openModalDelete = () => setModalDeleteVisible(true);
    const closeModalDelete = () => setModalDeleteVisible(false);

    return {
        modalAddVisible, openModalAdd, closeModalAdd,
        modalEditVisible, openModalEdit, closeModalEdit,
        modalDeleteVisible, openModalDelete, closeModalDelete
    }
}

export function useGlicemiaForm() {
    const [periodo, setPeriodo] = useState('');    // estado para armazenar o valor do período selecionado
    const [data, setData] = useState('');        // estado para armazenar o valor da data inserida
    const [hora, setHora] = useState('');        // estado para armazenar o valor da hora inserida
    const [valor, setValor] = useState('');      // estado para armazenar o valor da glicemia inserida
    const [observacao, setObservacao] = useState('');  // estado para armazenar o valor da observação inserida

    const limparFormulario = () => {
        setPeriodo('');
        setData('');
        setHora('');
        setValor('');
        setObservacao('');
    }

    return {
        periodo, setPeriodo,
        data, setData,
        hora, setHora,
        valor, setValor,
        observacao, setObservacao,
        limparFormulario
    }
}