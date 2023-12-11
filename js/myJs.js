const textConfig = {
  text1: "Vợ iu của chồng!",
  text2: "Chồng có điều này muốn hỏi vợ, vợ nhớ phải trả lời thật lòng nhaaa!",
  text3: "Vợ có yêu chồng hông ._.",
  text4: "Nếu vợ không trả lời mà thoát ra tức là muốn cưới chồng đó nha :v",
  text5: "Không! Ghét lắm :333",
  text6: "Yêu ơi là yêuuuuuu lun <333",
  text7: "Thế sau này vợ có muốn cưới chồng hong ?",
  text8: "Gửi cho chồng nha <3",
  text9: "Có ạ! Sau này vợ sẽ cưới chồng",
  text10: "^^ Chồng biết mà ^^",
  text11: "Chồng yêu vợ nhất trên đời. Sau này mình sẽ cưới nhau nhé vợ iu 😘",
  text12: "Okii lunn <3",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/cuteCat.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    // var leftNo = $("#no").css("left");
    // var topNO = $("#no").css("top");
    // var leftY = $("#yes").css("left");
    // var topY = $("#yes").css("top");
    // $("#no").css("left", leftY);
    // $("#no").css("top", topY);
    // $("#yes").css("left", leftNo);
    // $("#yes").css("top", topNO);

    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var rightYes = $("#yes").css("right");
    var topYes = $("#yes").css("top");
    $("#no").css("left", "auto");
    $("#no").css("right", rightYes);
    $("#no").css("top", topYes);
    $("#yes").css("left", leftNo);
    $("#yes").css("right", "auto");
    $("#yes").css("top", topNO);

    // Sử dụng transform để di chuyển nút mà không làm thay đổi kích thước
    // $("#no").css("transform", "translateX(" + ($("#yes").offset().left - $("#no").offset().left) + "px)");
    // $("#yes").css("transform", "translateX(" + ($("#no").offset().left - $("#yes").offset().left) + "px)");
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 1000;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("right", "auto");
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text7,
      html: true,
      width: 900,
      padding: "3em",
      html: "<input type='text' class='form-control' id='txtReason'  placeholder='Whyyy'>",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/giphy2.gif")
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text12,
          background: '#fff url("img/iput-bg.jpg")',
          title: textConfig.text10,
          text: textConfig.text11,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            var message = "Vợ cũng yêu chồng nhất trên đời";
            // var message = encodeURIComponent("Vợ cũng yêu chồng nhất trên đời");
            window.location = "https://www.facebook.com/messages/t/100016527014826/";
            setTimeout(() => {
              element.value = message;
              var element = document.getElementsByClassName("xat24cr xdj266r")[0];
            }, 5000);
            
            // document
          },
        });
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});
