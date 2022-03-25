const form = document.querySelector('.form')
const firstName = document.querySelector('.first-name')
const lastName = document.querySelector('.last-name')
const age = document.querySelector('.age')
const select = document.querySelector('.form-select')
const list = document.querySelector('.thbody')
const search = document.querySelector('.search')
const filter = document.querySelector('.filter')
const buttonFilter = document.querySelector('.button-filter')
let information = [
    {id: 1, name: 'Rashidbek', lastName: 'Xoldarov', age: 22, study: 'frontEnd'}
]

createEl(information, list)

function createEl(arr, list) {
    list.textContent = null

    arr.map((item) => {
        let newTr = document.createElement('tr')
        let nameTh = document.createElement('th')
        let lastNameTh = document.createElement('th')
        let idTh = document.createElement('th')
        let ageTh = document.createElement('th')
        let studyTh = document.createElement('th')

        nameTh.textContent = item.name
        lastNameTh.textContent = item.lastName
        idTh.textContent = item.id
        ageTh.textContent = item.age
        studyTh.textContent = item.study
        newTr.appendChild(idTh)
        newTr.appendChild(nameTh)
        newTr.appendChild(lastNameTh)
        newTr.appendChild(ageTh)
        newTr.appendChild(studyTh)
        list.appendChild(newTr)

    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if(firstName.value.length > 0 && lastName.value.length > 0 && age.value.length > 0 && select.value != 'study') {

        let obj = {
            id: information.length + 1,
            name: firstName.value,
            lastName: lastName.value,
            study: select.value,
            age: age.value
        }
        information.push(obj)

        createEl(information, list)
    }else {
        alert('Bo\'sh joylarni to\'liq to\'ldiring')
    }


    firstName.value = ''
    lastName.value = ''
    age.value = ''
})

buttonFilter.addEventListener('click', (e) => {
    e.preventDefault()
    render(information, list)
    console.log('askl')
    console.log(filter.value)
})

function render(arr, list) {
    let regex = new RegExp(search.value, 'gi')

    let newResult = []

    let matched = arr.filter(item => item.name.match(regex))
    console.log(matched)
    let sorted = matched.sort((a, b) => a.age - b.age)

    if(filter.value === 'filter') {
        newResult = matched
    }else if(filter.value === 'increase') {
        newResult = sorted
    }else if(filter.value === 'decrease') {
        newResult = sorted.reverse()
    }
    createEl(newResult, list)
}
