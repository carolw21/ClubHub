/*
 * JS for Notifications generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return '96bf557e-32e1-4d20-ac3a-5655fb026817';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "Club",
    "location": "Club.html"
}, {
    "name": "GitHub_Img",
    "location": "GitHub_Img.html"
}, {
    "name": "GitHub_File",
    "location": "GitHub_File.html"
}, {
    "name": "ExamplePage1426375367500",
    "location": "ExamplePage1426375367500.html"
}, {
    "name": "GitHub_Gist",
    "location": "GitHub_Gist.html"
}, {
    "name": "me",
    "location": "me.html"
}, {
    "name": "GitHub_Repo",
    "location": "GitHub_Repo.html"
}, {
    "name": "Notify",
    "location": "Notify.html"
}, {
    "name": "signIn",
    "location": "signIn.html"
}, {
    "name": "Calendar",
    "location": "Calendar.html"
}, {
    "name": "signUp",
    "location": "signUp.html"
}, {
    "name": "MaterialDesignPage",
    "location": "MaterialDesignPage.html"
}, {
    "name": "Notifications",
    "location": "Notifications.html"
}, {
    "name": "ExamplePage",
    "location": "ExamplePage.html"
}, {
    "name": "startScreen",
    "location": "startScreen.html"
}, {
    "name": "GitHub_Git",
    "location": "GitHub_Git.html"
}, {
    "name": "Facebook_Me",
    "location": "Facebook_Me.html"
}, {
    "name": "GitHub_Search",
    "location": "GitHub_Search.html"
}, {
    "name": "Facebook_Login",
    "location": "Facebook_Login.html"
}, {
    "name": "yourEvents",
    "location": "yourEvents.html"
}];

function Notifications_js() {
    
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'logout': 'Notifications_logout',
        'showclubsbutton': 'Notifications_showclubsbutton',
        'update': 'Notifications_update',
        'mobilenavbar_6': 'Notifications_mobilenavbar_6',
        'metab': 'Notifications_metab',
        'notify': 'Notifications_notify',
        'calendar': 'Notifications_calendar',
        'clubslist': 'Notifications_clubslist',
        'ClubListItem': 'Notifications_ClubListItem',
        'mobilelistitembutton_17': 'Notifications_mobilelistitembutton_17',
        'ClubName': 'Notifications_ClubName'
    };
    
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    
    /*
     * Nonvisual components
     */
    
    Apperyio.mappings = Apperyio.mappings || {};
    
    Apperyio.mappings["Notifications_logoutservice_onbeforesend_mapping_0"] = {
        "homeScreen": "Notifications",
        "directions": [
            
            {
                "from_name": "userSessionToken",
                "from_type": "SESSION_STORAGE",
                
                "to_name": "logoutservice",
                "to_type": "SERVICE_REQUEST",
                
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}"
                    },
                    "parameters": {},
                    "body": null
                },
                
                "mappings": [
                    
                    {
                        
                        "source": "$",
                        "target": "$['headers']['X-Appery-Session-Token']"
                        
                    }
                    
                ]
            }
            
        ]
    };
    
    Apperyio.mappings["Notifications_logoutservice_onsuccess_mapping_0"] = {
        "homeScreen": "Notifications",
        "directions": []
    };
    
    Apperyio.mappings["Notifications_getmessages_onsuccess_mapping_0"] = {
        "homeScreen": "Notifications",
        "directions": [
            
            {
                "from_name": "getmessages",
                "from_type": "SERVICE_RESPONSE",
                
                "to_name": "messages",
                "to_type": "SESSION_STORAGE",
                
                "mappings": [
                    
                    {
                        
                        "source": "$['body'][0]['Messages']",
                        "target": "$"
                        
                    }
                    
                ]
            },
            
            {
                "from_name": "getmessages",
                "from_type": "SERVICE_RESPONSE",
                
                "to_name": "headers",
                "to_type": "SESSION_STORAGE",
                
                "mappings": [
                    
                    {
                        
                        "source": "$['body'][0]['Headers']",
                        "target": "$"
                        
                    }
                    
                ]
            },
            
            {
                "from_name": "getmessages",
                "from_type": "SERVICE_RESPONSE",
                
                "to_name": "dates",
                "to_type": "SESSION_STORAGE",
                
                "mappings": [
                    
                    {
                        
                        "source": "$['body'][0]['Dates']",
                        "target": "$"
                        
                    }
                    
                ]
            }
            
        ]
    };
    
    Apperyio.mappings["Notifications_getmessages_onbeforesend_mapping_0"] = {
        "homeScreen": "Notifications",
        "directions": [
            
            {
                "from_name": "selectedclub",
                "from_type": "SESSION_STORAGE",
                
                "to_name": "getmessages",
                "to_type": "SERVICE_REQUEST",
                
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}"
                    },
                    "parameters": {},
                    "body": null
                },
                
                "mappings": [
                    
                    {
                        
                        "source": "$",
                        "target_transformation": function(value) {
                            return '{"clubname":"' + value + '"}';
                        },
                        "target": "$['parameters']['where']"
                        
                    }
                    
                ]
            }
            
        ]
    };
    
    Apperyio.datasources = Apperyio.datasources || {};
    
    window.logoutservice = Apperyio.datasources.logoutservice = new Apperyio.DataSource(UserInformation_logout_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["Notifications_logoutservice_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
            
            Apperyio.refreshScreenFormElements("Notifications");
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["Notifications_logoutservice_onsuccess_mapping_0"]);
            Apperyio.navigateTo('startScreen', {
                reverse: false
            });
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    
    window.getmessages = Apperyio.datasources.getmessages = new Apperyio.DataSource(UserInformation_UserType_query_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["Notifications_getmessages_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
            
            Apperyio.refreshScreenFormElements("Notifications");
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["Notifications_getmessages_onsuccess_mapping_0"]);
            var arr = JSON.parse(sessionStorage.getItem('messages'));
            var arr2 = JSON.parse(sessionStorage.getItem('headers'));
            var arr3 = JSON.parse(sessionStorage.getItem('dates'));
            var index;
            if (arr !== null) {
                for (index = arr.length-1; index>=0; index--) {
                    var item1 = arr2[index];
                    var item2 = arr3[index];
                    var item3 = arr[index];
                    var table = document.createElement("table");
                    table.setAttribute("id", "list");
                    table.setAttribute("class", "list");
                    table.setAttribute("border", "1px");
                    table.setAttribute("padding", "5px");
                    var row = table.insertRow(0);
                    row.innerHTML = '<div id="name" class="row"><p data-name="header" name="header"><strong>' + item1 + '</strong></p><p data-name="datesent" name="datasent">Sent at: <em>' + item2 + '</em></p><p data-name="message" name="message">' + item3 + '</p></div>';
                    Apperyio("mobilecontainer").append(table);
                }
            };
            toggle('Notifications_update', 'mob', 'true');
            $('[id="Notifications_panel_7"]').panel("close");
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    
    Apperyio.CurrentScreen = 'Notifications';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);
    
    /*
     * Events and handlers
     */
    
    // On Load
    var Notifications_onLoad = function() {
        Notifications_elementsExtraJS();
        
        if (sessionStorage.getItem('stringversion') !== null && sessionStorage.getItem('stringversion').length !== 0) {
            var arr = JSON.parse(sessionStorage.getItem('memberof'));
            var index;
            for (index = 0; index < arr.length; index++) {
                Apperyio('clubslist').append('<li /*data-name="ClubListItem' + index + '"*/ data-name="ClubListItem"><a /*name="ClubListItem' + index + '"*/ name="ClubListItem">' + arr[index] + '</a></li>').listview('refresh');
            }
        };
        $('[id="Notifications_panel_7"]').panel("open");
        
        Notifications_deviceEvents();
        Notifications_windowEvents();
        Notifications_elementsEvents();
    };
    
    // screen window events
    
    
    function Notifications_windowEvents() {
        
        $('#Notifications').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
        
    };
    
    // device events
    
    
    function Notifications_deviceEvents() {
        document.addEventListener("deviceready", function() {
            
            $(document).bind("resume", function() {
                PushNotification.getPendingNotifications(function(status) {
                    var notifications = status.notifications;
                    for (var i = 0; i < notifications.length; ++i) {
                        PushNotification.notificationCallback(notifications[i]);
                    }
                });
            });
            
        });
    };
    
    // screen elements extra js
    
    
    function Notifications_elementsExtraJS() {
        // screen (Notifications) extra code
        
        /* clubslist */
        
        listView = $("#Notifications_clubslist");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#Notifications_clubslist .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }
        
        /* ClubListItem */
        
    };
    
    // screen elements handler
    
    
    function Notifications_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        
        $(document).off("click", '#Notifications_notifications [name="logout"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    try {
                        logoutservice.execute({});
                    } catch (e) {
                        console.error(e);
                        hideSpinner();
                    };
                    
                }
            },
        }, '#Notifications_notifications [name="logout"]');
        $(document).off("click", '#Notifications_notifications [name="showclubsbutton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    $('[id="Notifications_panel_7"]').panel("open");
                    
                }
            },
        }, '#Notifications_notifications [name="showclubsbutton"]');
        
        $(document).off("click", '#Notifications_mobilecontainer [name="update"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    if (document.getElementById("list")!==null&&JSON.parse(sessionStorage.getItem('messages')) !== null) {
                        var i;
                        for (i = 0; i < JSON.parse(sessionStorage.getItem('messages')).length; i++) {
                            document.getElementById("list").parentNode.removeChild(document.getElementById("list"));
                        }
                    };
                    try {
                        getmessages.execute({});
                    } catch (e) {
                        console.error(e);
                        hideSpinner();
                    };
                    
                }
            },
        }, '#Notifications_mobilecontainer [name="update"]');
        
        $(document).off("click", '#Notifications_mobilefooter [name="metab"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    setTimeout(function() {
                        window.location = 'me.html';
                    }, 0);
                    
                }
            },
        }, '#Notifications_mobilefooter [name="metab"]');
        $(document).off("click", '#Notifications_mobilefooter [name="notify"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Notifications', {
                        reverse: false
                    });
                    
                }
            },
        }, '#Notifications_mobilefooter [name="notify"]');
        $(document).off("click", '#Notifications_mobilefooter [name="calendar"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    setTimeout(function() {
                        window.location = 'yourEvents.html';
                    }, 0);
                    
                }
            },
        }, '#Notifications_mobilefooter [name="calendar"]');
        
        $(document).off("click", '#Notifications_panel_7 [name="ClubListItem"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    if (sessionStorage.getItem('listexists') !== "true") {
                        sessionStorage.setItem('listexists', "true");
                    } else {
                        if (document.getElementById("list")!==null&&JSON.parse(sessionStorage.getItem('messages')) !== null) {
                            var i;
                            for (i = 0; i < JSON.parse(sessionStorage.getItem('messages')).length; i++) {
                                document.getElementById("list").parentNode.removeChild(document.getElementById("list"));
                            }
                        }
                    }
                    sessionStorage.setItem('selectedclub', $(this).text());
                    try {
                        getmessages.execute({});
                    } catch (e) {
                        console.error(e);
                        hideSpinner();
                    };
                    
                }
            },
        }, '#Notifications_panel_7 [name="ClubListItem"]');
        
    };
    
    $(document).off("pagebeforeshow", "#Notifications").on("pagebeforeshow", "#Notifications", function(event, ui) {
        Apperyio.CurrentScreen = "Notifications";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });
    
    Notifications_onLoad();
};

$(document).off("pagecreate", "#Notifications").on("pagecreate", "#Notifications", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    Notifications_js();
});