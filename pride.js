var config= require('./config.js')
var db = require('orchestrate')(config.dbkey)
var fs = require('fs');

// for(var i=0; i<10;i++){
// 	simba('0'+i)
// }

// for(var j= 10; j<62; j++){
// 	simba(j)
// }



// function simba(chap){
// 	fs.readFile('./chapter-'+chap,{encoding:"utf-8"}, function(err,data){
// 		console.log(data)
// 		db.put('pride', 'chapter'+chap,{
// 			"text": data
// 		})
// 		.then(function (res) {
// 			console.log(res.statusCode);
// 		}).
// 		fail(function (err) {
// 		console.log('no')
// 		});
// 	})
// }


// db.search('pride', 'value.text: "nerves*"')
// .then(function (res) {
// 	var nerves=0;
// 	for(var i=0; i<res.body.results.length; i++){
//   var count= res.body.results[i].value.text.match(/nerves/g).length
//   nerves+=parseInt(count)
//   console.log(nerves)
//   	}
//   })
// .fail(function (err) {
// 	console.log('fail')
// });



// db.search('pride', 'value.text: "Mary" AND NOT "Lydia"')
// .then(function(res){
// 	// for(var i=0; i<res.body.results.length;i++){
// 	console.log(res.body.results.length)
// // }
// })

// db.search('pride', 'value.text: "Lydia" AND NOT "Mary"')
// .then(function(res){
// 	// for(var i=0; i<res.body.results.length;i++){
// 	console.log(res.body.results.length)
// // }
// })


db.search('pride', 'value.text:"Kitty*"')
.then(function (res){
	for(var i=0; i<res.body.results.length;i++)
	console.log(res.body.results[i].path.key)
})


