
function addTodo(){

    let todolist = document.getElementById('todolist').value;
    document.getElementById('todolist').value = '';

   const html = `
                <div class="todoChild">
                     <li >${todolist}</li>
                    <i class="fal fa-times delete"></i>
                </div> 
                `;

   const place = document.querySelector('.todoChild')

    place.innerHTML += html;


};

document.querySelector("ul#todolistView").addEventListener('click', function (e){
    const place = e.target;

    let targetClassName = place.className.toLowerCase();
    console.log(targetClassName)
    if(targetClassName == 'fal fa-times delete'){
        place.parentElement.remove();
    }

});

/*===================================================*/


let inputAttendance = document.getElementById("inputAttendance");
inputAttendance.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        let inputAttendance = document.getElementById('inputAttendance').value;
        document.getElementById('inputAttendance').value = '';


        let html2 = `

                 <li class="attendanceLi">
                     <p>${inputAttendance}</p>
                     <button class="attendancePresent">Present</button>
                    <button class="attendanceAbsence">Absence</button>
                    <i class="fal fa-times aDelete"></i>
                </li>
                
        `;
        const placeValue = document.querySelector('.attendanceStudent')

        placeValue.innerHTML += html2;

    }

});



const absent = document.querySelector('ul.attendanceStudent');

if(typeof absent != 'undefined' && absent !=null){
    absent.addEventListener('click',function (e){
       if(e.target.className == 'attendanceAbsence'){
           e.target.parentElement.style.color = 'red';
       }
       else if(e.target.className == 'attendancePresent'){
           e.target.parentElement.style.color = 'blue';
       }
       else if(e.target.className == 'fal fa-times aDelete'){
            e.target.parentElement.remove()
        }




    })
};

















