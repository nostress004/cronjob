var cron = require('node-cron');
var axios = require('axios');

cron.schedule('* * * * *', function() {
  axios
    .get(
      'http://erzsebetutalvanykereso.hu/api/uzletek/12/47.966995517692894/21.757198730468758/47.93900069073662/21.674801269531258/profi%20bringa/true/false/E_AJANDEK_04'
      //'http://erzsebetutalvanykereso.hu/api/uzletek/9/46.107775011768275/18.302285960937525/46.04978495182859/18.137491039062525/biciklikk/false/true/E_AJANDEK_04'
    )
    .then(function(response) {
      if (
        response.data.uzletList &&
        response.data.uzletList[0].uzletKartyaZsebek.length
      ) {
        console.log('Juhuuuu, irany megvenni!!444!!');
      } else {
        console.log(' ');
        console.log(response.data.uzletList[0].uzletKartyaZsebek);
        console.log('Nope. Time: ' + timeNow());
        console.log('---------------------');
      }
    });
});

function timeNow() {
  var d = new Date(),
    h = (d.getHours() < 10 ? '0' : '') + d.getHours(),
    m = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
  return h + ':' + m;
}
