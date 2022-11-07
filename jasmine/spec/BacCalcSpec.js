// "describe" creates a test suite, a group of test
// cases for a specific functionality: submitting,
// the form, in this case. The first argument
// is the name of the test suite.
describe("submitting the form", function() {
    let form, weightField, beerField, wineField, liquorField,
        hoursField, output, slider;

    beforeAll(function() {
        form = $("<form>").appendTo("body");
        weightField = $('<input type="number" class="form-control" id="weight" name="weight" min="60" max="600" required>').appendTo(form);
        beerField = $('<input type="number" class="form-control" id="beer" name="beer" min="0" max="20" required>').appendTo(form);
        wineField = $('<input type="number" class="form-control" id="wine" name="wine" min="0" max="20" required>').appendTo(form);
        liquorField = $('<input type="number" class="form-control" id="liquor" name="liquor" min="0" max="20" required>').appendTo(form);
        hoursField = $('<input type="number" class="form-control" id="hours" name="hours" min="0" max="24" required>').appendTo(form);
        output = $('<p id="output"></p>').appendTo("body");
        slider = $('<input type="range" min="0" max="0.5" step="0.01" value="0" name="danger" id="danger">').appendTo("body");
    });

    // "it" creates a spec, a test case. The first
    // argument is the name of the spec.
    it("calculates the BAC for 2 beers after 1 hour for a 150 pound person", function() {
        weightField.val("150");
        beerField.val("2");
        wineField.val("0");
        liquorField.val("0");
        hoursField.val("1");

        form.submit();
        expect(output.text()).toEqual("Your BAC is 0.039");
        expect(slider.val()).toEqual("0.04");
    });

    it("calculates the BAC for 3 glasses of wine after 2 hours for a 125 pound person", function() {
        weightField.val("125");
        beerField.val("0");
        wineField.val("3");
        liquorField.val("0");
        hoursField.val("2");

        form.submit();
        expect(output.text()).toEqual("Your BAC is 0.078");
        expect(slider.val()).toEqual("0.08");
    });
});
