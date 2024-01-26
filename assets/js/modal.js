const btnUsuario = document.querySelector(".btnUsuario");
const modalBackground = document.querySelector("#modal-cadastrar-usuario");
const modalContainer = document.querySelector("#modal-cadastrar-usuario-container");
const btnCloseModal = document.querySelector("#closeModal")


btnUsuario.addEventListener("click", () => {
  modalBackground.style.display = "flex";
  modalContainer.style.display = "flex";
});

modalBackground.addEventListener("click", () => {
    modalBackground.style.display = "none";
    modalContainer.style.display = "none";
})

btnCloseModal.addEventListener("click", e => {
    e.preventDefault();
    modalBackground.style.display = "none";
    modalContainer.style.display = "none";
})

modalContainer.addEventListener("click", e => {
    e.stopPropagation();
});


const btnFuncionario = document.querySelector("#btnFuncionario");
const funcionarioModalBackground = document.querySelector("#modal-cadastrar-funcionario");
const funcionarioModalContainer = document.querySelector("#modal-cadastrar-funcionario-container");
const btnCloseModalFuncionario = document.querySelector("#closeModalFuncionario")

btnFuncionario.addEventListener("click", () => {
    funcionarioModalBackground.style.display = "flex";
    funcionarioModalContainer.style.display = "flex";
})

funcionarioModalBackground.addEventListener("click", () => {
    funcionarioModalBackground.style.display = "none";
    funcionarioModalContainer.style.display = "none";
})

funcionarioModalContainer.addEventListener("click", e => {
    e.stopPropagation();
})

btnCloseModalFuncionario.addEventListener("click", e => {
    e.preventDefault();
    funcionarioModalBackground.style.display = "none";
    funcionarioModalContainer.style.display = "none";
})



