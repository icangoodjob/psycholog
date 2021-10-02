<?php
$url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
//$request = $_SERVER['REQUEST_URI'];
$request = parse_url($url, PHP_URL_PATH);

switch ($request) {
    case '/' :
        require __DIR__ . '/mainpage.php';
        break;
    case '' :
        require __DIR__ . '/mainpage.php';
        break;
    case '/experience' :
        require __DIR__ . '/experience.php';
        break;
    case '/experience/' :
        require __DIR__ . '/experience.php';
        break;
    case '/apply' :
        require __DIR__ . '/apply.php';
        break;
    case '/apply/' :
        require __DIR__ . '/apply.php';
        break;
    case '/priciples' :
        require __DIR__ . '/principles.php';
        break;
    case '/principles/' :
        require __DIR__ . '/principles.php';
        break;
    case '/about' :
        require __DIR__ . '/about.php';
        break;
    case '/about/' :
        require __DIR__ . '/about.php';
        break;
    default:
        http_response_code(404);
        require __DIR__ . '/404.php';
        break;
}
