let homeEl = document.getElementById("home-score")
let guestEl = document.getElementById("guest-score")
let countHome = 0
let countGuest = 0

function plusHomeOne () {
    countHome += 1
    homeEl.textContent = countHome
}

function plusHomeTwo () {
    countHome += 2
    homeEl.textContent = countHome
}

function plusHomeThree () {
    countHome += 3
    homeEl.textContent = countHome
}

function plusGuestOne () {
    countGuest += 1
    guestEl.textContent = countGuest
}

function plusGuestTwo () {
    countGuest += 2
    guestEl.textContent = countGuest
}

function plusGuestThree () {
    countGuest += 3
    guestEl.textContent = countGuest
}

function resetGame () {
    countGuest = 0
    countHome = 0
    guestEl.textContent = countGuest
    homeEl.textContent = countHome
}