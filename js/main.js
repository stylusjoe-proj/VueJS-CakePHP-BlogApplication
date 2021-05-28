let app = new Vue({
    el: "#vueApp",
    data: {
        articles: [
            {}
        ],
        welcomeMessage: 'The Blog Application',
        articleTitle: "",
        articleBody: "",
        token: ""
    },
    methods: {
        addArticle() {

            var articleTitle = document.getElementById("titleinput").value;
            var articleBody = document.getElementById("bodyinput").value;

            const newArticle = {
                title: `${articleTitle}`,
                body: `${articleBody}`
            }


            fetch('http://206.189.202.188:2593/api/articles/add.json', {
                method: 'post',
                mode: 'no-cors',
                headers: {
                    "Accept": "*",
                    "Authorization": `Bearer ${this.token}`,
                    "Content-Type": "application/json"
            },
            body: JSON.stringify(newArticle),
            })
            .then(response => { 
                if (response.ok) {
                    response.json().then(json => { console.log(json);
                    });
                }
            });

            document.getElementById("titleinput").reset();
            document.getElementById("bodyinput").reset();
        },
        deleteArticle(x) {

            var articleID = x;

            fetch(`http://206.189.202.188:2593/api/articles/delete/${articleID}`, {
                method: 'post',  
                mode: 'no-cors',
                headers: {
                    "Accept": "*",
                    "Authorization": `Bearer ${this.token}`,
                    "Content-Type": "application/json"
                }
            })
        }
    },
    mounted() {

        fetch('http://206.189.202.188:2593/api/users/token')
            .then(response => response.json().then(data => { this.token = data;}))

        
        fetch('http://206.189.202.188:2593/api/articles/index')
            .then(response => response.json().then(data => { this.articles = data;}))

    },
    watch: {
        articles: function () {
            fetch('http://206.189.202.188:2593/api/articles/index')
            .then(response => response.json().then(data => { this.articles = data;}))
            
        }
    }
    
    

});

