export function Loader(){
  const $loader = document.createElement('img');
  $loader.src = '/spa/app/assets/oval.svg'
  $loader.alt = 'Cargando...';
  $loader.classList.add('loader');

  return $loader;
}