(() => {
  const gameboard = {
    gameboardArr: [],
    turnCount: 0,
    init: function () {
      this.cacheDOM();
      this.bind();
    },
    cacheDOM: function () {
      this.para = document.querySelector('p');
      this.button = document.querySelector('button');
      this.gameboard = document.querySelector('#gameboard-section');
      this.option = function (value) {
        return document.querySelector(`[data-index="${value}"]`);
      };
    },
    render: function () {
      this.option(this.optionIndex).innerText = this.gameboardArr[
        this.gameboardArr.length - 1
      ];
      if (Player1.check(Player1.Array, combinations)) {
        this.para.innerText = `${Player1.name} wins!`;
      } else if (Player2.check(Player2.Array, combinations)) {
        this.para.innerText = `${Player2.name} wins!`;
      } else if (this.turnCount > 8 && !this.para.innerText.includes('wins')) {
        this.para.innerText = 'Its a Tie!';
      }
    },
    gameController: function (event) {
      if (!event.target.innerText && !this.para.innerText.includes('wins')) {
        this.playerMove(event);
        this.optionIndex = event.target.dataset.index;
        this.render();
      }
    },
    reset: function () {
      document.querySelectorAll('.option').forEach((item) => {
        item.innerText = '';
      });
      this.turnCount = 0;
      this.para.innerText = '';
      this.optionIndex = '';
      this.gameboardArr = [];
      Player1.Array = [];
      Player2.Array = [];
    },
    bind: function () {
      this.gameboard.addEventListener('click', this.gameController.bind(this));
      this.button.addEventListener('click', this.reset.bind(this));
    },
    playerMove: function (event) {
      if (this.turnCount % 2 === 0) {
        this.gameboardArr.push('X');
        Player1.Array.push(parseInt(event.target.dataset.index));
      } else {
        this.gameboardArr.push('O');
        Player2.Array.push(parseInt(event.target.dataset.index));
      }
      this.turnCount++;
    },
  };

  const combinations = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const player = (number) => {
    const name = prompt(
      `Please enter player ${number}'s name`,
      `Player ${number}`
    );

    let Array = [];

    const check = function (target, combinations) {
      return combinations.some((element) => compare(target, element));
    };
    const compare = function (target, element) {
      return element.every((value) => target.includes(value));
    };

    return { name, Array, check };
  };

  const Player1 = player(1);
  const Player2 = player(2);

  gameboard.init();
})();
