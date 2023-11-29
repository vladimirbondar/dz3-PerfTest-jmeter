/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 10.0, "series": [{"data": [[0.0, 1.0], [0.1, 1.0], [0.2, 1.0], [0.3, 1.0], [0.4, 1.0], [0.5, 1.0], [0.6, 1.0], [0.7, 1.0], [0.8, 1.0], [0.9, 1.0], [1.0, 1.0], [1.1, 1.0], [1.2, 1.0], [1.3, 1.0], [1.4, 1.0], [1.5, 1.0], [1.6, 1.0], [1.7, 1.0], [1.8, 1.0], [1.9, 1.0], [2.0, 1.0], [2.1, 1.0], [2.2, 1.0], [2.3, 1.0], [2.4, 1.0], [2.5, 1.0], [2.6, 1.0], [2.7, 1.0], [2.8, 1.0], [2.9, 1.0], [3.0, 1.0], [3.1, 1.0], [3.2, 1.0], [3.3, 1.0], [3.4, 1.0], [3.5, 1.0], [3.6, 1.0], [3.7, 1.0], [3.8, 1.0], [3.9, 1.0], [4.0, 1.0], [4.1, 1.0], [4.2, 1.0], [4.3, 1.0], [4.4, 1.0], [4.5, 1.0], [4.6, 1.0], [4.7, 1.0], [4.8, 1.0], [4.9, 1.0], [5.0, 1.0], [5.1, 1.0], [5.2, 1.0], [5.3, 1.0], [5.4, 1.0], [5.5, 1.0], [5.6, 1.0], [5.7, 1.0], [5.8, 1.0], [5.9, 1.0], [6.0, 1.0], [6.1, 1.0], [6.2, 1.0], [6.3, 1.0], [6.4, 1.0], [6.5, 1.0], [6.6, 1.0], [6.7, 1.0], [6.8, 1.0], [6.9, 1.0], [7.0, 1.0], [7.1, 1.0], [7.2, 1.0], [7.3, 1.0], [7.4, 1.0], [7.5, 1.0], [7.6, 1.0], [7.7, 1.0], [7.8, 1.0], [7.9, 1.0], [8.0, 1.0], [8.1, 1.0], [8.2, 1.0], [8.3, 1.0], [8.4, 1.0], [8.5, 1.0], [8.6, 1.0], [8.7, 1.0], [8.8, 1.0], [8.9, 1.0], [9.0, 1.0], [9.1, 1.0], [9.2, 1.0], [9.3, 1.0], [9.4, 1.0], [9.5, 1.0], [9.6, 1.0], [9.7, 1.0], [9.8, 1.0], [9.9, 1.0], [10.0, 1.0], [10.1, 2.0], [10.2, 2.0], [10.3, 2.0], [10.4, 2.0], [10.5, 2.0], [10.6, 2.0], [10.7, 2.0], [10.8, 2.0], [10.9, 2.0], [11.0, 2.0], [11.1, 2.0], [11.2, 2.0], [11.3, 2.0], [11.4, 2.0], [11.5, 2.0], [11.6, 2.0], [11.7, 2.0], [11.8, 2.0], [11.9, 2.0], [12.0, 2.0], [12.1, 2.0], [12.2, 2.0], [12.3, 2.0], [12.4, 2.0], [12.5, 2.0], [12.6, 2.0], [12.7, 2.0], [12.8, 2.0], [12.9, 2.0], [13.0, 2.0], [13.1, 2.0], [13.2, 2.0], [13.3, 2.0], [13.4, 2.0], [13.5, 2.0], [13.6, 2.0], [13.7, 2.0], [13.8, 2.0], [13.9, 2.0], [14.0, 2.0], [14.1, 2.0], [14.2, 2.0], [14.3, 2.0], [14.4, 2.0], [14.5, 2.0], [14.6, 2.0], [14.7, 2.0], [14.8, 2.0], [14.9, 2.0], [15.0, 2.0], [15.1, 2.0], [15.2, 2.0], [15.3, 2.0], [15.4, 2.0], [15.5, 2.0], [15.6, 2.0], [15.7, 2.0], [15.8, 2.0], [15.9, 2.0], [16.0, 2.0], [16.1, 2.0], [16.2, 2.0], [16.3, 2.0], [16.4, 2.0], [16.5, 2.0], [16.6, 2.0], [16.7, 2.0], [16.8, 2.0], [16.9, 2.0], [17.0, 2.0], [17.1, 2.0], [17.2, 2.0], [17.3, 2.0], [17.4, 2.0], [17.5, 2.0], [17.6, 2.0], [17.7, 2.0], [17.8, 2.0], [17.9, 2.0], [18.0, 2.0], [18.1, 2.0], [18.2, 2.0], [18.3, 2.0], [18.4, 2.0], [18.5, 2.0], [18.6, 2.0], [18.7, 2.0], [18.8, 2.0], [18.9, 2.0], [19.0, 2.0], [19.1, 2.0], [19.2, 2.0], [19.3, 2.0], [19.4, 2.0], [19.5, 2.0], [19.6, 2.0], [19.7, 2.0], [19.8, 2.0], [19.9, 2.0], [20.0, 2.0], [20.1, 2.0], [20.2, 3.0], [20.3, 3.0], [20.4, 3.0], [20.5, 3.0], [20.6, 3.0], [20.7, 3.0], [20.8, 3.0], [20.9, 3.0], [21.0, 3.0], [21.1, 3.0], [21.2, 3.0], [21.3, 3.0], [21.4, 3.0], [21.5, 3.0], [21.6, 3.0], [21.7, 3.0], [21.8, 3.0], [21.9, 3.0], [22.0, 3.0], [22.1, 3.0], [22.2, 3.0], [22.3, 3.0], [22.4, 3.0], [22.5, 3.0], [22.6, 3.0], [22.7, 3.0], [22.8, 3.0], [22.9, 3.0], [23.0, 3.0], [23.1, 3.0], [23.2, 3.0], [23.3, 3.0], [23.4, 3.0], [23.5, 3.0], [23.6, 3.0], [23.7, 3.0], [23.8, 3.0], [23.9, 3.0], [24.0, 3.0], [24.1, 3.0], [24.2, 3.0], [24.3, 3.0], [24.4, 3.0], [24.5, 3.0], [24.6, 3.0], [24.7, 3.0], [24.8, 3.0], [24.9, 3.0], [25.0, 3.0], [25.1, 3.0], [25.2, 3.0], [25.3, 3.0], [25.4, 3.0], [25.5, 3.0], [25.6, 3.0], [25.7, 3.0], [25.8, 3.0], [25.9, 3.0], [26.0, 3.0], [26.1, 3.0], [26.2, 3.0], [26.3, 3.0], [26.4, 3.0], [26.5, 3.0], [26.6, 3.0], [26.7, 3.0], [26.8, 3.0], [26.9, 3.0], [27.0, 3.0], [27.1, 3.0], [27.2, 3.0], [27.3, 3.0], [27.4, 3.0], [27.5, 3.0], [27.6, 3.0], [27.7, 3.0], [27.8, 3.0], [27.9, 3.0], [28.0, 3.0], [28.1, 3.0], [28.2, 3.0], [28.3, 3.0], [28.4, 3.0], [28.5, 3.0], [28.6, 3.0], [28.7, 3.0], [28.8, 3.0], [28.9, 3.0], [29.0, 3.0], [29.1, 3.0], [29.2, 3.0], [29.3, 3.0], [29.4, 3.0], [29.5, 3.0], [29.6, 3.0], [29.7, 3.0], [29.8, 3.0], [29.9, 3.0], [30.0, 3.0], [30.1, 3.0], [30.2, 3.0], [30.3, 4.0], [30.4, 4.0], [30.5, 4.0], [30.6, 4.0], [30.7, 4.0], [30.8, 4.0], [30.9, 4.0], [31.0, 4.0], [31.1, 4.0], [31.2, 4.0], [31.3, 4.0], [31.4, 4.0], [31.5, 4.0], [31.6, 4.0], [31.7, 4.0], [31.8, 4.0], [31.9, 4.0], [32.0, 4.0], [32.1, 4.0], [32.2, 4.0], [32.3, 4.0], [32.4, 4.0], [32.5, 4.0], [32.6, 4.0], [32.7, 4.0], [32.8, 4.0], [32.9, 4.0], [33.0, 4.0], [33.1, 4.0], [33.2, 4.0], [33.3, 4.0], [33.4, 4.0], [33.5, 4.0], [33.6, 4.0], [33.7, 4.0], [33.8, 4.0], [33.9, 4.0], [34.0, 4.0], [34.1, 4.0], [34.2, 4.0], [34.3, 4.0], [34.4, 4.0], [34.5, 4.0], [34.6, 4.0], [34.7, 4.0], [34.8, 4.0], [34.9, 4.0], [35.0, 4.0], [35.1, 4.0], [35.2, 4.0], [35.3, 4.0], [35.4, 4.0], [35.5, 4.0], [35.6, 4.0], [35.7, 4.0], [35.8, 4.0], [35.9, 4.0], [36.0, 4.0], [36.1, 4.0], [36.2, 4.0], [36.3, 4.0], [36.4, 4.0], [36.5, 4.0], [36.6, 4.0], [36.7, 4.0], [36.8, 4.0], [36.9, 4.0], [37.0, 4.0], [37.1, 4.0], [37.2, 4.0], [37.3, 4.0], [37.4, 4.0], [37.5, 4.0], [37.6, 4.0], [37.7, 4.0], [37.8, 4.0], [37.9, 4.0], [38.0, 4.0], [38.1, 4.0], [38.2, 4.0], [38.3, 4.0], [38.4, 4.0], [38.5, 4.0], [38.6, 4.0], [38.7, 4.0], [38.8, 4.0], [38.9, 4.0], [39.0, 4.0], [39.1, 4.0], [39.2, 4.0], [39.3, 4.0], [39.4, 4.0], [39.5, 4.0], [39.6, 4.0], [39.7, 4.0], [39.8, 4.0], [39.9, 4.0], [40.0, 4.0], [40.1, 4.0], [40.2, 5.0], [40.3, 5.0], [40.4, 5.0], [40.5, 5.0], [40.6, 5.0], [40.7, 5.0], [40.8, 5.0], [40.9, 5.0], [41.0, 5.0], [41.1, 5.0], [41.2, 5.0], [41.3, 5.0], [41.4, 5.0], [41.5, 5.0], [41.6, 5.0], [41.7, 5.0], [41.8, 5.0], [41.9, 5.0], [42.0, 5.0], [42.1, 5.0], [42.2, 5.0], [42.3, 5.0], [42.4, 5.0], [42.5, 5.0], [42.6, 5.0], [42.7, 5.0], [42.8, 5.0], [42.9, 5.0], [43.0, 5.0], [43.1, 5.0], [43.2, 5.0], [43.3, 5.0], [43.4, 5.0], [43.5, 5.0], [43.6, 5.0], [43.7, 5.0], [43.8, 5.0], [43.9, 5.0], [44.0, 5.0], [44.1, 5.0], [44.2, 5.0], [44.3, 5.0], [44.4, 5.0], [44.5, 5.0], [44.6, 5.0], [44.7, 5.0], [44.8, 5.0], [44.9, 5.0], [45.0, 5.0], [45.1, 5.0], [45.2, 5.0], [45.3, 5.0], [45.4, 5.0], [45.5, 5.0], [45.6, 5.0], [45.7, 5.0], [45.8, 5.0], [45.9, 5.0], [46.0, 5.0], [46.1, 5.0], [46.2, 5.0], [46.3, 5.0], [46.4, 5.0], [46.5, 5.0], [46.6, 5.0], [46.7, 5.0], [46.8, 5.0], [46.9, 5.0], [47.0, 5.0], [47.1, 5.0], [47.2, 5.0], [47.3, 5.0], [47.4, 5.0], [47.5, 5.0], [47.6, 5.0], [47.7, 5.0], [47.8, 5.0], [47.9, 5.0], [48.0, 5.0], [48.1, 5.0], [48.2, 5.0], [48.3, 5.0], [48.4, 5.0], [48.5, 5.0], [48.6, 5.0], [48.7, 5.0], [48.8, 5.0], [48.9, 5.0], [49.0, 5.0], [49.1, 5.0], [49.2, 5.0], [49.3, 5.0], [49.4, 5.0], [49.5, 5.0], [49.6, 5.0], [49.7, 5.0], [49.8, 5.0], [49.9, 5.0], [50.0, 5.0], [50.1, 5.0], [50.2, 5.0], [50.3, 6.0], [50.4, 6.0], [50.5, 6.0], [50.6, 6.0], [50.7, 6.0], [50.8, 6.0], [50.9, 6.0], [51.0, 6.0], [51.1, 6.0], [51.2, 6.0], [51.3, 6.0], [51.4, 6.0], [51.5, 6.0], [51.6, 6.0], [51.7, 6.0], [51.8, 6.0], [51.9, 6.0], [52.0, 6.0], [52.1, 6.0], [52.2, 6.0], [52.3, 6.0], [52.4, 6.0], [52.5, 6.0], [52.6, 6.0], [52.7, 6.0], [52.8, 6.0], [52.9, 6.0], [53.0, 6.0], [53.1, 6.0], [53.2, 6.0], [53.3, 6.0], [53.4, 6.0], [53.5, 6.0], [53.6, 6.0], [53.7, 6.0], [53.8, 6.0], [53.9, 6.0], [54.0, 6.0], [54.1, 6.0], [54.2, 6.0], [54.3, 6.0], [54.4, 6.0], [54.5, 6.0], [54.6, 6.0], [54.7, 6.0], [54.8, 6.0], [54.9, 6.0], [55.0, 6.0], [55.1, 6.0], [55.2, 6.0], [55.3, 6.0], [55.4, 6.0], [55.5, 6.0], [55.6, 6.0], [55.7, 6.0], [55.8, 6.0], [55.9, 6.0], [56.0, 6.0], [56.1, 6.0], [56.2, 6.0], [56.3, 6.0], [56.4, 6.0], [56.5, 6.0], [56.6, 6.0], [56.7, 6.0], [56.8, 6.0], [56.9, 6.0], [57.0, 6.0], [57.1, 6.0], [57.2, 6.0], [57.3, 6.0], [57.4, 6.0], [57.5, 6.0], [57.6, 6.0], [57.7, 6.0], [57.8, 6.0], [57.9, 6.0], [58.0, 6.0], [58.1, 6.0], [58.2, 6.0], [58.3, 6.0], [58.4, 6.0], [58.5, 6.0], [58.6, 6.0], [58.7, 6.0], [58.8, 6.0], [58.9, 6.0], [59.0, 6.0], [59.1, 6.0], [59.2, 6.0], [59.3, 6.0], [59.4, 6.0], [59.5, 6.0], [59.6, 6.0], [59.7, 6.0], [59.8, 6.0], [59.9, 6.0], [60.0, 6.0], [60.1, 6.0], [60.2, 6.0], [60.3, 6.0], [60.4, 7.0], [60.5, 7.0], [60.6, 7.0], [60.7, 7.0], [60.8, 7.0], [60.9, 7.0], [61.0, 7.0], [61.1, 7.0], [61.2, 7.0], [61.3, 7.0], [61.4, 7.0], [61.5, 7.0], [61.6, 7.0], [61.7, 7.0], [61.8, 7.0], [61.9, 7.0], [62.0, 7.0], [62.1, 7.0], [62.2, 7.0], [62.3, 7.0], [62.4, 7.0], [62.5, 7.0], [62.6, 7.0], [62.7, 7.0], [62.8, 7.0], [62.9, 7.0], [63.0, 7.0], [63.1, 7.0], [63.2, 7.0], [63.3, 7.0], [63.4, 7.0], [63.5, 7.0], [63.6, 7.0], [63.7, 7.0], [63.8, 7.0], [63.9, 7.0], [64.0, 7.0], [64.1, 7.0], [64.2, 7.0], [64.3, 7.0], [64.4, 7.0], [64.5, 7.0], [64.6, 7.0], [64.7, 7.0], [64.8, 7.0], [64.9, 7.0], [65.0, 7.0], [65.1, 7.0], [65.2, 7.0], [65.3, 7.0], [65.4, 7.0], [65.5, 7.0], [65.6, 7.0], [65.7, 7.0], [65.8, 7.0], [65.9, 7.0], [66.0, 7.0], [66.1, 7.0], [66.2, 7.0], [66.3, 7.0], [66.4, 7.0], [66.5, 7.0], [66.6, 7.0], [66.7, 7.0], [66.8, 7.0], [66.9, 7.0], [67.0, 7.0], [67.1, 7.0], [67.2, 7.0], [67.3, 7.0], [67.4, 7.0], [67.5, 7.0], [67.6, 7.0], [67.7, 7.0], [67.8, 7.0], [67.9, 7.0], [68.0, 7.0], [68.1, 7.0], [68.2, 7.0], [68.3, 7.0], [68.4, 7.0], [68.5, 7.0], [68.6, 7.0], [68.7, 7.0], [68.8, 7.0], [68.9, 7.0], [69.0, 7.0], [69.1, 7.0], [69.2, 7.0], [69.3, 7.0], [69.4, 7.0], [69.5, 7.0], [69.6, 7.0], [69.7, 7.0], [69.8, 7.0], [69.9, 7.0], [70.0, 7.0], [70.1, 8.0], [70.2, 8.0], [70.3, 8.0], [70.4, 8.0], [70.5, 8.0], [70.6, 8.0], [70.7, 8.0], [70.8, 8.0], [70.9, 8.0], [71.0, 8.0], [71.1, 8.0], [71.2, 8.0], [71.3, 8.0], [71.4, 8.0], [71.5, 8.0], [71.6, 8.0], [71.7, 8.0], [71.8, 8.0], [71.9, 8.0], [72.0, 8.0], [72.1, 8.0], [72.2, 8.0], [72.3, 8.0], [72.4, 8.0], [72.5, 8.0], [72.6, 8.0], [72.7, 8.0], [72.8, 8.0], [72.9, 8.0], [73.0, 8.0], [73.1, 8.0], [73.2, 8.0], [73.3, 8.0], [73.4, 8.0], [73.5, 8.0], [73.6, 8.0], [73.7, 8.0], [73.8, 8.0], [73.9, 8.0], [74.0, 8.0], [74.1, 8.0], [74.2, 8.0], [74.3, 8.0], [74.4, 8.0], [74.5, 8.0], [74.6, 8.0], [74.7, 8.0], [74.8, 8.0], [74.9, 8.0], [75.0, 8.0], [75.1, 8.0], [75.2, 8.0], [75.3, 8.0], [75.4, 8.0], [75.5, 8.0], [75.6, 8.0], [75.7, 8.0], [75.8, 8.0], [75.9, 8.0], [76.0, 8.0], [76.1, 8.0], [76.2, 8.0], [76.3, 8.0], [76.4, 8.0], [76.5, 8.0], [76.6, 8.0], [76.7, 8.0], [76.8, 8.0], [76.9, 8.0], [77.0, 8.0], [77.1, 8.0], [77.2, 8.0], [77.3, 8.0], [77.4, 8.0], [77.5, 8.0], [77.6, 8.0], [77.7, 8.0], [77.8, 8.0], [77.9, 8.0], [78.0, 8.0], [78.1, 8.0], [78.2, 8.0], [78.3, 8.0], [78.4, 8.0], [78.5, 8.0], [78.6, 8.0], [78.7, 8.0], [78.8, 8.0], [78.9, 8.0], [79.0, 8.0], [79.1, 8.0], [79.2, 8.0], [79.3, 8.0], [79.4, 8.0], [79.5, 8.0], [79.6, 8.0], [79.7, 8.0], [79.8, 8.0], [79.9, 8.0], [80.0, 8.0], [80.1, 8.0], [80.2, 8.0], [80.3, 9.0], [80.4, 9.0], [80.5, 9.0], [80.6, 9.0], [80.7, 9.0], [80.8, 9.0], [80.9, 9.0], [81.0, 9.0], [81.1, 9.0], [81.2, 9.0], [81.3, 9.0], [81.4, 9.0], [81.5, 9.0], [81.6, 9.0], [81.7, 9.0], [81.8, 9.0], [81.9, 9.0], [82.0, 9.0], [82.1, 9.0], [82.2, 9.0], [82.3, 9.0], [82.4, 9.0], [82.5, 9.0], [82.6, 9.0], [82.7, 9.0], [82.8, 9.0], [82.9, 9.0], [83.0, 9.0], [83.1, 9.0], [83.2, 9.0], [83.3, 9.0], [83.4, 9.0], [83.5, 9.0], [83.6, 9.0], [83.7, 9.0], [83.8, 9.0], [83.9, 9.0], [84.0, 9.0], [84.1, 9.0], [84.2, 9.0], [84.3, 9.0], [84.4, 9.0], [84.5, 9.0], [84.6, 9.0], [84.7, 9.0], [84.8, 9.0], [84.9, 9.0], [85.0, 9.0], [85.1, 9.0], [85.2, 9.0], [85.3, 9.0], [85.4, 9.0], [85.5, 9.0], [85.6, 9.0], [85.7, 9.0], [85.8, 9.0], [85.9, 9.0], [86.0, 9.0], [86.1, 9.0], [86.2, 9.0], [86.3, 9.0], [86.4, 9.0], [86.5, 9.0], [86.6, 9.0], [86.7, 9.0], [86.8, 9.0], [86.9, 9.0], [87.0, 9.0], [87.1, 9.0], [87.2, 9.0], [87.3, 9.0], [87.4, 9.0], [87.5, 9.0], [87.6, 9.0], [87.7, 9.0], [87.8, 9.0], [87.9, 9.0], [88.0, 9.0], [88.1, 9.0], [88.2, 9.0], [88.3, 9.0], [88.4, 9.0], [88.5, 9.0], [88.6, 9.0], [88.7, 9.0], [88.8, 9.0], [88.9, 9.0], [89.0, 9.0], [89.1, 9.0], [89.2, 9.0], [89.3, 9.0], [89.4, 9.0], [89.5, 9.0], [89.6, 9.0], [89.7, 9.0], [89.8, 9.0], [89.9, 9.0], [90.0, 9.0], [90.1, 9.0], [90.2, 10.0], [90.3, 10.0], [90.4, 10.0], [90.5, 10.0], [90.6, 10.0], [90.7, 10.0], [90.8, 10.0], [90.9, 10.0], [91.0, 10.0], [91.1, 10.0], [91.2, 10.0], [91.3, 10.0], [91.4, 10.0], [91.5, 10.0], [91.6, 10.0], [91.7, 10.0], [91.8, 10.0], [91.9, 10.0], [92.0, 10.0], [92.1, 10.0], [92.2, 10.0], [92.3, 10.0], [92.4, 10.0], [92.5, 10.0], [92.6, 10.0], [92.7, 10.0], [92.8, 10.0], [92.9, 10.0], [93.0, 10.0], [93.1, 10.0], [93.2, 10.0], [93.3, 10.0], [93.4, 10.0], [93.5, 10.0], [93.6, 10.0], [93.7, 10.0], [93.8, 10.0], [93.9, 10.0], [94.0, 10.0], [94.1, 10.0], [94.2, 10.0], [94.3, 10.0], [94.4, 10.0], [94.5, 10.0], [94.6, 10.0], [94.7, 10.0], [94.8, 10.0], [94.9, 10.0], [95.0, 10.0], [95.1, 10.0], [95.2, 10.0], [95.3, 10.0], [95.4, 10.0], [95.5, 10.0], [95.6, 10.0], [95.7, 10.0], [95.8, 10.0], [95.9, 10.0], [96.0, 10.0], [96.1, 10.0], [96.2, 10.0], [96.3, 10.0], [96.4, 10.0], [96.5, 10.0], [96.6, 10.0], [96.7, 10.0], [96.8, 10.0], [96.9, 10.0], [97.0, 10.0], [97.1, 10.0], [97.2, 10.0], [97.3, 10.0], [97.4, 10.0], [97.5, 10.0], [97.6, 10.0], [97.7, 10.0], [97.8, 10.0], [97.9, 10.0], [98.0, 10.0], [98.1, 10.0], [98.2, 10.0], [98.3, 10.0], [98.4, 10.0], [98.5, 10.0], [98.6, 10.0], [98.7, 10.0], [98.8, 10.0], [98.9, 10.0], [99.0, 10.0], [99.1, 10.0], [99.2, 10.0], [99.3, 10.0], [99.4, 10.0], [99.5, 10.0], [99.6, 10.0], [99.7, 10.0], [99.8, 10.0], [99.9, 10.0]], "isOverall": false, "label": "jp@gc - Dummy Sampler", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 80782.0, "minX": 0.0, "maxY": 80782.0, "series": [{"data": [[0.0, 80782.0]], "isOverall": false, "label": "jp@gc - Dummy Sampler", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4.9E-324, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 80782.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 80782.0, "series": [{"data": [[0.0, 80782.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 23.0, "minX": 1.70119523E12, "maxY": 100.0, "series": [{"data": [[1.701195258E12, 100.0], [1.701195254E12, 100.0], [1.701195256E12, 100.0], [1.701195262E12, 100.0], [1.701195264E12, 100.0], [1.70119526E12, 100.0], [1.701195289E12, 100.0], [1.701195246E12, 100.0], [1.701195248E12, 100.0], [1.701195244E12, 100.0], [1.701195287E12, 100.0], [1.701195252E12, 100.0], [1.70119525E12, 100.0], [1.701195236E12, 100.0], [1.701195279E12, 100.0], [1.701195275E12, 100.0], [1.701195277E12, 100.0], [1.701195234E12, 100.0], [1.701195283E12, 100.0], [1.701195285E12, 100.0], [1.701195242E12, 100.0], [1.701195281E12, 100.0], [1.701195238E12, 100.0], [1.70119524E12, 100.0], [1.701195267E12, 100.0], [1.701195269E12, 100.0], [1.701195265E12, 100.0], [1.701195273E12, 100.0], [1.70119523E12, 23.0], [1.701195232E12, 100.0], [1.701195271E12, 100.0], [1.701195257E12, 100.0], [1.701195255E12, 100.0], [1.701195263E12, 100.0], [1.701195259E12, 100.0], [1.701195261E12, 100.0], [1.701195247E12, 100.0], [1.70119529E12, 100.0], [1.701195243E12, 100.0], [1.701195286E12, 100.0], [1.701195245E12, 100.0], [1.701195288E12, 100.0], [1.701195251E12, 100.0], [1.701195253E12, 100.0], [1.701195249E12, 100.0], [1.701195235E12, 100.0], [1.701195278E12, 100.0], [1.701195237E12, 100.0], [1.70119528E12, 100.0], [1.701195233E12, 100.0], [1.701195276E12, 100.0], [1.701195241E12, 100.0], [1.701195284E12, 100.0], [1.701195239E12, 100.0], [1.701195282E12, 100.0], [1.701195268E12, 100.0], [1.701195266E12, 100.0], [1.701195231E12, 100.0], [1.701195274E12, 100.0], [1.70119527E12, 100.0], [1.701195272E12, 100.0]], "isOverall": false, "label": "jp@gc - Ultimate Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.70119529E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 5.0, "minX": 23.0, "maxY": 5.482724898181492, "series": [{"data": [[23.0, 5.0], [100.0, 5.482724898181492]], "isOverall": false, "label": "jp@gc - Dummy Sampler", "isController": false}, {"data": [[99.99904681736048, 5.482718922532323]], "isOverall": false, "label": "jp@gc - Dummy Sampler-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.70119523E12, "maxY": 336300.0, "series": [{"data": [[1.701195258E12, 169062.0], [1.701195254E12, 172254.0], [1.701195256E12, 171114.0], [1.701195262E12, 225720.0], [1.701195264E12, 221958.0], [1.70119526E12, 168150.0], [1.701195289E12, 32832.0], [1.701195246E12, 112290.0], [1.701195248E12, 112860.0], [1.701195244E12, 112746.0], [1.701195287E12, 100548.0], [1.701195252E12, 168150.0], [1.70119525E12, 112404.0], [1.701195236E12, 67374.0], [1.701195279E12, 206796.0], [1.701195275E12, 221502.0], [1.701195277E12, 219336.0], [1.701195234E12, 44460.0], [1.701195283E12, 181602.0], [1.701195285E12, 168150.0], [1.701195242E12, 110580.0], [1.701195281E12, 197904.0], [1.701195238E12, 91428.0], [1.70119524E12, 111036.0], [1.701195267E12, 225492.0], [1.701195269E12, 227430.0], [1.701195265E12, 225948.0], [1.701195273E12, 226860.0], [1.70119523E12, 114.0], [1.701195232E12, 21546.0], [1.701195271E12, 224352.0], [1.701195257E12, 171798.0], [1.701195255E12, 166782.0], [1.701195263E12, 224808.0], [1.701195259E12, 168834.0], [1.701195261E12, 224010.0], [1.701195247E12, 112290.0], [1.70119529E12, 114.0], [1.701195243E12, 111492.0], [1.701195286E12, 136914.0], [1.701195245E12, 112062.0], [1.701195288E12, 63612.0], [1.701195251E12, 169062.0], [1.701195253E12, 166098.0], [1.701195249E12, 110694.0], [1.701195235E12, 54150.0], [1.701195278E12, 213294.0], [1.701195237E12, 78204.0], [1.70119528E12, 198474.0], [1.701195233E12, 33174.0], [1.701195276E12, 336300.0], [1.701195241E12, 110922.0], [1.701195284E12, 173964.0], [1.701195239E12, 99180.0], [1.701195282E12, 187758.0], [1.701195268E12, 224010.0], [1.701195266E12, 221160.0], [1.701195231E12, 11400.0], [1.701195274E12, 226860.0], [1.70119527E12, 221958.0], [1.701195272E12, 227772.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.701195258E12, 0.0], [1.701195254E12, 0.0], [1.701195256E12, 0.0], [1.701195262E12, 0.0], [1.701195264E12, 0.0], [1.70119526E12, 0.0], [1.701195289E12, 0.0], [1.701195246E12, 0.0], [1.701195248E12, 0.0], [1.701195244E12, 0.0], [1.701195287E12, 0.0], [1.701195252E12, 0.0], [1.70119525E12, 0.0], [1.701195236E12, 0.0], [1.701195279E12, 0.0], [1.701195275E12, 0.0], [1.701195277E12, 0.0], [1.701195234E12, 0.0], [1.701195283E12, 0.0], [1.701195285E12, 0.0], [1.701195242E12, 0.0], [1.701195281E12, 0.0], [1.701195238E12, 0.0], [1.70119524E12, 0.0], [1.701195267E12, 0.0], [1.701195269E12, 0.0], [1.701195265E12, 0.0], [1.701195273E12, 0.0], [1.70119523E12, 0.0], [1.701195232E12, 0.0], [1.701195271E12, 0.0], [1.701195257E12, 0.0], [1.701195255E12, 0.0], [1.701195263E12, 0.0], [1.701195259E12, 0.0], [1.701195261E12, 0.0], [1.701195247E12, 0.0], [1.70119529E12, 0.0], [1.701195243E12, 0.0], [1.701195286E12, 0.0], [1.701195245E12, 0.0], [1.701195288E12, 0.0], [1.701195251E12, 0.0], [1.701195253E12, 0.0], [1.701195249E12, 0.0], [1.701195235E12, 0.0], [1.701195278E12, 0.0], [1.701195237E12, 0.0], [1.70119528E12, 0.0], [1.701195233E12, 0.0], [1.701195276E12, 0.0], [1.701195241E12, 0.0], [1.701195284E12, 0.0], [1.701195239E12, 0.0], [1.701195282E12, 0.0], [1.701195268E12, 0.0], [1.701195266E12, 0.0], [1.701195231E12, 0.0], [1.701195274E12, 0.0], [1.70119527E12, 0.0], [1.701195272E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.70119529E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 2.0, "minX": 1.70119523E12, "maxY": 5.81, "series": [{"data": [[1.701195258E12, 5.455158462575854], [1.701195254E12, 5.632031767041698], [1.701195256E12, 5.4590273151232624], [1.701195262E12, 5.359595959595959], [1.701195264E12, 5.483307652799173], [1.70119526E12, 5.488135593220342], [1.701195289E12, 5.4583333333333295], [1.701195246E12, 5.561421319796951], [1.701195248E12, 5.442424242424242], [1.701195244E12, 5.555106167846305], [1.701195287E12, 5.708616780045348], [1.701195252E12, 5.517288135593215], [1.70119525E12, 5.547667342799198], [1.701195236E12, 5.365482233502536], [1.701195279E12, 5.482359426681357], [1.701195275E12, 5.427174472465257], [1.701195277E12, 5.449064449064446], [1.701195234E12, 5.233333333333332], [1.701195283E12, 5.462649089767738], [1.701195285E12, 5.5193220338983116], [1.701195242E12, 5.446391752577323], [1.701195281E12, 5.523617511520738], [1.701195238E12, 5.638403990024933], [1.70119524E12, 5.334702258726896], [1.701195267E12, 5.416582406471184], [1.701195269E12, 5.500250626566415], [1.701195265E12, 5.450050454086775], [1.701195273E12, 5.495477386934673], [1.70119523E12, 5.0], [1.701195232E12, 5.174603174603178], [1.701195271E12, 5.396341463414637], [1.701195257E12, 5.470471134704722], [1.701195255E12, 5.459330143540678], [1.701195263E12, 5.493914807302227], [1.701195259E12, 5.4550979068197165], [1.701195261E12, 5.4941475826972], [1.701195247E12, 5.482233502538073], [1.70119529E12, 2.0], [1.701195243E12, 5.464212678936602], [1.701195286E12, 5.61365528726061], [1.701195245E12, 5.632756866734486], [1.701195288E12, 5.722222222222217], [1.701195251E12, 5.508428860418074], [1.701195253E12, 5.41523678792039], [1.701195249E12, 5.523171987641608], [1.701195235E12, 5.6000000000000005], [1.701195278E12, 5.53981827899519], [1.701195237E12, 5.569970845481049], [1.70119528E12, 5.619758759333715], [1.701195233E12, 5.364261168384882], [1.701195276E12, 5.441694915254243], [1.701195241E12, 5.472764645426514], [1.701195284E12, 5.511795543905629], [1.701195239E12, 5.69310344827586], [1.701195282E12, 5.392835458409221], [1.701195268E12, 5.420356234096688], [1.701195266E12, 5.406701030927828], [1.701195231E12, 5.81], [1.701195274E12, 5.28190954773868], [1.70119527E12, 5.589111453518236], [1.701195272E12, 5.5040040040039955]], "isOverall": false, "label": "jp@gc - Dummy Sampler", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.70119529E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.70119523E12, "maxY": 4.9E-324, "series": [{"data": [[1.701195258E12, 0.0], [1.701195254E12, 0.0], [1.701195256E12, 0.0], [1.701195262E12, 0.0], [1.701195264E12, 0.0], [1.70119526E12, 0.0], [1.701195289E12, 0.0], [1.701195246E12, 0.0], [1.701195248E12, 0.0], [1.701195244E12, 0.0], [1.701195287E12, 0.0], [1.701195252E12, 0.0], [1.70119525E12, 0.0], [1.701195236E12, 0.0], [1.701195279E12, 0.0], [1.701195275E12, 0.0], [1.701195277E12, 0.0], [1.701195234E12, 0.0], [1.701195283E12, 0.0], [1.701195285E12, 0.0], [1.701195242E12, 0.0], [1.701195281E12, 0.0], [1.701195238E12, 0.0], [1.70119524E12, 0.0], [1.701195267E12, 0.0], [1.701195269E12, 0.0], [1.701195265E12, 0.0], [1.701195273E12, 0.0], [1.70119523E12, 0.0], [1.701195232E12, 0.0], [1.701195271E12, 0.0], [1.701195257E12, 0.0], [1.701195255E12, 0.0], [1.701195263E12, 0.0], [1.701195259E12, 0.0], [1.701195261E12, 0.0], [1.701195247E12, 0.0], [1.70119529E12, 0.0], [1.701195243E12, 0.0], [1.701195286E12, 0.0], [1.701195245E12, 0.0], [1.701195288E12, 0.0], [1.701195251E12, 0.0], [1.701195253E12, 0.0], [1.701195249E12, 0.0], [1.701195235E12, 0.0], [1.701195278E12, 0.0], [1.701195237E12, 0.0], [1.70119528E12, 0.0], [1.701195233E12, 0.0], [1.701195276E12, 0.0], [1.701195241E12, 0.0], [1.701195284E12, 0.0], [1.701195239E12, 0.0], [1.701195282E12, 0.0], [1.701195268E12, 0.0], [1.701195266E12, 0.0], [1.701195231E12, 0.0], [1.701195274E12, 0.0], [1.70119527E12, 0.0], [1.701195272E12, 0.0]], "isOverall": false, "label": "jp@gc - Dummy Sampler", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.70119529E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.70119523E12, "maxY": 4.9E-324, "series": [{"data": [[1.701195258E12, 0.0], [1.701195254E12, 0.0], [1.701195256E12, 0.0], [1.701195262E12, 0.0], [1.701195264E12, 0.0], [1.70119526E12, 0.0], [1.701195289E12, 0.0], [1.701195246E12, 0.0], [1.701195248E12, 0.0], [1.701195244E12, 0.0], [1.701195287E12, 0.0], [1.701195252E12, 0.0], [1.70119525E12, 0.0], [1.701195236E12, 0.0], [1.701195279E12, 0.0], [1.701195275E12, 0.0], [1.701195277E12, 0.0], [1.701195234E12, 0.0], [1.701195283E12, 0.0], [1.701195285E12, 0.0], [1.701195242E12, 0.0], [1.701195281E12, 0.0], [1.701195238E12, 0.0], [1.70119524E12, 0.0], [1.701195267E12, 0.0], [1.701195269E12, 0.0], [1.701195265E12, 0.0], [1.701195273E12, 0.0], [1.70119523E12, 0.0], [1.701195232E12, 0.0], [1.701195271E12, 0.0], [1.701195257E12, 0.0], [1.701195255E12, 0.0], [1.701195263E12, 0.0], [1.701195259E12, 0.0], [1.701195261E12, 0.0], [1.701195247E12, 0.0], [1.70119529E12, 0.0], [1.701195243E12, 0.0], [1.701195286E12, 0.0], [1.701195245E12, 0.0], [1.701195288E12, 0.0], [1.701195251E12, 0.0], [1.701195253E12, 0.0], [1.701195249E12, 0.0], [1.701195235E12, 0.0], [1.701195278E12, 0.0], [1.701195237E12, 0.0], [1.70119528E12, 0.0], [1.701195233E12, 0.0], [1.701195276E12, 0.0], [1.701195241E12, 0.0], [1.701195284E12, 0.0], [1.701195239E12, 0.0], [1.701195282E12, 0.0], [1.701195268E12, 0.0], [1.701195266E12, 0.0], [1.701195231E12, 0.0], [1.701195274E12, 0.0], [1.70119527E12, 0.0], [1.701195272E12, 0.0]], "isOverall": false, "label": "jp@gc - Dummy Sampler", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.70119529E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.70119523E12, "maxY": 10.0, "series": [{"data": [[1.701195258E12, 10.0], [1.701195254E12, 10.0], [1.701195256E12, 10.0], [1.701195262E12, 10.0], [1.701195264E12, 10.0], [1.70119526E12, 10.0], [1.701195289E12, 10.0], [1.701195246E12, 10.0], [1.701195248E12, 10.0], [1.701195244E12, 10.0], [1.701195287E12, 10.0], [1.701195252E12, 10.0], [1.70119525E12, 10.0], [1.701195236E12, 10.0], [1.701195279E12, 10.0], [1.701195275E12, 10.0], [1.701195277E12, 10.0], [1.701195234E12, 10.0], [1.701195283E12, 10.0], [1.701195285E12, 10.0], [1.701195242E12, 10.0], [1.701195281E12, 10.0], [1.701195238E12, 10.0], [1.70119524E12, 10.0], [1.701195267E12, 10.0], [1.701195269E12, 10.0], [1.701195265E12, 10.0], [1.701195273E12, 10.0], [1.70119523E12, 5.0], [1.701195232E12, 10.0], [1.701195271E12, 10.0], [1.701195257E12, 10.0], [1.701195255E12, 10.0], [1.701195263E12, 10.0], [1.701195259E12, 10.0], [1.701195261E12, 10.0], [1.701195247E12, 10.0], [1.70119529E12, 2.0], [1.701195243E12, 10.0], [1.701195286E12, 10.0], [1.701195245E12, 10.0], [1.701195288E12, 10.0], [1.701195251E12, 10.0], [1.701195253E12, 10.0], [1.701195249E12, 10.0], [1.701195235E12, 10.0], [1.701195278E12, 10.0], [1.701195237E12, 10.0], [1.70119528E12, 10.0], [1.701195233E12, 10.0], [1.701195276E12, 10.0], [1.701195241E12, 10.0], [1.701195284E12, 10.0], [1.701195239E12, 10.0], [1.701195282E12, 10.0], [1.701195268E12, 10.0], [1.701195266E12, 10.0], [1.701195231E12, 10.0], [1.701195274E12, 10.0], [1.70119527E12, 10.0], [1.701195272E12, 10.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.701195258E12, 1.0], [1.701195254E12, 1.0], [1.701195256E12, 1.0], [1.701195262E12, 1.0], [1.701195264E12, 1.0], [1.70119526E12, 1.0], [1.701195289E12, 1.0], [1.701195246E12, 1.0], [1.701195248E12, 1.0], [1.701195244E12, 1.0], [1.701195287E12, 1.0], [1.701195252E12, 1.0], [1.70119525E12, 1.0], [1.701195236E12, 1.0], [1.701195279E12, 1.0], [1.701195275E12, 1.0], [1.701195277E12, 1.0], [1.701195234E12, 1.0], [1.701195283E12, 1.0], [1.701195285E12, 1.0], [1.701195242E12, 1.0], [1.701195281E12, 1.0], [1.701195238E12, 1.0], [1.70119524E12, 1.0], [1.701195267E12, 1.0], [1.701195269E12, 1.0], [1.701195265E12, 1.0], [1.701195273E12, 1.0], [1.70119523E12, 5.0], [1.701195232E12, 1.0], [1.701195271E12, 1.0], [1.701195257E12, 1.0], [1.701195255E12, 1.0], [1.701195263E12, 1.0], [1.701195259E12, 1.0], [1.701195261E12, 1.0], [1.701195247E12, 1.0], [1.70119529E12, 2.0], [1.701195243E12, 1.0], [1.701195286E12, 1.0], [1.701195245E12, 1.0], [1.701195288E12, 1.0], [1.701195251E12, 1.0], [1.701195253E12, 1.0], [1.701195249E12, 1.0], [1.701195235E12, 1.0], [1.701195278E12, 1.0], [1.701195237E12, 1.0], [1.70119528E12, 1.0], [1.701195233E12, 1.0], [1.701195276E12, 1.0], [1.701195241E12, 1.0], [1.701195284E12, 1.0], [1.701195239E12, 1.0], [1.701195282E12, 1.0], [1.701195268E12, 1.0], [1.701195266E12, 1.0], [1.701195231E12, 1.0], [1.701195274E12, 1.0], [1.70119527E12, 1.0], [1.701195272E12, 1.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.701195258E12, 10.0], [1.701195254E12, 9.0], [1.701195256E12, 9.0], [1.701195262E12, 9.0], [1.701195264E12, 9.0], [1.70119526E12, 10.0], [1.701195289E12, 10.0], [1.701195246E12, 10.0], [1.701195248E12, 9.0], [1.701195244E12, 10.0], [1.701195287E12, 10.0], [1.701195252E12, 9.0], [1.70119525E12, 9.0], [1.701195236E12, 10.0], [1.701195279E12, 10.0], [1.701195275E12, 10.0], [1.701195277E12, 9.0], [1.701195234E12, 9.0], [1.701195283E12, 9.0], [1.701195285E12, 10.0], [1.701195242E12, 9.0], [1.701195281E12, 9.0], [1.701195238E12, 10.0], [1.70119524E12, 9.0], [1.701195267E12, 9.0], [1.701195269E12, 9.0], [1.701195265E12, 9.0], [1.701195273E12, 9.0], [1.70119523E12, 5.0], [1.701195232E12, 9.0], [1.701195271E12, 9.0], [1.701195257E12, 9.0], [1.701195255E12, 9.0], [1.701195263E12, 9.0], [1.701195259E12, 9.0], [1.701195261E12, 9.0], [1.701195247E12, 9.0], [1.70119529E12, 2.0], [1.701195243E12, 10.0], [1.701195286E12, 10.0], [1.701195245E12, 10.0], [1.701195288E12, 9.0], [1.701195251E12, 9.0], [1.701195253E12, 9.0], [1.701195249E12, 10.0], [1.701195235E12, 10.0], [1.701195278E12, 9.0], [1.701195237E12, 9.0], [1.70119528E12, 10.0], [1.701195233E12, 10.0], [1.701195276E12, 9.0], [1.701195241E12, 10.0], [1.701195284E12, 10.0], [1.701195239E12, 10.0], [1.701195282E12, 10.0], [1.701195268E12, 9.0], [1.701195266E12, 9.0], [1.701195231E12, 10.0], [1.701195274E12, 9.0], [1.70119527E12, 10.0], [1.701195272E12, 10.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.701195258E12, 10.0], [1.701195254E12, 10.0], [1.701195256E12, 10.0], [1.701195262E12, 10.0], [1.701195264E12, 10.0], [1.70119526E12, 10.0], [1.701195289E12, 10.0], [1.701195246E12, 10.0], [1.701195248E12, 10.0], [1.701195244E12, 10.0], [1.701195287E12, 10.0], [1.701195252E12, 10.0], [1.70119525E12, 10.0], [1.701195236E12, 10.0], [1.701195279E12, 10.0], [1.701195275E12, 10.0], [1.701195277E12, 10.0], [1.701195234E12, 10.0], [1.701195283E12, 10.0], [1.701195285E12, 10.0], [1.701195242E12, 10.0], [1.701195281E12, 10.0], [1.701195238E12, 10.0], [1.70119524E12, 10.0], [1.701195267E12, 10.0], [1.701195269E12, 10.0], [1.701195265E12, 10.0], [1.701195273E12, 10.0], [1.70119523E12, 5.0], [1.701195232E12, 10.0], [1.701195271E12, 10.0], [1.701195257E12, 10.0], [1.701195255E12, 10.0], [1.701195263E12, 10.0], [1.701195259E12, 10.0], [1.701195261E12, 10.0], [1.701195247E12, 10.0], [1.70119529E12, 2.0], [1.701195243E12, 10.0], [1.701195286E12, 10.0], [1.701195245E12, 10.0], [1.701195288E12, 10.0], [1.701195251E12, 10.0], [1.701195253E12, 10.0], [1.701195249E12, 10.0], [1.701195235E12, 10.0], [1.701195278E12, 10.0], [1.701195237E12, 10.0], [1.70119528E12, 10.0], [1.701195233E12, 10.0], [1.701195276E12, 10.0], [1.701195241E12, 10.0], [1.701195284E12, 10.0], [1.701195239E12, 10.0], [1.701195282E12, 10.0], [1.701195268E12, 10.0], [1.701195266E12, 10.0], [1.701195231E12, 10.0], [1.701195274E12, 10.0], [1.70119527E12, 10.0], [1.701195272E12, 10.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.701195258E12, 5.0], [1.701195254E12, 6.0], [1.701195256E12, 5.0], [1.701195262E12, 5.0], [1.701195264E12, 5.0], [1.70119526E12, 6.0], [1.701195289E12, 6.0], [1.701195246E12, 6.0], [1.701195248E12, 5.0], [1.701195244E12, 6.0], [1.701195287E12, 6.0], [1.701195252E12, 6.0], [1.70119525E12, 6.0], [1.701195236E12, 5.0], [1.701195279E12, 5.0], [1.701195275E12, 5.0], [1.701195277E12, 5.0], [1.701195234E12, 5.0], [1.701195283E12, 5.0], [1.701195285E12, 5.0], [1.701195242E12, 5.0], [1.701195281E12, 5.0], [1.701195238E12, 6.0], [1.70119524E12, 5.0], [1.701195267E12, 5.0], [1.701195269E12, 6.0], [1.701195265E12, 5.0], [1.701195273E12, 6.0], [1.70119523E12, 5.0], [1.701195232E12, 5.0], [1.701195271E12, 5.0], [1.701195257E12, 5.0], [1.701195255E12, 6.0], [1.701195263E12, 5.0], [1.701195259E12, 6.0], [1.701195261E12, 6.0], [1.701195247E12, 5.0], [1.70119529E12, 2.0], [1.701195243E12, 5.0], [1.701195286E12, 6.0], [1.701195245E12, 6.0], [1.701195288E12, 6.0], [1.701195251E12, 6.0], [1.701195253E12, 5.0], [1.701195249E12, 6.0], [1.701195235E12, 6.0], [1.701195278E12, 6.0], [1.701195237E12, 6.0], [1.70119528E12, 6.0], [1.701195233E12, 5.0], [1.701195276E12, 5.0], [1.701195241E12, 5.0], [1.701195284E12, 6.0], [1.701195239E12, 6.0], [1.701195282E12, 5.0], [1.701195268E12, 5.0], [1.701195266E12, 6.0], [1.701195231E12, 6.0], [1.701195274E12, 5.0], [1.70119527E12, 6.0], [1.701195272E12, 5.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.701195258E12, 10.0], [1.701195254E12, 10.0], [1.701195256E12, 10.0], [1.701195262E12, 10.0], [1.701195264E12, 10.0], [1.70119526E12, 10.0], [1.701195289E12, 10.0], [1.701195246E12, 10.0], [1.701195248E12, 10.0], [1.701195244E12, 10.0], [1.701195287E12, 10.0], [1.701195252E12, 10.0], [1.70119525E12, 10.0], [1.701195236E12, 10.0], [1.701195279E12, 10.0], [1.701195275E12, 10.0], [1.701195277E12, 10.0], [1.701195234E12, 10.0], [1.701195283E12, 10.0], [1.701195285E12, 10.0], [1.701195242E12, 10.0], [1.701195281E12, 10.0], [1.701195238E12, 10.0], [1.70119524E12, 10.0], [1.701195267E12, 10.0], [1.701195269E12, 10.0], [1.701195265E12, 10.0], [1.701195273E12, 10.0], [1.70119523E12, 5.0], [1.701195232E12, 10.0], [1.701195271E12, 10.0], [1.701195257E12, 10.0], [1.701195255E12, 10.0], [1.701195263E12, 10.0], [1.701195259E12, 10.0], [1.701195261E12, 10.0], [1.701195247E12, 10.0], [1.70119529E12, 2.0], [1.701195243E12, 10.0], [1.701195286E12, 10.0], [1.701195245E12, 10.0], [1.701195288E12, 10.0], [1.701195251E12, 10.0], [1.701195253E12, 10.0], [1.701195249E12, 10.0], [1.701195235E12, 10.0], [1.701195278E12, 10.0], [1.701195237E12, 10.0], [1.70119528E12, 10.0], [1.701195233E12, 10.0], [1.701195276E12, 10.0], [1.701195241E12, 10.0], [1.701195284E12, 10.0], [1.701195239E12, 10.0], [1.701195282E12, 10.0], [1.701195268E12, 10.0], [1.701195266E12, 10.0], [1.701195231E12, 10.0], [1.701195274E12, 10.0], [1.70119527E12, 10.0], [1.701195272E12, 10.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.70119529E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 3.5, "minX": 1.0, "maxY": 6.0, "series": [{"data": [[558.0, 6.0], [591.0, 5.0], [686.0, 6.0], [802.0, 6.0], [870.0, 6.0], [882.0, 6.0], [973.0, 5.0], [974.0, 5.0], [970.0, 5.0], [978.0, 5.0], [989.0, 6.0], [983.0, 6.0], [985.0, 6.0], [990.0, 5.0], [971.0, 6.0], [986.0, 6.0], [1201.0, 6.0], [1457.0, 5.0], [1463.0, 6.0], [1483.0, 5.0], [1475.0, 6.0], [1511.0, 6.0], [1501.0, 5.0], [1507.0, 5.0], [1481.0, 6.0], [1526.0, 6.0], [1593.0, 5.0], [1647.0, 5.0], [1741.0, 6.0], [1736.0, 5.0], [1814.0, 5.0], [1871.0, 6.0], [1972.0, 5.0], [1980.0, 5.0], [1965.0, 5.0], [1947.0, 6.0], [1982.0, 5.0], [1940.0, 6.0], [1978.0, 5.0], [1968.0, 5.0], [1924.0, 5.0], [1943.0, 5.0], [1995.0, 6.0], [1998.0, 5.0], [1990.0, 5.0], [2950.0, 5.0], [100.0, 6.0], [189.0, 5.0], [1.0, 3.5], [291.0, 5.0], [288.0, 6.0], [390.0, 5.0], [475.0, 6.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2950.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 4.9E-324, "series": [{"data": [[558.0, 0.0], [591.0, 0.0], [686.0, 0.0], [802.0, 0.0], [870.0, 0.0], [882.0, 0.0], [973.0, 0.0], [974.0, 0.0], [970.0, 0.0], [978.0, 0.0], [989.0, 0.0], [983.0, 0.0], [985.0, 0.0], [990.0, 0.0], [971.0, 0.0], [986.0, 0.0], [1201.0, 0.0], [1457.0, 0.0], [1463.0, 0.0], [1483.0, 0.0], [1475.0, 0.0], [1511.0, 0.0], [1501.0, 0.0], [1507.0, 0.0], [1481.0, 0.0], [1526.0, 0.0], [1593.0, 0.0], [1647.0, 0.0], [1741.0, 0.0], [1736.0, 0.0], [1814.0, 0.0], [1871.0, 0.0], [1972.0, 0.0], [1980.0, 0.0], [1965.0, 0.0], [1947.0, 0.0], [1982.0, 0.0], [1940.0, 0.0], [1978.0, 0.0], [1968.0, 0.0], [1924.0, 0.0], [1943.0, 0.0], [1995.0, 0.0], [1998.0, 0.0], [1990.0, 0.0], [2950.0, 0.0], [100.0, 0.0], [189.0, 0.0], [1.0, 0.0], [291.0, 0.0], [288.0, 0.0], [390.0, 0.0], [475.0, 0.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2950.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.70119523E12, "maxY": 2950.0, "series": [{"data": [[1.701195258E12, 1490.0], [1.701195254E12, 1469.0], [1.701195256E12, 1498.0], [1.701195262E12, 1985.0], [1.701195264E12, 1947.0], [1.70119526E12, 1475.0], [1.701195289E12, 288.0], [1.701195246E12, 985.0], [1.701195248E12, 990.0], [1.701195244E12, 989.0], [1.701195287E12, 882.0], [1.701195252E12, 1475.0], [1.70119525E12, 986.0], [1.701195236E12, 591.0], [1.701195279E12, 1814.0], [1.701195275E12, 1943.0], [1.701195277E12, 1924.0], [1.701195234E12, 390.0], [1.701195283E12, 1597.0], [1.701195285E12, 1493.0], [1.701195242E12, 970.0], [1.701195281E12, 1705.0], [1.701195238E12, 790.0], [1.70119524E12, 974.0], [1.701195267E12, 1972.0], [1.701195269E12, 1961.0], [1.701195265E12, 1985.0], [1.701195273E12, 1993.0], [1.70119523E12, 1.0], [1.701195232E12, 189.0], [1.701195271E12, 1989.0], [1.701195257E12, 1474.0], [1.701195255E12, 1499.0], [1.701195263E12, 1967.0], [1.701195259E12, 1474.0], [1.701195261E12, 1965.0], [1.701195247E12, 985.0], [1.70119529E12, 1.0], [1.701195243E12, 978.0], [1.701195286E12, 1183.0], [1.701195245E12, 983.0], [1.701195288E12, 558.0], [1.701195251E12, 1483.0], [1.701195253E12, 1499.0], [1.701195249E12, 971.0], [1.701195235E12, 475.0], [1.701195278E12, 1871.0], [1.701195237E12, 698.0], [1.70119528E12, 1777.0], [1.701195233E12, 291.0], [1.701195276E12, 2950.0], [1.701195241E12, 973.0], [1.701195284E12, 1522.0], [1.701195239E12, 870.0], [1.701195282E12, 1642.0], [1.701195268E12, 1999.0], [1.701195266E12, 1943.0], [1.701195231E12, 100.0], [1.701195274E12, 1979.0], [1.70119527E12, 1947.0], [1.701195272E12, 1985.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.70119529E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.70119523E12, "maxY": 2950.0, "series": [{"data": [[1.701195258E12, 1483.0], [1.701195254E12, 1511.0], [1.701195256E12, 1501.0], [1.701195262E12, 1980.0], [1.701195264E12, 1947.0], [1.70119526E12, 1475.0], [1.701195289E12, 288.0], [1.701195246E12, 985.0], [1.701195248E12, 990.0], [1.701195244E12, 989.0], [1.701195287E12, 882.0], [1.701195252E12, 1475.0], [1.70119525E12, 986.0], [1.701195236E12, 591.0], [1.701195279E12, 1814.0], [1.701195275E12, 1943.0], [1.701195277E12, 1924.0], [1.701195234E12, 390.0], [1.701195283E12, 1593.0], [1.701195285E12, 1475.0], [1.701195242E12, 970.0], [1.701195281E12, 1736.0], [1.701195238E12, 802.0], [1.70119524E12, 974.0], [1.701195267E12, 1978.0], [1.701195269E12, 1995.0], [1.701195265E12, 1982.0], [1.701195273E12, 1990.0], [1.70119523E12, 1.0], [1.701195232E12, 189.0], [1.701195271E12, 1968.0], [1.701195257E12, 1507.0], [1.701195255E12, 1463.0], [1.701195263E12, 1972.0], [1.701195259E12, 1481.0], [1.701195261E12, 1965.0], [1.701195247E12, 985.0], [1.70119529E12, 1.0], [1.701195243E12, 978.0], [1.701195286E12, 1201.0], [1.701195245E12, 983.0], [1.701195288E12, 558.0], [1.701195251E12, 1483.0], [1.701195253E12, 1457.0], [1.701195249E12, 971.0], [1.701195235E12, 475.0], [1.701195278E12, 1871.0], [1.701195237E12, 686.0], [1.70119528E12, 1741.0], [1.701195233E12, 291.0], [1.701195276E12, 2950.0], [1.701195241E12, 973.0], [1.701195284E12, 1526.0], [1.701195239E12, 870.0], [1.701195282E12, 1647.0], [1.701195268E12, 1965.0], [1.701195266E12, 1940.0], [1.701195231E12, 100.0], [1.701195274E12, 1990.0], [1.70119527E12, 1947.0], [1.701195272E12, 1998.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.70119529E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.70119523E12, "maxY": 2950.0, "series": [{"data": [[1.701195258E12, 1483.0], [1.701195254E12, 1511.0], [1.701195256E12, 1501.0], [1.701195262E12, 1980.0], [1.701195264E12, 1947.0], [1.70119526E12, 1475.0], [1.701195289E12, 288.0], [1.701195246E12, 985.0], [1.701195248E12, 990.0], [1.701195244E12, 989.0], [1.701195287E12, 882.0], [1.701195252E12, 1475.0], [1.70119525E12, 986.0], [1.701195236E12, 591.0], [1.701195279E12, 1814.0], [1.701195275E12, 1943.0], [1.701195277E12, 1924.0], [1.701195234E12, 390.0], [1.701195283E12, 1593.0], [1.701195285E12, 1475.0], [1.701195242E12, 970.0], [1.701195281E12, 1736.0], [1.701195238E12, 802.0], [1.70119524E12, 974.0], [1.701195267E12, 1978.0], [1.701195269E12, 1995.0], [1.701195265E12, 1982.0], [1.701195273E12, 1990.0], [1.70119523E12, 1.0], [1.701195232E12, 189.0], [1.701195271E12, 1968.0], [1.701195257E12, 1507.0], [1.701195255E12, 1463.0], [1.701195263E12, 1972.0], [1.701195259E12, 1481.0], [1.701195261E12, 1965.0], [1.701195247E12, 985.0], [1.70119529E12, 1.0], [1.701195243E12, 978.0], [1.701195286E12, 1201.0], [1.701195245E12, 983.0], [1.701195288E12, 558.0], [1.701195251E12, 1483.0], [1.701195253E12, 1457.0], [1.701195249E12, 971.0], [1.701195235E12, 475.0], [1.701195278E12, 1871.0], [1.701195237E12, 686.0], [1.70119528E12, 1741.0], [1.701195233E12, 291.0], [1.701195276E12, 2950.0], [1.701195241E12, 973.0], [1.701195284E12, 1526.0], [1.701195239E12, 870.0], [1.701195282E12, 1647.0], [1.701195268E12, 1965.0], [1.701195266E12, 1940.0], [1.701195231E12, 100.0], [1.701195274E12, 1990.0], [1.70119527E12, 1947.0], [1.701195272E12, 1998.0]], "isOverall": false, "label": "jp@gc - Dummy Sampler-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.70119529E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.70119523E12, "maxY": 2950.0, "series": [{"data": [[1.701195258E12, 1483.0], [1.701195254E12, 1511.0], [1.701195256E12, 1501.0], [1.701195262E12, 1980.0], [1.701195264E12, 1947.0], [1.70119526E12, 1475.0], [1.701195289E12, 288.0], [1.701195246E12, 985.0], [1.701195248E12, 990.0], [1.701195244E12, 989.0], [1.701195287E12, 882.0], [1.701195252E12, 1475.0], [1.70119525E12, 986.0], [1.701195236E12, 591.0], [1.701195279E12, 1814.0], [1.701195275E12, 1943.0], [1.701195277E12, 1924.0], [1.701195234E12, 390.0], [1.701195283E12, 1593.0], [1.701195285E12, 1475.0], [1.701195242E12, 970.0], [1.701195281E12, 1736.0], [1.701195238E12, 802.0], [1.70119524E12, 974.0], [1.701195267E12, 1978.0], [1.701195269E12, 1995.0], [1.701195265E12, 1982.0], [1.701195273E12, 1990.0], [1.70119523E12, 1.0], [1.701195232E12, 189.0], [1.701195271E12, 1968.0], [1.701195257E12, 1507.0], [1.701195255E12, 1463.0], [1.701195263E12, 1972.0], [1.701195259E12, 1481.0], [1.701195261E12, 1965.0], [1.701195247E12, 985.0], [1.70119529E12, 1.0], [1.701195243E12, 978.0], [1.701195286E12, 1201.0], [1.701195245E12, 983.0], [1.701195288E12, 558.0], [1.701195251E12, 1483.0], [1.701195253E12, 1457.0], [1.701195249E12, 971.0], [1.701195235E12, 475.0], [1.701195278E12, 1871.0], [1.701195237E12, 686.0], [1.70119528E12, 1741.0], [1.701195233E12, 291.0], [1.701195276E12, 2950.0], [1.701195241E12, 973.0], [1.701195284E12, 1526.0], [1.701195239E12, 870.0], [1.701195282E12, 1647.0], [1.701195268E12, 1965.0], [1.701195266E12, 1940.0], [1.701195231E12, 100.0], [1.701195274E12, 1990.0], [1.70119527E12, 1947.0], [1.701195272E12, 1998.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.70119529E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

