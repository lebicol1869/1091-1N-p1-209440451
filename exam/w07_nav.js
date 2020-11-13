/* alert ("hi")*/
function change(index) {
    const p = document.getElementById('show')
    console.log('show', p);
    switch(index) {
        case 1:
            p.innerHTML = '<iframe width=100% height=100% src="./w01_intro.html" />';
        break;
        case 2:
            p.innerHTML = '<iframe width=100% height=100% src="./w01_pokemon.html" />';
        break;
        case 3:
            p.innerHTML = '<iframe width=100% height=100% src="./w02_imgGallery.html" />';
        break;
        case 4:
            p.innerHTML = '<iframe width=100% height=100% src="./w02_blog.html" />';
        break;
        case 5:
            p.innerHTML = '<iframe width=100% height=100% src="./w03_div.html" />';
        break;
        case 6:
            p.innerHTML = '<iframe width=100% height=100% src="./w05_div_tku60_bs.html" />';
        break;
        case 7:
            p.innerHTML = '<iframe width=100% height=100% src="./w06_index.html" />';
        break;
    }
}