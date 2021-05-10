function carregarHeader(paginaAtiva){
    let header = `
        <div class="container-fluid p-3 bg-primary text-white">
            <div class="container">
                <h1>Informações do Grupo</h1>
                <p>Sistemas de Informação - 3º Período</p>
            </div>
        </div>
    
        <div class="container-fluid p-0">
            <div class="container p-0">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link ${paginaAtiva == 'HOME' ? 'active':''}" href="index.html">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${paginaAtiva == 'Contatos' ? 'active':''}" href="contatos.html">Contatos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${paginaAtiva == 'Horarios' ? 'active':''}" href="horarios.html">Horários</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${paginaAtiva == 'Sobre' ? 'active':''}" href="sobre.html">Sobre</a>
                    </li>
                </ul>
            </div>
        </div>`; 
    document.querySelector("header#cabecalho").innerHTML += header;
}
