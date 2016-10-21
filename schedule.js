/**
 * Copyright 2014-2016 Nicholas J Humfrey
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
            var daymap = {
                "*": "Every Day",
                "6,0": "Weekend",
                "1,2,3,4,5": "Weekdays",
                "0": "Sun",
                "1": "Mon",
                "2": "Tue",
                "3": "Wed",
                "4": "Thr",
                "5": "Fri",
                "6": "Sat",
                "7": "Sun"
            };

            if (n.type == 'inject' && n.crontab) {
                var cronparts = n.crontab.split(" ");
                var days = cronparts[4];
                if (daymap.hasOwnProperty(days)) {
                    days = daymap[days];
                } else {
                    days = days.split(',').map(function(day) {return daymap[day];}).join(', ');
                }

                var row = $('<tr/>').appendTo('#schedule tbody');
                $('<td/>', { text: n.name}).appendTo(row);
                $('<td/>', { text: cronparts[1]}).appendTo(row);
                $('<td/>', { text: cronparts[0]}).appendTo(row);
                $('<td/>', { text: cronparts[2]}).appendTo(row);
                $('<td/>', { text: cronparts[3]}).appendTo(row);
                $('<td/>', { text: days}).appendTo(row);
                $('<td/>', { text: n.topic}).appendTo(row);
                $('<td/>', { text: n.payload}).appendTo(row);
                
            }
        }
    });
}

$(function() {
    loadFlows();
});
