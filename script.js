$(function () {
    $(".left_sub_menu").hide();
    $(".has_sub").click(function () {
        $(".left_sub_menu").fadeToggle(300);
    });
    // 왼쪽메뉴 드롭다운
    $(".sub_menu ul.small_menu").hide();
    $(".sub_menu ul.big_menu").click(function () {
        $("ul", this).slideToggle(300);
    });
    // 외부 클릭 시 좌측 사이드 메뉴 숨기기
    $('.overlay').on('click', function () {
        $('.left_sub_menu').fadeOut();
        $('.hide_sidemenu').fadeIn();
    });
});

//$(document).ready(function(){
//    document.getElementById("test").innerHTML='<object type="text/html" data="README.md"></object>';

//})
function openTextFile() {
    var input = document.createElement("input");
    input.type = "file";
    input.accept = "text/plain"; // 확장자가 xxx, yyy 일때, ".xxx, .yyy"
    input.onchange = function (event) {
        processFile(event.target.files[0]);
    };
    input.click();
}
function processFile(file) {
    var reader = new FileReader();
    reader.onload = function () {
        output.innerText = reader.result;
    };
    reader.readAsText(file, /* optional */ "euc-kr");
}



function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET",file,false);
    rawFile.onreadystatechange = function() {
        if(rawFile.readyState === 4) {
            if(rawFile.status ===200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }

    rawFile.send(null);
}



function testfunc(id, file) {

    

    fetch("footer.html").then(function(response) {
        response.text().then(function(text) {
            document.querySelector(id).innerHTML = text;
        })
    })
    
    

    

}