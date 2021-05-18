var userData = {
    "email":"fetch@user.com",
    "password":"password123"
};



//get token

fetch('http://206.189.202.188:2593/api/users/add', {
    method: 'POST',
    headers: {
        "Accept": "application/json"
      },
    body: JSON.stringify(userData),
  })
    .then(response => {
        if (response.ok) {
            response.json().then(json => { console.log(json);
            });
        }
    });


// write JSON object for an article { id:, title, body, category_id}




// use token to add article

const thisendData = {}



// use token to delete article

const sendData = {}



