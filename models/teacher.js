$(document).ready(function(){

    var nameInput = $("#teacher_name");
    var teacherList = $("#divbody");
    var teacherContainer = $(".teacher-container");


$(document).on("submit", "#teacher-form", handleTeacherFormSubmit);
$(document).on("click", ".delete-teacher", handleDeleteButton);

getTeachers();

function handleTeacherFormSubmit(event){
    event.preventDefault();

    if(!nameInput.val().trim().trim()){
        return;
    }

    upsertTeacher ({
        teacher_name: nameInput.val().trim()
    });
}

function upsertTeacher(teacherData){
    $.post("/api/teachers", teacherData)
    .then(getTeachers);
}

//create a new list of teachers

function createTeacherRow(teacherData){
    var newTeacherDiv = $("<div>");
    var newTeacherName = $("<p>");
    newTeacherName.data("teacher", teacherData);
    newTeacherName.append(teacherData.teacher_name);
    newTeacherDiv.append(newTeacherName);
    newTeacherDiv.append("<div><a class='delete-teacher'> Delete Teacher</a></div>");
    return newTeacherDiv;
}

//retrieve teacher, get them ready to render on page
function getTeachers(){
    $.get("/api/teachers", function(data){
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++){
            rowsToAdd.push(createTeacherRow(data[i]));
        }
        renderTeacherList(rowsToAdd);
        nameInput.val("");
    });
}

function renderTeacherList(rows){
    teacherList.children().not(":last").remove();
    teacherContainer.children(".alert").remove();
    if(rows.length){
        console.log(rows);
        teacherList.prepend(rows);
    }
    else {
        renderEmpty();
    }
}

//display when there are no teachers
function renderEmpty() {
    var pleaseCreate = $("<div>");
    pleaseCreate.text("Please create a Teacher.");
    teacherContainer.append(pleaseCreate);
}

function handleDeleteButton() {
    var listItemData = $(this).parent("div").data("teacher");
    var id = listItemData.id;
    $.ajax({
        method: "DELETE",
        url: "/api/teachers/" + id
    }).then(getTeachers);
}

});