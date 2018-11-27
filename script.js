$(document).ready(function () {

    //---------------------------------------------------- 
    //------ menu clicks --------------------------------

    $.scrollTo(0);
    $('#link_about').click(function () {
        $.scrollTo($('#about'), 500);
    });
    $('#link_about2').click(function () {
        $.scrollTo($('#about'), 500);
    });
    $('#link_services').click(function () {
        $.scrollTo($('#services'), 500);
    });
    $('#link_gallery').click(function () {
        $.scrollTo($('#gallery'), 500);
    });
    $('#link_contact').click(function () {
        $.scrollTo($('#contact'), 500);
    });
    $('#link_header').click(function () {
        $.scrollTo($('#header'), 500);
    });


    //----------------------------------------
    //---- window resize ------------------------


    let $window = $(window);
    let windowWidth = $window.width();
    let windowHeight = $window.height();

    let $about = $('#about');
    let aboutPosition = $about.position();
    let aboutTop = aboutPosition.top;

    let $services = $('#services');
    let servicesPosition = $services.position();
    let servicesTop = servicesPosition.top;

    let $gallery = $('#gallery');
    let galleryPosition = $gallery.position();
    let galleryTop = galleryPosition.top;
    gallery

    let $contact = $('#contact');
    let contactPosition = $contact.position();
    let contactTop = contactPosition.top;

    let Y; // window Y offset
    let iconPosition;

    $window.resize(function () {
        windowWidth = $window.width();
        windowHeight = $window.height();

        aboutPosition = $about.position();
        aboutTop = aboutPosition.top;

        servicesPosition = $services.position();
        servicesTop = servicesPosition.top;

        galleryPosition = $gallery.position();
        galleryTop = galleryPosition.top;
        gallery

        contactPosition = $contact.position();
        contactTop = contactPosition.top;

    }); // resize changes ----------------------



    //---------------------------------------------
    //------- burger menu -------------------------


    let $menu = $('#menu');

    $('#burgerMenu').click(function () {

        if ($menu.attr('class') == 'showAnimation') {
            $menu.removeClass('showAnimation');
            $menu.addClass('hideAnimation');
        } else {
            $menu.removeClass('hideAnimation');
            $menu.addClass('showAnimation');
        }

    }); // burger menu click ----------------------



    //---------------------------------------------------------
    //------scroll changes ---------------------------------
    $window.scroll(function () {


        $window.scrollTop() > 100 && windowWidth > 960 ?
            $('nav').addClass('active') : $('nav').removeClass('active');

        $window.scrollTop() > 100 && windowWidth > 960 ?
            $('#logo h5').addClass('active') : $('#logo h5').removeClass('active');

        $window.scrollTop() > 100 && windowWidth > 960 ?
            $('#menu p').addClass('active') : $('#menu p').removeClass('active');


        // ------ menu elements color changes --------------------

        Y = pageYOffset;

        Y + windowHeight / 2 > aboutTop && Y + (windowHeight * 2 / 5) < servicesTop ?
            $('#m1').addClass('onto') : $('#m1').removeClass('onto');

        Y + windowHeight / 2 > servicesTop && Y + (windowHeight * 2 / 5) < galleryTop ?
            $('#m2').addClass('onto') : $('#m2').removeClass('onto');

        Y + windowHeight / 2 > galleryTop && Y + (windowHeight * 2 / 5) < contactTop ?
            $('#m3').addClass('onto') : $('#m3').removeClass('onto');

        Y + windowHeight / 2 > contactTop ?
            $('#m4').addClass('onto') : $('#m4').removeClass('onto');


        //------ icons animation ----------------------------------

        $('i').each(function () {
            let $this = $(this);
            iconPosition = $this.offset();
            let windowPosition = Y + windowHeight * 0.9;

            if (windowPosition > iconPosition.top) {
                $this.addClass('growAnimation');
                $this.removeClass('shrinkAnimation');
            } else {
                $this.removeClass('growAnimation');
                $this.addClass('shrinkAnimation');
            }
        }); //  icon each function -----------------------

    }); //  scroll function -----------------------




    //-------------------------------------------------------------        
    //------ Gallery ----------------------------------------------

    let imageAdres = []; // Array with images URLs
    let imageNumber = 0; // number of showing image

    let imageURL = ''; //  image URL

    let imageHeight; // height of preloaded image
    let imageWidth; // width of preloaded image


    //----------- copy images addresses  --------------------------------------

    $('#gallery a').each(function () {

        let currentAdres = $(this).attr('href');
        imageAdres.push(currentAdres);

    }); // copy images addreses to imageAdres -----------


    //-------- gallery ON & set image  ---------------------------------
    $('#gallery a').click(function () {

        let $this = $(this);
        imageURL = $this.attr('href');

        let check = true;
        let checkingNumber = 0;

        while (check) {
            if (imageURL == imageAdres[checkingNumber]) {
                imageNumber = checkingNumber;
                check = false;
            } else {
                checkingNumber++;
            }
        } // image number checking

        $('#webkasGalleryPicture').attr('src', imageURL);
        $('#webkasGallerySlider').addClass('webkasGalleryActive');

        return false;

    }); // gallery show click --------------------------


    //---------- next picture --------------------------------------
    $('#webkasGallerySliderRight').click(function () {

        imageNumber == imageAdres.length - 1 ?
            imageNumber = 0 : imageNumber++;

        $('#webkasGallerySlider img').attr('src', imageAdres[imageNumber]);

    }); // Right click -------------------------


    //----------- previous picture --------------------------------------------
    $('#webkasGallerySliderLeft').click(function () {

        imageNumber == 0 ?
            imageNumber = imageAdres.length - 1 : imageNumber--;

        $('#webkasGallerySlider img').attr('src', imageAdres[imageNumber]);

    }); // Left click ---------------------------


    //---------------- close gallery ---------------------------------------------
    $('#webkasGallerySliderClose').click(function () {

        $('#webkasGallerySlider').removeClass('webkasGalleryActive');

    }); // Close on click button ------------------------



    //------------------------------------------------------------------------- 








}); // ready function