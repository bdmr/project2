$(document).ready()function() {

var viewContainer = $(".view-container");
// var postCategorySelect = $("#category"); not sure where this is pulling from yet

//holds posts/reviews of student
var reviews;

var url = window.location.search;
var parentId;

//reviews assigned to a specific parent id

if(url.indexOf("?parent_id=") !== -1) {
    parentId = url.split("=")[1];
    getReviews(parentId);
}
else {
    getReviews();
}

//grabs posts/comments from database to updatew view on viewStudent page
function getReviews(parent) {
    parentId = parent || "";
    if (parentId){
        parentId = "?/parent_id=" + parentId;
    }
    $.get("/api/students" + parentId, function(data){
        console.log("Reviews", data);
        reviews = data;
        if(!reviews || !reviews.length){
            displayEmpty(parent); //this is a message to display that there are no reviews
        }
        else {
            initializeRows();
        }
});
}

//should the parent be able to delete post or should that be just the teacher?

//appends reviews/posts to the inside of the view-container using the var viewContainer
function initializeRows(){
viewContainer.empty();
reviewsToAdd = [];
for (var i=0; i < reviews.length; i++){
reviewsToAdd.push(createNewRow(reviews[i]));
}
viewContainer.append(reviewsToAdd);
}

function createNewRow(review) {
var formattedDate = new Date(review.CreatedAt);
formattedDate = moment(formattedDate).format ("MMMM Do YYYY, h:mm:ss a");
var newReviewCard = $("<div>");
newReviewCard.addClass("card blue-grey darken-1");
var newReviewCardContent = $("<div>");
newReviewCardContent.addClass("card-content white-text");
var newCardTitle = $("<div>");
var newMessage = $("<p>");

newMessage.text(review.body) //don't think this is actually what it is called
//have to append everything

return newReviewCard;
}




}