var search_data = {"index":{"searchIndex":["minitest","spec","unit","testcase","assert_performance()","assert_performance_constant()","assert_performance_exponential()","assert_performance_linear()","assert_performance_logarithmic()","assert_performance_power()","bench_exp()","bench_linear()","bench_range()","benchmark_suites()","fit_error()","fit_exponential()","fit_linear()","fit_logarithmic()","fit_power()","sigma()","validation_for_fit()"],"longSearchIndex":["minitest","minitest::spec","minitest::unit","minitest::unit::testcase","minitest::unit::testcase#assert_performance()","minitest::unit::testcase#assert_performance_constant()","minitest::unit::testcase#assert_performance_exponential()","minitest::unit::testcase#assert_performance_linear()","minitest::unit::testcase#assert_performance_logarithmic()","minitest::unit::testcase#assert_performance_power()","minitest::unit::testcase::bench_exp()","minitest::unit::testcase::bench_linear()","minitest::unit::testcase::bench_range()","minitest::unit::testcase::benchmark_suites()","minitest::unit::testcase#fit_error()","minitest::unit::testcase#fit_exponential()","minitest::unit::testcase#fit_linear()","minitest::unit::testcase#fit_logarithmic()","minitest::unit::testcase#fit_power()","minitest::unit::testcase#sigma()","minitest::unit::testcase#validation_for_fit()"],"info":[["MiniTest","","MiniTest.html","",""],["MiniTest::Spec","","MiniTest/Spec.html","",""],["MiniTest::Unit","","MiniTest/Unit.html","",""],["MiniTest::Unit::TestCase","","MiniTest/Unit/TestCase.html","",""],["assert_performance","MiniTest::Unit::TestCase","MiniTest/Unit/TestCase.html#method-i-assert_performance","(validation, &work)","<p>Runs the given <code>work</code>, gathering the times of each run. Range\nand times are then passed to a given <code>validation</code> …\n"],["assert_performance_constant","MiniTest::Unit::TestCase","MiniTest/Unit/TestCase.html#method-i-assert_performance_constant","(threshold = 0.99, &work)","<p>Runs the given <code>work</code> and asserts that the times gathered fit to\nmatch a constant rate (eg, linear slope …\n"],["assert_performance_exponential","MiniTest::Unit::TestCase","MiniTest/Unit/TestCase.html#method-i-assert_performance_exponential","(threshold = 0.99, &work)","<p>Runs the given <code>work</code> and asserts that the times gathered fit to\nmatch a exponential curve within a given …\n"],["assert_performance_linear","MiniTest::Unit::TestCase","MiniTest/Unit/TestCase.html#method-i-assert_performance_linear","(threshold = 0.99, &work)","<p>Runs the given <code>work</code> and asserts that the times gathered fit to\nmatch a straight line within a given error …\n"],["assert_performance_logarithmic","MiniTest::Unit::TestCase","MiniTest/Unit/TestCase.html#method-i-assert_performance_logarithmic","(threshold = 0.99, &work)","<p>Runs the given <code>work</code> and asserts that the times gathered fit to\nmatch a logarithmic curve within a given …\n"],["assert_performance_power","MiniTest::Unit::TestCase","MiniTest/Unit/TestCase.html#method-i-assert_performance_power","(threshold = 0.99, &work)","<p>Runs the given <code>work</code> and asserts that the times gathered curve\nfit to match a power curve within a given …\n"],["bench_exp","MiniTest::Unit::TestCase","MiniTest/Unit/TestCase.html#method-c-bench_exp","(min, max, base = 10)","<p>Returns a set of ranges stepped exponentially from <code>min</code> to\n<code>max</code> by powers of <code>base</code>. Eg:\n\n<pre>bench_exp(2, 16, ...</pre>\n"],["bench_linear","MiniTest::Unit::TestCase","MiniTest/Unit/TestCase.html#method-c-bench_linear","(min, max, step = 10)","<p>Returns a set of ranges stepped linearly from <code>min</code> to\n<code>max</code> by <code>step</code>. Eg:\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">bench_linear</span>(<span class=\"ruby-value\">20</span>, <span class=\"ruby-value\">40</span>, <span class=\"ruby-value\">10</span>) <span class=\"ruby-comment\"># =&gt; [20, ...</span>\n</pre>\n"],["bench_range","MiniTest::Unit::TestCase","MiniTest/Unit/TestCase.html#method-c-bench_range","()","<p>Specifies the ranges used for benchmarking for that class. Defaults to\nexponential growth from 1 to 10k …\n"],["benchmark_suites","MiniTest::Unit::TestCase","MiniTest/Unit/TestCase.html#method-c-benchmark_suites","()","<p>Returns all test suites that have benchmark methods.\n"],["fit_error","MiniTest::Unit::TestCase","MiniTest/Unit/TestCase.html#method-i-fit_error","(xys)","<p>Takes an array of x/y pairs and calculates the general R^2 value.\n<p>See: en.wikipedia.org/wiki/Coefficient_of_determination …\n"],["fit_exponential","MiniTest::Unit::TestCase","MiniTest/Unit/TestCase.html#method-i-fit_exponential","(xs, ys)","<p>To fit a functional form: y = ae^(bx).\n<p>Takes x and y values and returns [a, b, r^2].\n<p>See: mathworld.wolfram.com/LeastSquaresFittingExponential.html …\n"],["fit_linear","MiniTest::Unit::TestCase","MiniTest/Unit/TestCase.html#method-i-fit_linear","(xs, ys)","<p>Fits the functional form: a + bx.\n<p>Takes x and y values and returns [a, b, r^2].\n<p>See: mathworld.wolfram.com/LeastSquaresFitting.html …\n"],["fit_logarithmic","MiniTest::Unit::TestCase","MiniTest/Unit/TestCase.html#method-i-fit_logarithmic","(xs, ys)","<p>To fit a functional form: y = a + b*ln(x).\n<p>Takes x and y values and returns [a, b, r^2].\n<p>See: mathworld.wolfram.com/LeastSquaresFittingLogarithmic.html …\n"],["fit_power","MiniTest::Unit::TestCase","MiniTest/Unit/TestCase.html#method-i-fit_power","(xs, ys)","<p>To fit a functional form: y = ax^b.\n<p>Takes x and y values and returns [a, b, r^2].\n<p>See: mathworld.wolfram.com/LeastSquaresFittingPowerLaw.html …\n"],["sigma","MiniTest::Unit::TestCase","MiniTest/Unit/TestCase.html#method-i-sigma","(enum, &block)","<p>Enumerates over <code>enum</code> mapping <code>block</code> if given,\nreturning the sum of the result. Eg:\n\n<pre>sigma([1, 2, 3])    ...</pre>\n"],["validation_for_fit","MiniTest::Unit::TestCase","MiniTest/Unit/TestCase.html#method-i-validation_for_fit","(msg, threshold)","<p>Returns a proc that calls the specified fit method and asserts that the\nerror is within a tolerable threshold. …\n"]]}}