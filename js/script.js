let menu = document.getElementById('menu')
let listitem = document.getElementById('list_item')


menu.addEventListener('click',function(){
        if (listitem.style.display === 'none') {
            listitem.style.display = 'block'
        } else {
            listitem.style.display = 'none'

        }
})