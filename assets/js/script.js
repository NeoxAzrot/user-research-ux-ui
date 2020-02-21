// Smooth scroll

$(document).ready(function() {
    $('.link_ancre').on('click', function() {
        var page = $(this).attr('href');
        var speed = 1500;
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed );
        return false;
    });
});


// Trie des fiches

var container = $('#sheet_container');
var sheets = $('.sheet');
var sheets_array = Array.prototype.slice.call(sheets, 0);
var all_sheets_sort;

$('#difficulte').click(function() {
    all_sheets_sort = sheets_array.map(c=>c).sort((a,b) => a.dataset.difficulty - b.dataset.difficulty);
    $('#difficulte').addClass('clicked');
    $('#temps').removeClass('clicked');
    showSheet();
});

$('#temps').click(function() {
    all_sheets_sort = sheets_array.map(c=>c).sort((a,b) => a.dataset.time - b.dataset.time);
    $('#temps').addClass('clicked');
    $('#difficulte').removeClass('clicked');
    showSheet();
});

function showSheet() {
    all_sheets_sort.push($('#zip')[0]);
    container.empty();
    
    for(var i = 0; i < all_sheets_sort.length; i++) {
        container.append(all_sheets_sort[i]);
    }
}

// Progress bar //

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.getElementById("sheet_container").offsetTop;
  var scrolled = (winScroll / height) * 109;
  if(winScroll < height) {
      document.getElementById("progress_bar").style.top = "calc(" + scrolled + "%" + " + 13px)";
  }
}