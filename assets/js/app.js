(() => {
  let gameboard = {
    gameboardArr: [],
    count: 0,
    init: function () {
      this.cacheDOM();
      this.bind();
    },
    cacheDOM: function () {
      this.button = document.querySelector('button');
      this.options = document.querySelector('#gameboard-section');
      this.option = function (value) {
        return document.getElementById(value);
      };
    },
    render: function () {
      this.option(this.optionID).innerText = this.gameboardArr[
        this.gameboardArr.length - 1
      ];
    },
    takeTurn: function (event) {
      if (event.target && !event.target.innerText) {
        this.choice();
        this.optionID = event.target.id;
        this.render();
      }
    },
    bind: function () {
      this.options.addEventListener('click', this.takeTurn.bind(this));
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
