registered = [1246, 1553, 1713, 2040, 2053, 2170, 2258, 2890, 2909, 3169,
    3187, 3789, 3920, 3943, 4248, 4338, 4345, 4562, 4567, 4801, 4922, 5075,
    5405, 5467, 5496, 5604, 5610, 5712, 5835, 5937, 5966, 6076, 6124, 6148,
    6182, 6308, 6328, 6484, 6562, 6625, 6726, 6836, 7079, 7340, 7558, 7772,
    8495, 8536, 9320, 9610, 9683, 9892, 10189, 10434, 10650, 10848, 11170,
    11302, 11317, 11350, 11440, 11464, 11682, 12216, 12330, 12560, 12735,
    12872, 12905, 12994, 13074, 13481, 13825, 13844, 13847, 14183, 14197,
    14843, 15083, 15170, 15336, 15441, 16000, 16227, 16570, 16726, 16942,
    17195, 18033, 18078, 18164, 18164, 18187, 19235, 20399, 20406, 20580,
    20630, 20692, 20737, 21151, 21557, 22315, 22340, 22412, 22930, 23820,
    24256, 24551, 25087, 25165, 25690, 26742, 28318, 30051, 30218, 30651,
    32874, 35141, 35970, 36431, 43050, 43169, 44372, 44737, 45785, 46088,
    52010, 54779, 55694, 60749, 61402, 61947, 65573, 70129, 74380, 75535,
    76848, 79098, 83866, 92427, 101613, 102262, 105587, 107656, 108126,
    115297, 128535, 132029, 135428, 164279, 172241, 190605, 194338, 202999,
    537659, 547802, 582917, 808742]

function ready()
{
    show_ideal_benford()
    add_handler("source_ideal", show_ideal_benford, "click")
    add_handler("source_sim", run_sim, "click")
    add_handler("pct_vote", run_sim, "change")
    add_handler("candidate_pct", run_sim, "change")
}

function get_pct(id)
{
    let el = document.getElementById(id)
    return parseInt(el.value)
}

function add_handler(id, func)
{
    let button = document.getElementById(id)
    button.addEventListener('click', func)
}

function set_heading(text)
{
    let el = document.getElementById("what")
    what.innerText = text
}

function run_sim()
{
    let data = []
    let turnout = get_pct("pct_vote")/100
    let candidate_pct = get_pct("candidate_pct")/100
    for (let i = 0; i < registered.length; ++i) {
        let votes = registered[i] * turnout * candidate_pct
        data.push(Math.round(votes))
    }
    show_benford(data)
}

function note(note)
{
    let notes = document.getElementById("note")
    let entry = document.createElement("li")
    entry.innerText = note
    notes.appendChild(entry)
    let t = document.querySelectorAll("#note li")
    while (t.length > 5) {
        notes.removeChild(notes.firstChild)
        --t
    }
}

function show_ideal_benford()
{
    set_heading("First Digit Distribution (Benford reference)")
    set_bar(1, 30)
    set_bar(2, 18)
    set_bar(3, 12)
    set_bar(4, 10)
    set_bar(5, 8)
    set_bar(6, 7)
    set_bar(7, 6)
    set_bar(8, 5)
    set_bar(9, 5)
}

function show_benford(data)
{
    set_heading("First Digit Distribution (Simulation)")
    let counts = [0,0,0,0,0,0,0,0,0]
    for (let i = 0; i < data.length; ++i) {
        let first = first_digit(data[i])
        ++counts[first-1]
    }
    for (let i = 1; i <= 9; ++i) {
        let pct = 100 * counts[i-1] / data.length
        pct = Math.round(pct)
        set_bar(i, pct)
    }
}

function set_bar(digit, percent)
{
    let bar = document.getElementById("row_" + digit)
    while (bar.hasChildNodes()) {
        bar.removeChild(bar.lastChild)
    }
    for (let i = 1; i <= 100; ++i) {
        let block = make_block(i <= percent ? "filled" : "empty")
        if (i == 1) {
            block.innerText = "" + digit
        }
        bar.appendChild(block)
    }
}

function make_block(color_class)
{
    let block = document.createElement("div")
    block.classList.add("block")
    block.classList.add(color_class)
    return block
}

function first_digit(n)
{
    while (n >= 10) n /= 10
    return Math.floor(n)
}
