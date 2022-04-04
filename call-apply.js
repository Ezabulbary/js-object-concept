const Hasan = {
    id: 1002,
    name: 'Hasan',
    money: 5000,
    treatDey: function (expence) {
        this.money = this.money - expence;
        return this.money;
    }
};

const salman = {
    id: 1003,
    name: 'salman',
    money: 6000,
};

console.log(Hasan.treatDey(200));
const salmanTratDay = Hasan.treatDey.bind(salman);
console.log(salmanTratDay(700));