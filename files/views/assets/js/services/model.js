/**
 * Data models
 */
Apperyio.Entity = new Apperyio.EntityFactory({
    "Number": {
        "type": "number"
    },
    "messages": {
        "type": "array",
        "items": {
            "type": "string"
        }
    },
    "Boolean": {
        "type": "boolean"
    },
    "memberof": {
        "type": "array",
        "items": {
            "type": "string"
        }
    },
    "dates": {
        "type": "array",
        "items": {
            "type": "string"
        }
    },
    "String": {
        "type": "string"
    },
    "headers": {
        "type": "array",
        "items": {
            "type": "string"
        }
    },
    "members": {
        "type": "array",
        "items": {
            "type": "string"
        }
    }
});
Apperyio.getModel = Apperyio.Entity.get.bind(Apperyio.Entity);

/**
 * Data storage
 */
Apperyio.storage = {

    "currentRepo": new $a.LocalStorage("currentRepo", "String"),

    "currentSHA": new $a.LocalStorage("currentSHA", "String"),

    "currentGistId": new $a.LocalStorage("currentGistId", "String"),

    "access_token": new $a.LocalStorage("access_token", "String"),

    "currentUserLogin": new $a.LocalStorage("currentUserLogin", "String"),

    "access_token_0": new $a.LocalStorage("access_token_0", "String"),

    "userSessionToken": new $a.SessionStorage("userSessionToken", "String"),

    "username": new $a.SessionStorage("username", "String"),

    "userID": new $a.SessionStorage("userID", "String"),

    "clubId": new $a.SessionStorage("clubId", "String"),

    "members": new $a.SessionStorage("members", "members"),

    "clubs": new $a.SessionStorage("clubs", "String"),

    "name": new $a.SessionStorage("name", "Boolean"),

    "memberof": new $a.SessionStorage("memberof", "memberof"),

    "password": new $a.SessionStorage("password", "String"),

    "stringversion": new $a.SessionStorage("stringversion", "String"),

    "headers": new $a.SessionStorage("headers", "headers"),

    "messages": new $a.SessionStorage("messages", "messages"),

    "dates": new $a.SessionStorage("dates", "dates"),

    "selectedclub": new $a.SessionStorage("selectedclub", "String"),

    "listexists": new $a.SessionStorage("listexists", "String")
};

/**
 * Push Notification specific data storage
 */
Apperyio.storage.pushNotificationToken = new $a.LocalStorage("pushNotificationToken", "String");
Apperyio.storage.pushNotificationDeviceID = new $a.LocalStorage("pushNotificationDeviceID", "String");
Apperyio.storage.deviceTimeZone = new $a.LocalStorage("deviceTimeZone", "String");