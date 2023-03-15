export default ([
	{ title: "Abort signal (read)", script: "./test-abort-signal-read.js" },
	{ title: "Abort signal (write)", script: "./test-abort-signal-write.js" },
	{ title: "Uint8Array", script: "./test-array.js" },
	{ title: "Base 64", script: "./test-base64.js" },
	{ title: "Blob", script: "./test-blob.js" },
	{ title: "Common JS", script: "./test-common-js.cjs", env: ["node"] },
	{ title: "Crypto", script: "./test-crypto.js" },
	{ title: "Custom IO classes", script: "./test-custom-io.js" },
	{ title: "Data descriptor signature", script: "./test-data-descriptor-signature.js" },
	{ title: "Data descriptor", script: "./test-data-descriptor.js" },
	{ title: "Directory", script: "./test-directory.js" },
	{ title: "Duplicated Filename", script: "./test-duplicated-filename.js" },
	{ title: "Empty zip file", script: "./test-empty.js" },
	{ title: "Extended timestamp", script: "./test-extended-timestamp.js" },
	{ title: "Extra field", script: "./test-extra-field.js" },
	{ title: "Fflate", script: "./test-fflate.js", env: ["browser"] },
	{ title: "Fflate (no worker)", script: "./test-fflate-no-worker.js", sanitizeResources: false },
	{ title: "Filesystem base 64", script: "./test-fs-base64.js" },
	{ title: "Filesystem export", script: "./test-fs-export-options.js", env: ["deno", "browser"] },
	{ title: "Filesystem HTTP import", script: "./test-fs-http-import.js", env: ["deno", "browser"] },
	{ title: "Filesystem HTTP reader", script: "./test-fs-http-reader.js", env: ["deno", "browser"] },
	{ title: "Filesystem replace entry", script: "./test-fs-replace.js", env: ["deno", "browser"] },
	{ title: "Filesystem streams", script: "./test-fs-streams.js" },
	{ title: "Filesystem text", script: "./test-fs-text.js" },
	{ title: "Filesystem unzip uncompressed file", script: "./test-fs-unzip-store.js", env: ["deno", "browser"] },
	{ title: "Filesystem test", script: "./test-fs.js" },
	{ title: "HTTP crypto", script: "./test-http-crypto.js", env: ["deno", "browser"] },
	{ title: "HTTP split file", script: "./test-http-split-zip.js", env: ["deno", "browser"] },
	{ title: "HTTP zip64", script: "./test-http-zip64.js", env: ["deno", "browser"] },
	{ title: "Invalid CRC", script: "./test-invalid-crc.js", env: ["deno", "browser"] },
	{ title: "Multiple writers", script: "./test-multiple-writers.js" },
	{ title: "No worker", script: "./test-no-worker.js" },
	{ title: "Pako", script: "./test-pako.js", env: ["browser"] },
	{ title: "Pako (no worker)", script: "./test-pako-no-worker.js", env: ["deno", "browser"] },
	{ title: "Parallel reads", script: "./test-parallel-reads.js" },
	{ title: "Parallel writes (auto buffered)", script: "./test-parallel-writes-auto-buffered.js" },
	{ title: "Parallel writes (ordered)", script: "./test-parallel-writes-ordered.js" },
	{ title: "Parallel writes", script: "./test-parallel-writes.js" },
	{ title: "Readable Stream", script: "./test-readable-stream.js", env: ["deno", "browser"] },
	{ title: "Readable Zip Stream", script: "./test-readable-zip-stream.js", env: ["deno", "browser"] },
	{ title: "Safe closing", script: "./test-safe-closing.js" },
	{ title: "Service worker", script: "./test-sw.js", env: ["browser"] },
	{ title: "Signature CRC32", script: "./test-crc.js" },
	{ title: "Split data", script: "./test-split-data.js" },
	{ title: "Split zip file", script: "./test-split-zip.js" },
	{ title: "Store", script: "./test-store.js" },
	{ title: "Streams", script: "./test-streams.js" },
	{ title: "Worker timeout", script: "./test-worker-timeout.js" },
	{ title: "Wrapped zip file", script: "./test-wrapped.js" },
	{ title: "Writable Stream", script: "./test-writable-stream.js" },
	{ title: "Zip64 (auto)", script: "./test-zip64-auto.js", env: ["deno", "browser"] },
	{ title: "Zip64 crypto", script: "./test-zip64-crypto.js" },
	{ title: "Zip64", script: "./test-zip64.js" },
	{ title: "Zipcrypto", script: "./test-zipcrypto.js" }
]);