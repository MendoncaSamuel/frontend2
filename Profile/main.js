//declare com let variavel slideIndex com valor 1
//chame a funcao showSlidades com slideIndex como parametro
/*crie a funcao slideseta com "n" como parametro e dentro da funcao
chame a funcao showSlides com parametro slideIndex += n)
*/
//Creia a funcao slideAtual com "n" como paramtro e dentro da funcao
//chame a funcao showSlides com o parametro slideIndex =n)

/*Crie a funcao showSlides com "n" como paramtro e dentro dela
--> declare let i e let slides com o documento obtendo o elemento
pelo nome de sua classe ("meuSlide")
--> declare let pontos com a obtenção do documento pelo nome da classe ("ponto")*/

//Declare uma condicao if e for junto ao professor 
// let slideIndex = 0;
// showSlides()

/*function slideseta(n){
    showSlides(slideIndex += n);
}
function slideatual(n){
    showSlides(slideIndex = n)
}*/     
let slideIndex = 0;
        showSlides(slideIndex);
        function showSlides() {
            let i;
            let slides = document.getElementsByClassName("meuSlide");
            let pontos = document.getElementsByClassName("ponto");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex>slides.length){
                slideIndex=1
            }
            for (i = 0; i < pontos.length; i++) {
                pontos[i].className = pontos[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            pontos[slideIndex - 1].className += " active";
            setTimeout(showSlides, 2000)
        }
