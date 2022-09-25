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
    $(".edit").css('background-color', '#EEA47FFF');
  }
  else if (this.value == '2') {
    $(".image-text").css('color', '#FBEAEB');
    $(".edit").css('background-color', '#2F3C7E');
  }
  else if (this.value == '3') {
    $(".image-text").css('color', '#2F3C7E');
    $(".edit").css('background-color', '#FBEAEB');
  }
  else if (this.value == '4') {
    $(".image-text").css('color', '#FEE715FF ');
    $(".edit").css('background-color', '#101820FF');
  }
  else if (this.value == '5') {
    $(".image-text").css('color', '#101820FF');
    $(".edit").css('background-color', '#FEE715FF ');
  }
  else {
    $(".image-text").css("fontSize", this.value + "px");
  }
});
$('.color-text').on('change', function () {
  $(".image-text").css('color', this.value);
});
$(".color-text").val("#ffffff");

$(".font-family").on('change', function () {
  //alert($(this).val());
  $('.image-text').css("font-family", $(this).val());
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