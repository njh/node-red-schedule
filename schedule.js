/**
 * Copyright 2014 Nicholas J Humfrey
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

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
