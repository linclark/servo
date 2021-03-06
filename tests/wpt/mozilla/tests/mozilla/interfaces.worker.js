importScripts("/resources/testharness.js");
importScripts("interfaces.js");

// This is a list of interfaces that are exposed to every web worker.
// Please only add things to this list with great care and proper review
// from the associated module peers.

// IMPORTANT: Do not change the list below without review from a DOM peer!
test_interfaces([
  "BeforeUnloadEvent",
  "Blob",
  "CloseEvent",
  "CSSStyleDeclaration",
  "DOMPoint",
  "DOMPointReadOnly",
  "DOMQuad",
  "DOMRect",
  "DOMRectReadOnly",
  "CustomEvent",
  "DedicatedWorkerGlobalScope",
  "DOMException",
  "ErrorEvent",
  "Event",
  "EventSource",
  "EventTarget",
  "File",
  "FileList",
  "FileReader",
  "FileReaderSync",
  "FormData",
  "HashChangeEvent",
  "Headers",
  "History",
  "ImageData",
  "Location",
  "MediaError",
  "MessageEvent",
  "MimeType",
  "MimeTypeArray",
  "PageTransitionEvent",
  "Performance",
  "PerformanceTiming",
  "Plugin",
  "PluginArray",
  "PopStateEvent",
  "ProgressEvent",
  "Request",
  "Response",
  "Screen",
  "Storage",
  "StorageEvent",
  "TextDecoder",
  "TextEncoder",
  "URL",
  "URLSearchParams",
  "WebSocket",
  "Worker",
  "WorkerGlobalScope",
  "WorkerLocation",
  "WorkerNavigator",
  "XMLHttpRequest",
  "XMLHttpRequestEventTarget",
  "XMLHttpRequestUpload",
  "console",
]);

done();
