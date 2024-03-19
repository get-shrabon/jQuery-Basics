$(document).ready(function () {
  $("#banner_btn").click(function () {
    $(".hero").hide(500);
  });
  // One Click Event
  $(".oneClick").click(function () {
    $(this).hide();
  });
  // Double Click Event
  $(".doubleClick").dblclick(function () {
    $(this).hide();
  });
  // Mouse Enter Event
  $(".mouseEnter").mouseenter(function () {
    $(this).hide();
  });
  // Mouse Leave Event
  $(".mouseLeave").mouseleave(function () {
    $(this).hide();
  });
  // On Event
  $(".on").on({
    mouseenter: function () {
      $(this).css("background-color", "pink");
    },
    mouseleave: function () {
      $(this).css("background-color", "hotpink");
    },
    click: function () {
      $(this).css("background-color", "gray");
    },
  });
  /**** JQuery hide and show event ****/
  $(".hide__btn").click(function () {
    $(".top__content").hide(1000);
  });
  $(".show__btn").click(function () {
    $(".top__content").show(1000);
  });
  // Toggle Event
  $(".toggle__btn").click(function () {
    $(".top__content").toggle(1000);
  });
  // Fade In
  $(".fadein__btn").click(function () {
    $("#box-1").fadeIn();
    $("#box-2").fadeIn(1000);
    $("#box-3").fadeIn(1500);
    $("#box-4").fadeIn(2000);
    $("#box-5").fadeIn(2500);
  });
  // Fade In
  $(".fadeout__btn").click(function () {
    $("#box-1").fadeOut();
    $("#box-2").fadeOut(1000);
    $("#box-3").fadeOut(1500);
    $("#box-4").fadeOut(2000);
    $("#box-5").fadeOut(2500);
  });
  // Slide
  $(".qus__1").click(function () {
    $(".content__1").slideToggle();
  });
  $(".qus__2").click(function () {
    $(".content__2").slideToggle();
  });
  $(".qus__3").click(function () {
    $(".content__3").slideToggle();
  });
  // Animation
  $(".animate__btn").click(function () {
    var box = $(".animate");
    box.animate({ width: "300px", height: "280px", fontSize: "30px" });
    box.animate({ width: "400px", height: "380px", fontSize: "60px" });
    box.animate({ width: "900px", height: "700px", fontSize: "90px" }, "slow");
    box.animate({ width: "600px", height: "580px", fontSize: "90px" });
    box.animate({ width: "150px", height: "120px", fontSize: "18px" });
  });
  // Callback Function
  $(".toggle__btn").click(function () {
    $(".top__content").toggle(1000, function () {
      $("#box-1").fadeOut();
      $("#box-2").fadeOut(1000);
      $("#box-3").fadeOut(1500);
      $("#box-4").fadeOut(2000);
      $("#box-5").fadeOut(2500);
    });
  });
  //  JQuery Chaining
  $(".chaining").click(function () {
    $(".chain").css("background", "blue").slideUp(2000).slideDown(3000);
  });
  /***********  Get Content *************/
  // Value
  $(".value__btn").click(function () {
    alert("Name: " + $("#value").val());
  });
  // Text
  $(".text__btn").click(function () {
    alert("TEXT:" + $(".text").text());
  });
  // HTML
  $(".html__btn").click(function () {
    alert("HTML:" + $(".text").html());
  });
  /***********  Set Content *************/
  // Value
  $(".value__set").click(function () {
    $("#setValue").val("Shrabon Dev");
  });
  // Text
  $(".text__set").click(function () {
    $(".textset").text("This is Paragraph");
  });
  // HTML
  $(".html__set").click(function () {
    $(".html").html("My Name is: <bold>Dev Shrabon</bold>");
  });
  // Set content with callback function
  $(".set_btn").click(function () {
    $(".test_").text(function (i, orgiText) {
      return (
        "Old text:" +
        orgiText +
        "New Text: Hello World From JQuery (Index: " +
        i +
        ")"
      );
    });
  });
  /*************  JQuery Filter Case-sensitive  *************/
  // Table
  $("#inputField").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#table tbody tr").each(function () {
      var rowText = $(this).text().toLowerCase();
      $(this).toggle(rowText.indexOf(value) > -1);
    });
  });
  // List Items
  $("#get__item").on("keyup", function () {
    var peoples = $(this).val().toLowerCase();
    $(".rich__peoples li").each(function(){
      var items = $(this).text().toLowerCase()
      $(this).toggle(items.indexOf(peoples) > -1)
    });
  });
});
