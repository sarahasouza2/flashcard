// Script para Flashcards - Cronograma de Estudos

document.addEventListener("DOMContentLoaded", () => {
  console.log("Script carregado com sucesso!");

  // Seleciona todos os cartões
  const cards = document.querySelectorAll(".card");

  // Adiciona evento de clique para destacar o cartão
  cards.forEach(card => {
    card.addEventListener("click", () => {
      alert(`Você clicou em: ${card.querySelector("h3").textContent}`);
    });
  });
});
