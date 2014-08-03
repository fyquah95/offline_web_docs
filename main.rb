#!/home/fyquah/.rvm/rubies/ruby-2.0.0-p481/bin/ruby
require "socket"
require "uri"

WEB_ROOT = '/home/fyquah/dev/offline_web_docs/public'
PORT_NUMBER = ARGV[0] ? ARGV[0].to_i : 9876
CONTENT_TYPE_MAPPING = {
	'html' => 'text/html',
	'txt' => 'text/txt',
	'css' => 'text/css',
	'js' => "application/javascript",
	'png' => 'image/png',
	'jpg' => 'image/jpg',
	'jpeg' => 'image/jpg'
}

DEFAULT_CONTENT_TYPE = 'application/octet-stream'

def content_type path
	ext = path.split('.').last
	CONTENT_TYPE_MAPPING.fetch(ext , DEFAULT_CONTENT_TYPE)
end

def requested_file request_line
	requested_uri = request_line.split(" ")[1]
	path = URI.unescape(URI(requested_uri).path)
	clean = Array.new
	parts = path.split "/"

	parts.each do |part|
		next if part.empty? || part == '.'
		part == '..' ? clean.pop : clean.push(part)
	end

	File.join("#{WEB_ROOT}" , *clean)
end

server = TCPServer.new("localhost" , PORT_NUMBER)
puts "Establishing server , currently listening the localhost at port #{PORT_NUMBER}"
Process.daemon

loop do
	socket = server.accept
	request_line = socket.gets
	next unless socket
	unext unless request_line

	STDERR.puts request_line
	path = requested_file(request_line)
	path = File.join(path , "index.html") if File.directory? path
	puts File.absolute_path(path)


	if File.exist?(path) && !File.directory?(path)
		puts "porting a request for #{path}"
		File.open(path , "rb") do |file|
			response_header = "HTTP/1.1 200 OK\r\n" + 
											"Content-Type: #{content_type(path)}\r\n" + 
											"Content-Length: #{file.size}\r\n" + 
											"Connection: Close\r\n"
			socket.print response_header
			socket.print "\r\n"
			IO.copy_stream file , socket
			puts "end of request"
		end	
	else
		response = "Error 404 , file not found!"
		response_header = "HTTP/1.1 404 Not Found\r\n" + 
											"Content-Type: text/plain\r\n" + 
											"Content-Length: #{response.size}\r\n" + 
											"Connection: Close\r\n"
		socket.print response_header
		socket.print "\r\n"
		socket.print response
	end

	socket.close
end