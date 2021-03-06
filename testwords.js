// function for checking if a word is on the toefl or sat wordlists
'use strict'

// module.exports = class {
//   constructor() { 
//     let that = this
//     this.sat = {};
//      words.sat.map(function(word) {that.sat[word]=true}) 
//     this.toefl = {};
//      words.toefl.map(function(word){that.toefl[word]=true})      
//     this.allwords = Object.assign({}, this.sat, this.toefl);

//     this.isSATword = function(word) {
//       word = word.toLowerCase().trim(); 
//       return (this.sat[word]===true);
//     }
//     this.isTOEFLword = function(word) {
//       word = word.toLowerCase().trim(); 
//       return (this.toefl[word]===true);
//     }
//     this.isTestword = function(word) {
//       word = word.toLowerCase().trim(); 
//       return (this.allwords[word]===true);
//     }
//     this.satWordsList = function() {
//       return Object.keys(this.sat);
//     }
//     this.toeflWordsList = function() {
//       return Object.keys(this.sat);
//     }
//     this.allWordsList = function() {
//       let allWordsList= Array.concat(this.satWords(), this.toeflWord());
//       allWordsList= Array.from(new Set(allWordsList));
//       return allWordsList;   
//     }   
//   } 
// }


class Testwords {
  constructor() { 
    let that = this
    this.sat = {};
     words.sat.map(function(word) {that.sat[word]=true}) 
    this.toefl = {};
     words.toefl.map(function(word){that.toefl[word]=true})      
    this.allwords = Object.assign({}, this.sat, this.toefl);
  } 
 
  isSATword (word) {
    word = word.toLowerCase().trim(); 
    return (this.sat[word]===true);
  }
  isTOEFLword (word) {
    word = word.toLowerCase().trim(); 
    return (this.toefl[word]===true);
  }
  isTestword (word) {
    word = word.toLowerCase().trim(); 
    return (this.allwords[word]===true);
  }
  satWordsList () {
    return Object.keys(this.sat);
  }
  toeflWordsList () {
    return Object.keys(this.sat);
  }
  allWordsList () {
    let allWordsList= Array.concat(this.satWords(), this.toeflWord());
    allWordsList= Array.from(new Set(allWordsList));
    return allWordsList;   
  }   

}

// export default Testwords;
module.exports = Testwords


var words = {
    sat: [
'abate','aberration','abhor','abhorrence','abstruse','accost','acrimony','acumen','adamant','adept','adroit',
 'affected','alacrity','allocate','altruistic','altruism','amenable','amiable','amicable','antediluvian',
 'anthropology','antipathy','apathetic','apathy','apt','arcane','ascendancy','ascetic','asceticism','aspire',
 'assail','assiduous','assuage','atrophy','attenuate','august','aura','auspicious','autocrat','autocratic',
 'automaton','avarice','banal','barrage','belie','belligerent','benevolent','bequeath','berate','bipartisanship',
 'blighted','bog','bolster','bombastic','boorish','boorishness','buoyant','burgeon','buttress','byzantine',
 'cacophonous','cacophony','cajole','callous','cantankerous','cantankerousness','capricious','castigate','caustic',
 'censorious','censure','cerebral','chagrin','charlatan','chastise','chide','churlish','circuitous','circumscribe',
 'circumvent','clandestine','coalesce','compendious','complacency','complacent','compliant','compliance',
 'conciliate','conciliatory','concur','conflagration','confluence','congenial','conscientious','consternation',
 'contempt','contemptuous','contemptible','contentious','convivial','copious','corroborate','cosmopolitan',
 'credulity','credulous','culpable','cursory','dauntless','dearth','debacle','debilitate','debilitated','debunk',
 'decimate','decorum','decorous','deference','deferential','degradation','deleterious','delineate',
 'demonstrative','demure','demurral','demystify','denigrate','depose','depravity','deprecate','depreciation',
 'depreciatory','deride','derivative','derogatory','derogate','desecration','despondent','despot','destitute',
 'deterrent','devoid','didactic','diffident','diffidence','diffuse','digress','digression','dilatory','diminutive',
 'diminution','dire','discern','discerning','discomfited','discount','disheartening','disillusionment',
 'disingenuous','disparage','dispassionate','dispel','disputatious','disquiet','disquieting','disseminate',
 'distaste','divergent','divisive','divulge','doctrine','dogmatic','dormant','dupe','duplicitous','duplicity',
 'ebullient','eclectic','efface','effacement','effervesce','egalitarian','elated','elation','elicit','elucidate',
 'elude','elusive','embitter','embittered','embroil','embroiled','empathetic','empathy','empiric','empirical',
 'encompass','encroaching','encumbrance','enigma','enigmatic','enumerate','ephemeral','epiphany','epitome',
 'epitomize','equanimity','equitable','equivocal','erudite','erudition','esoteric','estrange','estrangement',
 'eulogy','eulogize','evoke','exacting','excavate','exemplar','exhibitionist','exhibitionistic','exhort',
 'exorbitant','expedient','exposé','extol','extricate','facile','faction','fallacious','fallacy','fanaticism',
 'fastidious','fathom','felicitous','finesse','flagrant','flippant','flippancy','florid','floridity','flummox',
 'folly','foolhardy','forlorn','fortitude','fortuitous','fraudulent','frugal','frugality','furor','furtive',
 'futile','futility','gait','gallant','gallantry','gargantuan','garish','genial','germinate','glutton','gluttonous',
 'grandiose','hackneyed','hamper','hardy','hasten','heresy','heretic','histrionic','hubris','idiosyncracy',
 'idiosyncratic','idyllic','ignominy','ignominious','illicit','impasse','imperious','impetuous','impudence',
 'impudent','inane','incongruity','incongruous','incredulous','incredulity','incriminate','incubate','indeterminate',
 'indict','indictment','indigenous','indignant','indiscriminate','indolent','indomitable','induce','indulgent',
 'ineffable','ineptitude','inert','inertia','ingenuous','inherent','inhibit','inhibiting','innate','innocuous',
 'innuendo','inscrutable','insipid','insolence','insolent','instigate','insular','insularity','intrepid','inundate',
 'invoke','irate','irony','ironic','irreverent','irreverence','jaded','jocular','jovial','judicious','lackadaisical',
 'laconic','laggard','languid','latent','latency','laud','laudatory','listless','lithe','lucid','lucrative','lull',
 'lurid','luxuriant','magnanimity','magnanimous','malleable','marred','maudlin','melancholy','mercenary','mercurial',
 'miserly','mitigate','mitigator','modicum','morose','motley','multifarious','nebulous','nefarious','neophyte',
 'notoriety','notorious','noxious','nuance','obdurate','obstinate','obstinacy','officious','onerous','opportunist',
 'opportunistic','oracle','orthodox','ostensible','oversight','pacifist','pacify','painstaking','palliate',
 'palliative','paradigm','parch','parody','partisan','patronize','paucity','pedant','pedantic','pedantry','peevish',
 'penchant','penurious','peremptory','perfunctory','peripheral','perquisite','petulant','philanthropist',
 'philanthropic','piety','pious','placate','placid','plasticity','plausible','plausibility','plethora','plethoric',
 'pliable','pliant','polemical','prattle','precarious','precipitate','preclude','precocious','presumptuous',
 'pretext','prevaricator','procure','prodigious','profound','profundity','profuse','profusion','prohibitive',
 'prohibition','proliferate','proliferation','prolific','pronouncement','propensity','proponent','prosaic',
 'prospective','provident','provincial','punctilious','pundit','quell','quixotic','rampant','ramshackle','rancor',
 'rancorous','rapport','ratify','raucous','ravenous','raze','reap','rebuttal','recalcitrant','recant','recessive',
 'recluse','reclusive','rectify','rectitude','redolent','refutation','refute','regressive','relegate','relinquish',
 'renounce','repertory','reprehensible','reprimand','reproach','repudiate','repugnant','rescind','reticent',
 'reticence','reverent','rhetoric','rhetorical','rhetorician','rouse','rousing','sage','sanctimonious','sanction',
 'sanctity','sanguine','satiate','satire','satirical','satirize','saturate','scanty','scathing','scintillating',
 'scope','scrupulous','scrutinize','scrutiny','self-righteous','self-serving','serendipity','servile','shrewd',
 'shroud','simile','slight','slipshod','solace','solicitous','solicitousness','somber','sophistry','spartan',
 'sporadic','spurious','spurn','squander','stagnant','stagnation','stark','starkness','static','staunch',
 'steadfast','stock','strident','stupefy','stupefaction','subservient','substantiate','subversive','succulent',
 'supercilious','superfluous','supplant','surfeit','susceptible','sycophant','tangential','teem','teeming',
 'temperamental','temporize','tenacious','tenacity','tenuous','tirade','toady','torpor','totalitarian','tout',
 'tractable','transient','treatise','trepidation','tribulation','trifling','trite','truculent','truculence',
 'ubiquitous','unabashed','uncanny','uncouth','unfathomable','ungainly','unruly','unwitting','urbane','usurp',
 'vacuous','vacuity','vanquish','vapid','venal','venality','venerable','verbose','vicarious','vigilant','vindicate',
 'vindication','vindictive','virtuoso','virtuosity','virulent','viscous','vocation','vying','waning','wayward',
 'wrath','wry','zealot'
    ],
    toefl: [
'abandon','abash','abdicate','abet','abridge','abrogate','abstemious','academic','accede','accelerate','accolade',
'accord','acrimonious','acumen','admonish','adversary','adversity','aesthetic','affable','affluent','aggressive',
'alacrity','alienate','allay','allude','allure','ambiguous','amenable','amiable','anachronism','analogy',
'anarchy','animus','annals','anonymous','anthology','antithesis','apathy','apprehensive','apprise','approbation',
'apt','arbiter','archetype','arid','aristocracy','armistice','artful','articulate','ascetic','askance',
'asseverate','assiduous','asylum','atheist','attribute','augment','auspicious','authentic','autocratic','avarice',
'awry','banal','baneful','banter','baton','belie','bellicose','belligerent','benevolent','bereave','besmirch',
'biased','bibliophile','bizarre','bland','blandishment','blemish','blight','blithe','bog','bombastic','boorish',
'bucolic','buffoon','bulwark','bumptious','cabal','cacophonous','cadaverous','callous','calumniate','candid',
'cantankerous','capricious','captious','caricature','castigate','celestial','chauvinist','chicanery','chronic',
'circumspect','circumvent','civil','clamorous','clandestine','clement','coalition','coercion','cogent','collusion',
'commodious','compatible','compendium','compensation','complacent','compunction','concede','condign','condole',
'condone','confederate','congenial','conjecture','consecrate','consensus','consternation','construe','consummate',
'contemptuous','convivial','copious','corpulent','cosmopolitan','coterie','countenance','crass','craven',
'credence','credible','creditable','credulous','cringe','crucial','cryptic','culpable','cumbrous','curb','cursory',
'curt','cynical','dearth','deference','deity','delectable','delete','delineate','delinquent','deluge','demagogue',
'demeanor','demure','denounce','deplete','deplore','depraved','deprecate','depreciate','devastation','devious',
'devoid','devout','dictum','didactic','diffident','dilemma','dilettante','disconcert','disconsolate','discourse',
'discrete','discursive','disparity','dispassionate','dispatch','dispel','dissent','dissolute','distraught',
'diverse','diverting','divulge','dogmatic','dolorous','dynamic','ecclesiastic','edict','edify','effete','egotistic',
'egregious','ejaculate','elicit','elucidate','emissary','engender','ennui','ensue','entreat','ephemeral',
'epicurean','epigram','epitaph','epithet','equanimity','err','erratic','erudite','esoteric','exceptionable',
'exculpate','exemplary','exodus','exotic','expatiate','expatriate','expedient','exploit','expound','expurgate',
'extemporaneous','extinct','extirpate','extraneous','exultation','facade','facetious','fallacious','fallible',
'fathom','fatuous','fealty','feasible','feign','felicity','fervid','festoon','fetish','fiasco','fictitious','flaccid',
'flagrant','flamboyant','flaunt','fleeting','fluctuate','forbear','forensic','fortuitous','fracas','frustrate',
'fulsome','garnish','genealogy','genesis','gesticulate','ghastly','gibe','glib','gluttonous','gossamer','gregarious',
'grimace','hail','harangue','harbinger','heedless','heinous','heresy','hiatus','histrionic','hoax','homonym','hovel',
'hyperbole','hypothesis','idiosyncrasy','ignominious','immaculate','imminent','immune','impale','impeach',
'impeccable','impervious','implacable','implicit','import','impostor','imprecation','impregnable','impropriety',
'improvident','impugn','incarcerate','incisive','incognito','incontrovertible','increment','incumbent',
'indefatigable','indigenous','indoomitable','inference','ingenious','ingenuous','ingratiate','inhibit','innocuous',
'innuendo','inordinate','insatiable','inscrutable','insidious','instigate','integrity','inveigh','irascible','ire',
'irksome','itinerant','jargon','jaunty','jeopardy','jettison','judicious','kaleidoscopic','ken','labyrinth',
'lachrymose','laconic','larceny','latent','lavish','lethal','longevity','low','lucid','ludicrous','luminary',
'machiavellian','malicious','masquerade','maudlin','meander','mediocre','mercenary','meretricious','meticulous',
'mettle','microcosm','mimic','misanthropic','misnomer','monologue','morose','motley','mottled','mundane','murky',
'mutable','myriad','nautical','nettle','nocturnal','noisome','nonchalant','nostalgia','notorious','novice',
'obdurate','oblivious','obsession','obsolete','obtrusive','obviate','omnipotent','onus','ostensible','ostracize',
'panacea','panegyric','paradox','paraphrase','parody','peccadillo','pecuniary','pedant','pensive','peremptory',
'pertinacious','peruse','perverse','petrify','plagiarism','platitude','plebeian','plebiscite','poignant','ponderous',
'precarious','precipitous','precocious','predatory','predilection','prelude','prerogative','prestige','precocious',
'predatory','predilection','prelude','prerogative','prestige','presumption','prevaricate','procrastinate',
'prognosticate','proletariat','promontory','promulgate','protuberant','provisional','proximity','pseudonym',
'punitive','quash','querulous','quixotic','raconteur','radical','ramification','raze','recapitulate','reciprocal',
'recumbent','redolent','redoubtable','refute','reiterate','remunerative','renegade','reprisal','resentment',
'resilient','respite','retribution','retrieve','reverberate','rudimentary','rue','sacrosanct','sagacious','sallow',
'sally','sanctimonious','sanguinary','sanguine','sartorial','satellite','scintilla','scourge','scrutinize',
'shibboleth','simper','sinecure','sinister','sleazy','slovenly','soporific','sordid','sovereign','sporadic','spurn',
'stoic','stringent','stupendous','succulent','sultry','supine','tangible','tantamount','taunt','teeming','temerity',
'temporal','temporize','tenet','tenuous','tranquil','transgress','tremulous','trivial','truculent','turgid',
'ubiquitous','untenable','utilitarian','vanquish','vaunt','veneer','venerable','vernal','versatile','vicarious',
'vicissitude','virago','vituperate','waive','whim','writhe','zealous','zenith'
    ]
};
 