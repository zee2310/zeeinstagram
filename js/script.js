$('.test').on('change', function() {
    $(".image-text").html(this.value);
  });
$('.color-bg').on('change', function() {
  // console.log(this.value);
    $(".edit").css('background-color',this.value);
  });
$('.font-size').on('change', function() {
  // console.log(this.value);
  if(this.value == '' || this.value == '0'){
    $(".image-text").css("fontSize", "15px");
  }
  else{
    $(".image-text").css("fontSize", this.value+"px");
  }
  });
$('.zee-colors').on('change', function() {
  // console.log(this.value);
  if(this.value == ''){
    $(".image-text").css("fontSize", "15px");
  }
  else if(this.value == '1'){
    $(".image-text").css('color','#00539CFF');
    $(".edit").css('background-color','#EEA47FFF');
  }
  else if(this.value == '2'){
    $(".image-text").css('color','#EEA47FFF');
    $(".edit").css('background-color','#00539CFF');
  }
  else{
    $(".image-text").css("fontSize", this.value+"px");
  }
  });
$('.color-text').on('change', function() {
    $(".image-text").css('color',this.value);
  });
$(".color-text").val("#ffffff");

$(".font-family").on('change',function() {
    //alert($(this).val());
    $('.image-text').css("font-family", $(this).val());
});

// $(".imgage-text").css("font-weight", "700");