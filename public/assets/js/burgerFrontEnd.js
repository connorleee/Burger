console.log("test load")

$(function () {
    $("#burgerInput").click(function (event) {
        event.preventDefault();

        let newBurger = {burgerName: $("#burgerName").val().trim()}

        console.log(newBurger)

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger,
            dataType: "text"
        }).then(()=>{
            console.log("created new burger");
            location.reload();
        })
    })

})