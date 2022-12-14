const btnAdicionar = document.getElementById('btnAdicionar')
const btnListaClubes = document.getElementById('btnListaClubes')
const btnMontarJogos = document.getElementById('btnMontarJogos')

const qtdRegistros = document.getElementById('qtdRegistros')
const saida1 = document.getElementById('listaRegistros1')
const saida2 = document.getElementById('listaRegistros2')

btnAdicionar.addEventListener('click', adicionarClube)
btnListaClubes.addEventListener('click', listarClubes)
btnMontarJogos.addEventListener('click', montarJogos)

var inputClube = document.getElementById('inputClube')
var CLUBES = []

// **************************************************************************
function adicionarClube() {

    var clube = inputClube.value.toUpperCase()

    if (clube == '') {
        alert('Digite o clube!')
        inputClube.focus()
        return
    }

    // VERIFICANDO DENTRO DO ARRAY SE O CLUBE JÁ EXISTE
    const pesquisa = CLUBES.find(element => element === clube);

    if (pesquisa !== undefined) {
        alert('Opa! Clube já existe na listagem.')
        inputClube.value = ''
        inputClube.focus()
        return
    }

    CLUBES.push(clube)

    listarClubes()

    inputClube.value = ''
    inputClube.focus()

    quantidadeElementos()
}

// **************************************************************************
function listarClubes() {

    var estrutura = ''

    if (CLUBES.length == 0) {
        alert('Não há clubes a serem listados')
        return
    }

    for (var i = 0; i < CLUBES.length; i++) {
        estrutura += (i + 1) + '. ' + CLUBES[i] + '\n'
    }

    saida1.textContent = estrutura

}

// **************************************************************************
function montarJogos() {

    var jogos = ''
    var ultimo = CLUBES[CLUBES.length - 1]

    // alert(ultimo)

    if ((CLUBES.length % 2) !== 0 || CLUBES.length == 0) {
        alert('Adicione mais um clube para poder montar os jogos !')
        inputClube.focus()
        return
    }

    for (var n = 0; n < (CLUBES.length - 1) / 2; n++) {

        jogos += CLUBES[n] + ' x ' + ultimoElemento(CLUBES, n) + '\n'
    }

    saida2.textContent = jogos
}

// **************************************************************************
function quantidadeElementos() {
    qtdRegistros.textContent = CLUBES.length
}

// **************************************************************************
function ultimoElemento(arr, ind) {
    return arr[arr.length - (1 + ind)]
}