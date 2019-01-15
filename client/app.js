var socket = io();

/* Emit textual message to the server and clear the input so
 * another message can be typed by the same user.
 */
$("form").on("submit", function() {
  var text = $("#message").val();
  socket.emit("message", text);
  $("#message").val("");
  return false;
});

/* Any time a message is received from the real time web socket
 * connection with the server, create a new <li> element and
 * append it to the message history <ol>.
 */
socket.on("message", function(msg) {
  $("<li>")
    .text(msg)
    .appendTo("#history");
});
