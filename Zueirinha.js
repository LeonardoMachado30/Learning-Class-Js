function getUrl(url){
    
    let request = new XMLHttpRequest();

    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function html(element){
    let linha = document.createElement("td");
    let tdnome = document.createElement("tr");
    let tdAvatar = document.createElement("tr");

    tdnome.innerHTML = element.nomeFantasia;
    tdAvatar.innerHTML = `<img src="${element.avatarUrl}" />`;

    linha.appendChild(tdAvatar)
    linha.appendChild(tdnome)

    return linha;
}

function main(){
    date = getUrl("https://api.helena.app/test/api/Company");
    infoJson = JSON.parse(date);
    console.log(infoJson);
    let tabela = document.getElementById("teste");
    infoJson.forEach(element => {
        let = linha = html(element);
        tabela.appendChild(linha);
    });
}

main();