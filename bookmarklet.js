function showEffortSum() { 
    var count = 0; 
    var content = ''; 
    var selectedRowsSelectors = [
        '.productbacklog-grid-results .grid-row-selected',
        '.productbacklog-grid-results .grid-row-selected-blur',
    ];
    var effortSelector = '.backlog-excluded-effort';
    document
        .querySelectorAll(selectedRowsSelectors.join(', '))
        .forEach(function(i) { 
            var effortDiv = i.querySelector(effortSelector); 
            if (effortDiv && effortDiv.textContent) { 
                var effortText = effortDiv.textContent; 
                if (effortText && effortText.trim() !== '') { 
                    count += parseInt(effortText, 10); 
                } 
            } 
        }); 
    alert(count); 
}