
function loadFlows() {
    $.getJSON('../flows', function( nodes ) {
        for (var i in nodes) {
            var n = nodes[i];
            var days = {
                "*": "every day",
                "1-5": "Mondays to Fridays",
                "6-7": "Saturdays and Sundays",
                "1": "Mondays",
                "2": "Tuesdays",
                "3": "Wednesdays",
                "4": "Thursdays",
                "5": "Fridays",
                "6": "Saturdays",
                "7": "Sundays"
            };

            if (n.type == 'inject' && n.crontab) {
                var cronparts = n.crontab.split(" ");
                var day = cronparts[4];
                $('#schedule tbody').append(
                  '<tr>'+
                  '<td>'+n.name+'</td>'+
                  '<td>'+cronparts[1]+'</td>'+
                  '<td>'+cronparts[0]+'</td>'+
                  '<td>'+cronparts[2]+'</td>'+
                  '<td>'+cronparts[3]+'</td>'+
                  '<td>'+days[day]+'</td>'+
                  '<td>'+n.topic+'</td>'+
                  '<td>'+n.payload+'</td>'+
                  '</tr>'
                );
            }
        }
    });
}

$(function() {
    loadFlows();
});
