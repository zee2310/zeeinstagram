$('.test').on('change', function () {
  $(".image-text").html(this.value);
});

$('.author-name').on('change', function () {
  $(".author").html(this.value);
  $(".author").css('font-size', '15px');
});

$('.color-bg').on('change', function () {
  // console.log(this.value);
  $(".edit").css('background-color', this.value);
});

$('.font-size').on('change', function () {
  // console.log(this.value);
  if (this.value == '' || this.value == '0') {
    $(".image-text").css("fontSize", "15px");
  }
  else {
    $(".image-text").css("fontSize", this.value + "px");
  }
});

$('.zee-colors').on('change', function () {
  // console.log(this.value);
  if (this.value == '') {
    $(".image-text").css("fontSize", "15px");
  }
  else if (this.value == '1') {
    $(".image-text").css('color', '#00539CFF');
    $(".author").css('color', '#00539CFF');
    $(".author-tag").css('color', '#00539CFF');
    $(".edit").css('background-color', '#EEA47FFF');
  }
  else if (this.value == '2') {
    $(".image-text").css('color', '#FBEAEB');
    $(".author").css('color', '#FBEAEB');
    $(".author-tag").css('color', '#FBEAEB');
    $(".edit").css('background-color', '#2F3C7E');
  }
  else if (this.value == '3') {
    $(".image-text").css('color', '#2F3C7E');
    $(".author").css('color', '#2F3C7E');
    $(".author-tag").css('color', '#2F3C7E');
    $(".edit").css('background-color', '#FBEAEB');
  }
  else if (this.value == '4') {
    $(".image-text").css('color', '#FEE715FF ');
    $(".author").css('color', '#FEE715FF ');
    $(".author-tag").css('color', '#FEE715FF ');
    $(".edit").css('background-color', '#101820FF');
  }
  else if (this.value == '5') {
    $(".image-text").css('color', '#101820FF');
    $(".author").css('color', '#101820FF');
    $(".author-tag").css('color', '#101820FF');
    $(".edit").css('background-color', '#FEE715FF ');
  }
  else if (this.value == '6') {
    $(".image-text").css('color', '#F96167');
    $(".author").css('color', '#F96167');
    $(".author-tag").css('color', '#F96167');
    $(".edit").css('background-color', '#FCE77D ');
  }
  else if (this.value == '7') {
    $(".image-text").css('color', '#FCE77D');
    $(".author").css('color', '#FCE77D');
    $(".author-tag").css('color', '#FCE77D');
    $(".edit").css('background-color', '#F96167 ');
  }
  else if (this.value == '8') {
    $(".image-text").css('color', '#CCF381');
    $(".author").css('color', '#CCF381');
    $(".author-tag").css('color', '#CCF381');
    $(".edit").css('background-color', '#4831D4 ');
  }
  else if (this.value == '9') {
    $(".image-text").css('color', '#4831D4');
    $(".author").css('color', '#4831D4');
    $(".author-tag").css('color', '#4831D4');
    $(".edit").css('background-color', '#CCF381 ');
  }
  else if (this.value == '10') {
    $(".image-text").css('color', '#317773');
    $(".author").css('color', '#317773');
    $(".author-tag").css('color', '#317773');
    $(".edit").css('background-color', '#E2D1F9 ');
  }
  else if (this.value == '11') {
    $(".image-text").css('color', '#E2D1F9');
    $(".author").css('color', '#E2D1F9');
    $(".author-tag").css('color', '#E2D1F9');
    $(".edit").css('background-color', '#317773 ');
  }
  else if (this.value == '12') {
    $(".image-text").css('color', '#990011FF');
    $(".author").css('color', '#990011FF');
    $(".author-tag").css('color', '#990011FF');
    $(".edit").css('background-color', '#FCF6F5FF ');
  }
  else if (this.value == '13') {
    $(".image-text").css('color', '#FCF6F5FF');
    $(".author").css('color', '#FCF6F5FF');
    $(".author-tag").css('color', '#FCF6F5FF');
    $(".edit").css('background-color', '#990011FF ');
  }
  else {
    $(".image-text").css("fontSize", this.value + "px");
    $(".author").css("fontSize", this.value + "px");
    $(".author-tag").css("fontSize", this.value + "px");
  }
});

$('.text-align').on('change', function () {
  // console.log(this.value);
  if (this.value == '') {
    $(".image-text").css("fontSize", "15px");
  }
  else if (this.value == 'left') {
    $(".img-text").css('text-align', 'left');
    // $(".author-text").css('text-align', 'left');
  }
  else if (this.value == 'center') {
    $(".img-text").css('text-align', 'center');
    // $(".author-text").css('text-align', 'center');
  }
  else if (this.value == 'right') {
    $(".img-text").css('text-align', 'right');
    // $(".author-text").css('text-align', 'right');
  }
});
$('.color-text').on('change', function () {
  $(".image-text").css('color', this.value);
});
$(".color-text").val("#ffffff");

$(".font-family").on('change', function () {
  //alert($(this).val());
  $('.image-text').css("font-family", $(this).val());
  $('.author').css("font-family", $(this).val());
  $('.image-text').css("font-weight", '500');

});


$("#downloadImg").on('click', function () {
  console.log("aaa");
  const screenshotTarget = $("#editImg")[0];

  html2canvas(screenshotTarget).then((canvas) => {
    // $("#out_image").append(canvas);
    const base64image = canvas.toDataURL("jpeg");
    var anchor = document.createElement('a');
    anchor.setAttribute("href", base64image);
    anchor.setAttribute("download", "image.jpeg");
    anchor.click();
    anchor.remove();

  })
});

$(document).on("click", "#test-element", function () {
  alert("click");
});

$('.title').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  autoplaySpeed: 2000,
});