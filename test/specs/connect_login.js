var assert = require('assert');

describe('Untitled Test Case', function() {

	it('should do something', function() {
		browser.url('https://danielruss.github.io/simpletest/index2.html');
		$('#clearLF').click();
		$('#age').click();
		$('#firstName').click();
		$('#firstName').setValue('hui');
		$('#age').setValue('55');
		$('//input[@type="submit"]').click();
		$('=example').click();
		$('//input[@value="NEXT"]').click();
		$('//html').click();
		$('(//input[@value=\'NEXT\'])[2]').click();
		$('#SECTION1').click();
		$('(//input[@value=\'NEXT\'])[3]').click();
		$('#AGECOR_1_label').click();
		$('(//input[@value=\'NEXT\'])[4]').click();
		$('#MARITAL_4_label').click();
		$('//html').click();
		$('(//input[@value=\'NEXT\'])[6]').click();
		$('#RACEETH_TB').click();
		$('#RACEETH_TB').setValue('abc');
		$('(//input[@value=\'NEXT\'])[7]').click();
	});

});