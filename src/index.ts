export default class Es6Boilerplate {

	constructor(private element: HTMLElement, private options: any) {

		console.log('load module1 in 1500ms');

		setTimeout(() => {

			this.lazyLoadModule1().then((mod: any) => {

				const mod1 = new mod.Module1();
				mod1.test();

			}).catch((error: any) => {
				console.log('An error occurred while loading the component', error);
			});

		}, 1500);
	}

	lazyLoadModule1(): Promise<any> {
		return new Promise((resolve, reject) => {

			require.ensure(['./lib/Module1.ts'], () => {
				resolve(require('./lib/Module1.ts'));
			}, 'module1');
		});
	}
}
