// const tableList = document.querySelector('.tableList')

const nameCar = document.querySelector('.nameCar')
const modelCar = document.querySelector('.modelCar')
const prodCar = document.querySelector('.prodCar')
const priceCar = document.querySelector('.nameCar')
const runCar = document.querySelector('.nameCar')

const addNewCar = document.querySelector('.addNewCar')
const delTheCar = document.querySelector('.delTheCar')
const cngTheStatus = document.querySelector('.cngTheStatus')


const addCarBlock = document.querySelector('.addCar')
const delCarBlock = document.querySelector('.delCar')
const cngCarBlock = document.querySelector('.cngStatus')


const tableList = document.querySelector('.tableList')

const burger1 = document.querySelector('.burger1')
const burger2 = document.querySelector('.burger2')
const burger3 = document.querySelector('.burger3')




const cars = [
   { name: 'BMW', model: 'x5', prodaction: 2015, price: 45000, run: 310000, status: true, },
   { name: 'BMW', model: 'x6', prodaction: 2015, price: 45000, run: 310000, status: false },
   { name: 'MB', model: 's700', prodaction: 2017, price: 55000, run: 400000, status: true },
   { name: 'BMW', model: 'x87', prodaction: 2015, price: 45000, run: 310000, status: false },
   { name: 'SAAB', model: '9-3', prodaction: 2016, price: 40000, run: 350000, status: true },
   { name: 'MAN', model: 'tgx', prodaction: 2019, price: 70000, run: 200000, status: false },
   { name: 'Mazda', model: 'rx7', prodaction: 2018, price: 25000, run: 300000, status: true },
]

// changeValue(cars, 'status', false, '', '')


function toLog(obj) {
   const tableList = document.querySelector('.tableList')
   // tableList.textContent = undefined
   const newTable =  document.createElement('table')
   tableList.after(newTable)
   const objKey = Object.keys(obj).length
   for (i = 0; i <= objKey - 1; i++) {
      const newTr = document.createElement('tr')
      newTable.append(newTr)
      const entries = Object.entries(obj[i])
      const entriesLenth = Object.entries(obj[i]).length
      console.log(obj[i]);
      for (r = 0; r <= entriesLenth - 1; r++) {
         const ent = Object.values(entries[r])
         const newTd = document.createElement('td')
         newTr.append(newTd)
         // newTd.textContent = `${ent[0]} : ${ent[1]}`
         newTd.textContent = ent[0] === 'status' ? ent[1] === true || ent[1] === 'true' ? `${ent[0]} : У гаражі` : `${ent[0]} : Десь поїхала` : ent[1] === null || ent[1] == '' || ent[1] == ' '  ? `${ent[0]} : Немає значення` : `${ent[0]} : ${ent[1]}`
         // console.log(`${ent[0]} : ${ent[1]}`);
      }
   }
}
toLog(cars)


function addCar(obj, nameCar, modelCar, prodCar, priceCar, runCar, statusCar) {
   let newCar = {
      name: nameCar,
      model: modelCar,
      prodaction: prodCar,
      price: priceCar,
      run: runCar,
      status: statusCar,
   }
   const s = Object.entries(newCar)
   // s.sort((a, b) => {
   //    if (a[1] === undefined) return 1
   //    if (b[1] === undefined) return -1
   //    return a[1] - b[1]
   // })
   // s.sort((a, b) => {
   //    if (a[1] === '') return 1
   //    if (b[1] === '') return -1
   //    return a[1] - b[1]
   // })
   // for (i = 0; i <= s.length - 1; i++) {
   //    if (s[i][1] === undefined || s[i][1] === '') {
   //       s.splice(i, Infinity)
   //    }
   // }
   console.log(cars);

   let newCarObj = Object.fromEntries(s)
   obj.push(newCarObj)
}


// addCar(carus,'tesla','xd','',23000)


addNewCar.addEventListener('click', function(){
   const tableList = document.querySelector('.tableList')

   const table = document.querySelector('table')

   const nameCar = document.querySelector('.nameCar').value
console.log('✌️nameCar  --->', nameCar );
   const modelCar = document.querySelector('.modelCar').value
console.log('✌️modelCar --->', modelCar);
   const prodCar = document.querySelector('.prodCar').value
console.log('✌️prodCar --->', prodCar);
   const priceCar = document.querySelector('.priceCar').value
console.log('✌️priceCar --->', priceCar);
   const runCar = document.querySelector('.runCar').value
console.log('✌️runCar --->', runCar);
   const statusCar = document.querySelector('.statusCar').value


   addCar(cars, nameCar, modelCar, prodCar, priceCar, runCar, statusCar)
   console.log(cars);
   table.remove()
   toLog(cars)
   
})

console.log(cars.length);

burger1.addEventListener('click', function(){
   addCarBlock.classList.toggle('flex')
})


burger2.addEventListener('click', function(){
   delCarBlock.classList.toggle('flex')
})

burger3.addEventListener('click', function(){
   cngCarBlock.classList.toggle('flex')
})






function removeCar(obj, name, model) {
   obj.sort((a, b) => (a.name === b.name ? 0 : a.name < b.name ? -1 : 1));
   const nameCar = obj.filter((item) => { return item.name === name })
   const nameCarLength = obj.filter((item) => { return item.name === name }).length
   const modelCar = obj.filter((item) => { return item.model === model })
   const modelCarLength = obj.filter((item) => { return item.model === model }).length
   if (nameCar.length == 1) {
      const objKey = obj.findIndex(item => item.name === name)
      objKey === -1 ? console.log('no') : obj.splice(objKey, nameCarLength)
   } else if (nameCar.length > 1) {
      if (model === undefined) {
         const objKey = obj.findIndex(item => item.name === name)
         objKey === -1 ? console.log('no') : obj.splice(objKey, nameCarLength)
      } else if (modelCar.length == 0) {
         alert('Заповніть пункт "модель"')
      } else {
         const objKey = obj.findIndex(item => item.name === name && item.model === model)
         objKey === -1 ? console.log('no') : obj.splice(objKey, modelCarLength)
      }
   } else {
      alert('INVALID DATA')
   }
}



delTheCar.addEventListener('click', function(){
   const tableList = document.querySelector('.tableList')
   const table = document.querySelector('table')

   const nameCar = document.querySelector('.nameCar2').value
console.log('✌️nameCar  --->', nameCar );
   const modelCar = document.querySelector('.modelCar2').value
console.log('✌️modelCar --->', modelCar);


   removeCar(cars, nameCar, modelCar)
   console.log(cars);
   table.remove()
   toLog(cars)
})



function changeValue(obj, Val, newValue, name, model) {
   const testToVal = obj.findIndex(item => item.status === true)
console.log('✌️testToVal --->', testToVal);
   obj.sort((a, b) => (a.name === b.name ? 0 : a.name < b.name ? -1 : 1));
   const nameCar = obj.filter((item) => { return item.name === name })
   const nameCarLength = obj.filter((item) => { return item.name === name }).length
   const modelCar = obj.filter((item) => { return item.model === model })
   const modelCarLength = obj.filter((item) => { return item.model === model }).length
   if (nameCar.length === 1 && testToVal !== -1) {
      const objKey = obj.findIndex(item => item.name === name)
      const newArr = Object.entries(obj[objKey])
      const newArrIndex = Object.keys(obj[objKey])
      const arrKey = newArrIndex.indexOf(Val)
      newArr[arrKey].splice(1, 1, newValue)
      let newObj = Object.fromEntries(newArr)
      objKey === -1 ? console.log('no') : obj.splice(objKey, nameCarLength, newObj)
   } else if (nameCar.length > 1  && testToVal !== -1) {
      if (model === undefined) {
         const objKey = obj.findIndex(item => item.name === name)
         const objKeyLast = obj.findLastIndex(item => item.name === name)
         for (i = 0; i <= objKeyLast; i++) {
            const newArr = Object.entries(obj[i])
            const newArrIndex = Object.keys(obj[i])
            const arrKey = newArrIndex.indexOf(Val)
            newArr[arrKey].splice(1, 1, newValue)
            let newObj = Object.fromEntries(newArr)
            objKey === -1 ? console.log('no') : obj.splice(i, 1, newObj)
         }
      } else if (modelCar.length === 0) {
         alert('Заповніть пункт "модель"')
      } else {
         const objKey = obj.findIndex(item => item.name === name && item.model === model)
         const newArr = Object.entries(obj[objKey])
         const newArrIndex = Object.keys(obj[objKey])
         const arrKey = newArrIndex.indexOf(Val)
         newArr[arrKey].splice(1, 1, newValue)
         let newObj = Object.fromEntries(newArr)
         objKey === -1 ? console.log('no') : obj.splice(objKey, modelCarLength, newObj)
      }
   } else {
      alert('INVALID DATA')
   }
}

// changeValue(cars, 'status', false, 'BMW', 'x5')
// changeValue(cars,'price','NO OFFER','BMW')



cngTheStatus.addEventListener('click', function(){
   const tableList = document.querySelector('.tableList')
   const table = document.querySelector('table')

   const nameCar = document.querySelector('.nameCar3').value
console.log('✌️nameCar  --->', nameCar );
   const modelCar = document.querySelector('.modelCar3').value
console.log('✌️modelCar --->', modelCar);
   const statusCar = document.querySelector('.statusCar3').value
console.log('✌️statusCar --->', statusCar);


   changeValue(cars, 'status', statusCar, nameCar, modelCar)
   console.log(cars);
   table.remove()
   toLog(cars)
   
})