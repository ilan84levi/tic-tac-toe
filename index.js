
// iife

(function () {

    let player;
    let pc;
    let lockBoard = false;
    let cells = $(".cell");
    let emptyCells = $(".empty");

    let combinations = [
        [cells[0], cells[1], cells[2]],
        [cells[3], cells[4], cells[5]],
        [cells[6], cells[7], cells[8]],
        [cells[0], cells[3], cells[6]],
        [cells[1], cells[4], cells[7]],
        [cells[2], cells[5], cells[8]],
        [cells[0], cells[4], cells[8]],
        [cells[2], cells[4], cells[6]]
    ];

    function winner() {
       
        let cell1, cell2, cell3;
        console.log($(".empty").length)
      

        for (let i = 0; i <= combinations.length - 1; i++) {

            for (let j = 0; j <= combinations[i].length - 1; j++) {

                if (combinations[i][0].firstChild && combinations[i][1].firstChild && combinations[i][2].firstChild) {
                    cell1 = combinations[i][0].firstChild.className;
                    cell2 = combinations[i][1].firstChild.className;
                    cell3 = combinations[i][2].firstChild.className;

                    if (cell1 === cell2 && cell2 === cell3 && cell1 !== undefined || null) {
                        lockBoard === true;
                        return true;
                    }

                }

            }

        }

        if($(".empty").length = 0){
            alert("try again");
            return false;
        }

        return false;

    }


    $("#startNewGame").on("click", function () {
        location.reload();
    });

    $("#xx").on("click", function () {
        if (lockBoard === true) {
            return;
        }
        else {
            $("#oo").remove();
            if (emptyCells.length > 0) {
                player = "<i class='fas fa-times'></i>";
                $(".firstMoveClass").css("visibility", "visible")
                $(this).css("color", "red");
                pc = "<i class='far fa-circle'></i>";
            }
        }

    });

    $("#oo").on("click", function () {
        if (lockBoard === true) {
            return;
        }
        else {
            $("#xx").remove();
            if (emptyCells.length > 0) {
                player = "<i class='far fa-circle'></i>";
                $(".firstMoveClass").css("visibility", "visible")
                $(this).css("color", "red");
                pc = "<i class='fas fa-times'></i>";
            }
        }


    });

    $("#fmPlayer").on("click", function () {
        $("#fmPlayer").css("color", "red");
        $(".gameBoard").css("visibility", "visible")
    });

    $("#fmPc").on("click", function () {
        $("#fmPc").css("color", "red");
        $(".gameBoard").css("visibility", "visible")
        pcTurn();
    });

    $(".cell").on("click", function () {

        if (emptyCells.length > 0 && this.classList.contains("empty")) {
            $(this).html(player).removeClass("empty");
            $(this).addClass("full");
            if (winner() == false) {
                pcTurn();
            } else {
                alert("You won the game ");
            }

        } else {
            return false;
        }

    });

    // pcTurn()
    function pcTurn() {

        let tempArray = [];

        if (emptyCells[4].classList.contains("empty")) {
            emptyCells[4].innerHTML = pc;
            emptyCells[4].classList.remove("empty");
            emptyCells[4].classList.add("full")
            return;
        }


        for (let i = 0; i <= emptyCells.length - 1; i++) {
            tempArray.push(emptyCells[i]);
        }

        while (!tempArray[0].classList.contains("empty")) {
            for (let i = tempArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * tempArray.length)
                const temp = tempArray[i]
                tempArray[i] = tempArray[j]
                tempArray[j] = temp
            }
        }

        if (emptyCells.length > 0 && tempArray[0].classList.contains("empty")) {

            tempArray[0].innerHTML = pc;
            tempArray[0].classList.remove("empty");
            tempArray[0].classList.add("full")

            if (winner() == true) {
                alert("computer wins ");
            } else {
                tempArray = [];
            }

        } else {
            return false;
        }
        winner();
    }

})()