const form = document.querySelector('form');
const pesquisaCep = document.querySelector('#cep')

const limpaForm = () => {
    document.querySelector('#uf').value = '';
    document.querySelector('#cidade').value = '';
    document.querySelector('#bairro').value = '';
    document.querySelector('#logradouro').value = '';
};

const meuCallback = (conteudo) => {
    if(!('erro' in conteudo)){
        document.querySelector('#uf').value = (conteudo.uf);
        document.querySelector('#cidade').value = (conteudo.localidade);
        document.querySelector('#bairro').value = (conteudo.bairro);
        document.querySelector('#logradouro').value = (conteudo.logradouro);
    }
    else{
        limpaForm();
        alert ('CEP não encontrado')
    }
};

form.onsubmit = () => false;

pesquisaCep.addEventListener('blur', () => {
    let cep = pesquisaCep.value.replace(/\D/g,'');

    if(cep != ''){
        let validaCep = /^[0-9]{8}$/;

            if(validaCep.test(cep)){
            let sript = document.createElement('script');

            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meuCallback' 
            

            document.body.appendChild(script);
        }
        }
        else{
            limpaForm();
            alert('CEP invalido');
        }

    }

);
