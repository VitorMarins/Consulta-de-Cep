function Validarfrete(){
    let cep = document.querySelector("#cep").value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url).then(function(Response){
        Response.json().then(function(data){
            mostrarVad(data);
        })
    })
}
function mostrarVad(dados){
    let resul = document.querySelector("#resultado")
    if (dados.erro){
        resul.innerHTML=`<texto style="color: red;">Cep Invalido</texto>`
    }
    else{
        resul.innerHTML=`<texto>Endereço:${dados.logradouro}
            <br>Bairro:${dados.bairro}
            <br>Cidade:${dados.localidade}
            <br>Estado:${dados.uf}
            </texto>`
    }
}