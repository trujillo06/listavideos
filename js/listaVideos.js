var videos=[
    {titulo: 'Video 1',descripcion: 'Video1', url: 'https://www.youtube.com/embed/2pEJV7lMoO4?si=3wXxpqb9KEgNl76j'},
    {titulo: 'Video 2',descripcion: 'Video2', url: 'https://www.youtube.com/embed/dn3yilVJeS4?si=oqyZrAqQiznHnykK'},
    {titulo: 'Video 3',descripcion: 'Video3', url: 'https://www.youtube.com/embed/bsGtLllIkUg?si=nsVRpaH_ygmiEDwI'},
    {titulo: 'Video 4',descripcion: 'Video4', url: 'https://www.youtube.com/embed/V3v8tyfeYVM?si=OcOpXG6cHQ8ZFW4M'}
];

var listaVideos= document.getElementById('listaVideosArreglo')

mostrarListaVideos(videos);

function mostrarListaVideos(videosBuscados) {
    listaVideos.innerHTML='';

    videosBuscados.forEach(indiceVideo =>{
        var fila=document.createElement('div');
        var col1UrlVideo=document.createElement('div');
        var iframeVideo=document.createElement('iframe');
        fila.setAttribute('class','row');
        col1UrlVideo.setAttribute('class','col');
        iframeVideo.setAttribute('src',indiceVideo.url);
        iframeVideo.setAttribute('frameborder','0');
        iframeVideo.setAttribute('width','400px');
        iframeVideo.setAttribute('heigth','300px');
        col1UrlVideo.appendChild(iframeVideo);
        fila.appendChild(col1UrlVideo);

        //Crear div para el titulo y descripcion del video (columna 2)
        var col2TituloVideo = document.createElement('div');
        var h4TituloVideo = document.createElement('h4');
        var h6DescripcionVideo = document.createElement('h6');
        col2TituloVideo.setAttribute('class', 'col');
        h4TituloVideo.textContent = indiceVideo.titulo;
        h6DescripcionVideo.textContent = indiceVideo.descripcion;
        col2TituloVideo.appendChild(h4TituloVideo);
        col2TituloVideo.appendChild(h6DescripcionVideo);
        fila.appendChild(col2TituloVideo);

        //Crear div para el boton (columna 3)
        var col3BotonVideo=document.createElement('div');
        var botonVideo=document.createElement('button');

        col3BotonVideo.setAttribute('class0', 'col');
        botonVideo.setAttribute('class', 'btn btn-outline-danger')
        botonVideo.innerHTML='@';

        col3BotonVideo.appendChild(botonVideo);
        fila.appendChild(col3BotonVideo);

        listaVideos.appendChild(fila);
    });
}


function buscarVideos() {
    var textoVideo = document.getElementById('txtBuscar').value;
    //alert('texto buscado' + textoVideo);
    var videosBuscados = videos.filter(
        indiceVideo => {
            return indiceVideo.titulo.includes(textoVideo);
        }
    );
    
    mostrarListaVideos(videosBuscados);
}