function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 30,
        address: {
            street: '50 Main St',
            city: 'Boston',
            state: 'MA'
        },
        skills: ['js', 'html', 'css'],
        calculateNumbers: function(var1, var2) {
            return var1 + var2;
        }
    }
    return member;
}