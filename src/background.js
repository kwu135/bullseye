// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.tabs.onActivated.addListener(function(activeInfo) {
    chrome.tabs.get(activeInfo.tabId, function (tab) {
        onUrlUpdate(tab.url);
    });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, updatedTab) {
    chrome.tabs.query({'active': true}, function (activeTabs) {
        var activeTab = activeTabs[0];

        if (JSON.stringify(activeTab) == JSON.stringify(updatedTab)) {
            onUrlUpdate(activeTab.url);
        }
    });
});

function onUrlUpdate(url) {
  console.log("Bullseye " + url);

  
}