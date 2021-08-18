eel.expose(url);
function url() {
    var lista = []
    lista[0] = document.getElementById("url").value;
    lista[1] = document.getElementById("nome").value;
    return lista
}

async function Adicionar(){
    let adicionar = await eel.add_radio()()
    console.log(adicionar)
}