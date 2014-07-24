var search_data = {"index":{"searchIndex":["enumerable","set","sortedset","&()","+()","-()","<()","<<()","<=()","==()",">()",">=()","[]()","^()","add()","add?()","classify()","clear()","collect!()","delete()","delete?()","delete_if()","difference()","disjoint?()","divide()","each()","empty?()","flatten()","flatten!()","include?()","initialize_copy()","inspect()","intersect?()","intersection()","keep_if()","length()","map!()","member?()","merge()","new()","proper_subset?()","proper_superset?()","reject!()","replace()","select!()","size()","subset?()","subtract()","superset?()","to_a()","to_set()","to_set()","union()","|()"],"longSearchIndex":["enumerable","set","sortedset","set#&()","set#+()","set#-()","set#<()","set#<<()","set#<=()","set#==()","set#>()","set#>=()","set::[]()","set#^()","set#add()","set#add?()","set#classify()","set#clear()","set#collect!()","set#delete()","set#delete?()","set#delete_if()","set#difference()","set#disjoint?()","set#divide()","set#each()","set#empty?()","set#flatten()","set#flatten!()","set#include?()","set#initialize_copy()","set#inspect()","set#intersect?()","set#intersection()","set#keep_if()","set#length()","set#map!()","set#member?()","set#merge()","set::new()","set#proper_subset?()","set#proper_superset?()","set#reject!()","set#replace()","set#select!()","set#size()","set#subset?()","set#subtract()","set#superset?()","set#to_a()","enumerable#to_set()","set#to_set()","set#union()","set#|()"],"info":[["Enumerable","","Enumerable.html","",""],["Set","","Set.html","","<p>Set implements a collection of unordered values with no duplicates. This is\na hybrid of Array’s intuitive …\n"],["SortedSet","","SortedSet.html","","<p>SortedSet implements a Set that guarantees that it’s element are yielded in\nsorted order (according to …\n"],["&","Set","Set.html#method-i-26","(enum)","<p>Returns a new set containing elements common to the set and the given\nenumerable object.\n"],["+","Set","Set.html#method-i-2B","(enum)",""],["-","Set","Set.html#method-i-2D","(enum)","<p>Returns a new set built by duplicating the set, removing every element that\nappears in the given enumerable …\n"],["<","Set","Set.html#method-i-3C","(set)",""],["<<","Set","Set.html#method-i-3C-3C","(o)",""],["<=","Set","Set.html#method-i-3C-3D","(set)",""],["==","Set","Set.html#method-i-3D-3D","(other)","<p>Returns true if two sets are equal.  The equality of each couple of\nelements is defined according to …\n"],[">","Set","Set.html#method-i-3E","(set)",""],[">=","Set","Set.html#method-i-3E-3D","(set)",""],["[]","Set","Set.html#method-c-5B-5D","(*ary)","<p>Creates a new set containing the given objects.\n"],["^","Set","Set.html#method-i-5E","(enum)","<p>Returns a new set containing elements exclusive between the set and the\ngiven enumerable object.  (set …\n"],["add","Set","Set.html#method-i-add","(o)","<p>Adds the given object to the set and returns self.  Use <code>merge</code>\nto add many elements at once.\n"],["add?","Set","Set.html#method-i-add-3F","(o)","<p>Adds the given object to the set and returns self.  If the object is\nalready in the set, returns nil. …\n"],["classify","Set","Set.html#method-i-classify","()","<p>Classifies the set by the return value of the given block and returns a\nhash of {value =&gt; set of elements} …\n"],["clear","Set","Set.html#method-i-clear","()","<p>Removes all elements and returns self.\n"],["collect!","Set","Set.html#method-i-collect-21","()","<p>Replaces the elements with ones returned by collect().\n"],["delete","Set","Set.html#method-i-delete","(o)","<p>Deletes the given object from the set and returns self.  Use\n<code>subtract</code> to delete many items at once.\n"],["delete?","Set","Set.html#method-i-delete-3F","(o)","<p>Deletes the given object from the set and returns self.  If the object is\nnot in the set, returns nil. …\n"],["delete_if","Set","Set.html#method-i-delete_if","()","<p>Deletes every element of the set for which block evaluates to true, and\nreturns self.\n"],["difference","Set","Set.html#method-i-difference","(enum)",""],["disjoint?","Set","Set.html#method-i-disjoint-3F","(set)","<p>Returns true if the set and the given set have no element in common.  This\nmethod is the opposite of …\n"],["divide","Set","Set.html#method-i-divide","(&func)","<p>Divides the set into a set of subsets according to the commonality defined\nby the given block.\n<p>If the …\n"],["each","Set","Set.html#method-i-each","(&block)","<p>Calls the given block once for each element in the set, passing the element\nas parameter.  Returns an …\n"],["empty?","Set","Set.html#method-i-empty-3F","()","<p>Returns true if the set contains no elements.\n"],["flatten","Set","Set.html#method-i-flatten","()","<p>Returns a new set that is a copy of the set, flattening each containing set\nrecursively.\n"],["flatten!","Set","Set.html#method-i-flatten-21","()","<p>Equivalent to Set#flatten, but replaces the receiver with the result in\nplace.  Returns nil if no modifications …\n"],["include?","Set","Set.html#method-i-include-3F","(o)","<p>Returns true if the set contains the given object.\n"],["initialize_copy","Set","Set.html#method-i-initialize_copy","(orig)","<p>Copy internal hash.\n"],["inspect","Set","Set.html#method-i-inspect","()","<p>Returns a string containing a human-readable representation of the set.\n(“#&lt;Set: {element1, element2, …\n"],["intersect?","Set","Set.html#method-i-intersect-3F","(set)","<p>Returns true if the set and the given set have at least one element in\ncommon.\n"],["intersection","Set","Set.html#method-i-intersection","(enum)",""],["keep_if","Set","Set.html#method-i-keep_if","()","<p>Deletes every element of the set for which block evaluates to false, and\nreturns self.\n"],["length","Set","Set.html#method-i-length","()",""],["map!","Set","Set.html#method-i-map-21","()",""],["member?","Set","Set.html#method-i-member-3F","(o)",""],["merge","Set","Set.html#method-i-merge","(enum)","<p>Merges the elements of the given enumerable object to the set and returns\nself.\n"],["new","Set","Set.html#method-c-new","(enum = nil)","<p>Creates a new set containing the elements of the given enumerable object.\n<p>If a block is given, the elements …\n"],["proper_subset?","Set","Set.html#method-i-proper_subset-3F","(set)","<p>Returns true if the set is a proper subset of the given set.\n"],["proper_superset?","Set","Set.html#method-i-proper_superset-3F","(set)","<p>Returns true if the set is a proper superset of the given set.\n"],["reject!","Set","Set.html#method-i-reject-21","(&block)","<p>Equivalent to Set#delete_if, but returns nil if no changes were made.\n"],["replace","Set","Set.html#method-i-replace","(enum)","<p>Replaces the contents of the set with the contents of the given enumerable\nobject and returns self.\n"],["select!","Set","Set.html#method-i-select-21","(&block)","<p>Equivalent to Set#keep_if, but returns nil if no changes were made.\n"],["size","Set","Set.html#method-i-size","()","<p>Returns the number of elements.\n"],["subset?","Set","Set.html#method-i-subset-3F","(set)","<p>Returns true if the set is a subset of the given set.\n"],["subtract","Set","Set.html#method-i-subtract","(enum)","<p>Deletes every element that appears in the given enumerable object and\nreturns self.\n"],["superset?","Set","Set.html#method-i-superset-3F","(set)","<p>Returns true if the set is a superset of the given set.\n"],["to_a","Set","Set.html#method-i-to_a","()","<p>Converts the set to an array.  The order of elements is uncertain.\n"],["to_set","Enumerable","Enumerable.html#method-i-to_set","(klass = Set, *args, &block)","<p>Makes a set from the enumerable object with given arguments. Needs to\n+require “set”+ to use …\n"],["to_set","Set","Set.html#method-i-to_set","(klass = Set, *args, &block)","<p>Returns self if no arguments are given.  Otherwise, converts the set to\nanother with klass.new(self, …\n"],["union","Set","Set.html#method-i-union","(enum)",""],["|","Set","Set.html#method-i-7C","(enum)","<p>Returns a new set built by merging the set and the elements of the given\nenumerable object.\n"]]}}