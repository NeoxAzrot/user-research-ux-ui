$('input[type=radio][name=trier]').change(function() {
    var container = $('#sheet_container');
    var sheets = $('.sheet');
    var sheets_array = Array.prototype.slice.call(sheets, 0);
    var all_sheets_sort;

    if (this.value == 'difficulte') {
        all_sheets_sort = sheets_array.map(c=>c).sort((a,b) => a.dataset.difficulty - b.dataset.difficulty)
    }
    else if (this.value == 'temps') {
        all_sheets_sort = sheets_array.map(c=>c).sort((a,b) => a.dataset.time - b.dataset.time)
    }
    
    container.empty();

    for(var i = 0; i < all_sheets_sort.length; i++) {
        container.append(all_sheets_sort[i]);
    }
});