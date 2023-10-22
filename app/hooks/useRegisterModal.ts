import {create} from 'zustand'

interface RegisterModalStore{
    onOpen: () => void;
    isOpen: boolean;
    onClose: () => void;
}
const useRegisterModal = create<RegisterModalStore>((set)=>({
    isOpen:false,
    onOpen : () => set({isOpen : true}),
    onClose : () => set({isOpen : false}),

}))

export default useRegisterModal
