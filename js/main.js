 $(function () {
            //スムーズスクロール
            let runScroll = function () {
                $('a[href^="#"]').click(function () {
                    let speed = 400;
                    let href = $(this).attr("href");
                    let $target = $(href == "#" || href == "" ? 'html' : href);
                    let position = $target.offset().top - 100;
                    $('body,html').animate({
                        scrollTop: position
                    }, speed, 'swing');
                    return false;
                });
            };
            //ハンバーガーメニューチェックボックス外す処理
            let unlockCheckBox = function () {
                let $trigger = $('.header__navi a');
                let $target = $('input[type="checkbox"]');
                $trigger.click(function () {
                    $target.prop('checked', false);
                });
            };

            //フェードイン
            $(window).on('scroll', function(){
              $('[data-fadeIn]').each(function(index, el){
                if( $(window).scrollTop() > ($(el).offset().top - $(window).height() / 2) ){
                  $(el).addClass('is-over');
                }
              });
            });
            //Document Ready
            runScroll();
            unlockCheckBox();
        });
