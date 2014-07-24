var search_data = {"index":{"searchIndex":["net","ftp","bufferedsocket","nullsocket","ftpconnectionerror","ftperror","ftppermerror","ftpprotoerror","ftpreplyerror","ftptemperror","abort()","acct()","binary=()","chdir()","close()","closed?()","connect()","delete()","dir()","get()","getbinaryfile()","getdir()","gettextfile()","help()","list()","login()","ls()","mdtm()","mkdir()","mtime()","new()","nlst()","noop()","open()","put()","putbinaryfile()","puttextfile()","pwd()","quit()","read_timeout=()","rename()","retrbinary()","retrlines()","rmdir()","sendcmd()","set_socket()","site()","size()","status()","storbinary()","storlines()","system()","voidcmd()"],"longSearchIndex":["net","net::ftp","net::ftp::bufferedsocket","net::ftp::nullsocket","net::ftpconnectionerror","net::ftperror","net::ftppermerror","net::ftpprotoerror","net::ftpreplyerror","net::ftptemperror","net::ftp#abort()","net::ftp#acct()","net::ftp#binary=()","net::ftp#chdir()","net::ftp#close()","net::ftp#closed?()","net::ftp#connect()","net::ftp#delete()","net::ftp#dir()","net::ftp#get()","net::ftp#getbinaryfile()","net::ftp#getdir()","net::ftp#gettextfile()","net::ftp#help()","net::ftp#list()","net::ftp#login()","net::ftp#ls()","net::ftp#mdtm()","net::ftp#mkdir()","net::ftp#mtime()","net::ftp::new()","net::ftp#nlst()","net::ftp#noop()","net::ftp::open()","net::ftp#put()","net::ftp#putbinaryfile()","net::ftp#puttextfile()","net::ftp#pwd()","net::ftp#quit()","net::ftp#read_timeout=()","net::ftp#rename()","net::ftp#retrbinary()","net::ftp#retrlines()","net::ftp#rmdir()","net::ftp#sendcmd()","net::ftp#set_socket()","net::ftp#site()","net::ftp#size()","net::ftp#status()","net::ftp#storbinary()","net::ftp#storlines()","net::ftp#system()","net::ftp#voidcmd()"],"info":[["Net","","Net.html","",""],["Net::FTP","","Net/FTP.html","","<p>This class implements the File Transfer Protocol.  If you have used a\ncommand-line FTP program, and are …\n"],["Net::FTP::BufferedSocket","","Net/FTP/BufferedSocket.html","",""],["Net::FTP::NullSocket","","Net/FTP/NullSocket.html","",""],["Net::FTPConnectionError","","Net/FTPConnectionError.html","",""],["Net::FTPError","","Net/FTPError.html","",""],["Net::FTPPermError","","Net/FTPPermError.html","",""],["Net::FTPProtoError","","Net/FTPProtoError.html","",""],["Net::FTPReplyError","","Net/FTPReplyError.html","",""],["Net::FTPTempError","","Net/FTPTempError.html","",""],["abort","Net::FTP","Net/FTP.html#method-i-abort","()","<p>Aborts the previous command (ABOR command).\n"],["acct","Net::FTP","Net/FTP.html#method-i-acct","(account)","<p>Sends the ACCT command.\n<p>This is a less common FTP command, to send account information if the\ndestination …\n"],["binary=","Net::FTP","Net/FTP.html#method-i-binary-3D","(newmode)","<p>A setter to toggle transfers in binary mode. <code>newmode</code> is either\n<code>true</code> or <code>false</code>\n"],["chdir","Net::FTP","Net/FTP.html#method-i-chdir","(dirname)","<p>Changes the (remote) directory.\n"],["close","Net::FTP","Net/FTP.html#method-i-close","()","<p>Closes the connection.  Further operations are impossible until you open a\nnew connection with #connect …\n"],["closed?","Net::FTP","Net/FTP.html#method-i-closed-3F","()","<p>Returns <code>true</code> iff the connection is closed.\n"],["connect","Net::FTP","Net/FTP.html#method-i-connect","(host, port = FTP_PORT)","<p>Establishes an FTP connection to host, optionally overriding the default\nport. If the environment variable …\n"],["delete","Net::FTP","Net/FTP.html#method-i-delete","(filename)","<p>Deletes a file on the server.\n"],["dir","Net::FTP","Net/FTP.html#method-i-dir","(*args)",""],["get","Net::FTP","Net/FTP.html#method-i-get","(remotefile, localfile = File.basename(remotefile), blocksize = DEFAULT_BLOCKSIZE)","<p>Retrieves <code>remotefile</code> in whatever mode the session is set (text\nor binary).  See #gettextfile and #getbinaryfile …\n"],["getbinaryfile","Net::FTP","Net/FTP.html#method-i-getbinaryfile","(remotefile, localfile = File.basename(remotefile), blocksize = DEFAULT_BLOCKSIZE)","<p>Retrieves <code>remotefile</code> in binary mode, storing the result in\n<code>localfile</code>. If <code>localfile</code> is nil, returns retrieved\n…\n"],["getdir","Net::FTP","Net/FTP.html#method-i-getdir","()",""],["gettextfile","Net::FTP","Net/FTP.html#method-i-gettextfile","(remotefile, localfile = File.basename(remotefile))","<p>Retrieves <code>remotefile</code> in ASCII (text) mode, storing the result\nin <code>localfile</code>. If <code>localfile</code> is nil, returns …\n"],["help","Net::FTP","Net/FTP.html#method-i-help","(arg = nil)","<p>Issues the HELP command.\n"],["list","Net::FTP","Net/FTP.html#method-i-list","(*args)","<p>Returns an array of file information in the directory (the output is like\n`ls -l`).  If a block is given, …\n"],["login","Net::FTP","Net/FTP.html#method-i-login","(user = \"anonymous\", passwd = nil, acct = nil)","<p>Logs in to the remote host. The session must have been previously\nconnected.  If <code>user</code> is the string “anonymous” …\n"],["ls","Net::FTP","Net/FTP.html#method-i-ls","(*args)",""],["mdtm","Net::FTP","Net/FTP.html#method-i-mdtm","(filename)","<p>Returns the raw last modification time of the (remote) file in the format\n“YYYYMMDDhhmmss” …\n"],["mkdir","Net::FTP","Net/FTP.html#method-i-mkdir","(dirname)","<p>Creates a remote directory.\n"],["mtime","Net::FTP","Net/FTP.html#method-i-mtime","(filename, local = false)","<p>Returns the last modification time of the (remote) file.  If\n<code>local</code> is <code>true</code>, it is returned as a local …\n"],["new","Net::FTP","Net/FTP.html#method-c-new","(host = nil, user = nil, passwd = nil, acct = nil)","<p>Creates and returns a new <code>FTP</code> object. If a <code>host</code>\nis given, a connection is made. Additionally, if the …\n"],["nlst","Net::FTP","Net/FTP.html#method-i-nlst","(dir = nil)","<p>Returns an array of filenames in the remote directory.\n"],["noop","Net::FTP","Net/FTP.html#method-i-noop","()","<p>Issues a NOOP command.\n<p>Does nothing except return a response.\n"],["open","Net::FTP","Net/FTP.html#method-c-open","(host, user = nil, passwd = nil, acct = nil)","<p>A synonym for <code>FTP.new</code>, but with a mandatory host parameter.\n<p>If a block is given, it is passed the <code>FTP</code> …\n"],["put","Net::FTP","Net/FTP.html#method-i-put","(localfile, remotefile = File.basename(localfile), blocksize = DEFAULT_BLOCKSIZE, &block)","<p>Transfers <code>localfile</code> to the server in whatever mode the session\nis set (text or binary).  See #puttextfile …\n"],["putbinaryfile","Net::FTP","Net/FTP.html#method-i-putbinaryfile","(localfile, remotefile = File.basename(localfile), blocksize = DEFAULT_BLOCKSIZE)","<p>Transfers <code>localfile</code> to the server in binary mode, storing the\nresult in <code>remotefile</code>. If a block is supplied, …\n"],["puttextfile","Net::FTP","Net/FTP.html#method-i-puttextfile","(localfile, remotefile = File.basename(localfile))","<p>Transfers <code>localfile</code> to the server in ASCII (text) mode,\nstoring the result in <code>remotefile</code>. If callback …\n"],["pwd","Net::FTP","Net/FTP.html#method-i-pwd","()","<p>Returns the current remote directory.\n"],["quit","Net::FTP","Net/FTP.html#method-i-quit","()","<p>Exits the FTP session.\n"],["read_timeout=","Net::FTP","Net/FTP.html#method-i-read_timeout-3D","(sec)","<p>Setter for the read_timeout attribute.\n"],["rename","Net::FTP","Net/FTP.html#method-i-rename","(fromname, toname)","<p>Renames a file on the server.\n"],["retrbinary","Net::FTP","Net/FTP.html#method-i-retrbinary","(cmd, blocksize, rest_offset = nil)","<p>Puts the connection into binary (image) mode, issues the given command, and\nfetches the data returned, …\n"],["retrlines","Net::FTP","Net/FTP.html#method-i-retrlines","(cmd)","<p>Puts the connection into ASCII (text) mode, issues the given command, and\npasses the resulting data, …\n"],["rmdir","Net::FTP","Net/FTP.html#method-i-rmdir","(dirname)","<p>Removes a remote directory.\n"],["sendcmd","Net::FTP","Net/FTP.html#method-i-sendcmd","(cmd)","<p>Sends a command and returns the response.\n"],["set_socket","Net::FTP","Net/FTP.html#method-i-set_socket","(sock, get_greeting = true)","<p>Set the socket used to connect to the FTP server.\n<p>May raise FTPReplyError if <code>get_greeting</code> is false.\n"],["site","Net::FTP","Net/FTP.html#method-i-site","(arg)","<p>Issues a SITE command.\n"],["size","Net::FTP","Net/FTP.html#method-i-size","(filename)","<p>Returns the size of the given (remote) filename.\n"],["status","Net::FTP","Net/FTP.html#method-i-status","()","<p>Returns the status (STAT command).\n"],["storbinary","Net::FTP","Net/FTP.html#method-i-storbinary","(cmd, file, blocksize, rest_offset = nil)","<p>Puts the connection into binary (image) mode, issues the given server-side\ncommand (such as “STOR …\n"],["storlines","Net::FTP","Net/FTP.html#method-i-storlines","(cmd, file)","<p>Puts the connection into ASCII (text) mode, issues the given server-side\ncommand (such as “STOR …\n"],["system","Net::FTP","Net/FTP.html#method-i-system","()","<p>Returns system information.\n"],["voidcmd","Net::FTP","Net/FTP.html#method-i-voidcmd","(cmd)","<p>Sends a command and expect a response beginning with ‘2’.\n"]]}}