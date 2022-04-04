const student = {
    id:1002,
    name:'Hasan',
    money: 5000,
    mejor: 'bangla',
    subject: ['english', 'math', 'economics', 'folklore'],
    bestFriend: {
        name: 'salman',
        age: 25,
        job: 'no',
    },
    takeExam: function(){
        console.log(this.name, 'taking exam')
    },

    treatDey: function(expence, tips){
        this.money = this.money -expence - tips;
        return this.money;
    }
};

student.takeExam();

const balance = student.treatDey(920, 80);
console.log(balance);