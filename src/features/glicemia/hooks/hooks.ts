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