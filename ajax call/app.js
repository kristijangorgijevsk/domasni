
// let btn = ("getData");

// btn = ("click", function () {
//     $.ajax({
//         url: "https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/shared_data/students.json",
//         success: function(data) {
//             let dataAjax = JSON.parse(data);
//             console.log(dataAjax);
//         },
//         error: function(error) {
//             console.log(error);
//         }
//     })
// })


document.getElementById("getData")
    .addEventListener("click", function () {
        fetch("https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/shared_data/students.json")
            .then(function(response) {
                console.log(response);
                return response.json();
            })
            .then(function(dataAjax) {
                console.log(dataAjax)
                let list = document.getElementById("emptyArray");
                // list.innerHTML = "";
                // for (let emptyArray of array) {
                //     // list.innerHTML += `<li> ${todo.userId} ${todo.title} | Completed: ${todo.completed} - ${todo.currentTime}</li>`
                // }
            }).catch(function(error) {
                console.log(error);
            })
    });