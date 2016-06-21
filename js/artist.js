var data = [
  {
    id: 1,
    name: 'name 1',
    surname: 'surnname 1',
    email: 'one@comm-it.it',
    address: 'address 1',
    events: [
      {
        id: 1,
        description: 'description 1',
        location: 'location 1',
        type: 'type 1'
      },
      {
        id: 2,
        description: 'description 2',
        location: 'location 2',
        type: 'type 2'
      }
    ]
  },
  {
    id: 2,
    name: 'name 2',
    surname: 'surnname 2',
    email: 'two@comm-it.it',
    address: 'address 2',
    events: [
      {
        id: 3,
        description: 'description 1',
        location: 'location 1',
        type: 'type 1'
      }
    ]
  },
  {
    id: 3,
    name: 'name 3',
    surname: 'surnname 3',
    email: 'one@comm-it.it',
    address: 'address 3',
    events: []
  },
  {
    id: 4,
    name: 'name 4',
    surname: 'surnname 4',
    email: 'four@comm-it.it',
    address: 'address 4',
    events: [
      {
        id: 5,
        description: 'description 5',
        location: 'location 5',
        type: 'type 5'
      },
      {
        id: 5,
        description: 'description 4',
        location: 'location 4',
        type: 'type 4'
      }
    ]
  },
  {
    id: 1,
    name: 'name 1',
    surname: 'surnname 1',
    email: 'one@comm-it.it',
    address: 'address 1',
    events: []
  },
  {
    id: 2,
    name: 'name 2',
    surname: 'surnname 2',
    email: 'two@comm-it.it',
    address: 'address 2',
    events: []
  },
  {
    id: 3,
    name: 'name 3',
    surname: 'surnname 3',
    email: 'one@comm-it.it',
    address: 'address 3',
    events: []
  },
  {
    id: 4,
    name: 'name 4',
    surname: 'surnname 4',
    email: 'four@comm-it.it',
    address: 'address 4',
    events: [
      {
        id: 11,
        description: 'description 11',
        location: 'location 11',
        type: 'type 11'
      },
      {
        id: 2,
        description: 'description 2',
        location: 'location 2',
        type: 'type 2'
      }
    ]
  },
  {
    id: 1,
    name: 'name 1',
    surname: 'surnname 1',
    email: 'one@comm-it.it',
    address: 'address 1',
    events: []
  },
  {
    id: 2,
    name: 'name 2',
    surname: 'surnname 2',
    email: 'two@comm-it.it',
    address: 'address 2',
    events: []
  },
  {
    id: 3,
    name: 'name 3',
    surname: 'surnname 3',
    email: 'one@comm-it.it',
    address: 'address 3',
    events: [
      {
        id: 1,
        description: 'description 1',
        location: 'location 1',
        type: 'type 1'
      },
      {
        id: 2,
        description: 'description 2',
        location: 'location 2',
        type: 'type 2'
      }
    ]
  },
  {
    id: 4,
    name: 'name 4',
    surname: 'surnname 4',
    email: 'four@comm-it.it',
    address: 'address 4',
    events: []
  },
  {
    id: 1,
    name: 'name 1',
    surname: 'surnname 1',
    email: 'one@comm-it.it',
    address: 'address 1',
    events: []
  },
  {
    id: 2,
    name: 'name 2',
    surname: 'surnname 2',
    email: 'two@comm-it.it',
    address: 'address 2',
    events: []
  },
  {
    id: 3,
    name: 'name 3',
    surname: 'surnname 3',
    email: 'one@comm-it.it',
    address: 'address 3',
    events: []
  },
  {
    id: 4,
    name: 'name 4',
    surname: 'surnname 4',
    email: 'four@comm-it.it',
    address: 'address 4',
    events: [
      {
        id: 13,
        description: 'description 13',
        location: 'location 13',
        type: 'type 13'
      },
      {
        id: 2,
        description: 'description 2',
        location: 'location 2',
        type: 'type 2'
      }
    ]
  }
]
var tr;
for (var i=0;i<data.length;i++){
  tr=$('<tr/>');
  tr.append('<td>' + data[i].name + '</td>');
  tr.append('<td>' + data[i].surname + '</td>');
  tr.append('<td>' + data[i].email + '</td>');
  tr.append('<td>' + data[i].address + '</td>');
  var td=$('<td/>');
  for(var j=0;j< data[i].events.length;j++){
    td.append('<div>' +  data[i].events[j].description + '</div>');
  }
  tr.append(td);
  var td=$('<td/>');
  for(var j=0;j< data[i].events.length;j++){
    td.append('<div>' +  data[i].events[j].type + '</div>');
  }
  tr.append(td);

  $('table').append(tr);
}



//crean button functionfunction myFunction()
// function myFunction() {
//     document.getElementById("myForm").reset();
// }

// This only line code describes to bind datatable functionalities like searching, sorting and paging to our ta/ble.
$(document).ready(function(){
    $('#table').dataTable();
});


   var $rows = $('#table tr');
   $('#name').keyup(function() {
       var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

       $rows.show().filter(function() {
           var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
           return !~text.indexOf(val);
       }).hide();
   });
 //
   var $rows = $('#table tr');
   $('#surname').keyup(function() {
       var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

       $rows.show().filter(function() {
           var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
           return !~text.indexOf(val);
       }).hide();
   });

   var $rows = $('#table tr');
   $('#eventDescription').keyup(function() {
       var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

       $rows.show().filter(function() {
           var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
           return !~text.indexOf(val);
       }).hide();
   });
