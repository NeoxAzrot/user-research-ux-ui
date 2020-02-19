$('input[type=radio][name=trier]').change(function() {
    var sheets = $('.sheet');
    var sheets_array = Array.prototype.slice.call(sheets, 0);
    var all_sheets_sort;

    if (this.value == 'difficulte') {
        all_sheets_sort = sheets_array.map(c=>c).sort((a,b) => b.dataset.difficulty - a.dataset.difficulty)
    }
    else if (this.value == 'temps') {
        all_sheets_sort = sheets_array.map(c=>c).sort((a,b) => b.dataset.time - a.dataset.time)
    }

    console.log(all_sheets_sort[0]);
});