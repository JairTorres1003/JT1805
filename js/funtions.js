const funtions_category = document.getElementById('funtions-category');
const btnFuntions_container = document.getElementById('btnFuntions-container');
const runFuntion_container = document.getElementById('runFuntion-container');
const run_funtion1 = document.getElementById('run-funtion1');
    const loading =document.getElementById('loading');
    const load_finished =document.getElementById('load-finished');
const run_funtion2 = document.getElementById('run-funtion2');
const run_funtion3 = document.getElementById('run-funtion3');
const run_funtion4 = document.getElementById('run-funtion4');
const run_funtion5 = document.getElementById('run-funtion5');
const run_funtion6 = document.getElementById('run-funtion6');
var menuBoolean = false;

//? Restar variables
function resetVariable() {
    num = 0;
    menuBoolean = false;
    loading.style.width = "0%";
    load_finished.innerHTML = "cargar"
    clearInterval(time);
    document.getElementById('result-testText').style.opacity = "0";
    document.getElementById('spiner').style.animation = "none";
    document.getElementById('spiner-text').style.animation = "none";
    document.getElementById('pain').style.backgroundColor = "rgb(49, 15, 83)";
    document.getElementById('img-pain').style.opacity = "0";
    document.getElementById('click-pain').style.opacity = "1";
    document.getElementById('text-dbl').classList.remove('tdbl');
    document.getElementById('text-dbl').innerHTML = "¡Dale docle click al texto!";
    closeMenu();
}
//? funtion category
function categoryFuntion() {
    document.getElementById('onload-category').style.display = "flex";
    setTimeout(() => {
        document.getElementById('funtions-category').style.display = "flex";
        document.getElementById('onload-category').style.display = "none";
    }, 1000);
    document.getElementById('title-Page').innerHTML = "Funciones";
    resetVariable();
    btnFMain();
    document.getElementById('run-funtionNone').classList.remove('disablerRFuntionN');
}
//? menu
function menu() {
    if (menuBoolean == false) {
        openMenu();
    } else {
        closeMenu();
    }
}
function openMenu() {
    document.getElementById('menu').innerHTML = '<ion-icon name="arrow-back-outline"></ion-icon>';
    menuBoolean = true;
    btnFuntions_container.classList.add('btnfc');
    funtions_category.classList.add('ffc');
}
function closeMenu() {
    document.getElementById('menu').innerHTML = '<ion-icon name="menu-outline"></ion-icon>';
    menuBoolean = false;
    btnFuntions_container.classList.remove('btnfc');
    funtions_category.classList.remove('ffc');
}
funtions_category.addEventListener('click', function(e){
    if (e.target == funtions_category) {    
        closeMenu();
    }
});
//? all buttons funtion
function btnFMain() {
    for (let x = 0; x < runFuntion_container.childElementCount; x++) {
        runFuntion_container.children[x].classList.add('disablerRFuntionN');
    }
    resetVariable();
}
//? button funtion 1
function btnFuntion1() {
    run_funtion1.classList.remove('disablerRFuntionN');
    for (let x = 1; x < run_funtion1.childElementCount; x++) {
        run_funtion1.children[x].style.height = "calc((100% -  120px) /  " + (run_funtion1.childElementCount - 1) + ")";
    }
}
//? button funtion 2
function btnFuntion2() {
    run_funtion2.classList.remove('disablerRFuntionN');
    for (let x = 1; x < run_funtion2.childElementCount; x++) {
        run_funtion2.children[x].style.height = "calc((100% -  120px) /  " + (run_funtion2.childElementCount - 1) + ")";
    }
}
//? button funtion 3
function btnFuntion3() {
    run_funtion3.classList.remove('disablerRFuntionN');
}
//? button funtion 4
function btnFuntion4() {
    run_funtion4.classList.remove('disablerRFuntionN');
}
//? button funtion 5
function btnFuntion5() {
    run_funtion5.classList.remove('disablerRFuntionN');
}
//? button funtion 6
function btnFuntion6() {
    run_funtion6.classList.remove('disablerRFuntionN');
}
//? onmousedown | onmouseup / test 1
var time = 0;
var num = 0;
function pressMeDown() {
    let assitant_num = num;
    if (num < 100) {
        time = setInterval(() => {
            num = num + 10;
            loading.style.width = num + "%";
            //console.log(num);//!<---
            if (num == 100) {
                clearInterval(time);
                load_finished.innerHTML = "Listo"
            }
        }, 1000);
        load_finished.innerHTML = "cargando"
    }
}
function pressMeUp() {
    if (num != 100) {
        loading.style.width = "0%";
        load_finished.innerHTML = "me soltaste!"
        clearInterval(time);
    }
    num = 0;
}
//? onmousedown | onmouseup / test 2
function textPressMeDown() {
    document.getElementById('result-testText').style.opacity = "1";
    document.getElementById('result-testText').innerHTML = "Estas oprimiendo texto";
}
function textPressMeUp() {
    document.getElementById('result-testText').innerHTML = "Dejaste de oprimir el texto";
}
//? onmouseover | onmouseout / test 1
function entryMouseOver() {
    document.getElementById('entry-mouse').style.background = "var(--SecondD_Color--)";
}
function entryMouseOut() {
    document.getElementById('entry-mouse').style.background = "transparent";
}
//? onmouseover | onmouseout / test 2
function textEntryMouseOver() {
    document.getElementById('entry-mouseText').style.borderRadius = "50%";
}
function textEntryMouseOut() {
    document.getElementById('entry-mouseText').style.borderRadius = "5px";
}
///? onclick / test 1
function pressMeClick() {
    document.getElementById('spiner').style.animation = "sniper 1.5s linear infinite";
}
///? onclick / test 2
function textPressMeClick() {
    document.getElementById('spiner-text').style.animation = "sniper 1.5s linear infinite";
}
//? ondblclick / test 1
function painDblClick() {
    document.getElementById('pain').style.backgroundColor = "transparent";
    document.getElementById('img-pain').style.opacity = "1";
    document.getElementById('click-pain').style.opacity = "0";
}
//? ondblclick / test 2
function textDblClick() {
    document.getElementById('text-dbl').classList.add('tdbl');
    document.getElementById('text-dbl').innerHTML = "¡El texto ha cambio de color!";
}