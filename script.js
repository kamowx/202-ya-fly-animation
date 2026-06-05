$(function () {

    function steamboat() {
        $('.steamboat').animate({

            left: '1700px',
            transition: '40s'
        });
    }
    setTimeout(steamboat, 1000);

    // Облако 1
    function flyCloud1() {
        $('.cloud1').css({
            left: -120
        }).animate({
            left: $(window).width() + 150
        }, 18000, 'linear', flyCloud1);
    }
    flyCloud1();

    // Облако 3
    function flyCloud3() {
        $('.cloud3').css({
            left: -150
        }).animate({
            left: $(window).width() + 150
        }, 26000, 'linear', flyCloud3
        );
    }
    setTimeout(flyCloud3, 4000);
  




    // Самолёт 
    var ww = $(window).width();
    var planeTop = $(window).height() * 0.35;

    function flyPlane() {
        $('#plane').css(
            {
                left: -120, top: planeTop
            }
        );
        $('#plane').animate(
            {
                left: ww + 120
            },
            {
                duration: 12000,
                easing: 'linear',
                step: function (now) {
                    var progress = (now + 120) / (ww + 240);
                    var sway = Math.sin(progress * Math.PI * 4) * 18;
                    $(this).css('top', planeTop + sway);
                },
                complete: flyPlane
            });
    }
    flyPlane();

});

  function all() {

        function top1() {
            $('.ball1').animate({
                bottom: '300px'
            }, 3000);
            $('.ball1').css({
                'background': '#ffffff',
                'opacity': '0',
                'transition': '5s',
                'height': '100px',
                'width': '100px',
            });
        }
        setTimeout(top1, 3000);

        function top2() {
            $('.ball2').animate({
                bottom: '300px'
            }, 3000);
            $('.ball2').css({
                'background': '#ffffff',
                'opacity': '0',
                'transition': '5s',
                'height': '100px',
                'width': '100px',
            });
        }
        setTimeout(top2, 4000);

        function top3() {
            $('.ball3').animate({
                bottom: '300px'
            }, 3000);
            $('.ball3').css({
                'background': '#ffffff',
                'opacity': '0',
                'transition': '5s',
                'height': '100px',
                'width': '100px',
            });
        }
        setTimeout(top3, 5000);

        function top4() {
            $('.ball4').animate({
                bottom: '300px'
            }, 3000);
            $('.ball4').css({
                'background': '#ffffff',
                'opacity': '0',
                'transition': '5s',
                'height': '100px',
                'width': '100px',
            });
        }
        setTimeout(top4, 6000);

        function top5() {
            $('.ball5').animate({
                bottom: '300px'
            }, 3000);
            $('.ball5').css({
                'background': '#ffffff',
                'opacity': '0',
                'transition': '5s',
                'height': '100px',
                'width': '100px',
            });
        }
        setTimeout(top5, 7000);
        

    }
    all();
    setInterval(all, 7000);



      function all2() {

        function top11() {
            $('.ball11').animate({
                bottom: '300px'
            }, 3000);
            $('.ball11').css({
                'background': '#ffffff',
                'opacity': '0',
                'transition': '5s',
                'height': '100px',
                'width': '100px',
            });
        }
        setTimeout(top11, 3000);

        function top21() {
            $('.ball21').animate({
                bottom: '300px'
            }, 3000);
            $('.ball21').css({
                'background': '#ffffff',
                'opacity': '0',
                'transition': '5s',
                'height': '100px',
                'width': '100px',
            });
        }
        setTimeout(top21, 4000);

        function top31() {
            $('.ball31').animate({
                bottom: '300px'
            }, 3000);
            $('.ball31').css({
                'background': '#ffffff',
                'opacity': '0',
                'transition': '5s',
                'height': '100px',
                'width': '100px',
            });
        }
        setTimeout(top31, 5000);

        function top41() {
            $('.ball41').animate({
                bottom: '300px'
            }, 3000);
            $('.ball41').css({
                'background': '#ffffff',
                'opacity': '0',
                'transition': '5s',
                'height': '100px',
                'width': '100px',
            });
        }
        setTimeout(top41, 6000);

        function top51() {
            $('.ball51').animate({
                bottom: '300px'
            }, 3000);
            $('.ball51').css({
                'background': '#ffffff',
                'opacity': '0',
                'transition': '5s',
                'height': '100px',
                'width': '100px',
            });
        }
        setTimeout(top51, 7000);
        

    }
    all();
    setInterval(all2, 7000);
