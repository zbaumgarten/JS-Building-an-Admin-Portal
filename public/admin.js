
// Your Code Here
async function listBooks() {

    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()

    books.forEach(renderBook)

    
}

function renderBook(book) {
    let root = document.getElementById('root');

    let li = document.createElement('li')
    li.textContent = book.title

    let inputs = document.createElement('input')
    inputs.value = book.quantity

    let saveBtn = document.createElement('button')
    saveBtn.addEventListener('click', () => {
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: inputs.value
            })
        })
    })

    saveBtn.textContent = "Save!"



    li.appendChild(inputs)
    li.appendChild(saveBtn)
    root.appendChild(li)
}


listBooks()