document.addEventListener("DOMContentLoaded", function () {
  const buttonVerTodos = document.querySelector(".card_cabecalho button");
  const modal = document.querySelector("#modal_membros");
  const closeModalButton = document.querySelector("#close_modal");
  const memberList = document.querySelector("#lista_membros");

  buttonVerTodos.onclick = function () {
      modal.showModal();
  };

  closeModalButton.onclick = function () {
      modal.close();
  };

  modal.addEventListener("click", function (event) {
      if (event.target === modal) {
          modal.close();
      }
  });

  memberList.addEventListener("click", function (event) {
      if (event.target.closest(".remove_member")) {
          const memberItem = event.target.closest("li");
          memberList.removeChild(memberItem);
      }
  });
});
