$(document).ready(function() {
    $("#login-form").submit(function(e) {
      e.preventDefault();
      if ($("#useremailLogin").val() === "" && $("#passwordLogin").val() === "") {
        $(".pls").css("color", "red")
        $(".pls").text("Please enter a valid email");
        $(".pls1").css("color", "red")
        $(".pls1").text("Please enter a valid password");
      }
      else if ($("#useremailLogin").val() === "") {
        $(".pls").css("color", "red")
        $(".pls").text("Please enter a valid email");
      } else if ( $("#passwordLogin").val() === "") {
        $(".pls1").css("color", "red")
        $(".pls1").text("Please enter a valid password");
      }
      else {
        $(".pls").text("");
        $(".pls1").text("");
      }
    });

    $("#signup-form").submit(function(e) {
      e.preventDefault();
      if ($("#usernameSignup").val() === "" && $("#useremailSignup").val() === "" && $("#passwordSignup").val() === "") {
        $(".pls").css("color", "red")
        $(".pls").text("Please enter a Name");
        $(".pls1").css("color", "red")
        $(".pls1").text("Please enter a valid Email");
        $(".pls2").css("color", "red")
        $(".pls2").text("Please enter a valid password");
      }
      else if ($("#usernameSignup").val() === "") {
        $(".pls").css("color", "red")
        $(".pls").text("Please enter a Name");
      } else if($("#useremailSignup").val() === "") {
        $(".pls1").css("color", "red")
        $(".pls1").text("Please enter a valid Email");
      } else if ( $("#passwordSignup").val() === "") {
        $(".pls2").css("color", "red")
        $(".pls2").text("Please enter a valid password");
      }
      else {
        $(".pls").text("");
        $(".pls1").text("");
        $(".pls2").text("");
      }
    });
  });
  


