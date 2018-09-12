 $(document).ready(function() {
        /*$('#wrapper').fullpage({
            //options here
            autoScrolling:true,
            scrollHorizontally: true
        });

        //methods
        $.fn.fullpage.setAllowScrolling(true); */
        
        $('.pBox').waypoint(function() {
            $('.pBox').addClass('visible animated slideInRight');
        }, {
            offset: '50%'
        });
        
        $('.work-block1').waypoint(function() {
            $('.c1').addClass('image-slide');
            $('.c2').addClass('image-cover');
            $('.c3').addClass('image-border');
        }, {
            offset: '50%'
        });
        
        $('.work-block2').waypoint(function() {
            $('.c4').addClass('image-slide');
            $('.c5').addClass('image-cover');
            $('.c6').addClass('image-border');
        }, {
            offset: '50%'
        });
        
        $('.work-block3').waypoint(function() {
            $('.c7').addClass('image-slide');
            $('.c8').addClass('image-cover');
            $('.c9').addClass('image-border');
        }, {
            offset: '50%'
        });
        
    });
        
        $('.hamburger').click(function() {
            $('.sLinks').css('transform', 'translate(530px,-180px)');
            
            
            if($('.hamburger').hasClass('hActive')) {
                $('.hamburger').removeClass('hActive');
                $('.sLinks').css('transform', 'translate(1500px,-900px)');
            }
            else {
                $('.hamburger').addClass('hActive');
            }
            
            
        });
        
        $('.skills-l').click(function(){
			$("html, body").animate({ scrollTop: 1450 },1000);
			
		});
        $('.work-l').click(function(){
			$("html, body").animate({ scrollTop: 2100 },1000);
			
		});
        $('.contact-l').click(function(){
			$("html, body").animate({ scrollTop: 4200 },1000);
			
		});
        
        