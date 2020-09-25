

function somar(quant) {
    var value = parseInt(document.querySelectorAll(".quant"));
    var btn = parseInt(document.querySelectorAll(".mais"));

    value += quant;
    if (value < 1) {
        document.getElementById("quant").value = 1;
    } else {
        document.getElementById("quant").value = value;
    }
}

    $(document).ready(function () {

        $(".menos").click(function () {
            var index = $(".menos").index(this);
            var domElement = $( ".quant" ).get( index );
            if($(domElement).val() > 0)
                $(domElement).val($(domElement).val()-1);
        });
        $(".mais").click(function () {
            var index = $(".mais").index(this);
            var domElement = $( ".quant" ).get( index );
                $(domElement).val(parseInt($(domElement).val())+1);
        });
    });
