$(document).ready(function(){

  var nameInput = $("#parent_name");
  var parentList = $("#parentdivbody");
  var parentContainer = $(".parent-container");


$(document).on("submit", "#parent-form", handleParentFormSubmit);
$(document).on("click", ".delete-parent", handleDeleteButton);

getParent();

function handleParentFormSubmit(event){
  event.preventDefault();

  if(!nameInput.val().trim().trim()){
      return;
  }

  upsertParent ({
      parent_name: nameInput.val().trim()
  });
}

function upsertParent(parentData){
  $.post("/api/parents", parentData)
  .then(getParent);
}

//create a new list of teachers

function createParentRow(parentData){
  var newParentDiv = $("<div>");
  var newParentName = $("<p>");
  newParentName.data("parent", parentData);
  newParentName.append(parentData.parent_name);
  newParentDiv.append(newParentName);
  newParentDiv.append("<div><a class='delete-parent'> Delete Parent</a></div>");
  return newParentDiv;
}

//retrieve teacher, get them ready to render on page
function getParent(){
  $.get("/api/parents", function(data){
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++){
          rowsToAdd.push(createParentRow(data[i]));
      }
      renderParentList(rowsToAdd);
      nameInput.val("");
  });
}

//render list of authors
function renderParentList(rows){
  parentList.children().not(":last").remove();
  parentContainer.children(".alert").remove();
  if(rows.length){
      console.log(rows);
      parentList.prepend(rows);
  }
  else {
      renderEmpty();
  }
}

//display when there are no teachers
function renderEmpty() {
  var pleaseCreate = $("<div>");
  pleaseCreate.text("Please create a Parent");
  teacherContainer.append(pleaseCreate);
}

function handleDeleteButton() {
  var listItemData = $(this).parent("div").data("parent");
  var id = listItemData.id;
  $.ajax({
      method: "DELETE",
      url: "/api/parents/" + id
  }).then(getParent);
}

});