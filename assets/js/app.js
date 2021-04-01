(() => {
  let gameboard = {
    gameboardArr: [],
    count: 0,
    buttonValue: '',
    init: function () {
      this.cacheDOM();
      this.bind();
    },
    cacheDOM: function () {
      this.main = document.querySelector('main');
      this.button = document.querySelector('button');
      this.options = document.querySelector('#gameboard-section');
      this.option = function (value) {
        return document.getElementById(value);
      };
    },
    render: function () {
      if (this.buttonValue === 'Start') {
        this.button.innerText = 'Reset';
        this.buttonValue = 'Reset';
      } else if (this.buttonValue === 'Reset') {
        this.option(this.optionID).innerText = this.gameboardArr[
          this.gameboardArr.length - 1
        ];
      }
    },
    takeTurn: function (event) {
      if (
        event.target.nodeName === 'BUTTON' &&
        event.target.innerText === 'Start'
      ) {
        this.buttonValue = 'Start';
        this.render();
      } else if (
        this.buttonValue === 'Reset' &&
        event.target.className === 'option' &&
        !event.target.innerText
      ) {
        this.choice();
        this.optionID = event.target.id;
        this.render();
      }
    },
    bind: function () {
      this.main.addEventListener('click', this.takeTurn.bind(this));
    },
    choice: function () {
      if (this.count % 2 === 0) {
        this.gameboardArr.push('X');
      } else {
        this.gameboardArr.push('O');
      }
      this.count++;
    },
  };

  gameboard.init();
})();
