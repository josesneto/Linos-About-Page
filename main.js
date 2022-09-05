console.log('a', document);

try {
    console.log('B', document.getElementsByTagName('object')[0].contentWindow.document);
} catch (e) {
    console.log('não desta vez');
}