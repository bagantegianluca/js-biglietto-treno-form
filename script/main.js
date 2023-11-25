/* 
Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per la seconda milestone.
Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
:saetta: NOTA BENE:
Seguite le milestone in ordine, non lavorate alla milestone due se prima non avete fatto funzionare la milestone 1!
Mi raccomando altrimenti sará tutto piú complicato. Procedete in ordine.
*/

//STEP1 Inserimento AddEventListener su bottone per leggere input dati
document.querySelector('form').addEventListener('submit', function (e) {

    // Prevenire refresh pagina
    e.preventDefault();

    //STEP2 Creazione variabili per raccolta input + console.log per check
    const userName = document.getElementById('userName').value;
    const userLastName = document.getElementById('userLastName').value;
    const userGender = document.getElementById('userGender').value;
    const userAge = document.getElementById('userAge').value;
    const userKm = document.getElementById('userKm').value;
    console.log(userName, userLastName, userGender, userAge, userKm);

    //STEP3 Assegnazione valori variabili a elementi biglietto
    document.getElementById('ticketName').innerHTML = userName;
    document.getElementById('ticketLastName').innerHTML = userLastName;
    document.getElementById('ticketGender').innerHTML = userGender;
    document.getElementById('ticketAge').innerHTML = userAge;
    document.getElementById('ticketKm').innerHTML = userKm;

    //STEP4 Visualizzazione biglietto

    // Se tutti i dati sono compilati
    if (userName != '' && userLastName != '' && userGender != '' && userAge != '' && userKm != '') {

        // Allora visualizzo il biglietto
        document.querySelector('.card').classList.remove('d-none');

        // Calcolo lo sconto
        let ticketDiscount;

        if (userAge < 18) {

            ticketDiscount = 20;

        } else if (userAge > 65) {

            ticketDiscount = 40;

        } else {

            ticketDiscount = 0;

        }

        // Creazione variabile prezzo/km
        const priceKm = 0.21;

        // Calcolo il prezzo del biglietto
        ticketPrice = (priceKm * userKm * (1 - (ticketDiscount / 100))).toFixed(2);

        // Popolo i campi del biglietto
        document.getElementById('ticketName').value = userName;
        document.getElementById('ticketLastName').value = userLastName;
        document.getElementById('ticketGender').value = userGender;
        document.getElementById('ticketAge').value = userAge
        document.getElementById('ticketKm').value = userKm;
        document.getElementById('ticketDiscount').value = ticketDiscount;
        document.getElementById('ticketPrice').value = ticketPrice;

        // Visualizzo pulsante modifica
        document.getElementById('btnModify').classList.remove('d-none');

        document.getElementById('btnModify').addEventListener('click', function () {

            document.getElementById('userName').value = userName;
            document.getElementById('userLastName').value = userLastName;
            document.getElementById('userGender').value = userGender;
            document.getElementById('userAge').value = userAge;
            document.getElementById('userKm').value = userKm;

        })

        // Svuoto campi input
        document.getElementById('userName').value = '';
        document.getElementById('userLastName').value = '';
        document.getElementById('userGender').value = '';
        document.getElementById('userAge').value = '';
        document.getElementById('userKm').value = '';

        // Assegno colore sfondo in base al sesso
        if (userGender == 'M') {

            document.querySelector('.card').classList.add('bg-primary');
            document.querySelector('.card').classList.remove('bg-danger');
            document.querySelector('.card').classList.remove('bg-warning');

        } else if (userGender == 'F') {

            document.querySelector('.card').classList.add('bg-danger');
            document.querySelector('.card').classList.remove('bg-primary');
            document.querySelector('.card').classList.remove('bg-warning');

        } else {

            document.querySelector('.card').classList.add('bg-warning');
            document.querySelector('.card').classList.remove('bg-primary');
            document.querySelector('.card').classList.remove('bg-danger');

        }

    }

})