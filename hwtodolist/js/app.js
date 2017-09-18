/*$.ajax({
  url:"mock/mock.json" ,
    method:"GET",
    success: function(data){
        activities=data.data;
        console.log(data)
    },
    error:function(data){
        console.log(data)
    }
    
    
})*/
$(document).ready(function(){
var i=1;
$(".add-button").click(function(){
    var text=$(".in-txt").val();
    var adding= '<tr><td>'+i+'</td><td>'+text+'</td><td><button class="btn-danger cancel-btn" >done</button></td><td><button class="btn-primary undo-btn" >un-do</button></td></tr>';
    i++;
    $(".body-table").append(adding);
  
    // to remove the text from input box to write a new one
     $('input').focus(function() {
        $(this).val('');
      });
    
    // to cancel the activity
    $(".cancel-btn").click(function(){
        $(this).closest( 'tr').css("text-decoration","line-through");
        
        
    });
    
     //to undo the activity
     $(".undo-btn").click(function(){
        $(this).closest( 'tr').css("text-decoration","none");
        
        
    });

   });   
});