angular.module('app', ['ui.bootstrap']);
function CarouselDemoCtrl($scope){
    $scope.myInterval = 3000;
    $scope.slides = [
        {
            image: 'Images/1.jpg'
        },
        {
            image: 'Images/2.jpg'
        },
        {
            image: 'Images/3.jpg'
        },
        {
            image: 'Images/4.jpg'
        },
        {
            image: 'http://www.w3schools.com/images/w3schools_green.jpg'
        }
    ];
}