var search_data = {"index":{"searchIndex":["prettyprint","singleline","break_outmost_groups()","breakable()","breakable()","current_group()","fill_breakable()","first?()","first?()","flush()","format()","group()","group()","group_sub()","nest()","new()","new()","singleline_format()","text()","text()"],"longSearchIndex":["prettyprint","prettyprint::singleline","prettyprint#break_outmost_groups()","prettyprint#breakable()","prettyprint::singleline#breakable()","prettyprint#current_group()","prettyprint#fill_breakable()","prettyprint#first?()","prettyprint::singleline#first?()","prettyprint#flush()","prettyprint::format()","prettyprint#group()","prettyprint::singleline#group()","prettyprint#group_sub()","prettyprint#nest()","prettyprint::new()","prettyprint::singleline::new()","prettyprint::singleline_format()","prettyprint#text()","prettyprint::singleline#text()"],"info":[["PrettyPrint","","PrettyPrint.html","","<p>This class implements a pretty printing algorithm. It finds line breaks and\nnice indentations for grouped …\n"],["PrettyPrint::SingleLine","","PrettyPrint/SingleLine.html","","<p>PrettyPrint::SingleLine is used by PrettyPrint.singleline_format\n<p>It is passed to be similar to a PrettyPrint …\n"],["break_outmost_groups","PrettyPrint","PrettyPrint.html#method-i-break_outmost_groups","()","<p>Breaks the buffer into lines that are shorter than #maxwidth\n"],["breakable","PrettyPrint","PrettyPrint.html#method-i-breakable","(sep=' ', width=sep.length)","<p>This says “you can break a line here if necessary”, and a\n<code>width</code>-column text <code>sep</code> is inserted …\n"],["breakable","PrettyPrint::SingleLine","PrettyPrint/SingleLine.html#method-i-breakable","(sep=' ', width=nil)","<p>Appends <code>sep</code> to the text to be output. By default\n<code>sep</code> is ‘ ’\n<p><code>width</code> argument is here for compatibility. ...\n"],["current_group","PrettyPrint","PrettyPrint.html#method-i-current_group","()","<p>Returns the group most recently added to the stack.\n<p>Contrived example:\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">out</span> = <span class=\"ruby-string\">&quot;&quot;</span>\n=<span class=\"ruby-operator\">&gt;</span> <span class=\"ruby-string\">&quot;&quot;</span>\n<span class=\"ruby-identifier\">q</span> = <span class=\"ruby-constant\">PrettyPrint</span>.<span class=\"ruby-identifier\">new</span>(<span class=\"ruby-identifier\">out</span>) <span class=\"ruby-operator\">...</span>\n</pre>\n"],["fill_breakable","PrettyPrint","PrettyPrint.html#method-i-fill_breakable","(sep=' ', width=sep.length)","<p>This is similar to #breakable except the decision to break or not is\ndetermined individually.\n<p>Two #fill_breakable …\n"],["first?","PrettyPrint","PrettyPrint.html#method-i-first-3F","()","<p>first? is a predicate to test the call is a first call to first? with\ncurrent group.\n<p>It is useful to format …\n"],["first?","PrettyPrint::SingleLine","PrettyPrint/SingleLine.html#method-i-first-3F","()","<p>This is used as a predicate, and ought to be called first.\n"],["flush","PrettyPrint","PrettyPrint.html#method-i-flush","()","<p>outputs buffered data.\n"],["format","PrettyPrint","PrettyPrint.html#method-c-format","(output='', maxwidth=79, newline=\"\\n\", genspace=lambda {|n| ' ' * n})","<p>This is a convenience method which is same as follows:\n\n<pre>begin\n  q = PrettyPrint.new(output, maxwidth, newline, ...</pre>\n"],["group","PrettyPrint","PrettyPrint.html#method-i-group","(indent=0, open_obj='', close_obj='', open_width=open_obj.length, close_width=close_obj.length)","<p>Groups line break hints added in the block. The line break hints are all to\nbe used or not.\n<p>If <code>indent</code> …\n"],["group","PrettyPrint::SingleLine","PrettyPrint/SingleLine.html#method-i-group","(indent=nil, open_obj='', close_obj='', open_width=nil, close_width=nil)","<p>Opens a block for grouping objects to be pretty printed.\n<p>Arguments:\n<p><code>indent</code> - noop argument. Present for ...\n"],["group_sub","PrettyPrint","PrettyPrint.html#method-i-group_sub","()","<p>Takes a block and queues a new group that is indented 1 level further.\n"],["nest","PrettyPrint","PrettyPrint.html#method-i-nest","(indent)","<p>Increases left margin after newline with <code>indent</code> for line\nbreaks added in the block.\n"],["new","PrettyPrint","PrettyPrint.html#method-c-new","(output='', maxwidth=79, newline=\"\\n\", &genspace)","<p>Creates a buffer for pretty printing.\n<p><code>output</code> is an output target. If it is not specified, \" is\nassumed. ...\n"],["new","PrettyPrint::SingleLine","PrettyPrint/SingleLine.html#method-c-new","(output, maxwidth=nil, newline=nil)","<p>Create a PrettyPrint::SingleLine object\n<p>Arguments:\n<p><code>output</code> - String (or similar) to store rendered text. ...\n"],["singleline_format","PrettyPrint","PrettyPrint.html#method-c-singleline_format","(output='', maxwidth=nil, newline=nil, genspace=nil)","<p>This is similar to PrettyPrint::format but the result has no breaks.\n<p><code>maxwidth</code>, <code>newline</code> and <code>genspace</code> are\n...\n"],["text","PrettyPrint","PrettyPrint.html#method-i-text","(obj, width=obj.length)","<p>This adds <code>obj</code> as a text of <code>width</code> columns in\nwidth.\n<p>If <code>width</code> is not specified, obj.length is used.\n"],["text","PrettyPrint::SingleLine","PrettyPrint/SingleLine.html#method-i-text","(obj, width=nil)","<p>Add <code>obj</code> to the text to be output.\n<p><code>width</code> argument is here for compatibility. It is a noop\nargument.\n"]]}}