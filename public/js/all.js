

function foodController ($scope) {
    $scope.data = {
        foods : [{
            origin  : 'china',
            name    : 'roast pork'
        }, {
            origin  : 'indian',
            name    : 'curry chicken'
        }]
    };

    $scope.addFood = function() {
        $scope.data.foods.push({
            origin  : $scope.newFoodOrigin,
            name    : $scope.newFoodName
        });
        $scope.newFoodOrigin = '';
        $scope.newFoodName = '';
        console.log($scope.data);
    }


};
