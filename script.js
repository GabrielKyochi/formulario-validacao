function validarFormularioCliente(){
    //Adquirição de dados
    const nomeCliente = document.getElementById('nomeCliente').value;
    console.log(nomeCliente);

    const dataNascimentoCliente = document.getElementById('dataNascimentoCliente');
    console.log(dataNascimentoCliente);

    const enderecoCliente = document.getElementById('enderecoCliente');
    console.log(enderecoCliente);

    const numeroCliente = document.getElementById('numeroCliente');
    console.log(numeroCliente);

    const emailCliente = document.getElementById('emailCliente');
    console.log(emailCliente);

    const cpfCliente = document.getElementById('cpfCliente');
    console.log(cpfCliente);

    const corCliente = document.getElementById('corCliente');
    console.log(corCliente);

    const parentescoCliente = document.getElementById('parentescoCliente');
    console.log(parentescoCliente);

    const numeroParentescoCliente = document.getElementById('numeroParentescoCliente');
    console.log(numeroParentescoCliente);

    const emailParentescoCliente = document.getElementById('emailParentescoCliente');
    console.log(emailParentescoCliente);

    const senhaCliente = document.getElementById('senhaCliente');
    console.log(senhaCliente);

    const senhaConfirmacaoCliente = document.getElementById('senhaConfirmacaoCliente');
    console.log(senhaConfirmacaoCliente);
    //Encerramento da adquirição de dados

    //Processamento de dados

    if(!nomeCliente){
        alert('Digite o seu nome corretamente.');
        return;
    } else{
        console.log(nome);
    }






}