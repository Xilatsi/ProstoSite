// JavaScript для відображення відповідного тексту при натисканні кнопок
function showText(date) {
    // Отримуємо всі елементи з класом text-content
    var textContents = document.getElementsByClassName('text-content');

    // Ховаємо всі текстові блоки
    for (var i = 0; i < textContents.length; i++) {
      textContents[i].classList.remove('visible');
    }

    // Показуємо тільки той блок, який відповідає вибраній даті
    var selectedText = document.getElementById('content-' + date);
    if (selectedText) {
      selectedText.classList.add('visible');
    }
    
  }
