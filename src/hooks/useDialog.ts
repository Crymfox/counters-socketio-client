const useDialog = () => {
    const dialog = document.querySelector('dialog') as HTMLDialogElement
    const openDialog = () => {
        dialog.showModal()
    }
    const closeDialog = () => {
        dialog.close()
    }
    return { openDialog, closeDialog }
}

export default useDialog