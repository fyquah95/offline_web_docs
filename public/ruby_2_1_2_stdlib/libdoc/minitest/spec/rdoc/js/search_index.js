var search_data = {"index":{"searchIndex":["minitest","expectations","spec","dsl","after()","before()","children()","it()","let()","must_be()","must_be_close_to()","must_be_empty()","must_be_instance_of()","must_be_kind_of()","must_be_nil()","must_be_same_as()","must_be_silent()","must_be_within_delta()","must_be_within_epsilon()","must_equal()","must_include()","must_match()","must_output()","must_raise()","must_respond_to()","must_send()","must_throw()","register_spec_type()","spec_type()","subject()","wont_be()","wont_be_close_to()","wont_be_empty()","wont_be_instance_of()","wont_be_kind_of()","wont_be_nil()","wont_be_same_as()","wont_be_within_delta()","wont_be_within_epsilon()","wont_equal()","wont_include()","wont_match()","wont_respond_to()"],"longSearchIndex":["minitest","minitest::expectations","minitest::spec","minitest::spec::dsl","minitest::spec::dsl#after()","minitest::spec::dsl#before()","minitest::spec::dsl#children()","minitest::spec::dsl#it()","minitest::spec::dsl#let()","minitest::expectations#must_be()","minitest::expectations#must_be_close_to()","minitest::expectations#must_be_empty()","minitest::expectations#must_be_instance_of()","minitest::expectations#must_be_kind_of()","minitest::expectations#must_be_nil()","minitest::expectations#must_be_same_as()","minitest::expectations#must_be_silent()","minitest::expectations#must_be_within_delta()","minitest::expectations#must_be_within_epsilon()","minitest::expectations#must_equal()","minitest::expectations#must_include()","minitest::expectations#must_match()","minitest::expectations#must_output()","minitest::expectations#must_raise()","minitest::expectations#must_respond_to()","minitest::expectations#must_send()","minitest::expectations#must_throw()","minitest::spec::dsl#register_spec_type()","minitest::spec::dsl#spec_type()","minitest::spec::dsl#subject()","minitest::expectations#wont_be()","minitest::expectations#wont_be_close_to()","minitest::expectations#wont_be_empty()","minitest::expectations#wont_be_instance_of()","minitest::expectations#wont_be_kind_of()","minitest::expectations#wont_be_nil()","minitest::expectations#wont_be_same_as()","minitest::expectations#wont_be_within_delta()","minitest::expectations#wont_be_within_epsilon()","minitest::expectations#wont_equal()","minitest::expectations#wont_include()","minitest::expectations#wont_match()","minitest::expectations#wont_respond_to()"],"info":[["MiniTest","","MiniTest.html","",""],["MiniTest::Expectations","","MiniTest/Expectations.html","","<p>It’s where you hide your “assertions”.\n"],["MiniTest::Spec","","MiniTest/Spec.html","","<p>MiniTest::Spec – The faster, better, less-magical spec framework!\n<p>For a list of expectations, see MiniTest::Expectations …\n"],["MiniTest::Spec::DSL","","MiniTest/Spec/DSL.html","","<p>Oh look! A MiniTest::Spec::DSL module! Eat your heart out DHH.\n"],["after","MiniTest::Spec::DSL","MiniTest/Spec/DSL.html#method-i-after","(type = nil, &block)","<p>Define an ‘after’ action. Inherits the way normal methods should.\n<p>NOTE: <code>type</code> is ignored and is only there …\n"],["before","MiniTest::Spec::DSL","MiniTest/Spec/DSL.html#method-i-before","(type = nil, &block)","<p>Define a ‘before’ action. Inherits the way normal methods should.\n<p>NOTE: <code>type</code> is ignored and is only there …\n"],["children","MiniTest::Spec::DSL","MiniTest/Spec/DSL.html#method-i-children","()","<p>Returns the children of this spec.\n"],["it","MiniTest::Spec::DSL","MiniTest/Spec/DSL.html#method-i-it","(desc = \"anonymous\", &block)","<p>Define an expectation with name <code>desc</code>. Name gets morphed to a\nproper test method name. For some freakish …\n"],["let","MiniTest::Spec::DSL","MiniTest/Spec/DSL.html#method-i-let","(name, &block)","<p>Essentially, define an accessor for <code>name</code> with\n<code>block</code>.\n<p>Why use let instead of def? I honestly don’t know. …\n"],["must_be","MiniTest::Expectations","MiniTest/Expectations.html#method-i-must_be","","<p>See MiniTest::Assertions#assert_operator\n\n<pre>n.must_be :&lt;=, 42</pre>\n<p>This can also do predicates:\n"],["must_be_close_to","MiniTest::Expectations","MiniTest/Expectations.html#method-i-must_be_close_to","","<p>See MiniTest::Assertions#assert_in_delta\n\n<pre>n.must_be_close_to m [, delta]</pre>\n"],["must_be_empty","MiniTest::Expectations","MiniTest/Expectations.html#method-i-must_be_empty","","<p>See MiniTest::Assertions#assert_empty.\n\n<pre>collection.must_be_empty</pre>\n"],["must_be_instance_of","MiniTest::Expectations","MiniTest/Expectations.html#method-i-must_be_instance_of","","<p>See MiniTest::Assertions#assert_instance_of\n\n<pre>obj.must_be_instance_of klass</pre>\n"],["must_be_kind_of","MiniTest::Expectations","MiniTest/Expectations.html#method-i-must_be_kind_of","","<p>See MiniTest::Assertions#assert_kind_of\n\n<pre>obj.must_be_kind_of mod</pre>\n"],["must_be_nil","MiniTest::Expectations","MiniTest/Expectations.html#method-i-must_be_nil","","<p>See MiniTest::Assertions#assert_nil\n\n<pre>obj.must_be_nil</pre>\n"],["must_be_same_as","MiniTest::Expectations","MiniTest/Expectations.html#method-i-must_be_same_as","","<p>See MiniTest::Assertions#assert_same\n\n<pre>a.must_be_same_as b</pre>\n"],["must_be_silent","MiniTest::Expectations","MiniTest/Expectations.html#method-i-must_be_silent","","<p>See MiniTest::Assertions#assert_silent\n\n<pre>proc { ... }.must_be_silent</pre>\n"],["must_be_within_delta","MiniTest::Expectations","MiniTest/Expectations.html#method-i-must_be_within_delta","",""],["must_be_within_epsilon","MiniTest::Expectations","MiniTest/Expectations.html#method-i-must_be_within_epsilon","","<p>See MiniTest::Assertions#assert_in_epsilon\n\n<pre>n.must_be_within_epsilon m [, epsilon]</pre>\n"],["must_equal","MiniTest::Expectations","MiniTest/Expectations.html#method-i-must_equal","","<p>See MiniTest::Assertions#assert_equal\n\n<pre>a.must_equal b</pre>\n"],["must_include","MiniTest::Expectations","MiniTest/Expectations.html#method-i-must_include","","<p>See MiniTest::Assertions#assert_includes\n\n<pre>collection.must_include obj</pre>\n"],["must_match","MiniTest::Expectations","MiniTest/Expectations.html#method-i-must_match","","<p>See MiniTest::Assertions#assert_match\n\n<pre>a.must_match b</pre>\n"],["must_output","MiniTest::Expectations","MiniTest/Expectations.html#method-i-must_output","","<p>See MiniTest::Assertions#assert_output\n\n<pre>proc { ... }.must_output out_or_nil [, err]</pre>\n"],["must_raise","MiniTest::Expectations","MiniTest/Expectations.html#method-i-must_raise","","<p>See MiniTest::Assertions#assert_raises\n\n<pre>proc { ... }.must_raise exception</pre>\n"],["must_respond_to","MiniTest::Expectations","MiniTest/Expectations.html#method-i-must_respond_to","","<p>See MiniTest::Assertions#assert_respond_to\n\n<pre>obj.must_respond_to msg</pre>\n"],["must_send","MiniTest::Expectations","MiniTest/Expectations.html#method-i-must_send","","<p>See MiniTest::Assertions#assert_send TODO: remove me\n\n<pre>a.must_send</pre>\n"],["must_throw","MiniTest::Expectations","MiniTest/Expectations.html#method-i-must_throw","","<p>See MiniTest::Assertions#assert_throws\n\n<pre>proc { ... }.must_throw sym</pre>\n"],["register_spec_type","MiniTest::Spec::DSL","MiniTest/Spec/DSL.html#method-i-register_spec_type","(*args, &block)","<p>Register a new type of spec that matches the spec’s description. This\nmethod can take either a Regexp …\n"],["spec_type","MiniTest::Spec::DSL","MiniTest/Spec/DSL.html#method-i-spec_type","(desc)","<p>Figure out the spec class to use based on a spec’s description. Eg:\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">spec_type</span>(<span class=\"ruby-string\">&quot;BlahController&quot;</span>) <span class=\"ruby-comment\"># =&gt; MiniTest::Spec::Rails</span>\n</pre>\n"],["subject","MiniTest::Spec::DSL","MiniTest/Spec/DSL.html#method-i-subject","(&block)","<p>Another lazy man’s accessor generator. Made even more lazy by setting the\nname for you to <code>subject</code>.\n"],["wont_be","MiniTest::Expectations","MiniTest/Expectations.html#method-i-wont_be","","<p>See MiniTest::Assertions#refute_operator\n\n<pre>n.wont_be :&lt;=, 42</pre>\n<p>This can also do predicates:\n"],["wont_be_close_to","MiniTest::Expectations","MiniTest/Expectations.html#method-i-wont_be_close_to","","<p>See MiniTest::Assertions#refute_in_delta\n\n<pre>n.wont_be_close_to m [, delta]</pre>\n"],["wont_be_empty","MiniTest::Expectations","MiniTest/Expectations.html#method-i-wont_be_empty","","<p>See MiniTest::Assertions#refute_empty\n\n<pre>collection.wont_be_empty</pre>\n"],["wont_be_instance_of","MiniTest::Expectations","MiniTest/Expectations.html#method-i-wont_be_instance_of","","<p>See MiniTest::Assertions#refute_instance_of\n\n<pre>obj.wont_be_instance_of klass</pre>\n"],["wont_be_kind_of","MiniTest::Expectations","MiniTest/Expectations.html#method-i-wont_be_kind_of","","<p>See MiniTest::Assertions#refute_kind_of\n\n<pre>obj.wont_be_kind_of mod</pre>\n"],["wont_be_nil","MiniTest::Expectations","MiniTest/Expectations.html#method-i-wont_be_nil","","<p>See MiniTest::Assertions#refute_nil\n\n<pre>obj.wont_be_nil</pre>\n"],["wont_be_same_as","MiniTest::Expectations","MiniTest/Expectations.html#method-i-wont_be_same_as","","<p>See MiniTest::Assertions#refute_same\n\n<pre>a.wont_be_same_as b</pre>\n"],["wont_be_within_delta","MiniTest::Expectations","MiniTest/Expectations.html#method-i-wont_be_within_delta","",""],["wont_be_within_epsilon","MiniTest::Expectations","MiniTest/Expectations.html#method-i-wont_be_within_epsilon","","<p>See MiniTest::Assertions#refute_in_epsilon\n\n<pre>n.wont_be_within_epsilon m [, epsilon]</pre>\n"],["wont_equal","MiniTest::Expectations","MiniTest/Expectations.html#method-i-wont_equal","","<p>See MiniTest::Assertions#refute_equal\n\n<pre>a.wont_equal b</pre>\n"],["wont_include","MiniTest::Expectations","MiniTest/Expectations.html#method-i-wont_include","","<p>See MiniTest::Assertions#refute_includes\n\n<pre>collection.wont_include obj</pre>\n"],["wont_match","MiniTest::Expectations","MiniTest/Expectations.html#method-i-wont_match","","<p>See MiniTest::Assertions#refute_match\n\n<pre>a.wont_match b</pre>\n"],["wont_respond_to","MiniTest::Expectations","MiniTest/Expectations.html#method-i-wont_respond_to","","<p>See MiniTest::Assertions#refute_respond_to\n\n<pre>obj.wont_respond_to msg</pre>\n"]]}}