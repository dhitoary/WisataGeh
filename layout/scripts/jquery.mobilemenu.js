$('<form action="#"><select /></form>').appendTo("#mainav");

// Tambahkan opsi default "MENU" pada dropdown
$("<option />", {
    selected: "selected",
    value: "",
    text: "MENU"
}).appendTo("#mainav select");

// Konversi tautan menu menjadi opsi dalam dropdown
$("#mainav a").each(function () {
    var $link = $(this);
    var level = $link.parents("ul").length;

    // Tambahkan opsi ke dropdown berdasarkan level menu
    var prefix = "- ".repeat(level - 1); // Tambahkan prefix "-" berdasarkan kedalaman
    $("<option />", {
        value: $link.attr("href"),
        text: prefix + $link.text()
    }).appendTo("#mainav select");
});

// Navigasi ke tautan berdasarkan pilihan dropdown
$("#mainav select").change(function () {
    var selectedValue = $(this).find("option:selected").val();
    if (selectedValue !== "") {
        window.location = selectedValue;
    }
});
