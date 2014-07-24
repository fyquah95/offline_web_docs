var search_data = {"index":{"searchIndex":["fiddle","basictypes","cparser","cstruct","cstructbuilder","cstructentity","cunion","cunionentity","closure","blockcaller","compositehandler","dlerror","function","handle","importer","pointer","win32types","+()","+@()","-()","-@()","<=>()","==()","[]()","[]()","[]()","[]()","[]()","[]()","[]()","[]=()","[]=()","assign_names()","bind()","bind_function()","call()","call()","close()","close_enabled?()","create()","create_value()","disable_close()","dlload()","dlopen()","dlunwrap()","dlwrap()","enable_close()","entity_class()","entity_class()","eql?()","extern()","free()","free()","free=()","handler()","handlers()","import_function()","import_symbol()","import_value()","inspect()","last_error()","last_error=()","malloc()","malloc()","malloc()","malloc()","new()","new()","new()","new()","new()","new()","new()","null?()","parse_ctype()","parse_signature()","parse_struct_signature()","ptr()","realloc()","ref()","set_ctypes()","set_ctypes()","size()","size()","size()","size=()","sizeof()","struct()","sym()","sym()","sym()","to_i()","to_i()","to_i()","to_i()","to_int()","to_ptr()","to_s()","to_str()","to_value()","typealias()","union()","value()","win32_last_error()","win32_last_error=()"],"longSearchIndex":["fiddle","fiddle::basictypes","fiddle::cparser","fiddle::cstruct","fiddle::cstructbuilder","fiddle::cstructentity","fiddle::cunion","fiddle::cunionentity","fiddle::closure","fiddle::closure::blockcaller","fiddle::compositehandler","fiddle::dlerror","fiddle::function","fiddle::handle","fiddle::importer","fiddle::pointer","fiddle::win32types","fiddle::pointer#+()","fiddle::pointer#+@()","fiddle::pointer#-()","fiddle::pointer#-@()","fiddle::pointer#<=>()","fiddle::pointer#==()","fiddle::cstructentity#[]()","fiddle::compositehandler#[]()","fiddle::handle#[]()","fiddle::handle::[]()","fiddle::importer#[]()","fiddle::pointer#[]()","fiddle::pointer::[]()","fiddle::cstructentity#[]=()","fiddle::pointer#[]=()","fiddle::cstructentity#assign_names()","fiddle::importer#bind()","fiddle::importer#bind_function()","fiddle::closure::blockcaller#call()","fiddle::function#call()","fiddle::handle#close()","fiddle::handle#close_enabled?()","fiddle::cstructbuilder::create()","fiddle::importer#create_value()","fiddle::handle#disable_close()","fiddle::importer#dlload()","fiddle::dlopen()","fiddle::dlunwrap()","fiddle::dlwrap()","fiddle::handle#enable_close()","fiddle::cstruct::entity_class()","fiddle::cunion::entity_class()","fiddle::pointer#eql?()","fiddle::importer#extern()","fiddle::free()","fiddle::pointer#free()","fiddle::pointer#free=()","fiddle::importer#handler()","fiddle::compositehandler#handlers()","fiddle::importer#import_function()","fiddle::importer#import_symbol()","fiddle::importer#import_value()","fiddle::pointer#inspect()","fiddle::last_error()","fiddle::last_error=()","fiddle::malloc()","fiddle::cstructentity::malloc()","fiddle::cunionentity::malloc()","fiddle::pointer::malloc()","fiddle::cstructentity::new()","fiddle::closure::new()","fiddle::closure::blockcaller::new()","fiddle::compositehandler::new()","fiddle::function::new()","fiddle::handle::new()","fiddle::pointer::new()","fiddle::pointer#null?()","fiddle::cparser#parse_ctype()","fiddle::cparser#parse_signature()","fiddle::cparser#parse_struct_signature()","fiddle::pointer#ptr()","fiddle::realloc()","fiddle::pointer#ref()","fiddle::cstructentity#set_ctypes()","fiddle::cunionentity#set_ctypes()","fiddle::cstructentity::size()","fiddle::cunionentity::size()","fiddle::pointer#size()","fiddle::pointer#size=()","fiddle::importer#sizeof()","fiddle::importer#struct()","fiddle::compositehandler#sym()","fiddle::handle#sym()","fiddle::handle::sym()","fiddle::closure#to_i()","fiddle::function#to_i()","fiddle::handle#to_i()","fiddle::pointer#to_i()","fiddle::pointer#to_int()","fiddle::pointer::to_ptr()","fiddle::pointer#to_s()","fiddle::pointer#to_str()","fiddle::pointer#to_value()","fiddle::importer#typealias()","fiddle::importer#union()","fiddle::importer#value()","fiddle::win32_last_error()","fiddle::win32_last_error=()"],"info":[["Fiddle","","Fiddle.html","","<p>A libffi wrapper for Ruby.\n<p>Description\n<p>Fiddle is an extension to translate a foreign function interface ...\n"],["Fiddle::BasicTypes","","Fiddle/BasicTypes.html","","<p>Adds basic type aliases to the including class for use with\nFiddle::Importer.\n<p>The aliases added are <code>uint</code> …\n"],["Fiddle::CParser","","Fiddle/CParser.html","","<p>A mixin that provides methods for parsing C struct and prototype\nsignatures.\n<p>Example\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">require</span> <span class=\"ruby-string\">'fiddle/import'</span> <span class=\"ruby-operator\">...</span>\n</pre>\n"],["Fiddle::CStruct","","Fiddle/CStruct.html","","<p>C struct shell\n"],["Fiddle::CStructBuilder","","Fiddle/CStructBuilder.html","","<p>Used to construct C classes (CUnion, CStruct, etc)\n<p>Fiddle::Importer#struct and Fiddle::Importer#union …\n"],["Fiddle::CStructEntity","","Fiddle/CStructEntity.html","","<p>A C struct wrapper\n"],["Fiddle::CUnion","","Fiddle/CUnion.html","","<p>C union shell\n"],["Fiddle::CUnionEntity","","Fiddle/CUnionEntity.html","","<p>A C union wrapper\n"],["Fiddle::Closure","","Fiddle/Closure.html","","<p>Description\n<p>An FFI closure wrapper, for handling callbacks.\n<p>Example\n"],["Fiddle::Closure::BlockCaller","","Fiddle/Closure/BlockCaller.html","","<p>Extends Fiddle::Closure to allow for building the closure in a block\n"],["Fiddle::CompositeHandler","","Fiddle/CompositeHandler.html","","<p>Used internally by Fiddle::Importer\n"],["Fiddle::DLError","","Fiddle/DLError.html","","<p>standard dynamic load exception\n"],["Fiddle::Function","","Fiddle/Function.html","","<p>Description\n<p>A representation of a C function\n<p>Examples\n"],["Fiddle::Handle","","Fiddle/Handle.html","","<p>The Fiddle::Handle is the manner to access the dynamic library\n<p>Example\n<p>Setup\n"],["Fiddle::Importer","","Fiddle/Importer.html","","<p>A DSL that provides the means to dynamically load libraries and build\nmodules around them including calling …\n"],["Fiddle::Pointer","","Fiddle/Pointer.html","","<p>Fiddle::Pointer is a class to handle C pointers\n"],["Fiddle::Win32Types","","Fiddle/Win32Types.html","","<p>Adds Windows type aliases to the including class for use with\nFiddle::Importer.\n<p>The aliases added are: …\n"],["+","Fiddle::Pointer","Fiddle/Pointer.html#method-i-2B","(p1)","<p>Returns a new pointer instance that has been advanced <code>n</code> bytes.\n"],["+@","Fiddle::Pointer","Fiddle/Pointer.html#method-i-2B-40","()","<p>Returns a new Fiddle::Pointer instance that is a dereferenced pointer for\nthis pointer.\n<p>Analogous to the …\n"],["-","Fiddle::Pointer","Fiddle/Pointer.html#method-i-2D","(p1)","<p>Returns a new pointer instance that has been moved back <code>n</code>\nbytes.\n"],["-@","Fiddle::Pointer","Fiddle/Pointer.html#method-i-2D-40","()","<p>Returns a new Fiddle::Pointer instance that is a reference pointer for this\npointer.\n<p>Analogous to the …\n"],["<=>","Fiddle::Pointer","Fiddle/Pointer.html#method-i-3C-3D-3E","(p1)","<p>Returns -1 if less than, 0 if equal to, 1 if greater than\n<code>other</code>.\n<p>Returns nil if <code>ptr</code> cannot be compared …\n"],["==","Fiddle::Pointer","Fiddle/Pointer.html#method-i-3D-3D","(p1)","<p>Returns true if <code>other</code> wraps the same pointer, otherwise\nreturns false.\n"],["[]","Fiddle::CStructEntity","Fiddle/CStructEntity.html#method-i-5B-5D","(name)","<p>Fetch struct member <code>name</code>\n"],["[]","Fiddle::CompositeHandler","Fiddle/CompositeHandler.html#method-i-5B-5D","(symbol)","<p>See Fiddle::CompositeHandler.sym\n"],["[]","Fiddle::Handle","Fiddle/Handle.html#method-i-5B-5D","(p1)","<p>Get the address as an Integer for the function named <code>name</code>.\n"],["[]","Fiddle::Handle","Fiddle/Handle.html#method-c-5B-5D","(p1)","<p>Get the address as an Integer for the function named <code>name</code>. \nThe function is searched via dlsym on RTLD_NEXT …\n"],["[]","Fiddle::Importer","Fiddle/Importer.html#method-i-5B-5D","(name)","<p>Returns the function mapped to <code>name</code>, that was created by\neither Fiddle::Importer.extern or Fiddle::Importer.bind …\n"],["[]","Fiddle::Pointer","Fiddle/Pointer.html#method-i-5B-5D","(p1, p2 = v2)","<p>Returns integer stored at <em>index</em>.\n<p>If <em>start</em> and <em>length</em> are given, a string containing the\nbytes from <em>start</em> …\n"],["[]","Fiddle::Pointer","Fiddle/Pointer.html#method-c-5B-5D","(p1)","<p>Get the underlying pointer for ruby object <code>val</code> and return it\nas a Fiddle::Pointer object.\n"],["[]=","Fiddle::CStructEntity","Fiddle/CStructEntity.html#method-i-5B-5D-3D","(name, val)","<p>Set struct member <code>name</code>, to value <code>val</code>\n"],["[]=","Fiddle::Pointer","Fiddle/Pointer.html#method-i-5B-5D-3D","(p1, p2, p3 = v3)","<p>Set the value at <code>index</code> to <code>int</code>.\n<p>Or, set the memory at <code>start</code> until <code>length</code> with the\ncontents of <code>string</code>, the …\n"],["assign_names","Fiddle::CStructEntity","Fiddle/CStructEntity.html#method-i-assign_names","(members)","<p>Set the names of the <code>members</code> in this C struct\n"],["bind","Fiddle::Importer","Fiddle/Importer.html#method-i-bind","(signature, *opts, &blk)","<p>Creates a global method from the given C <code>signature</code> using the\ngiven <code>opts</code> as bind parameters with the given …\n"],["bind_function","Fiddle::Importer","Fiddle/Importer.html#method-i-bind_function","(name, ctype, argtype, call_type = nil, &block)","<p>Returns a new closure wrapper for the <code>name</code> function.\n<p><code>ctype</code> is the return type of the function\n<p><code>argtype</code> is ...\n"],["call","Fiddle::Closure::BlockCaller","Fiddle/Closure/BlockCaller.html#method-i-call","(*args)","<p>Calls the constructed BlockCaller, with <code>args</code>\n<p>For an example see Fiddle::Closure::BlockCaller.new\n"],["call","Fiddle::Function","Fiddle/Function.html#method-i-call","(*args)","<p>Calls the constructed Function, with <code>args</code>\n<p>For an example see Fiddle::Function\n"],["close","Fiddle::Handle","Fiddle/Handle.html#method-i-close","()","<p>Close this handle.\n<p>Calling close more than once will raise a Fiddle::DLError exception.\n"],["close_enabled?","Fiddle::Handle","Fiddle/Handle.html#method-i-close_enabled-3F","()","<p>Returns <code>true</code> if dlclose() will be called when this handle is\ngarbage collected.\n<p>See man(3) dlclose() for …\n"],["create","Fiddle::CStructBuilder","Fiddle/CStructBuilder.html#method-c-create","(klass, types, members)","<p>Construct a new class given a C:\n<p>class <code>klass</code> (CUnion, CStruct, or other that provide an\n#entity_class …\n"],["create_value","Fiddle::Importer","Fiddle/Importer.html#method-i-create_value","(ty, val=nil)","<p>Creates a class to wrap the C struct with the value <code>ty</code>\n<p>See also Fiddle::Importer.struct\n"],["disable_close","Fiddle::Handle","Fiddle/Handle.html#method-i-disable_close","()","<p>Disable a call to dlclose() when this handle is garbage collected.\n"],["dlload","Fiddle::Importer","Fiddle/Importer.html#method-i-dlload","(*libs)","<p>Creates an array of handlers for the given <code>libs</code>, can be an\ninstance of Fiddle::Handle, Fiddle::Importer …\n"],["dlopen","Fiddle","Fiddle.html#method-c-dlopen","(library)","<p>Creates a new handler that opens <code>library</code>, and returns an\ninstance of Fiddle::Handle.\n<p>If <code>nil</code> is given for …\n"],["dlunwrap","Fiddle","Fiddle.html#method-c-dlunwrap","(p1)","<p>Returns the hexadecimal representation of a memory pointer address\n<code>addr</code>\n<p>Example:\n\n<pre>lib = Fiddle.dlopen('/lib64/libc-2.15.so') ...</pre>\n"],["dlwrap","Fiddle","Fiddle.html#method-c-dlwrap","(p1)","<p>Returns a memory pointer of a function’s hexadecimal address location\n<code>val</code>\n<p>Example:\n\n<pre>lib = Fiddle.dlopen('/lib64/libc-2.15.so') ...</pre>\n"],["enable_close","Fiddle::Handle","Fiddle/Handle.html#method-i-enable_close","()","<p>Enable a call to dlclose() when this handle is garbage collected.\n"],["entity_class","Fiddle::CStruct","Fiddle/CStruct.html#method-c-entity_class","()","<p>accessor to Fiddle::CStructEntity\n"],["entity_class","Fiddle::CUnion","Fiddle/CUnion.html#method-c-entity_class","()","<p>accessor to Fiddle::CUnionEntity\n"],["eql?","Fiddle::Pointer","Fiddle/Pointer.html#method-i-eql-3F","(p1)","<p>Returns true if <code>other</code> wraps the same pointer, otherwise\nreturns false.\n"],["extern","Fiddle::Importer","Fiddle/Importer.html#method-i-extern","(signature, *opts)","<p>Creates a global method from the given C <code>signature</code>.\n"],["free","Fiddle","Fiddle.html#method-c-free","(p1)","<p>Free the memory at address <code>addr</code>\n"],["free","Fiddle::Pointer","Fiddle/Pointer.html#method-i-free","()","<p>Get the free function for this pointer.\n<p>Returns a new instance of Fiddle::Function.\n<p>See Fiddle::Function.new …\n"],["free=","Fiddle::Pointer","Fiddle/Pointer.html#method-i-free-3D","(p1)","<p>Set the free function for this pointer to <code>function</code> in the\ngiven Fiddle::Function.\n"],["handler","Fiddle::Importer","Fiddle/Importer.html#method-i-handler","()","<p>The Fiddle::CompositeHandler instance\n<p>Will raise an error if no handlers are open.\n"],["handlers","Fiddle::CompositeHandler","Fiddle/CompositeHandler.html#method-i-handlers","()","<p>Array of the currently loaded libraries.\n"],["import_function","Fiddle::Importer","Fiddle/Importer.html#method-i-import_function","(name, ctype, argtype, call_type = nil)","<p>Returns a new Fiddle::Function instance at the memory address of the given\n<code>name</code> function.\n<p>Raises a DLError …\n"],["import_symbol","Fiddle::Importer","Fiddle/Importer.html#method-i-import_symbol","(name)","<p>Returns a new Fiddle::Pointer instance at the memory address of the given\n<code>name</code> symbol.\n<p>Raises a DLError …\n"],["import_value","Fiddle::Importer","Fiddle/Importer.html#method-i-import_value","(ty, addr)","<p>Returns a new instance of the C struct with the value <code>ty</code> at\nthe <code>addr</code> address.\n"],["inspect","Fiddle::Pointer","Fiddle/Pointer.html#method-i-inspect","()","<p>Returns a string formatted with an easily readable representation of the\ninternal state of the pointer. …\n"],["last_error","Fiddle","Fiddle.html#method-c-last_error","()","<p>Returns the last <code>Error</code> of the current executing\n<code>Thread</code> or nil if none\n"],["last_error=","Fiddle","Fiddle.html#method-c-last_error-3D","(error)","<p>Sets the last <code>Error</code> of the current executing\n<code>Thread</code> to <code>error</code>\n"],["malloc","Fiddle","Fiddle.html#method-c-malloc","(p1)","<p>Allocate <code>size</code> bytes of memory and return the integer memory\naddress for the allocated memory.\n"],["malloc","Fiddle::CStructEntity","Fiddle/CStructEntity.html#method-c-malloc","(types, func = nil)","<p>Allocates a C struct with the <code>types</code> provided.\n<p>When the instance is garbage collected, the C function  …\n"],["malloc","Fiddle::CUnionEntity","Fiddle/CUnionEntity.html#method-c-malloc","(types, func=nil)","<p>Allocates a C union the <code>types</code> provided.\n<p>When the instance is garbage collected, the C function <code>func</code> is\n…\n"],["malloc","Fiddle::Pointer","Fiddle/Pointer.html#method-c-malloc","(p1, p2 = v2)","<p>Allocate <code>size</code> bytes of memory and associate it with an\noptional <code>freefunc</code> that will be called when the …\n"],["new","Fiddle::CStructEntity","Fiddle/CStructEntity.html#method-c-new","(addr, types, func = nil)","<p>Wraps the C pointer <code>addr</code> as a C struct with the given\n<code>types</code>.\n<p>When the instance is garbage collected, the …\n"],["new","Fiddle::Closure","Fiddle/Closure.html#method-c-new","(p1, p2, p3 = v3)","<p>Construct a new Closure object.\n<p><code>ret</code> is the C type to be returned\n<p><code>args</code> is an Array of arguments, passed ...\n"],["new","Fiddle::Closure::BlockCaller","Fiddle/Closure/BlockCaller.html#method-c-new","(ctype, args, abi = Fiddle::Function::DEFAULT, &block)","<p>Description\n<p>Construct a new BlockCaller object.\n<p><code>ctype</code> is the C type to be returned\n"],["new","Fiddle::CompositeHandler","Fiddle/CompositeHandler.html#method-c-new","(handlers)","<p>Create a new handler with the open <code>handlers</code>\n<p>Used internally by Fiddle::Importer.dlload\n"],["new","Fiddle::Function","Fiddle/Function.html#method-c-new","(p1, p2, p3, p4 = v4, p5 = {})","<p>Constructs a Function object.\n<p><code>ptr</code> is a referenced function, of a Fiddle::Handle\n<p><code>args</code> is an Array of arguments, ...\n"],["new","Fiddle::Handle","Fiddle/Handle.html#method-c-new","(p1 = v1, p2 = v2)","<p>Create a new handler that opens <code>library</code> with\n<code>flags</code>.\n<p>If no <code>library</code> is specified or <code>nil</code> is given,\nDEFAULT …\n"],["new","Fiddle::Pointer","Fiddle/Pointer.html#method-c-new","(p1, p2 = v2, p3 = v3)","<p>Create a new pointer to <code>address</code> with an optional\n<code>size</code> and <code>freefunc</code>.\n<p><code>freefunc</code> will be called when the instance ...\n"],["null?","Fiddle::Pointer","Fiddle/Pointer.html#method-i-null-3F","()","<p>Returns <code>true</code> if this is a null pointer.\n"],["parse_ctype","Fiddle::CParser","Fiddle/CParser.html#method-i-parse_ctype","(ty, tymap=nil)","<p>Given a String of C type <code>ty</code>, returns the corresponding Fiddle\nconstant.\n<p><code>ty</code> can also accept an Array of ...\n"],["parse_signature","Fiddle::CParser","Fiddle/CParser.html#method-i-parse_signature","(signature, tymap=nil)","<p>Parses a C prototype signature\n<p>If Hash <code>tymap</code> is provided, the return value and the arguments\nfrom the …\n"],["parse_struct_signature","Fiddle::CParser","Fiddle/CParser.html#method-i-parse_struct_signature","(signature, tymap=nil)","<p>Parses a C struct’s members\n<p>Example:\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">include</span> <span class=\"ruby-constant\">Fiddle</span><span class=\"ruby-operator\">::</span><span class=\"ruby-constant\">CParser</span>\n  <span class=\"ruby-comment\">#=&gt; Object</span>\n\n<span class=\"ruby-identifier\">parse_struct_signature</span>([<span class=\"ruby-string\">'int ...\n</span></pre>\n"],["ptr","Fiddle::Pointer","Fiddle/Pointer.html#method-i-ptr","()","<p>Returns a new Fiddle::Pointer instance that is a dereferenced pointer for\nthis pointer.\n<p>Analogous to the …\n"],["realloc","Fiddle","Fiddle.html#method-c-realloc","(p1, p2)","<p>Change the size of the memory allocated at the memory location\n<code>addr</code> to <code>size</code> bytes.  Returns the memory …\n"],["ref","Fiddle::Pointer","Fiddle/Pointer.html#method-i-ref","()","<p>Returns a new Fiddle::Pointer instance that is a reference pointer for this\npointer.\n<p>Analogous to the …\n"],["set_ctypes","Fiddle::CStructEntity","Fiddle/CStructEntity.html#method-i-set_ctypes","(types)","<p>Calculates the offsets and sizes for the given <code>types</code> in the\nstruct.\n"],["set_ctypes","Fiddle::CUnionEntity","Fiddle/CUnionEntity.html#method-i-set_ctypes","(types)","<p>Calculate the necessary offset and for each union member with the given\n<code>types</code>\n"],["size","Fiddle::CStructEntity","Fiddle/CStructEntity.html#method-c-size","(types)","<p>Returns the offset for the packed sizes for the given <code>types</code>.\n\n<pre>Fiddle::CStructEntity.size(\n  [ Fiddle::TYPE_DOUBLE, ...</pre>\n"],["size","Fiddle::CUnionEntity","Fiddle/CUnionEntity.html#method-c-size","(types)","<p>Returns the size needed for the union with the given <code>types</code>.\n\n<pre>Fiddle::CUnionEntity.size(\n  [ Fiddle::TYPE_DOUBLE, ...</pre>\n"],["size","Fiddle::Pointer","Fiddle/Pointer.html#method-i-size","()","<p>Get the size of this pointer.\n"],["size=","Fiddle::Pointer","Fiddle/Pointer.html#method-i-size-3D","(p1)","<p>Set the size of this pointer to <code>size</code>\n"],["sizeof","Fiddle::Importer","Fiddle/Importer.html#method-i-sizeof","(ty)","<p>Returns the sizeof <code>ty</code>, using Fiddle::Importer.parse_ctype to\ndetermine the C type and the appropriate …\n"],["struct","Fiddle::Importer","Fiddle/Importer.html#method-i-struct","(signature)","<p>Creates a class to wrap the C struct described by <code>signature</code>.\n\n<pre>MyStruct = struct ['int i', 'char c']</pre>\n"],["sym","Fiddle::CompositeHandler","Fiddle/CompositeHandler.html#method-i-sym","(symbol)","<p>Returns the address as an Integer from any handlers with the function named\n<code>symbol</code>.\n<p>Raises a DLError if …\n"],["sym","Fiddle::Handle","Fiddle/Handle.html#method-i-sym","(p1)","<p>Get the address as an Integer for the function named <code>name</code>.\n"],["sym","Fiddle::Handle","Fiddle/Handle.html#method-c-sym","(p1)","<p>Get the address as an Integer for the function named <code>name</code>.\n"],["to_i","Fiddle::Closure","Fiddle/Closure.html#method-i-to_i","()","<p>Returns the memory address for this closure\n"],["to_i","Fiddle::Function","Fiddle/Function.html#method-i-to_i","()","<p>The integer memory location of this function\n"],["to_i","Fiddle::Handle","Fiddle/Handle.html#method-i-to_i","()","<p>Returns the memory address for this handle.\n"],["to_i","Fiddle::Pointer","Fiddle/Pointer.html#method-i-to_i","()","<p>Returns the integer memory location of this pointer.\n"],["to_int","Fiddle::Pointer","Fiddle/Pointer.html#method-i-to_int","()","<p>Returns the integer memory location of this pointer.\n"],["to_ptr","Fiddle::Pointer","Fiddle/Pointer.html#method-c-to_ptr","(p1)","<p>Get the underlying pointer for ruby object <code>val</code> and return it\nas a Fiddle::Pointer object.\n"],["to_s","Fiddle::Pointer","Fiddle/Pointer.html#method-i-to_s","(p1 = v1)","<p>Returns the pointer contents as a string.\n<p>When called with no arguments, this method will return the contents …\n"],["to_str","Fiddle::Pointer","Fiddle/Pointer.html#method-i-to_str","(p1 = v1)","<p>Returns the pointer contents as a string.\n<p>When called with no arguments, this method will return the contents …\n"],["to_value","Fiddle::Pointer","Fiddle/Pointer.html#method-i-to_value","()","<p>Cast this pointer to a ruby object.\n"],["typealias","Fiddle::Importer","Fiddle/Importer.html#method-i-typealias","(alias_type, orig_type)","<p>Sets the type alias for <code>alias_type</code> as <code>orig_type</code>\n"],["union","Fiddle::Importer","Fiddle/Importer.html#method-i-union","(signature)","<p>Creates a class to wrap the C union described by <code>signature</code>.\n\n<pre>MyUnion = union ['int i', 'char c']</pre>\n"],["value","Fiddle::Importer","Fiddle/Importer.html#method-i-value","(ty, val=nil)",""],["win32_last_error","Fiddle","Fiddle.html#method-c-win32_last_error","()","<p>Returns the last win32 <code>Error</code> of the current executing\n<code>Thread</code> or nil if none\n"],["win32_last_error=","Fiddle","Fiddle.html#method-c-win32_last_error-3D","(error)","<p>Sets the last win32 <code>Error</code> of the current executing\n<code>Thread</code> to <code>error</code>\n"]]}}