import Swal, { SweetAlertIcon} from 'sweetalert2';

export const sendAlert = (title: string, text: string, icon: SweetAlertIcon) => {
  return Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonText: 'OK',
  });
}

export const confirmationAlert = (): Promise<boolean> => {
  return Swal.fire({
    title: "Deseja voltar a pagina principal?",
    text: "Sucesso!",
    icon: "success",
    showCancelButton: true,
    confirmButtonColor: "#31572c",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sim!"
  }).then((result) => result.isConfirmed);
};