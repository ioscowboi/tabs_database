var anchors = document.getElementsByTagName('a');

var about = document.getElementById('about');
var concerts = document.getElementById('concerts');
var discography = document.getElementById('discography');

var show_about = anchors[0].addEventListener('click', function(){
               about.style.visibility='visible';
               about.style.display='inline';
               concerts.style.visibility='hidden';
               concerts.style.display='none';
               discography.style.visibility='hidden';
               discography.style.display='none';
             }
             );

var show_concerts = anchors[1].addEventListener('click', function(){
               about.style.visibility='hidden';
               about.style.display='none';
               concerts.style.visibility='visible';
               concerts.style.display='inline';
               discography.style.visibility='hidden';
               discography.style.display='none';
             }
             );
             
var show_discography = anchors[2].addEventListener('click', function(){
               about.style.visibility='hidden';
               about.style.display='none';
               concerts.style.visibility='hidden';
               concerts.style.display='none';
               discography.style.visibility='visible';
               discography.style.display='inline';
             }
             );


             // obj.style.visibility='visible';
             // obj.style.display='inline';
             // obj2.style.visibility='hidden';
             // obj2.style.display='none';
// jquery option
// $('#nav div').hide();
// $('#nav div:first').show();
// $('#nav ul li:first').addClass('active');
// $('#nav ul li a').click(function(){
//     var currentTab = $(this).attr('href');
//     var vis = $(currentTab).is(':visible');
//     $('#nav div').hide();
//     $('#nav ul li').removeClass('active');
//     $(this).parent().addClass('active');
//     if(vis) {
//         $(currentTab).hide();
//     } else {
//         $(currentTab).show();
//     }
// });
//
