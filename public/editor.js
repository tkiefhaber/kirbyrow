function KirbyHousesController($scope){

  // Define the model properties. The view will loop
  // through the services array and genreate a li
  // element for every one of its items.

  $scope.houses = [
    {
      address: '1937',
      phone_number: '703.534.7782',
      family: {
        last_name: 'Caputo',
        first_names: 'Annie, A.J., Abby, Owen'
      }
    },{
      address: '1939',
      phone_number: '703.237.8664',
      family: {
        last_name: 'Orend',
        first_names: 'Mike'
      }
    },{
      address: '1941',
      phone_number: '703.533.2213',
      family: {
        last_name: 'Lopez',
        first_names: 'Nubia'
      }
    },{
      address: '1943',
      phone_number: '703.647.9512',
      family: {
        last_name: 'Manka',
        first_names: 'Belita, Bledar, Donald'
      }
    },{
      address: '1945',
      phone_number: '703.241.1409',
      family: {
        last_name: 'Gilhooly',
        first_names: 'Sue'
      }
    },{
      address: '1947',
      phone_number: '703.538.3469',
      family: {
        last_name: 'Tsai',
        first_names: 'Joanne, You Chuen'
      }
    },{
      address: '1949',
      phone_number: '703.536.2779',
      family: {
        last_name: 'Dinh',
        first_names: 'Gary, Tu, Hannah, Thomas'
      }
    },{
      address: '1951',
      phone_number: '703.237.1829',
      family: {
        last_name: 'Kiefhaber',
        first_names: 'Jenni, Tom, Ray'
      }
    },{
      address: '1953',
      phone_number: '703.533.3596',
      family: {
        last_name: 'Fjeld',
        first_names: 'Paul, Rebecca, Liam'
      }
    },{
      address: '1955',
      phone_number: '703.532.2718',
      family: {
        last_name: '&   Cathy Winsor',
        first_names: 'Yvonne Deutschman'
      }
    }
  ];

  $scope.toggleActive = function(s){
    s.active = !s.active;
  };

  // Helper method for calculating the total price

  $scope.total = function(){

    var total = 0;

    // Use the angular forEach helper method to
    // loop through the services array:

    angular.forEach($scope.services, function(s){
      if (s.active){
        total+= s.price;
      }
    });

    return total;
  };
}
