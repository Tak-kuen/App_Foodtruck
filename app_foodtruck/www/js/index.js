/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
        //FCM 알림 받았는지 아닌지
        FCMPlugin.onNotification(function (data) {
            if (data.wasUpdated) {
                //alert(data);
            } else {
                //alert(JSON.stringify(data));
                alert(data.body);
            }
        }, function (msg) {
            console.log("onNotification callback successfully registered: " + msg);
        }, function (err) {
            console.log("Error registering onNotification callback :  " + err);
        });
        FCMPlugin.subscribeToTopic('all');
        //window.plugins.sim.getSimInfo(successCallback, errorCallback);
        function successCallback(result) {
            //alert(JSON.stringify(result));
            telephone = result.phoneNumber;
            if (result.mnc == "05") {
                telephone = telephone.substr(3);
            } else if (result.mnc == "08") {
                telephone = telephone.substr(5);
            }
            localStorage['phoneNumber'] = telephone;
            FCMPlugin.subscribeToTopic('phone_number-' + telephone);
            //alert(telephone);
        }
        function errorCallback(err) {
            alert("실패");
            FCMPlugin.subscribeToTopic('for_presentation');
            alert(err);
        }
        hasReadPermission();
        requestReadPermission();
        function hasReadPermission() {
            window.plugins.sim.hasReadPermission(function (data) {
                //alert("권한 갖고있음?");
            }, errorCallback);

        }
        // request permission
        function requestReadPermission() {
            window.plugins.sim.requestReadPermission(function (result) {
                //alert("권한 요청");
            }, errorCallback);
            window.plugins.sim.getSimInfo(successCallback, errorCallback);
        }
        StatusBar.overlaysWebView(true);
        StatusBar.styleDefault();
        StatusBar.show();
        window.addEventListener('statusTap', function () {
            // scroll-up with document.body.scrollTop = 0; or do whatever you want
            document.body.scrollTop = 0;
        });
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        console.log('Received Event: ' + id);
    }
};

app.initialize();