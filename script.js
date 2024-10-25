const slider = document.getElementById('fontSizeSlider');
const allParagraphs = document.querySelectorAll('p');

slider.addEventListener('input', function() {
  const fontSize = slider.value;

  allParagraphs.forEach(paragraph => {
    paragraph.style.fontSize = `${fontSize}px`; 
  });
});



/*const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    // Создаем копию содержимого box и добавляем в модальное окно
    modal.innerHTML = box.innerHTML;
    document.body.appendChild(modal);

    // Добавляем обработчик закрытия по клику на фон
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.remove();
      }
    });
  });
});*/


/*const toggleSwitch = document.getElementById('toggle');
const boxes = document.querySelectorAll('.box');

function toggleModalFunction(enable) {
  boxes.forEach(box => {
    if (enable) {
      box.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        // Создаем копию содержимого box и добавляем в модальное окно
        modal.innerHTML = box.innerHTML;
        document.body.appendChild(modal);
      });
    } else {
      box.removeEventListener('click', () => {
        if (event.target === modal) {
          modal.remove();
        }
      });
    }
  });
}

toggleSwitch.addEventListener('change', () => {
  if (toggleSwitch.checked) {
    toggleModalFunction(true); 
  } else {
    toggleModalFunction(false); 
  }
});*/

/*const toggleSwitch = document.getElementById('toggle');
const boxes = document.querySelectorAll('.box');

let clickHandlers = []; // Массив для хранения функций обработчиков

function toggleModalFunction(enable) {
  boxes.forEach(box => {
    if (enable) {
      // Создаём обработчик клика
      const handleClick = () => {
        // Проверяем, нет ли уже открытого модального окна
        if (document.querySelector('.modal')) {
          return; // Если модальное окно уже открыто, ничего не делаем
        }

        // Создаём элемент модального окна
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = '<p>Это модальное окно!</p><button id="closeModal">Закрыть</button>';

        // Добавляем модальное окно в body
        document.body.appendChild(modal);

        // Добавляем обработчик для закрытия модального окна
        document.getElementById('closeModal').addEventListener('click', () => {
          modal.remove(); // Удаляем модальное окно
        });
      };

      clickHandlers.push(handleClick); // Добавляем обработчик в массив
      box.addEventListener('click', handleClick); // Добавляем обработчик на элемент
    } else {
      // Удаляем все обработчики, если они есть
      clickHandlers.forEach(handler => box.removeEventListener('click', handler));
      clickHandlers = []; // Очищаем массив обработчиков
    }
  });
}

// Слушаем изменение состояния переключателя
toggleSwitch.addEventListener('change', () => {
  if (toggleSwitch.checked) {
    toggleModalFunction(true); // Включаем возможность открытия модального окна
  } else {
    toggleModalFunction(false); // Отключаем возможность открытия модального окна
  }
});*/



const toggleSwitch = document.getElementById('toggle');
const boxes = document.querySelectorAll('.box');

let clickHandlers = []; // Массив для хранения функций обработчиков

function toggleModalFunction(enable) {
  boxes.forEach((box, index) => {
    if (enable) {
      // Создаём обработчик клика
      const handleClick = () => {
        // Проверяем, нет ли уже открытого модального окна
        if (document.querySelector('.modal')) {
          return; // Если модальное окно уже открыто, ничего не делаем
        }

        // Создаём элемент модального окна
        const modal = document.createElement('div');
        modal.classList.add('modal');

        // Клонируем содержимое текущего элемента box
        const clonedContent = box.cloneNode(true);

        // Убираем класс .box у клона, чтобы он не сохранял исходные стили
        clonedContent.classList.remove('box');

        // Добавляем клонированный контент в модальное окно
        modal.appendChild(clonedContent);

        // Добавляем модальное окно в body
        document.body.appendChild(modal);

        // Закрытие модального окна по клику на него
        modal.addEventListener('click', () => {
          modal.remove(); // Удаляем модальное окно
        });
      };

      clickHandlers[index] = handleClick; // Сохраняем обработчик в массив с индексом элемента
      box.addEventListener('click', handleClick); // Добавляем обработчик на каждый элемент .box
    } else {
      // Удаляем соответствующий обработчик для каждого элемента
      if (clickHandlers[index]) {
        box.removeEventListener('click', clickHandlers[index]);
      }
    }
  });
}

// Слушаем изменение состояния тумблера (переключателя)
toggleSwitch.addEventListener('change', () => {
  if (toggleSwitch.checked) {
    toggleModalFunction(true); // Включаем возможность открытия модальных окон
  } else {
    toggleModalFunction(false); // Отключаем возможность открытия модальных окон
  }
});

// Изначально отключаем модальные окна, если тумблер выключен
if (!toggleSwitch.checked) {
  toggleModalFunction(false);
}








/*const slider = document.getElementById('fontSizeSlider');
const paragraph = document.getElementById('paragraph');

slider.addEventListener('input', function() {
  const fontSize = slider.value;
  paragraph.style.fontSize = `${fontSize}px`;
});*/
