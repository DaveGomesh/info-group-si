function carregarFooter(){
    let footer = `<div class="contaneir-fluid bg-light pt-5 pb-5">
    <div class="container">
        <div class="media p-3">
            <img src="images/icons8_male_user_127px.png" alt="John Doe" class="mr-3" style="width:60px;">
            <div class="media-body">
              <h5 class="mt-1">David Gomesh <small><i>Atualizado em 10 de Maio de 2021</i></small></h5>
              <p>Copyright &copy; 2021 David Gomesh</p>
            </div>
          </div>
    </div>
</div>`;
    document.querySelector("footer#rodape").innerHTML += footer;
}

// let footer = `<div class="contaneir-fluid bg-light pt-5 pb-5"><div class="container"><div class="media p-3">style="width:60px;"><div class="media-body">i></small></h5><p>Copyright &copy; 2021 David Gomesh</p></div></div></div></div>`;