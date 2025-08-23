/*
    console.log(data.getDate())
    console.log(data.getDay())
    console.log(data.getFullYear())
    console.log(data.getHours())
    console.log(data.getMilliseconds())
    console.log(data.getMinutes())
    console.log(data.getSeconds())
    console.log(data.getTime())
    console.log(Date.now())
    console.log(data.getTimezoneOffset())
    setDate()
    setMonth()
    setFullYear()
    setHours()
    setMinutes()
    setSeconds()
    setMilisseconds()
    toDateString()
*/
const div_data = document.getElementById("data")
const data = new Date()

const dia_m = data.getDate() < 10 ? "0"+data.getDate():data.getDate()
const data_r = dia_m + "/" + data.getMonth() + "/" + data.getFullYear()

div_data.innerHTML = data_r