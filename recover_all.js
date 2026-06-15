var fs = require('fs');

var shadowPaths = [
  '\\\\?\\GLOBALROOT\\Device\\HarddiskVolumeShadowCopy1\\Users\\吴浩\\support-qa\\index.html',
  '\\\\?\\GLOBALROOT\\Device\\HarddiskVolumeShadowCopy2\\Users\\吴浩\\support-qa\\index.html'
];

function tryRecover(sp, label) {
  console.log('\n=== ' + label + ' ===');
  console.log('Path: ' + sp);
  try {
    var stat = fs.statSync(sp);
    console.log('Size: ' + stat.size + ' bytes');
    if (stat.size < 50000) { console.log('Too small, skipping'); return false; }

    var buf = fs.readFileSync(sp);
    var firstBytes = Array.from(buf.slice(0, 40)).map(function(b) { return b.toString(16); }).join(' ');
    console.log('First 40 bytes hex: ' + firstBytes);

    // Try UTF-8 first
    var content = buf.toString('utf8');
    if (content.indexOf('<!DOCTYPE') > -1 || content.indexOf('<html') > -1 || content.indexOf('function') > -1) {
      console.log('Valid UTF-8 HTML/JS content, writing...');
      fs.writeFileSync('C:/Users/吴浩/support-qa/index.html', content, 'utf8');
      return true;
    }

    // Try UTF-16 LE
    content = buf.toString('utf16le');
    if (content.indexOf('<!DOCTYPE') > -1 || content.indexOf('<html') > -1) {
      console.log('Valid UTF-16 LE HTML content, converting to UTF-8...');
      fs.writeFileSync('C:/Users/吴浩/support-qa/index.html', content, 'utf8');
      return true;
    }

    console.log('Content preview: ' + content.substring(0, 200));
    return false;
  } catch(e) {
    console.log('Error: ' + e.code + ' - ' + e.message);
    return false;
  }
}

var recovered = false;
for (var i = 0; i < shadowPaths.length; i++) {
  if (tryRecover(shadowPaths[i], 'Shadow Copy ' + (i + 1))) {
    recovered = true;
    break;
  }
}

if (!recovered) {
  console.log('\nAll shadow copies failed. The file is lost.');
  console.log('Please check if the browser still has the page open and save the source.');
}
