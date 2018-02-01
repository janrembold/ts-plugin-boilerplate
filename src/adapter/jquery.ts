///<reference types="jquery"/>

import Es6Boilerplate from '../index';
declare var jQuery: any;

(function ($: any) {
	const pluginName = 'es6Boilerplate';
	$.fn[pluginName] = function (options: any) {
		return this.each(function () {
			const $this = $(this);
			if (!$this.data(pluginName)) {
				$this.data(pluginName, new Es6Boilerplate(this, options));
			}
		});
	};
}(jQuery));
