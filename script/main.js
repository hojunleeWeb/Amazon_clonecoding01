

let sideMenuOpenBtn = document.getElementById("full_side_menu_open_btn");
let sideMenuCloseBtn = document.querySelector(".full_side_menu_close_btn");

function openSideMenu(){
    // document.getElementsByClassName("full_side_menu_container").style.width = "250px"
    //document.getElementsByClassName으로 접근하는경우 html element를 반환하지 않고
    //HtmlCollection 을 반환함으로 querySelector를 사용하던가 [0]을 붙여 배열 내의 요소로 선택해야 style 요소로 접근할수있다.
    // let darker_components = document.querySelectorAll(".darkerwhen_sidemenu_open");
    // darker_components.forEach(element => {
    //     element.style.filter = "brightness(50%)";
    // });
    document.querySelector(".full_side_menu_container").style.width = "350px";

}
function closeSideMenu(){
    document.querySelector(".full_side_menu_container").style.width = "0";
    
}
sideMenuOpenBtn.addEventListener("click",openSideMenu);
sideMenuCloseBtn.addEventListener("click",closeSideMenu);
//closeSideMenu() 라고 썼더니 window.load시 자동으로 시작되었다. 따라서 버튼 클릭해도 side menu가 나왔다 다시 사라져 결과적으로
//아무 변화가 없도록 보였는데 아마 openSideMenu()라고 작성할 경우 이것은 함수를 뜻하는것이 아니고 함수의 리턴값(실제론 리턴이 없긴하지만)
//의미하게 되어 자동으로 실행된것이 아닐까 생각한다