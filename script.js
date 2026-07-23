// Пока это тестовые данные.
// Позже мы подключим автоматическое обновление.

const rankElement = document.getElementById("rank");
const rrElement = document.getElementById("rr");

const player = {
    rank: "Ascendant 2",
    rr: 67
};

rankElement.textContent = player.rank;
rrElement.textContent = player.rr + " RR";
