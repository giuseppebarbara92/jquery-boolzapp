// .Formula ---> WHICH La proprietà event.which restituisce quale tasto della tastiera o il pulsante del mouse è stato premuto per l'evento.
// $("input").keydown(function(event){
//     $("div").html("Key: " + event.which);
// });

// PROVA
// $(document).ready(function(){
//   $('.new_message_input').keypress(function(event){
//     if (event.which == 13) {
//       alert('hai schiacciato invio');
//     }
//   });
// });

// Milestone 1)
// Aggiunta di un messaggio​​: l’utente scrive un testo nella parte bassa e cliccando invia il testo viene aggiunto al thread sopra, come messaggio verde

// $(document).ready(function(){
//   $('#new_message_input').keypress(function(event){
//     if (event.which == 13) {
// // Prendiamo il value dell'new_message_input
//       var newMessageValue = $('#new_message_input').val();
//       console.log(newMessageValue);
//
//       var newMessageTemplate = $('.template .message.inviato').clone();
//       console.log(newMessageTemplate);
//
//       var clearTemplate = $('.template .clear').clone();
//
//       var now = new Date();
//       console.log(now);
//
//       // Ciò che sarà scritto dentro newMessageTemplate equivale al value di new_message_input
//       newMessageTemplate.children('.testo_messaggio').text(newMessageValue);
//       // Stessa cosa per l'orario
//       newMessageTemplate.children('.orario').text(now.getHours() + ':' + now.getMinutes());
//       // Dopo di che prendo newMessageTemplate e lo sparo dentro .right_message
//       $('.right_message').append(newMessageTemplate);
//       // Ma dovrò mandare anche il clear.
//       $('.right_message').append(clearTemplate);
//       // Poi devo resettare il testo, altrimenti ogni volta che faccio invio mi rimane quello precedente
//       $('#new_message_input').val('');
//     }
//   });
// });

// Milestone 2)
// Risposta dall’interlocutore: ​​ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
// Milestone 1 + 2)
$(document).ready(function(){
  $('#new_message_input').keypress(function(event){
    if (event.which == 13) {
// Prendiamo il value dell'new_message_input
      var newMessageValue = $('#new_message_input').val();
      console.log(newMessageValue);

      var newMessageTemplate = $('.template .message.inviato').clone();
      console.log(newMessageTemplate);

      var clearTemplate = $('.template .clear').clone();

      var now = new Date();
      console.log(now);

      // Ciò che sarà scritto dentro newMessageTemplate equivale al value di new_message_input
      newMessageTemplate.children('.testo_messaggio').text(newMessageValue);
      // Stessa cosa per l'orario
      newMessageTemplate.children('.orario').text(now.getHours() + ':' + now.getMinutes());
      // Dopo di che prendo newMessageTemplate e lo sparo dentro .right_message
      $('.right_message').append(newMessageTemplate);
      // Ma dovrò mandare anche il clear.
      $('.right_message').append(clearTemplate);
      // Poi devo resettare il testo, altrimenti ogni volta che faccio invio mi rimane quello precedente
      $('#new_message_input').val('');
// Milestone 2)
      setTimeout(function(){
        var rispostaComputer = $('.template .message.ricevuto').clone();
        rispostaComputer.children('.testo_messaggio').text('ok');
        rispostaComputer.children('.orario').text(now.getHours() + ':' + now.getMinutes());
        $('.right_message').append(rispostaComputer);
        var newclearTemplate = $('.template .clear').clone();
        $('.right_message').append(newclearTemplate);
      }, 2000);
    }
  });
});
