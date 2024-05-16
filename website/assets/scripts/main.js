
document.addEventListener('DOMContentLoaded', function () {
  // Captura o campo de busca
  const searchInput = document.getElementById('search');

  // Adiciona um ouvinte de evento ao campo de busca
  searchInput.addEventListener('input', function () {
    // Obtém o valor digitado pelo usuário
    const searchTerm = this.value.toLowerCase();

    // Seleciona todos os cards de animais
    const animalCards = document.querySelectorAll('.card');

    // Itera sobre cada card de animal
    animalCards.forEach(function (card) {
      // Obtém o nome do animal do card atual
      const animalName = card.querySelector('span:first-of-type').textContent.toLowerCase();

      // Verifica se o nome do animal corresponde ao termo de pesquisa
      if (animalName.includes(searchTerm)) {
        // Se corresponder, exibe o card
        card.style.display = 'block';
      } else {
        // Caso contrário, oculta o card
        card.style.display = 'none';
      }
    });
  });

  // Seleciona o botão de pesquisa
  const search = document.querySelector(".search__icon")

  // Adiciona a visibilidade a barra de pesquisa
  const searchContainer = document.querySelector(".search__container");

  // Espera o evento para carregar fazer a exibição
  search.addEventListener('click', function () {
    searchContainer.classList.toggle('search__container--is-visible')
  })
});