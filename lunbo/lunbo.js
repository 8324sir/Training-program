window.slides = function(element){
  let $el = $(element)
  
  var $width = $el.width()
  var count = $el.find('.slide').length
  
  var $ol = $('<ol class="controls"></ol>')
  for(let i = 0;i<count;i++){
    $ol.append(`<li>${i+1}</li>`)
  }
  $el.append($ol)
}






slides(document.querySelector('.slides'))   
 