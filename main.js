function showText(date) {
    
    var textContents = document.getElementsByClassName('text-content');

    for (var i = 0; i < textContents.length; i++) {
      textContents[i].classList.remove('visible');
    }

    var selectedText = document.getElementById('content-' + date);
    if (selectedText) {
      selectedText.classList.add('visible');
    }
    
  }
