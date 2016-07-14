function showEffortSum() { 
    var count = 0; 
    var content = ''; 
    var selectedRowsSelectors = [
        '.productbacklog-grid-results .grid-row-selected',
        '.productbacklog-grid-results .grid-row-selected-blur',
    ];
    var headerSelector = '.grid-header .grid-header-column';
    var cellSelector = '.grid-cell';

    var columns = document
        .querySelectorAll(headerSelector);

    var effortIndex = -1;
    for (var i = 0; i < columns.length; i++) {
        if (columns[i].getAttribute('title') === 'Effort') {
            effortIndex = i;
            break;
        }
    }
        
    if (effortIndex === -1) {
        alert('Sorry, cannot locate effort index');
        return;
    }

    console.log('efforIndex: ', effortIndex);

    document
        .querySelectorAll(selectedRowsSelectors.join(', '))
        .forEach(function(i) { 
            var divs = i.querySelectorAll(cellSelector);
            var effortDiv = divs[effortIndex];
            console.log('effortDiv: ', effortDiv); 
            if (effortDiv && effortDiv.textContent) { 
                var effortText = effortDiv.textContent; 
                if (effortText && effortText.trim() !== '') { 
                    count += parseInt(effortText, 10); 
                } 
            } 
        }); 

    alert(count); 
}