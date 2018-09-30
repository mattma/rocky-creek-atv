function web() {

  $('#arrows a').css({backgroundPosition: '0 0'});

  /* go to next picture */
  $('#arrows .next').click(function(){
      if($('#thumbs ul li a.active').parent().next('li').length>0) {
      
          var thumbsWrap = $('body').width()-57;
          var thumbsPerPage = Math.floor(thumbsWrap/143);
          var thumbsCount = Math.ceil(($('#thumbs ul li a.active').parent().prevAll('li').size()+1)/thumbsPerPage);

          if($('#thumbs ul li a.active').parent().prevAll('li').size()+2 > ((thumbsPerPage)*thumbsCount)) {
              $('#thumbs ul').animate({left: -thumbsPerPage*143*thumbsCount}, {queue: false, duration: 250});
          }

          var url = $('a', $('#thumbs ul li a.active').parent().next('li')).attr('href');
          $('#thumbs ul li a.active span').css({borderWidth: '10px', height: '60px', width: '100px'})
          var last = $('#thumbs ul li a.active').removeClass('active');
          $('span', last).animate({borderWidth: '0', height: '80px', width: '120px'}, {queue: false, duration: 150});
          $('span', $(last).parent().next('li')).animate({borderWidth: '10px', height: '60px', width: '100px'}, {queue: false, duration: 150, complete: function(){
            $(this).parent().addClass('active');
            checkArrows();
          }});

          $('#gallery img').animate({marginLeft: -$('body').width()}, {queue: false, duration: 150, complete: function(){
            galleryDetail(url, 'next');
          }});
      }
      return false;
  });

  /* go to previous picture  */
  $('#arrows .prev').click(function(){
      if($('#thumbs ul li a.active').parent().prev('li').length>0) {
  
          var thumbsWrap = $('body').width()-57;
          var thumbsPerPage = Math.floor(thumbsWrap/143);
          var thumbsCount = Math.ceil(($('#thumbs ul li a.active').parent().prevAll('li').size()+1)/thumbsPerPage);
          
          if($('#thumbs ul li a.active').parent().prevAll('li').size() < ((thumbsPerPage*thumbsCount)-(thumbsPerPage-1))) {
              $('#thumbs ul').animate({left: -((thumbsPerPage*143*(thumbsCount-1))-(thumbsPerPage*143))}, {queue: false, duration: 250});
          }

          var url = $('a', $('#thumbs ul li a.active').parent().prev('li')).attr('href');
          $('#thumbs ul li a.active span').css({borderWidth: '10px', height: '60px', width: '100px'})
          var last = $('#thumbs ul li a.active').removeClass('active');
          $('span', last).animate({borderWidth: '0', height: '80px', width: '120px'}, {queue: false, duration: 150});
          $('span', $(last).parent().prev('li')).animate({borderWidth: '10px', height: '60px', width: '100px'}, {queue: false, duration: 150, complete: function(){
            $(this).parent().addClass('active');
            checkArrows();
          }});

          $('#gallery img').animate({marginLeft: $('body').width()}, {queue: false, duration: 150, complete: function(){
            galleryDetail(url, 'prev');
          }});
      }
      return false;
  });

  /* thumbsnail right button control */
  $('#thumbs .thumbsRight').click(function(){

      var thumbsWrap = $('body').width()-57;
      var thumbsPerPage = Math.floor(thumbsWrap/143);
      var thumbsCount = Math.ceil(($('#thumbs ul li a.active').parent().prevAll('li').size()+1)/thumbsPerPage);
      $('#thumbs ul').animate({left: -thumbsPerPage*143*thumbsCount}, {queue: false, duration: 250});
      $('#thumbs ul li a.active').removeClass('active');
      $('a', '#thumbs ul li').eq(thumbsPerPage*thumbsCount).addClass('active');
      galleryDetail($('#thumbs ul li a.active').attr('href'), 'next');
      checkArrows();

      return false;
  });

  /* thumbsnail left button control */
  $('#thumbs .thumbsLeft').click(function(){

      var thumbsWrap = $('body').width()-57;
      var thumbsPerPage = Math.floor(thumbsWrap/143);
      var thumbsCount = Math.ceil(($('#thumbs ul li a.active').parent().prevAll('li').size()+1)/thumbsPerPage);
      $('#thumbs ul').animate({left: -((thumbsPerPage*143*(thumbsCount-1))-(thumbsPerPage*143))}, {queue: false, duration: 250});
      $('#thumbs ul li a.active').removeClass('active');
      $('a', '#thumbs ul li').eq((thumbsPerPage*(thumbsCount-1))-thumbsPerPage).addClass('active');
      galleryDetail($('#thumbs ul li a.active').attr('href'), 'prev');
      checkArrows();

      return false;
  });

  /* galerie */
  $('#thumbs ul li a span').css({height: '80px', width: '120px'});
  $('#thumbs ul li a').hover(function(){
          $('span', this).stop().animate({borderWidth: '10px', height: '60px', width: '100px'}, {queue: false, duration: 150});
      },
      function(){
          $('span', this).stop().animate({borderWidth: '0', height: '80px', width: '120px'}, {queue: false, duration: 150});
      }
  );
}

/* Kontrola sipek */
function checkArrows() {
    if($('#thumbs ul li a.active').parent().prev().length == '0') {
      $('#arrows .prev, #thumbs .thumbsLeft').hide();
    }
    else
    {
      $('#arrows .prev, #thumbs .thumbsLeft').show();
    }
  
    if($('#thumbs ul li a.active').parent().next().length == '0') {
      $('#arrows .next, #thumbs .thumbsRight').hide();
    }
    else
    {
      $('#arrows .next, #thumbs .thumbsRight').show();
    }
    var thumbsWrap = $('body').width()-57;
    var thumbsPerPage = Math.floor(thumbsWrap/143);
    var thumbsCount = Math.ceil(($('#thumbs ul li a.active').parent().prevAll('li').size()+1)/thumbsPerPage);
    if((thumbsCount) == Math.ceil($('#thumbs ul li').size()/thumbsPerPage)) {
      $('#thumbs .thumbsRight').hide();
    }
}

function galleryDetail(src, side) {
    $('#load').addClass('loading');
    var img = new Image();
    img.src = src;
    img.onload = function() {
        $('#gallery').html(this);
        /*$('#gallery').css({marginTop: -this.height/2-30, marginLeft: -this.width/2});*/

        if(side=='prev')
        {
          $('#gallery img').css({'margin-left' : -$('body').width()});
          $('#gallery img').animate({marginLeft: 0}, {queue: false, duration: 150, complete: function(){
          }});
        }
        else if (side=='next')
        {
          $('#gallery img').css({'margin-left' : $('body').width(), 'top' : '0'});
          $('#gallery img').animate({marginLeft: 0}, {queue: false, duration: 150, complete: function(){
          }});
        }
        detailMove();
        $('#load').removeClass('loading');
        
        if($('#thumbs ul li a.active').parent().prev().length) {
          var leftPreImg = new Image();
          leftPreImg.src = $('a', $('#thumbs ul li a.active').parent().prev()).attr('href');
        }
        if($('#thumbs ul li a.active').parent().next().length) {
          var rightPreImg = new Image();
          rightPreImg.src = $('a', $('#thumbs ul li a.active').parent().next()).attr('href');
        }        
    };
}

function detailMove() {
    $('body').mousemove(function(e){
      if($('#gallery img').height() > $('body').height()) {
        my = -Math.ceil((e.pageY/($('body').height()/($('#gallery img').height()-($('body').height()-390))))-(($('#gallery img').height()-$('body').height())/2));
        
        $('#gallery img').css({'margin-top' : '180px', 'top' : my});
      }      
    })
}

function gallery() {
    $('#thumbs ul li a').click(function(){

        $('#thumbs ul li a.active span').css({borderWidth: '10px', height: '60px', width: '100px'})
        var last = $('#thumbs ul li a.active').removeClass('active');
        $('span', last).animate({borderWidth: '0', height: '80px', width: '120px'}, {queue: false, duration: 150});
        $('span', this).animate({borderWidth: '10px', height: '60px', width: '100px'}, {queue: false, duration: 150, complete: function(){
          $(this).parent().addClass('active');
          checkArrows();
        }});
        var url = $(this).attr('href');

        $('#gallery img').animate({marginLeft: -$('body').width()}, {queue: false, duration: 150, complete: function(){
          galleryDetail(url, 'next');
        }});

        return false;
    });

    if($('body').attr('id')!='contact') {
        $('#thumbs').animate({bottom: '0'}, {queue: false, duration: 250});
  
        $('#thumbs ul li:first a').addClass('active');
        checkArrows();
        galleryDetail($('#thumbs ul li:first a').attr('href'));
    }
}

$(document).ready(function(){
		web();
	gallery();
})