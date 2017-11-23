var person = new Vue({
    el: '#form',
    data: {
        name: "" || "John",
        surname: "" || "Doe",
        gender: "" || "travesty",
        selected: 0,
        citylist:[
            {city: 'Kyiv'},
            {city: 'Kharkiv'},
            {city: 'Odessa'},
            {city: 'Dnipro'},
            {city: 'Sumy'}
        ],
        music: [],
        questionshow: true,
        answershow: false
    },
    computed: {
        fullname: function () {
            return this.name + " " + this.surname
        }
    },
    methods: {
        questiondata: function(){
            return this.questionshow = false
        },
        answerdata: function() {
            return this.answershow = true
        }
    }
})


