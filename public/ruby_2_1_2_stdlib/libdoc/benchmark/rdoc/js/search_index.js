var search_data = {"index":{"searchIndex":["benchmark","tms","object","*()","+()","-()","/()","add()","add!()","benchmark()","bm()","bmbm()","format()","measure()","memberwise()","new()","realtime()","to_a()","to_s()"],"longSearchIndex":["benchmark","benchmark::tms","object","benchmark::tms#*()","benchmark::tms#+()","benchmark::tms#-()","benchmark::tms#/()","benchmark::tms#add()","benchmark::tms#add!()","benchmark::benchmark()","benchmark::bm()","benchmark::bmbm()","benchmark::tms#format()","benchmark::measure()","benchmark::tms#memberwise()","benchmark::tms::new()","benchmark::realtime()","benchmark::tms#to_a()","benchmark::tms#to_s()"],"info":[["Benchmark","","Benchmark.html","","<p>The Benchmark module provides methods to measure and report the time used\nto execute Ruby code.\n<p>Measure …\n"],["Benchmark::Tms","","Benchmark/Tms.html","","<p>A data object, representing the times associated with a benchmark\nmeasurement.\n"],["Object","","Object.html","",""],["*","Benchmark::Tms","Benchmark/Tms.html#method-i-2A","(x)","<p>Returns a new Tms object obtained by memberwise multiplication of the\nindividual times for this Tms object …\n"],["+","Benchmark::Tms","Benchmark/Tms.html#method-i-2B","(other)","<p>Returns a new Tms object obtained by memberwise summation of the individual\ntimes for this Tms object …\n"],["-","Benchmark::Tms","Benchmark/Tms.html#method-i-2D","(other)","<p>Returns a new Tms object obtained by memberwise subtraction of the\nindividual times for the other Tms …\n"],["/","Benchmark::Tms","Benchmark/Tms.html#method-i-2F","(x)","<p>Returns a new Tms object obtained by memberwise division of the individual\ntimes for this Tms object …\n"],["add","Benchmark::Tms","Benchmark/Tms.html#method-i-add","()","<p>Returns a new Tms object whose times are the sum of the times for this Tms\nobject, plus the time required …\n"],["add!","Benchmark::Tms","Benchmark/Tms.html#method-i-add-21","(&blk)","<p>An in-place version of #add.\n"],["benchmark","Benchmark","Benchmark.html#method-c-benchmark","(caption = \"\", label_width = nil, format = nil, *labels)","<p>Invokes the block with a Benchmark::Report object, which may be used to\ncollect and report on the results …\n"],["bm","Benchmark","Benchmark.html#method-c-bm","(label_width = 0, *labels)","<p>A simple interface to the #benchmark method, #bm generates sequential\nreports with labels.  The parameters …\n"],["bmbm","Benchmark","Benchmark.html#method-c-bmbm","(width = 0)","<p>Sometimes benchmark results are skewed because code executed earlier\nencounters different garbage collection …\n"],["format","Benchmark::Tms","Benchmark/Tms.html#method-i-format","(format = nil, *args)","<p>Returns the contents of this Tms object as a formatted string, according to\na format string like that …\n"],["measure","Benchmark","Benchmark.html#method-c-measure","(label = \"\")","<p>Returns the time used to execute the given block as a Benchmark::Tms\nobject.\n"],["memberwise","Benchmark::Tms","Benchmark/Tms.html#method-i-memberwise","(op, x)","<p>Returns a new Tms object obtained by memberwise operation <code>op</code>\nof the individual times for this Tms object …\n"],["new","Benchmark::Tms","Benchmark/Tms.html#method-c-new","(utime = 0.0, stime = 0.0, cutime = 0.0, cstime = 0.0, real = 0.0, label = nil)","<p>Returns an initialized Tms object which has <code>utime</code> as the user\nCPU time, <code>stime</code> as the system CPU time, …\n"],["realtime","Benchmark","Benchmark.html#method-c-realtime","()","<p>Returns the elapsed real time used to execute the given block.\n"],["to_a","Benchmark::Tms","Benchmark/Tms.html#method-i-to_a","()","<p>Returns a new 6-element array, consisting of the label, user CPU time,\nsystem CPU time, children’s user …\n"],["to_s","Benchmark::Tms","Benchmark/Tms.html#method-i-to_s","()","<p>Same as #format.\n"]]}}