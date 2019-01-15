var socket = io();

/* Emit textual message to the server and clear the input so
 * another message can be typed by the same user.
 */
$("form").submit(function() {
  var text = $("#message").val();
  var user = $("#initials").val();
  socket.emit("message", `${user} says: ${text}`);
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
