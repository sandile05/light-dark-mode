const switchBtn = document.querySelector('#checkbox');
const themeMode = localStorage.getItem('theme');

if(themeMode){
    document.documentElement.setAttribute('data-theme', themeMode);
    if(themeMode === 'dark'){
        switchBtn.checked = true;
    }
}
function modeSwitch(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}
switchBtn.addEventListener('change', modeSwitch, false);