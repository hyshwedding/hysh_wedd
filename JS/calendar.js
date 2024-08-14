const calendarDates = document.getElementById("calendarDates");
const weddingMonthElement = document.getElementById("weddingMonth");

const weddingDay = new Date(2024,9,19,12,30,0);
let weddingdate = weddingDay.getDate();
let weddingMonth = weddingDay.getMonth();
let weddingYear = weddingDay.getFullYear();

// 캘린더 생성 및 표시
function renderCalendar() {
    const firstDayOfMonth = new Date(weddingYear, weddingMonth, 1);
    const daysInMonth = new Date(weddingYear, weddingMonth + 1, 0).getDate();
    const startDayOfWeek = firstDayOfMonth.getDay();
    weddingMonthElement.textContent = `${weddingMonth + 1}월`;

    calendarDates.innerHTML = "";

    // 빈 날짜 표시
    for(let i=0; i<startDayOfWeek; i++) {
        const emptyDate = document.createElement("div");
        emptyDate.classList.add("date","empty");
        calendarDates.appendChild(emptyDate);
    }

    // 1일부터 날짜 표시
    for(let i=1; i<=daysInMonth; i++) {
        const dateElement = document.createElement("div");
        dateElement.classList.add("date");
        dateElement.textContent = i;
        calendarDates.appendChild(dateElement);
    }

}

renderCalendar();

let len = document.getElementsByClassName("date").length;

for(let i=0; i<len; i++) {
    let Dday = document.getElementsByClassName("date")[i].innerHTML;
    if(Dday=weddingdate) {
        document.getElementsByClassName("date")[21].classList.add("Dday");
    }
}