$().ready( _=> {
  //Menú de navegación para móvil
  $(".button-collapse").sideNav();

  //Cambiar estilos del navbar al activarse el scroll
  $(window).scroll(function () {
     var scroll = $(window).scrollTop()
     if (scroll > 100) {
       $("nav").addClass("color")
     } else {
       $("nav").removeClass("color")
     }
 });
});
