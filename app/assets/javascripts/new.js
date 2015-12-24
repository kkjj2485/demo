(<span style="color: #008000; font-weight: bold;">function</span>($) {
$(<span style="color: #007020;">document</span>).ready(<span style="color: #008000; font-weight: bold;">function</span>() {
	$(<span style="background-color: #fff0f0;">':input'</span>).blur(<span style="color: #008000; font-weight: bold;">function</span> () {
		<span style="color: #008000; font-weight: bold;">if</span>($(<span style="color: #008000; font-weight: bold;">this</span>).val().length <span style="color: #303030;">&gt;</span> <span style="color: #0000d0; font-weight: bold;">0</span>) {
			_gaq.push([<span style="background-color: #fff0f0;">'_trackEvent'</span>, <span style="background-color: #fff0f0;">'name'</span>, <span style="background-color: #fff0f0;">'completed'</span>, $(<span style="color: #008000; font-weight: bold;">this</span>).attr(<span style="background-color: #fff0f0;">'name'</span>)]);
		}
		<span style="color: #008000; font-weight: bold;">else</span> {
			_gaq.push([<span style="background-color: #fff0f0;">'_trackEvent'</span>, <span style="background-color: #fff0f0;">'email'</span>, <span style="background-color: #fff0f0;">'skipped'</span>, $(<span style="color: #008000; font-weight: bold;">this</span>).attr(<span style="background-color: #fff0f0;">'name'</span>)]);
	});
});
})(jQuery);