#!/home/fyquah/.rvm/rubies/ruby-2.0.0-p481/bin/ruby
require "socket"

server = TCPServer.new("localhost" , 1234)
loop do
	socket = server.accept
	request = socket.gets
	STDERR.puts request
	response = "Hello World!\n"
	socket.print "HTTP/1.1 200 OK\r\n" +
               "Content-Type: text/plain\r\n" +
               "Content-Length: #{response.bytesize}\r\n" +
               "Connection: close\r\n"

  # Print a blank line to separate the header from the response body,
  # as required by the protocol.
  socket.print "\r\n"
  
	socket.print response

	socket.close 
end