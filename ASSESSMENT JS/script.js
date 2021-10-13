const marvel = {
    render: () => {
      const urlAPI = 'https://gateway.marvel.com/v1/public/comics?ts=1&apikey=2a392eace6718e257b1328a52f02e830&hash=b2b20715a9972ccd4028c8e1b36f97ee';
      const colecoes = document.querySelector('#marvelcomics-row');
      let contentHTML = '';
  
      fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
          for (const name of json.data.results) {
             let urlName = name.urls[0].url;
             contentHTML +=                
           }
           colecoes.innerHTML = contentHTML;
        })
    }
};
marvel.render();


//render - A função render () leva dois argumentos, código HTML e um elemento HTML.
//O objetivo da função é exibir o código HTML especificado dentro do elemento HTML especificado.
//preventDefault - cancelamento de evento
//fetch - busca de recursos


