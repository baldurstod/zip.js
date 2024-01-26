/* global URL */

import * as zip from "../../index.js";

const TEXT_CONTENT = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.";
const url = new URL("./../data/lorem-zip64.zip", import.meta.url).href;

export { test };

async function test() {
	zip.configure({ chunkSize: 128, useWebWorkers: true });
	const zipReader = new zip.ZipReader(new zip.HttpReader(url, { preventHeadRequest: true }));
	const entries = await zipReader.getEntries();
	const dataBlobWriter = new zip.BlobWriter(zip.getMimeType(entries[0].filename));
	const data = await entries[0].getData(dataBlobWriter);
	await zipReader.close();
	await zip.terminateWorkers();
	if (TEXT_CONTENT != await data.text()) {
		throw new Error();
	}
}