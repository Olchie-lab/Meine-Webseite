document.addEventListener('DOMContentLoaded', function() {
    // Alle <area> Elemente der Karte abfragen
    var areas = document.querySelectorAll('area');

    // Für jedes <area> Element ein Klick-Event hinzufügen
    areas.forEach(function(area) {
        area.addEventListener('click', function(event) {
            event.preventDefault(); // Verhindert das Standardverhalten des Links

            var areaName = area.getAttribute('alt'); // Den Namen des Bereichs aus dem "alt"-Attribut holen
            var areaHref = area.getAttribute('href'); // Den Link zur Unterseite aus dem "href"-Attribut holen

            // Ein Popup erstellen und anzeigen
            showPopup(areaName, areaHref);
        });
    });

    // Funktion, um ein Popup anzuzeigen
    function showPopup(areaName, areaHref) {
        // Popup-Element erstellen
        var popup = document.createElement('div');
        popup.className = 'popup';

        // Inhalt des Popups
        popup.innerHTML = `
            <h2>${areaName}</h2>
            <p>Möchtest du mehr über ${areaName} erfahren?</p>
            <button id="confirmButton">Ja</button>
            <button id="cancelButton">Nein</button>
        `;

        // Popup zum Dokument hinzufügen
        document.body.appendChild(popup);

        // Event-Listener für die Schaltflächen hinzufügen
        document.getElementById('confirmButton').addEventListener('click', function() {
            window.location.href = areaHref; // Weiterleitung zur Unterseite
        });

        document.getElementById('cancelButton').addEventListener('click', function() {
            document.body.removeChild(popup); // Popup schließen
        });
    }
});