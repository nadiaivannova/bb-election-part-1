document.addEventListener("DOMContentLoaded", function() {

    $.ajax({
      url: 'https://bb-election-api.herokuapp.com/',
      method: 'GET',
      data: {},
      dataType: 'json',
    }).done(function (data) {
      var array = data.candidates

      for (var i = 0; i < array.length; i++) {
        var name  = array[i].name
        var votes = array[i].votes
        var ul = document.querySelector('.votes')
        var li = document.createElement('li')
        li.innerHTML = name + '   ' + ' - - - ' + votes
        ul.appendChild(li)
      }
    });
});
