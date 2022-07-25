import { ajax } from '../helpers/ajax.js'
import api from '../helpers/wp_api.js'
import { PostCard } from './PostCard.js';

export async function Router(){
  const d = document,
    w = window,
    $main = d.getElementById('main');

    let {hash} = location;

    console.log(hash);

    $main.innerHTML = null;

  if(!hash || hash === "#/"){
    await ajax({
      url: api.POSTS, 
      cbSuccess: (posts) =>{
        //console.log(posts);
        let html = '';
        posts.forEach(post => (html += PostCard(post)));
        $main.innerHTML=html;
      }
    })
  } else if(hash.includes('#/search')){
    $main.innerHTML ='<h2>Sección del Buscador</h2>'

  }else if(hash === '#/contacto'){
    $main.innerHTML ='<h2>Sección del contacto</h2>'

  }else{
    $main.innerHTML ='<h2>Aquí cargarga el contenido de el post previamente seleccionado</h2>';
  }

  d.querySelector('.loader').style.display = 'none';
  
};