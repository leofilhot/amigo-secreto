let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nomes = input.value.trim();

    if (nomes === "") {
        alert("Digite pelo menos um nome!");
        return;
    }

    // Separando nomes por "/"
    const listaNomes = nomes.split("/").map(nome => nome.trim()).filter(nome => nome !== "");

    let adicionados = 0;
    let repetidos = 0;

    listaNomes.forEach(nome => {
        if (!amigos.includes(nome)) {
            amigos.push(nome);
            adicionados++;
        } else {
            repetidos++;
        }
    });

    if (adicionados > 0) {
        atualizarLista();
    }

    if (repetidos > 0) {
        alert(`${repetidos} nome(s) já estavam na lista e não foram adicionados.`);
    }

    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois nomes para sortear!");
        return;
    }

    let sorteio = [...amigos];
    let tentativas = 0;

    do {
        sorteio = sorteio.sort(() => Math.random() - 0.5);
        tentativas++;
    } while (sorteio.some((nome, i) => nome === amigos[i]) && tentativas < 100);

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h3>Resultado do sorteio:</h3>";

    for (let i = 0; i < amigos.length; i++) {
        resultadoDiv.innerHTML += `<p>${amigos[i]} → ${sorteio[i]}</p>`;
    }
}

function limparLista() {
    amigos = [];
    atualizarLista();
    document.getElementById("resultado").innerHTML = "";
}
