const search_btn = document.querySelector('#search_btn')
const items = ['apple', 'banana', 'orange', 'grape', 'strawberry', 'pineapple', 'watermelon', 'kiwi', 'blueberry', 'mango',
'carrot', 'potato', 'broccoli', 'cucumber', 'lettuce', 'spinach', 'onion', 'garlic', 'tomato', 'pepper',
'dog', 'cat', 'horse', 'rabbit', 'hamster', 'guinea pig', 'goldfish', 'turtle', 'parrot', 'snake',
'car', 'bicycle', 'train', 'airplane', 'bus', 'boat', 'motorcycle', 'truck', 'helicopter', 'submarine',
'computer', 'phone', 'tablet', 'television', 'camera', 'headphones', 'speaker', 'keyboard', 'mouse', 'printer',
'book', 'newspaper', 'magazine', 'dictionary', 'encyclopedia', 'novel', 'poetry', 'cookbook', 'textbook', 'journal',
'football', 'basketball', 'soccer', 'baseball', 'tennis', 'golf', 'volleyball', 'rugby', 'hockey', 'cricket',
'pencil', 'pen', 'eraser', 'ruler', 'scissors', 'marker', 'glue', 'notebook', 'backpack', 'calculator',
'guitar', 'piano', 'violin', 'drums', 'trumpet', 'flute', 'saxophone', 'ukulele', 'clarinet', 'harp']

search_btn.addEventListener('click', (e) => {

    e.preventDefault()

    const search = document.querySelector('#search').value.toLowerCase()

    const filteredItems = items.filter(checkItems)
    console.log(filteredItems)

    if(filteredItems.length > 0) {
        //console.log('present')
        const h3 = document.createElement('h3')
        h3.innerHTML = `${filteredItems} is present.`
        h3.style.textAlign = 'center'
        document.body.appendChild(h3)
        //return true
    } else {
        //console.log('not present')
        const h3 = document.createElement('h3')
        h3.innerHTML = `${search} is not present.`
        h3.style.textAlign = 'center'
        document.body.appendChild(h3)
        //return false
    }
    

    function checkItems(item) {
        return item === search
    }
   

})