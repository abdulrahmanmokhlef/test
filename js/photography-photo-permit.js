$(document).ready(function() {
 

  activaTab = function(tab){
    $('.sub-nav-tabs a[href="#' + tab + '"]').tab('show');
  };

  

  

    // //this to keep active tab opened after reload 
    // $('a[data-toggle="tab"]').on('show.bs.tab', function(e) {
    //     localStorage.setItem('activeTab', $(e.target).attr('href'));
    // });
    // var activeTab = localStorage.getItem('activeTab');
    // if(activeTab){
    //     $('#privatePhotographyTab a[href="' + activeTab + '"]').tab('show');
    //     $('#privatePhotographyTab2 a[href="' + activeTab + '"]').tab('show');
    // }


    // //input file
    // $('.custom-file input').change(function (e) {
    //     var files = [];
    //     for (var i = 0; i < $(this)[0].files.length; i++) {
    //         files.push($(this)[0].files[i].name);
    //     }
    //     $(this).next('.custom-file-label').html(files.join(', '));
    // });

  });