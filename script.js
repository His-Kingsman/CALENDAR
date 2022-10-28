const currentDate = document.querySelector(".date");
let date = new Date(); 
currYear = date.getFullYear(),
currMonth = date.getMonth();
backnext = document.querySelectorAll(".icons span");

const renderCalender = () =>{
    const monthDays = document.querySelector(".days");





    const lastDay = new Date(date.getFullYear(), 
    date.getMonth() + 1, 0).getDate();
    
    console.log(lastDay);
    const prevLastDay = new Date(date.getFullYear(), 
    date.getMonth(), 0).getDate();
    
    const firstDayIndex = date.getDay()
    
    const lastDayIndex = new Date(
        date.getFullYear(), 
    date.getMonth() + 1, 0).getDay();  
    
    const nextDays = 7 - lastDayIndex -1;
    
    
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]; 
    
    // let highlightedDates = {
    //     "My Birthday": [6, 25],
    //     "Mum's Birthday": [4, 28],
    //     "Dad's Birthday": [1, 17],
    //     Christmas: [11, 24],
    //     "Boxing Day": [11, 25],
    //     "New Year": [0, 0],
    //     "New Year Holiday": [0, 1],
    //     "Good Friday": [3, 6],
    //     "Easter Monday": [3, 10],
    //     "Id El Fitr": [3, 21],
    //     "Id El Fitr Holiday": [3, 22],
    //     "Workers Day": [4, 0],
    //     "Childrens Day": [4, 26],
    //     "Democracy Day": [5, 11],
    //     "Id El Kabir": [5, 27],
    //     "Id El Kabir Holiday": [5, 28],
    //     "Id El Maluud": [8, 26],
    //     "Independence Day": [9, 0],
    //     "Independence Day Holiday": [9, 1],
    //   };
    //   for (let key in highlightedDates) {
    //     let colour;
    //     if (key === "My Birthday") {
    //       colour = "gold";
    //     } else if (key === "Mum's Birthday") {
    //       colour = "rgb(241, 82, 180)";
    //     } else if (key === "Dad's Birthday") {
    //       colour = "rgb(128, 128, 128)";
    //     } else {
    //       colour = "rgb(124, 75, 0)";
    //     }
    //     if (initDate.getMonth() == highlightedDates[key][0]) {
    //       let days = document.querySelectorAll(".month-day");
    //       listOfDates.innerHTML += `<li>${highlightedDates[key][1] + 1} ${
    //         months[highlightedDates[key][0]]
    //       }: ${key}</li>`;
    //       for (let i = 0; i < days.length; i++) {
    //         if (i == highlightedDates[key][1]) {
    //           days[i].style.backgroundColor = colour;
    //         }
    //       }
    //     }
    //   }
    document.querySelector('.date h1').innerHTML
    = months[date.getMonth()];
   
    
    document.querySelector(".date p").innerHTML
    = new Date().toDateString();
    
    let days = "";
    
    for(let x = firstDayIndex; x>0;x--){
    days += `<div class="previous">${prevLastDay - x + 1}</div>`;
    }
    
    for(let i = 1; i<=lastDay;i++){
       if(i === new Date().getDate() && date.getMonth() ===
        new Date().getMonth()) {
            days += `<div class="today">${i}</div>`;
        }else{
         days += `<div>${i}</div>`;   
        }    
    }
    
    for(let j=1; j<=nextDays;j++){
        days += `<div class="next">${j}</div>`
        monthDays.innerHTML = days;
    }
}


document.querySelector(".back").addEventListener("click",
()=>{
    date.setMonth(date.getMonth()-1)
    renderCalender();
})

document.querySelector(".next").
addEventListener("click",
()=>{
    date.setMonth(date.getMonth()+1)
    renderCalender();
})

renderCalender();

