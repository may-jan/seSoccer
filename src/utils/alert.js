import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const alertHandler = () => {
  MySwal.fire({
    title: "로그인을 해주세요.",
    text: "로그인 후에 투표기능에 접근 가능합니다!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "확인",
    cancelButtonText: "취소",
  });
  // .then((result) => {
  //   if (result.isConfirmed) {
  //     MySwal.fire("Deleted!", "Your file has been deleted.", "success");
  //   }
  // });
};
