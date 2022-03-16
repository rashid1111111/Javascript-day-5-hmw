const form = document.querySelector('.form')
const firstName = document.querySelector('.first-name')
const lastName = document.querySelector('.last-name')
const age = document.querySelector('.age')
const select = document.querySelector('.form-select')
const list = document.querySelector('.list')

let information = [
    {
    id: 1,
    name: 'Ahror',
    lastName: 'Rashidov',
    study: 'android',
    age: 20
    },
    {
    id: 2,
    name: 'Sobir',
    lastName: 'Hamdamov',
    study: 'design',
    age: 22
    }
]

createEl()

function createEl() {
    information.map((item) => {
        let newLi = document.createElement('li')
        let nameSpan = document.createElement('span')
        let lastNameSpan = document.createElement('span')
        let ageSpan = document.createElement('span')
        let studySpan = document.createElement('span')

        nameSpan.textContent = item.name
        lastNameSpan.textContent = item.lastName
        ageSpan.textContent = item.age
        studySpan.textContent = item.study
        newLi.appendChild(nameSpan)
        newLi.appendChild(lastNameSpan)
        newLi.appendChild(ageSpan)
        newLi.appendChild(studySpan)
        list.appendChild(newLi)
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    information = []
    let obj = {
        id: information.length + 1,
        name: firstName.value,
        lastName: lastName.value,
        study: select.value,
        age: age.value
    }

    information.push(obj)
    createEl()
})