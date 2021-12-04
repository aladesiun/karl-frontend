$(function(){
    $("#file").change(function(event){
      var x = URL.createObjectURL(event.target.files[0]);
      $("#fileupload").attr("src",x);
      console.log(event);
    });
  });
  