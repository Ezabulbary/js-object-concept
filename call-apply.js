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
console.log(Hasan.treatDey.call(Hasan, 200));

console.log(Hasan.treatDey.apply(salman, [900]));