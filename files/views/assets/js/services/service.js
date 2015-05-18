/*
 * Service settings
 */
var Facebook_Settings = {
    "client_id": "",
    "project_id": ""
}
var GitHub_settings = {
    "client_id": "",
    "client_secret": ""
}
var UserInformation_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "5504c939e4b06b035001874e"
}

/*
 * Services
 */

var GitHub_getBlob = new Apperyio.RestService({
    'url': 'https://api.github.com/repos/{user_login}/{repo_id}/git/blobs/{sha}',
    'dataType': 'json',
    'type': 'get',
});

var GitHub_searchGists = new Apperyio.RestService({
    'url': 'https://api.github.com/gists/{params}',
    'dataType': 'json',
    'type': 'get',
});

var RESTService = new Apperyio.RestService({
    'url': '',
    'dataType': 'json',
    'type': 'get',
});

var GitHub_getGistComments = new Apperyio.RestService({
    'url': 'https://api.github.com/gists/{gist_id}/comments',
    'dataType': 'json',
    'type': 'get',
});

var UserInformation_UserType_query_service = new Apperyio.RestService({
    'url': '{database_url}/collections/UserType/',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': UserInformation_settings
});

var UserInformation_login_service = new Apperyio.RestService({
    'url': '{database_url}/login',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': UserInformation_settings
});

var GitHub_getCommits = new Apperyio.RestService({
    'url': 'https://api.github.com/repos/{user_login}/{repo_id}/commits',
    'dataType': 'json',
    'type': 'get',
});

var GitHub_getRepoTree = new Apperyio.RestService({
    'url': 'https://api.github.com/repos/{user_login}/{repo_id}/git/trees/{sha}',
    'dataType': 'json',
    'type': 'get',
});

var UserInformation_signup_service = new Apperyio.RestService({
    'url': '{database_url}/users',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': UserInformation_settings
});

var GitHub_getUserFollowing = new Apperyio.RestService({
    'url': 'https://api.github.com/users/{user}/following',
    'dataType': 'json',
    'type': 'get',
});

var UserInformation_logout_service = new Apperyio.RestService({
    'url': '{database_url}/logout',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': UserInformation_settings
});

var GitHub_getUserFollowers = new Apperyio.RestService({
    'url': 'https://api.github.com/users/{user}/followers',
    'dataType': 'json',
    'type': 'get',
});

var GitHub_getGist = new Apperyio.RestService({
    'url': 'https://api.github.com/gists/{id}',
    'dataType': 'json',
    'type': 'get',
});

var Facebook_MeService = new Apperyio.RestService({
    'url': 'https://graph.facebook.com/me',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Facebook_Settings
});

var UserInformation_UserType_update3_service_clone_2 = new Apperyio.RestService({
    'url': '{database_url}/collections/UserType/{object_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': UserInformation_settings
});

var UserInformation_UserType_update2_service_clone_1 = new Apperyio.RestService({
    'url': '{database_url}/collections/UserType/{object_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': UserInformation_settings
});

var UserInformation_UserType_read_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/UserType/{_id}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': UserInformation_settings
});

var UserInformation_UserType_update_service = new Apperyio.RestService({
    'url': '{database_url}/collections/UserType/{object_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': UserInformation_settings
});

var GitHub_getAccessToken = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': 'https://github.com/login/oauth/access_token',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1431901956978',
        'appery-rest': 'e17661b0-3d87-44e5-81f4-9e8908403fe2'
    },
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': GitHub_settings
});

var GitHub_getUsers = new Apperyio.RestService({
    'url': 'https://api.github.com/users',
    'dataType': 'json',
    'type': 'get',
});

var UserInformation_UserType_delete_service = new Apperyio.RestService({
    'url': '{database_url}/collections/UserType/{_id}',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': UserInformation_settings
});

var UserInformation_UserType_create_service = new Apperyio.RestService({
    'url': '{database_url}/collections/UserType',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': UserInformation_settings
});

var GitHub_searchRepos = new Apperyio.RestService({
    'url': 'https://api.github.com/legacy/repos/search/{keyword}',
    'dataType': 'json',
    'type': 'get',
});

var UserInformation_UserType_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/UserType',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': UserInformation_settings
});

var GitHub_searchUsers = new Apperyio.RestService({
    'url': 'https://api.github.com/legacy/user/search/{keyword}',
    'dataType': 'json',
    'type': 'get',
});

var GitHub_getUserRepos = new Apperyio.RestService({
    'url': 'https://api.github.com/users/{user}/repos',
    'dataType': 'json',
    'type': 'get',
});

var UpdateService = new Apperyio.RestService({
    'url': '{database_url}/collections/UserType/',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',
});

var GitHub_getRepos = new Apperyio.RestService({
    'url': 'https://api.github.com/repositories',
    'dataType': 'json',
    'type': 'get',
});

var GitHub_getCurrentUser = new Apperyio.RestService({
    'url': 'https://api.github.com/user',
    'dataType': 'json',
    'type': 'get',
});

var get = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/UserType/{_id}',
    'dataType': 'json',
    'type': 'get',
});

var GitHub_getUserGists = new Apperyio.RestService({
    'url': 'https://api.github.com/users/{user}/gists',
    'dataType': 'json',
    'type': 'get',
});