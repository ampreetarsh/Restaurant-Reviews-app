angular.module('restaurent')
    .controller('restaurentsController', ['restaurentService', function (rate) {
        this.myRestaurents = rate.myRestaurents;
        this.increaseRating = rate.increaseRating;
        this.decreaseRating = rate.decreaseRating;
    }])