const slider = document.getElementById('fontSizeSlider');
const allParagraphs = document.querySelectorAll('p');

slider.addEventListener('input', function() {
  const fontSize = slider.value;

  allParagraphs.forEach(paragraph => {
    paragraph.style.fontSize = `${fontSize}px`; 
  });
});




/*const slider = document.getElementById('fontSizeSlider');
const paragraph = document.getElementById('paragraph');

slider.addEventListener('input', function() {
  const fontSize = slider.value;
  paragraph.style.fontSize = `${fontSize}px`;
});*/
