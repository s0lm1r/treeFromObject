"use strict";

let data = {
  "Рыбы": {
    "Форель": {},
    "Щука": {}
  },

  "Деревья": {
    "Хвойные": {
      "Лиственница": {},
      "Ель": {}
    },
    "Цветковые": {
      "Берёза": {},
      "Тополь": {}
    }
  }
};

const container = document.getElementById('container');

const createTree = function(data, container) {

  const ul = document.createElement('ul');

    for (let key in data) {

      const li = document.createElement('li');
      li.innerHTML = key;
      ul.append(li);
       
      createTree(data[key], li);
        }
    container.append(ul);
  }
createTree(data, container); // создаёт
