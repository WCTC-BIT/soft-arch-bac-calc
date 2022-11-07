$(function () {
    $("body").on("click", "button", function () {
        let beer = Number($("input#beer").val());
        let wine = Number($("input#wine").val());
        let liquor = Number($("input#liquor").val());
        let weight = Number($("input#weight").val());
        let hours = Number($("input#hours").val());

        let totalOunces = beer * 0.54 + wine * 0.6 + liquor * 0.6;

        let bac = totalOunces * 7.5 / weight;

        bac -= hours * 0.015;

        $("p#output").text(`Your BAC is ${bac.toFixed(3)}`);

        $("input#danger").val(bac);
    });
})


