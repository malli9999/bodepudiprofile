
QUnit.test('Testing calculateArea function with several sets of inputs', function (assert) {
    assert.equal(large( ), 'large', 'Tested with two relatively small positive numbers');
    assert.equal(medium() , 'medium', 'Tested with two large positive numbers. ');
    assert.equal( small(), 'small', 'Tested with two negative numbers. Any arguments less than 1 will be set to 1.');

});

