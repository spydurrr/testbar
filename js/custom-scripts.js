var mySwiper;


$(function(){//on document ready
	mySwiper = $('#bottom_swiper').swiper({
    speed: 2000,
	loop: false,
	initialSlide: 1,
	resistance: '100%'
  });
  
  
  shareSwiper1 = $('#share_swiper1').swiper({
     speed: 2000,
	loop: false,
	initialSlide: 1,
	resistance: '100%'
	});
  
  shareSwiper2 = $('#share_swiper2').swiper({
    speed: 2000,
	loop: false,
	initialSlide: 1,
	resistance: '100%'
	});
  
  shareSwiper3 = $('#share_swiper3').swiper({
     speed: 2000,
	loop: false,
	initialSlide: 1,
	resistance: '100%'
	});
  
  shareSwiper4 = $('#share_swiper4').swiper({
     speed: 2000,
	loop: false,
	initialSlide: 1,
	resistance: '100%'
	});
	
	shareSwiper1.resizeFix();
	  		shareSwiper2.resizeFix();
	  		shareSwiper3.resizeFix();
  		shareSwiper4.resizeFix();
	$('#myModal').toggle();

  

  $('marquee').each(function(index){
	  $(this).marquee('marqueez mz'+$(this).attr('mzindex'));
  });
  
   $('.marqueez').on('touchstart mousedown',function () {
            $(this).trigger('stop');
        }).on('touchend mouseup',function () {
            $(this).trigger('start');
        });



$("#scrollshare").on("click", function(event){
mySwiper.swipePrev();
});

$("#comments").on("click", function(event){
mySwiper.swipeNext();
});



$(".slider_arrow_right").on("click", function(event){
mySwiper.swipeNext();
});	


$(".slider_arrow_left").on("click", function(event){
mySwiper.swipePrev();
});	


$('.slider_arrow_up').funcToggle('click', function() {
  
   $("#comments-box").animate({
        height:"100%"
    },400, function() {
    $('.slider_arrow_up').rotate(180);
  });
	 
	
}, function() {
    
   $("#comments-box").animate({
        height:"0%"
    },400, function() {
    $('.slider_arrow_up').rotate(0);
  });

 });
 
 
 

$('.close').click(function(e) { 
			 e.preventDefault();
			 
			              
			$(lastel).fadeOut(400,'easeOutQuad'
				,function(){
					
					$(lastel).removeClass('on');
					$(lastel).modal('hide');
					$(lasttriggered).removeClass('media-filter-trigger');
					
				});
			
      })  
 


			
$(".stack ul li.blue").siblings().css("display","none");


$(".stack ul li.stack-btn").funcToggle('click', function() {
	
	if ( $(this).hasClass("blue") ) {
	
	
	var vertical=0;
	$(this).siblings().each(function(){
		vertical-=140;
		$(this).fadeIn().animate({'top': vertical+'px'}, 400);
	});
	return false;
	
};
	
	
	  if ( $(this).hasClass("orange") ) {
	$(this).addClass('media-filter-trigger');
	
	
};


	  if ( $(".stack ul li").hasClass("on") ) {
		   $(".stack ul li.on").removeClass('on').find('a').children().not('img').fadeOut('slow', function() {
		   $(this).parents('li:first').closest('li').animate({
				height:"80px",
				width:"80px"
			},400, 'linear');});
		
		};
	
	
	
		$(this).addClass('on').animate({
        height: "120px",
		width: "240px"
		},400, 'linear', function() {
		$(this).find('a').children().not('img').add('.chosen-date').fadeIn('slow');
	  }); 
	  
 }, function() {
	 
	 if ( $(this).hasClass("blue") ) {
	
	
	var vertical=0;
	$(this).siblings().each(function(){
		
		
		$(this).animate({'top': vertical+'px'}, 400).fadeOut();
		
	});
	
	return false;
};
   
   if ( $(this).hasClass("orange") ) {
	$(this).removeClass('media-filter-trigger');
	
	
	
 
 			lastel = $("#"+$(this).attr('data-target'));
 			lasttriggered=this;
          
			$(lastel).addClass('on').fadeIn(400);
			
			shareSwiper1.resizeFix();
	  		shareSwiper2.resizeFix();
	  		shareSwiper3.resizeFix();
	  		shareSwiper4.resizeFix();
};

   
    	$(this).removeClass('on').find('a').children().not('img').fadeOut('slow', function() {
   		$(this).parents('li:first').not('.popular-bar').closest('li').animate({
        height:"80px",
		width:"80px"
    	},400, 'linear');}
		
		);
		
 });


	  $("#back").click(function(event) {
      event.preventDefault();
      history.back(1);
      });
	

$('#reportrange').daterangepicker(
                     {
                        ranges: {
                           'Today': [new Date(), new Date()],
                           'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
                           'Last 7 Days': [moment().subtract('days', 6), new Date()],
                           'Last 30 Days': [moment().subtract('days', 29), new Date()],
                           'This Month': [moment().startOf('month'), moment().endOf('month')],
                           'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
                        },
                        opens: 'left',
                        format: 'MM/DD/YYYY',
                        separator: ' to ',
                        startDate: moment().subtract('days', 29),
                        endDate: new Date(),
                        minDate: '01/01/2012',
                        maxDate: '12/31/2013',
                        locale: {
                            applyLabel: 'Submit',
                            fromLabel: 'From',
                            toLabel: 'To',
                            customRangeLabel: 'Custom Range',
                            daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr','Sa'],
                            monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                            firstDay: 1
                        },
                        showWeekNumbers: true,
                        buttonClasses: ['btn-danger'],
                        dateLimit: false
                     },
                     function(start, end) {
                        $('#reportrange span').html(start.format('MMMM D') + ' - ' + end.format('MMMM D'));
                     }
                  );
                  
                  $('#reportrange span').html(moment().subtract('days', 29).format('MMMM D') + ' - ' + moment().format('MMMM D'));

     
	  
	   $('div.stack').draggable();
	   $('#back').draggable();
 
});