let letters = {
    1: "க",
    2: "ங",
    3: "ச",
    4: "ஞ",
    5: "ட",
    6: "ண",
    7: "த",
    8: "ந",
    9: "ப",
    10: "ம",
    11: "ய",
    12: "ர",
    13: "ல",
    14: "வ",
    15: "ழ",
    16: "ள",
    17: "ற",
    18: "ன",//1
    19: "கா",
    20: "ஙா",
    21: "சா",
    22: "ஞா",
    23: "டா",
    24: "ணா",
    25: "தா",
    26: "நா",
    27: "பா",
    28: "மா",
    29: "யா",
    30: "ரா",
    31: "லா",
    32: "வா",
    33: "ழா",
    34: "ளா",
    35: "றா",
    36: "னா",//2
    37: "கி",
    38: "ஙி",
    39: "சி",
    40: "ஞி",
    41: "டி",
    42: "ணி",
    43: "தி",
    44: "நி",
    45: "பி",
    46: "மி",
    47: "யி",
    48: "ரி",
    49: "லி",
    50: "வி",
    51: "ழி",
    52: "ளி",
    53: "றி",
    54: "னி",//3
    55: "கீ",
    56: "ஙீ",
    57: "சீ",
    58: "ஞீ",
    59: "டீ",
    60: "ணீ",
    61: "தீ",
    62: "நீ",
    63: "பீ",
    64: "மீ",
    65: "யீ",
    66: "ரீ",
    67: "லீ",
    68: "வீ",
    69: "ழீ",
    70: "ளீ",
    71: "றீ",
    72: "னீ",//4
    73: "கு",
    74: "ஙு",
    75: "சு",
    76: "ஞு",
    77: "டு",
    78: "ணு",
    79: "து",
    80: "நு",
    81: "பு",
    82: "மு",
    83: "யு",
    84: "ரு",
    85: "லு",
    86: "வு",
    87: "ழு",
    88: "ளு",
    89: "று",
    90: "னு",//5
    91: "கூ",
    92: "ஙூ",
    93: "சூ",
    94: "ஞூ",
    95: "டூ",
    96: "ணூ",
    97: "தூ",
    98: "நூ",
    99: "பூ",
    100: "மூ",
    101: "யூ",
    102: "ரூ",
    103: "லூ",
    104: "வூ",
    106: "ழூ",
    107: "றூ",
    108: "னூ",//6
    109: "கெ",
    110: "ஙெ",
    111: "செ",
    112: "ஞெ",
    113: "டெ",
    114: "ணெ",
    115: "தெ",
    116: "நெ",
    117: "பெ",
    118: "மெ",
    119: "யெ",
    120: "ரெ",
    121: "லெ",
    122: "வெ",
    123: "ழெ",
    124: "ளெ",
    125: "றெ",
    126: "னெ",//7
    127: "கே",
    128: "ஙே",
    129: "சே",
    130: "ஞே",
    131: "டே",
    132: "ணே",
    133: "தே",
    134: "நே",
    135: "பே",
    136: "மே",
    137: "யே",
    138: "ரே",
    139: "லே",
    140: "வே",
    141: "ழே",
    142: "ளே",
    143: "றே",
    144: "னே",//8
    145: "கை",
    146: "ஙை",
    147: "சை",
    148: "ஞை",
    149: "டை",
    150: "ணை",
    151: "தை",
    152: "நை",
    153: "பை",
    154: "மை",
    155: "யை",
    156: "ரை",
    157: "லை",
    158: "வை",
    159: "ழை",
    160: "ளை",
    161: "றை",
    162: "னை",//9
    163: "கொ",
    164: "ஙொ",
    165: "சொ",
    166: "ஞொ",
    167: "டொ",
    168: "ணொ",
    169: "தொ",
    170: "நொ",
    171: "பொ",
    172: "மொ",
    173: "யொ",
    174: "ரொ",
    175: "லொ",
    176: "வொ",
    177: "ழொ",
    178: "ளொ",
    179: "றொ",
    180: "னொ",//10
    181: "கோ",
    182: "ஙோ",
    183: "சோ",
    184: "ஞோ",
    185: "டோ",
    186: "ணோ",
    187: "தோ",
    188: "நோ",
    189: "போ",
    190: "மோ",
    191: "யோ",
    192: "ரோ",
    193: "லோ",
    194: "வோ",
    195: "ழோ",
    196: "ளோ",
    197: "றோ",
    198: "னோ",//11
    199: "கௌ",
    200: "ஙௌ",
    201: "சௌ",
    202: "ஞௌ",
    203: "டௌ",
    204: "ணௌ",
    205: "தௌ",
    206: "நௌ",
    207: "பௌ",
    208: "மௌ",
    209: "யௌ",
    210: "ரௌ",
    211: "லௌ",
    212: "வௌ",
    213: "ழௌ",
    214: "ளௌ",
    215: "றௌ",
    216: "னௌ",//12
}

let textArea = document.querySelector('textarea')
let meiEzhuthukal = document.querySelectorAll('.mei_eluthu');
let symbols = document.querySelectorAll('.symbols');
let backspace = document.querySelector('.Backspace');
const deletebtn = document.querySelector('.Delete');
let uyirEluthu = document.querySelectorAll('.uyir_eluthu');
let Enter = document.querySelector('.Enter');
let Space_bar = document.querySelector('.Space_bar');
let shift = document.querySelector('#Shift');

let buttonStyle = document.querySelectorAll(".buttonStyle");



for (let k = 0; k < uyirEluthu.length; k++) {
    uyirEluthu[k].addEventListener('click',(e)=>{
        textArea.value += e.target.innerText;
})
}

Space_bar.addEventListener('click',()=>{
    textArea.value += ' ';
})


// for delete all the texts in textarea.
deletebtn.addEventListener('click',()=>{
    textArea.value ='';
})
// for delete  the text by lastindex in textarea.
backspace.addEventListener('click',()=>{
        textArea.value = textArea.value.slice(0,-1); 
})
//Add the new line in textarea
Enter.addEventListener('click',()=>{
    textArea.value += "\n"
})

let isMeiEzthuCLicked = false;
let mei_eluthu_Value = '';
let mei_eluthu_id = '';
let symbols_id = '';

for (let i = 0; i < meiEzhuthukal.length; i++) {
    meiEzhuthukal[i].addEventListener('click', (e) => {
        mei_eluthu_id = Number(e.target.getAttribute('data-key'));
        mei_eluthu_Value = e.target.innerText;
        isMeiEzthuCLicked = true;
        textArea.value += mei_eluthu_Value;


        for (let j = 0; j < symbols.length; j++) {
            symbols[j].addEventListener('click', (e) => {
                if (isMeiEzthuCLicked === true) {
                    symbols_id = Number(e.target.id)
                    let formula = mei_eluthu_id + (symbols_id * 18);
                    textArea.value = textArea.value.slice(0,-1)
                    textArea.value += letters[formula];
                    mei_eluthu_Value = '';
                    mei_eluthu_id = '';
                    symbols_id = '';
                    isMeiEzthuCLicked = false;
                }
            })
        }
    })
}


let flag = false;

shift.addEventListener("click",()=>{
    if(!flag){
        flag = true
    }
    else if(flag == true){
        flag = false
    }
    shift.classList.toggle('toggle')
})

for (let l = 0; l < buttonStyle.length; l++) {
    console.log(l);
   buttonStyle[l].addEventListener('click',()=>{
        if(flag){
        textArea.value += buttonStyle[l].children[1].innerText       
    }
    else{
        textArea.value += buttonStyle[l].children[0].innerText
    }
   })
    
}
