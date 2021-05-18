let app = new Vue({
    el: "#vueApp",
    data: {
        articles: [
            {
                title: 'Dev. Internship ToDo Application',
                text: '',
                read: 'No',
                completed: false
            }

        ],
        welcomeMessage: 'The Blog Application',
        inputText: ''
    },
    methods: {
        addItem() {
            if (this.inputText != "") {
               
                app.todos.push({ text: this.inputText, completed: false })

            }
            else { }
        },
        deleteItem() {
            // if todos id = todos number then delete

            this.articles.splice(this.articles.length - 1, 1);
           

        }
    },
    mounted() {
        if (localStorage.getItem('new list') !== null) {
            try {
                this.articles = JSON.parse(localStorage.getItem('new list'));
            } catch (e) {
                
            }
        }
    },
    watch: {
        articles: function () {
            localStorage.setItem('new list', JSON.stringify(this.articles));
            console.log(this.articles)
            
        }
    }
    
});


