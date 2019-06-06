$(document).ready(function() {
    $("#burgerInput").click(function (event) {
        event.preventDefault();

        let newBurger = { burgerName: $("#burgerName").val().trim() }

        console.log(newBurger)

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger,
            dataType: "text"
        }).then(() => {
            console.log("created new burger");
            location.reload();
        })
    })

    $(".devour").on("click", function() {
        console.log("devour button clicked")

        console.log($(this))

        let id = $(this).data("id")
        let newDevouredState = {
            devoured: true
        };

        console.log(id)

        $.ajax("api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(() => {
            console.log("changed devoured state to: " + newDevouredState);
            location.reload();
        })
    })

})