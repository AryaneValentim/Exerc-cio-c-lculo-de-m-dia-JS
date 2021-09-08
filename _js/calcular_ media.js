function calcular_media() {
    // Declaração de variáveis
    var nota1,nota2, nota3, nota4, media;

    // Entrada de dados
    // javascript nota1 = document.getElementById("nota1").value;
    nota1 = Number($("#nota1").val());
    nota2 = Number($("#nota2").val());
    nota3 = Number($("#nota3").val());
    nota4 = Number($("#nota4").val());


    // Processamento de Dados
    media = (nota1 + nota2 + nota3 + nota4) / 4;

    // Saída de Dados
    $(".form-notas").addClass("d-none");
    $(".show-result").removeClass("d-none");
    $(".result-value").html(parseInt(media));

    if(media >= 7){
        $(".description-result").html("Parabéns! A sua nota é: "+media);
        $(".img-aprovado").removeClass("d-none");
    //  $(".img-result").attr("src", "_img/aprovado.png");
    }
        else {
            $(".description-result").html("Você precisa melhorar!");
            $(".description-result").addClass("text-danger");
            $(".img-exame").removeClass("d-none");
    }
    

    /*JavaScript
    document.getElementByClass("form-notas").classList.add("d-none");
    document.getELementByClass("form-notaas");classList.revome = ("d-none");
    */
    console.log("Média é igual a "+media);
   // alert("Média é igual a "+media);
}
function voltar() {
    $("input").val("");

	$(".form-notas").removeClass("d-none");
    $(".show-result").addClass("d-none");
    $(".result-value").html("...");
}
