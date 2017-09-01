/**
 * Created by janghunlee on 2017. 9. 2..
 */
$(".btn").click(function(){
    "use strict";
    var id = $(".id").val();
    var ps = $(".ps").val();
    $.ajax({
        method:"POST",
        data:{"id":id,"ps":ps},
        url:"http://localhost:8080/auth/login",
        success:function(data){
            if(data == 404) alert("재입력");
            else location.href = "http://localhost:8080/main"
        },
        error:function(err){
            if(err) throw err;
        }

    })
});

$(".logout").click(function(){
    "use strict";
   location.href="/register";
});