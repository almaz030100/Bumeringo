document.addEventListener("DOMContentLoaded", () => {

    // Wow JS
    (function() {
        new WOW().init();
    }());


    // Section profit calculator
    (function() {
        let rangeInputs = document.querySelectorAll('[type="range"]'),
            totalSums = document.querySelectorAll('[data-calcsum]'),
            a = document.querySelector('[data-range="1"]'),
            b = document.querySelector('[data-range="2"]'),
            c = document.querySelector('[data-range="3"]'),
            d = document.querySelector('[data-range="4"]'),
            e = document.querySelector('[data-range="5"]');

        rangeInputs.forEach(item => {
            item.addEventListener('input', () => {
                let sum = (a.value*2700 + b.value*550 + c.value*1800 + d.value*550) * 0.3 * e.value;
                let result = sum.toLocaleString('ru-RU');
                totalSums.forEach(item => {
                    item.innerHTML = `${result} ₽`;
                });
            });
        });
    }());


    // Fancybox settings
    (function() {
        Fancybox.bind("[data-fancybox]", {
            autoFocus: false,
            dragToClose: false
        });
    }());


    // Form validation
    (function() {
        $('form').each(function() {
            $(this).validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2,
                        maxlength: 50
                    },
                    phone: {
                        required: true,
                        minlength: 2,
                        maxlength: 50
                    },
                    email: {
                        required: true,
                        minlength: 2,
                        maxlength: 50,
                        email: true
                    }
                },
            });
        });

        $.fn.setCursorPosition = function(pos) {
            if ($(this).get(0).setSelectionRange) {
              $(this).get(0).setSelectionRange(pos, pos);
            } else if ($(this).get(0).createTextRange) {
              var range = $(this).get(0).createTextRange();
              range.collapse(true);
              range.moveEnd('character', pos);
              range.moveStart('character', pos);
              range.select();
            }
        };

        $('input[name="phone"]').click(function(){
            $(this).setCursorPosition(4);
        }).mask('+7 (999) 999-99-99', {autoclear: true});

        // $(function() {
        //     $('input[name="phone"]').mask('+7 (999) 999-99-99', {autoclear: false});
        // });
    }());


    // Sliders
    (function() {
        new Splide('.promo__advantages', {
            type: 'loop',
            arrows: false,
            width: '245px',
            gap: '50px',
            mediaQuery: 'min',
            breakpoints: {
                992: {
                    destroy: true
                }
            }
        }).mount();
    }());


    // Показываем модальное окно при уходе со страницы
    (function() {
        function t() {
            Fancybox.show(
                [
                    {
                        src: '#modal3',
                    },
                ],
                {
                    autoFocus: false,
                    dragToClose: false
                }
            );
        }

        $(document).one("mouseleave", function (e) {
            $("#pageMain").length && e.clientY < 10 && t();
        });
    }());

});