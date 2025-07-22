document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    const usuario = document.getElementById("inputNome").value;
    const senha = document.getElementById("inputSenha").value;

    const userCerto = "matheusbonito";
    const senhaCerta = "12345";

    if (usuario === userCerto && senha === senhaCerta) {
        window.location.href = "././pages/paginaprincipal.html";
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Quem é você? Cadê o Theus? >:(',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Tentar novamente'
        });
    }
});
