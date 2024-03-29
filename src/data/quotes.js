const quotes =  [{
  common: "He who passes the sentence, must swing the sword.",
  valyrian: "Ziry qilōni jaelagon iā vējes, ēdruta dīnagon se egros.",
  dothraki: "Mae fin zala jin athdrivar, eth elat jin vov.",
  character: "Eddard \"Ned\" Stark",
  scene: "S1E01"
}, {
  common: "Never forget what you are, for surely the world will not.",
  valyrian: "Dōrī nārhēdegon skoros iksā, syt surely se vys kessa daor.",
  dothraki: "Avvos tiholat fin yer hash, ha surely jin asshekh tikh vo.",
  character: "Tyrion Lannister",
  scene: "S1E01"
}, {
  common: "The things \nwe do for love.",
  valyrian: "Se run gaoman syt jorrāelagon.",
  dothraki: "Jin vekhikh anha tat ha athfiezar.",
  character: "Jaime Lannister",
  scene: "S1E01"
}, {
  common: "First lesson: Stick them with the pointy end.",
  valyrian: "Ēlī gūrēñare: Tāemītsos zirȳ lēda se qana mōris.",
  dothraki: "Ataki athvillar: Arrissat eyak ma has nakho.",
  character: "Jon Snow",
  scene: "S1E02"
}, {
  common: "It's known.",
  valyrian: "Ziry iksos gīmigon.",
  dothraki: "Me nem nesa.",
  character: "Irri",
  scene: "S1E02"
}, {
  common: "Don't make love like a slave.",
  valyrian: "Ȳdra daor gaomagon jorrāelagon hae iā buzdari.",
  dothraki: "Avvos tat athfiezar allayafi jin zafra.",
  character: "Doreah",
  scene: "S1E02"
}, {
  common: "Tell me, if I stabbed the Mad King in the belly instead of the back, would you admire me more?",
  valyrian: "Ivestragon nyke, lo nyke ohīlagon se Ribazmoqittys Dārys isse se iemny daor se arlī, kessa ao hae nyke tolī?",
  dothraki: "Astat anna, fin anha put vov kijinosi Athostar Khal vo kijinosi irge, tikh yer allayafi anna alikh?",
  character: "Jaime Lannister",
  scene: "S1E03"
}, {
  common: "When the snows fall and the white winds blow, the lone wolf dies, but the pack survives.",
  valyrian: "Skori se sōna māzigon se se timpa jelmio māzigon, se mēre zokla morghūljagon, yn se tolī zokla glaesagon.",
  dothraki: "Hash jin ahesh jadat akka zasqa chaf jadat, jin ato ver athdrivar, vosma jin alikh ver thirat.",
  character: "Eddard \"Ned\" Stark",
  scene: "S1E03"
}, {
  common: "You walk.",
  valyrian: "Ao geron.",
  dothraki: "Yer elat.",
  character: "Rakharo",
  scene: "S1E03"
}, {
  common: "Here, a man gets what he earns when he earns it.",
  valyrian: "Kesīr, vala jiōragon skoros ziry gūrogon skori ziry gūrogon ziry.",
  dothraki: "Jinne jin mahrazh yanqolat fin mae earn hash mae earn me.",
  character: "Benjen Stark",
  scene: "S1E03"
}, {
  common: "Each bruise is a lesson. Each Lesson makes us better.",
  valyrian: "Tolvie ōdres iksis iā gūrēñare. Tolvie gūrēñare mazverdagon īlva sȳrkta.",
  dothraki: "Ei ziso ajjin jin tiholat. Ei ziso tat kisha davra.",
  character: "Syrio Forel",
  scene: "S1E03"
}, {
  common: "I have a tender spot in my heart for cripples, bastards and broken things.",
  valyrian: "Eman iā spot isse ñuha prūmia syt nākostōbā vali, nādrēsy se uēpa ra.",
  dothraki: "Anha zhorre jin sho she anna zhor ha havolat, graddakh akka samva vekhikh.",
  character: "Tyrion Lannister",
  scene: "S1E04"
}, {
  common: "You're boys, still. And come the winter, you will die...like flies.",
  valyrian: "Iksā iēdrosa valītsossa. Se māzigon se sōnar, morghūljilā hae sōvegon.",
  dothraki: "Yer hash zin rakh. Akka jadat jin aheshke, yer tikh athdrivar allayafi afis.",
  character: "Alliser Thorne",
  scene: "S1E04"
}, {
  common: "I want to see \nthe bad man fly.",
  valyrian: "Anha zala tat tihat jin mel mahrazh afis.",
  dothraki: "Jaelan naejot ūndegon se quba vala sōvegon.",
  character: "Robin Arryn",
  scene: "S1E05"
}, {
  common: "Seven Kingdoms couldn't fill the hole she left.",
  valyrian: "Sīkuda Dārȳti gōntan daor leghagon se ripo ziry geptot.",
  dothraki: "Fekh khalasars laz vo tat jin vosi mae elat.",
  character: "Robert Baratheon",
  scene: "S1E05"
}, {
  common: "There is only one god, and his name is Death. And there is only one thing we say to Death - not today.",
  valyrian: "Konīr iksis mērī mēre Jaes, se zȳhon brōzi iksis Morghon. Se konīr iksis mērī mēre run īlon ivestragon Morghon - tubī daor.",
  dothraki: "Hazze ajjin disse ato vezhof, akka mae hake ajjin athdrivar. Akka hazze ajjin disse ato vekhikh kisha astat tat athdrivar - vo asshekh.",
  character: "Syrio Forel",
  scene: "S1E06"
}, {
  common: "When I was twelve, I milked my eel into a pot of turtle stew. I flogged the one-eyed snake, I skinned my sausage, I made the bald man cry, into the turtle stew! Which I do believe my sister ate, at least I hope she did.",
  valyrian: "Skori īlen lanta ampā, nyke lik ñuha ubles ezīmagon iā pot hen cher. Nyke  se mēre laes peldio, nyke skinned ñuha xyar, nyke vēttan se vala limagon, ezīmagon se cher! skore gaoman pāsagon ñuha mandia iprattan,  nyke pendagon ziry gōntan.",
  dothraki: "Hash anha ki, anha lik anna eel into jin pot ki basa. Anha  jin ato tih gezri, anha skinned anna lae, anha made jin mahrazh laqikh, into jin basa! majin anha tat shillolat anna sister ate,  anha tihat mae tat.",
  character: "Tyrion Lannister",
  scene: "S1E06"
}, {
  common: "I want the crown he promised me.",
  valyrian: "Jaelan se pāletilla ziry kivio nyke.",
  dothraki: "Anha zala jin vekhikh mae asqoyi anna.",
  character: "Viserys Targaryen",
  scene: "S1E06"
}, {
  common: "It's the family name that lives on. It's all that lives on. Not your personal glory. Not your honor. But family.",
  valyrian: "Ziry iksos se lentor brōzi bona glaesagon va. Ziry iksos mirre bona glaesagon va. Daor aōha jaqiarzir. Daor aōha rigle. Yn lentor.",
  dothraki: "Me ajjin jin yeri hake rek thirat she. Me ajjin ei rek thirat she. Vo yeri chomokh. Vosma hake.",
  character: "Tywin Lannister",
  scene: "S1E07"
}, {
  common: "I will take my Khalasar west to where the world ends and ride wooden horses across the black salt water as no Khal has done before!",
  valyrian: "Mazeminna ñuha Khalasar endia naejot skoriot se vys mōris se kipagon guēse anni rȳ se zōbrie lopor iēdar hae daor Khali ēza gaomagon gō!",
  dothraki: "Anha vidrik khalasares anni jim, finaan nakhoe rhaesheser, majin adothrak hrazef ido yomme Havazzhifi Kazga ven et vo khal avvos.",
  character: "Khal Drogo",
  scene: "S1E07"
}, {
  common: "When you play the game of thrones, you win or you die. There is no middle ground.",
  valyrian: "Skorī dēmalȳti tymptir tymis, ērinis iā morghūlis. Konīr iksis daor mirre tegon.",
  dothraki: "When you go the do people, you win or you die. There is no any line.",
  character: "Cersei Lannister",
  scene: "S1E07"
}, {
  common: "On the wall, we are all one house.",
  valyrian: "Va se dōros, iksi mirre mēre lentor.",
  dothraki: "She gref, kisha hash ei ato chomak.",
  character: "Jeor Mormont",
  scene: "S1E07"
}, {
  common: "I did warn you \nnot to trust me.",
  valyrian: "Nyke gōntan ivestragon ao daor naejot pāsagon nyke.",
  dothraki: "Anha tat astat yer vo tat shillat anna.",
  character: "Petyr \"Littlefinger\" Baelish",
  scene: "S1E07"
}, {
  common: "The cold winds are rising.",
  valyrian: "Se iōrves jelmior issi sīmonagon.",
  dothraki: "Jin fish chaf hash tikh jadat.",
  character: "Osha",
  scene: "S1E08"
}, {
  common: "Even now I could cut through the five of you like carving a cake!",
  valyrian: "Sesīr sir kostan nektogon rȳ se tōma hen ao hae mēre nektogon iā lōtinty!",
  dothraki: "Akka ajjin anha laz zirisselat vi jin mek ki yer allayafi ato zirisselat jin hadaen!",
  character: "Barristan Selmy",
  scene: "S1E08"
}, {
  common: "If the day ever comes when you're tempted to sell me out... whatever their price, I'll beat it.",
  valyrian: "Lo se tubis mirre māzigon skori iksā jeldan naejot lioragon nyke hen. Qogralbar pōja odre, kesan pyghagon ziry.",
  dothraki: "Fin jin asshekh hash jadat hash zalat tat azhat anna mra. Govat eyak, anha tikh azhat yer alikh.",
  character: "Tyrion Lannister",
  scene: "S1E08"
}, {
  common: "You must make that choice yourself and live with it the rest of your days, as I have.",
  valyrian: "Istia mazverdagon bona iderennon aōla se glaesagon lēda ziry se mōrī hen aōha tubissa, hae eman.",
  dothraki: "Yer eth okkat ki yeri zhorre akka thirat ma me jin mithri ki yeri atthirar, ven anha zhorre.",
  character: "Aemon Targaryen",
  scene: "S1E09"
}, {
  common: "Do you lie awake at night fearing my gash?",
  valyrian: "Gaomagon ao pirtir ēdrugon rȳ bantis ūndegon ñuha orvorta?",
  dothraki: "Tat yer qosarvenikh remekat finne ajjalani tihat anna khado?",
  character: "Varys",
  scene: "S1E10"
}, {
  common: "I'll tell you what. I'm going to give you a present. After I raise my armies, and kill your traitor brother, I'll give you his head as well.",
  valyrian: "Kesan ivestragon ao skoros. Iksan jāre naejot tepagon ao iā rudhy. Tolī nyke manaeragon ñuha azantyr, se ossēnagon aōha nāpāstre lēkia, nyke'll tepagon ao zȳhon bartos hae sȳrī.",
  dothraki: "Anha tikh astat yer fin. Anha elat tat yer jin azho. Hash anha tat anna mahrazhi, akka tat yeri chafak gaezo athdrivar, anha tikh jadat tat yer ma mae nhare ven chek.",
  character: "Joffrey Baratheon",
  scene: "S1E10"
}, {
  common: "The night is dark and full of terrors.",
  valyrian: "Bantis zōbrie issa se ossȳngnoti lēdys.",
  dothraki: "Jin ajjalani ajjin ao akka me ajjin nirat athdrivarido.",
  character: "Melisandre",
  scene: "S2E01"
}, {
  common: "Cut his throat. No wait. I've changed my mind.",
  valyrian: "Nektogon zȳhon irosh. Umbagon. Ivestragī zirȳla jikagon.",
  dothraki: "Rissat mae fotha. Ayolat. Anha zhorre esinasolat anna yothnhare",
  character: "Cersei Lannister",
  scene: "S2E01"
}, {
  common: "You want to lead one day? Learn how to follow.",
  valyrian: "Jaelā naejot jemagon mēre tubis? Gūrēñagon skorkydoso naejot rȳbagon.",
  dothraki: "Zalat tat tikh jin akkelenak ato asshekh? Tiholat hash tat fin akkelenak astat",
  character: "Jeor Mormont",
  scene: "S2E01"
}, {
  common: "A good lord comforts and protects the weak and helpless.",
  valyrian: "Iā sȳz āeksio mīsagon se nākostōbā se vala mijegon dohaeragon.",
  dothraki: "Jin davra khasar vijazerat chomak oma rhellaya.",
  character: "Maestor Luwin",
  scene: "S2E01"
}, {
  common: "My bannermen would receive a raven with a message: \"Release my son and you'll be rich beyond your dreams. Refuse, and your house'll be destroyed, root and stem.\"",
  valyrian: "Ñuha vala kessa jiōragon iā vōljes lēda iā udir: \"Mazilībagon dāez ñuha tresy se kesā jiōragon hae olvie āeksion hae jaelā. Lo daor aōha lentor kessa sagon pryjatan, tindon se stem.\"",
  dothraki: "Anna mahrazh tikh fichat jin nhizo ma jin ase: \"Seris anna rizh akka yer tikh fichat ven san hosh ven zalat. Fin vo yer tikh tikh atthasat.\"",
  character: "Robb Stark",
  scene: "S2E01"
}, {
  common: "The one true god is what's between a women's legs.",
  valyrian: "Jaes mēre drēje iksis skoros iksis iā ābrar ripo.",
  dothraki: "Jin ato tawak vezhof ajjin finne kisha tat she chiori.",
  character: "Salladhor Saan",
  scene: "S2E02"
}, {
  common: "Power resides where men believe it resides. No more and no less.",
  valyrian: "Kustikāne urnēptri skoriot vali pāsagon ziry resides. Dombo se daor less.",
  dothraki: "Athhajar tihat finne mahrazhi shillolat me hash. Vo alikh akka vo naqis.",
  character: "Varys",
  scene: "S2E03"
}, {
  common: "What is dead \nmay never die.",
  valyrian: "Skorion morghe issa dōrī morghūljas kostas.",
  dothraki: "Fin ajjin driv ishish avvos athdrivar.",
  character: "Theon Greyjoy",
  scene: "S2E03"
}, {
  common: "There's no cure \nfor being a cunt.",
  valyrian: "Konīr daor mirre run syt sagon iā quba.",
  dothraki: "Hazze vo zhille vekhikh ha tikh jin mel.",
  character: "Bronn",
  scene: "S2E04"
}, {
  common: "Too much pain will spoil the pleasure.",
  valyrian: "Tolī olvie ōdres kessa daor mazverdagon ziry sȳrkta.",
  dothraki: "Ale san athnithar tikh vo tat jin allayafat.",
  character: "Ros",
  scene: "S2E04"
}, {
  common: "There's no shame in fear, my father told me, what matters is how we face it.",
  valyrian: "Konīr daor sȳngagon, ñuha kepa ivestretan nyke, skoros matters iksis skorkydoso īlon laehurlion ziry.",
  dothraki: "Hazze vo lot she zoqwa, anna ave astat anna, fin matters ajjin hash kisha hatif me.",
  character: "Jon Snow",
  scene: "S2E04"
}, {
  common: "I want to be the Queen.",
  valyrian: "Jaelan naejot sagon se mērī Dāria.",
  dothraki: "Anha zala tat tikh jin disse Khalessi.",
  character: "Margaery Tyrell",
  scene: "S2E05"
}, {
  common: "Gods help you, Theon Greyjoy. Now you are truly lost.",
  valyrian: "Jaes dohaeragon ao, Thēon Grāeyjoy. Sir iksā drējī ojūdan.",
  dothraki: "Vezhof rhellaya yer, Theon Greyjoy. Ajjin yer hash lei she tawak.",
  character: "Rodrik Cassel",
  scene: "S2E06"
}, {
  common: "Love is poison. A sweet poison, yes, but it will kill you all the same.",
  valyrian: "Jorrāelagon iksis narys. Iā dōna narys, kessa, yn kessa ossēnagon jeme keskydoso.",
  dothraki: "Athfiezar ajjin ize. Jin sweet ize, sek, vosma me tikh kill yer ei jin eshna.",
  character: "Cersei Lannister",
  scene: "S2E07"
}, {
  common: "Which one gave you the tougher fight? The cripple or the 6 year old?",
  valyrian: "Skore mēre teptan ao se qopsa vīlībagon? Se doru-borto iā se bȳre jēdarī uēpa?",
  dothraki: "Majin ato azhat yer jin chongat lajat? Jin toki che jin zhinda firesof foz?",
  character: "Yara Greyjoy",
  scene: "S2E08"
}, {
  common: "Death is certain. \nThe time is not.",
  valyrian: "Morghon kessa massigon. Yn nyke ȳdra daor gīmigon skori.",
  dothraki: "Athdrivar ajjin goshat. Jin kashi ajjin vo.",
  character: "Jaqen H'Ghar",
  scene: "S2E08"
}, {
  common: "Why are all the gods such vicious cunts? Where's the god of tits and wine?",
  valyrian: "Skoro syt issi mirre se Jaes sīr quba? Skoriot se Jaes hen naejos se averilla?",
  dothraki: "Kifindirgi hash ei jin vezhof ma mel? finne jin vezhof ki tits akka eveth?",
  character: "Tyrion Lannister",
  scene: "S2E08"
}, {
  common: "If any man dies with a clean sword, I'll rape his f*cking corpse.",
  valyrian: "Lo mirre vala morghūljagon lēda iā clean egros, nyke'll qrillaetagon zirȳla.",
  dothraki: "Fin zhille mahrazh tikh athdrivar ma jin vov ma vo qoy, anha tikh zhorre mae khadokh.",
  character: "Sandor \"The Hound\" Clegane",
  scene: "S2E09"
}, {
  common: "I've gone too far to pretend to be anything else.",
  valyrian: "Eman istan tolī tolmiot naejot sylugon naejot sagon mirros tolie.",
  dothraki: "Anha zhorre elat ale hezhah tat kis tat tikh eshna.",
  character: "Theon Greyjoy",
  scene: "S2E10"
}, {
  common: "Big men fall just as quick as little ones if you put a sword through their hearts.",
  valyrian: "Rōva vali ropagon sepār hae adere hae byka mēre lo ao dīnagon iā egros rȳ pōja prūmi.",
  dothraki: "Zhokwa mahrazhi athdrivar disse ven dik ven naqis ato fin yer azzohat jin vov vi mae zhor.",
  character: "Jon Snow",
  scene: "S3E01"
}, {
  common: "There's no story so good, a drink won't make it better.",
  valyrian: "Konīr iksis daor vestriarzir sīr sȳz, iā mōzugon kessa daor mazverdagon ziry sȳrkta.",
  dothraki: "Hazze ajjin vo assokh ma davra, jin indelat tikh vo tat me alikh davra.",
  character: "Thoros of Myr",
  scene: "S3E02"
}, {
  common: "All this horror that's come to my family, it's all because I couldn't love a motherless child.",
  valyrian: "Mirre bisa bona ēza māzigon naejot ñuha lentor, issa mirre kesrio syt nyke gōntan daor jorrāelagon iā riña mijegon muña.",
  dothraki: "Ei jin rek et jadat tat anna rhojosor, me ajjin ei haji anha tat vo athfiezar jin yalli oma mai.",
  character: "Catelyn Stark",
  scene: "S3E02"
}, {
  common: "Don't get stabbed.",
  valyrian: "Don daor jiōragon ossēntan.",
  dothraki: "Don vo athdrivar.",
  character: "Hot Pie",
  scene: "S3E03"
}, {
  common: "Unsullied! Slay the masters, slay the soldiers, slay every man who holds a whip, but harm no child. Strike the chains off of every slave you see!",
  valyrian: "Dovaogēdys! Āeksia ossēnātās, menti ossēnātās, qilōni pilos lue vale tolvie ossēnātās, yn riñe dōre ōdrikātās. Urnet luo buzdaro tolvio belma pryjātās!",
  dothraki: "Dovoeddi! drozhat jin chomak, drozhat jin loshak, drozhat ei mahrazh fin et jin orvik, vosma tat vo azzisat yalli. Atthasat seris ei zafra yer tihat!",
  character: "Daenerys Targaryen",
  scene: "S3E04"
}, {
  common: "By what right does the wolf judge the lion?",
  valyrian: "Ondoso skoros paktot gaomas se zokla judge se kēlio?",
  dothraki: "Ki fin athjilar tat jin ver astat adakha tat hrakkar?",
  character: "Jaime Lannister",
  scene: "S3E05"
}, {
  common: "Was it a hanging or a dagger in the eye?",
  valyrian: "Iksin ziry iā morghon iā iā egros isse se laes?",
  dothraki: "Ki me jin jaqqa che jin mihesof kijinosi tih?",
  character: "Beric Dondarrion",
  scene: "S3E05"
}, {
  common: "This one was only the watcher. Hang him last, so he may watch the others die.",
  valyrian: "Bisy iksin mērī urnēbagon. Ossēnagon zirȳla mōrī, sīr kostas urnēbagon se tolie morghūljagon.",
  dothraki: "Jin ato ki disse vitihirak. Drozhat mae nakhok, ma mae ishish vitihirak jin eshna athdrivar.",
  character: "Robb Stark",
  scene: "S3E05"
}, {
  common: "This one has the honor.",
  valyrian: "Bezy eza ji rigle.",
  dothraki: "Jin ato et jin chomokh.",
  character: "Grey Worm",
  scene: "S3E05"
}, {
  common: "Let's play a game! Which body part do you need the least?",
  valyrian: "Ivestragī īlva tymagon iā tymptir! skore run hen gaomā daor jorrāelagon?",
  dothraki: "Gwe lajilat jin vilajerosh! majin khado zhey tat yer zigereo?",
  character: "Ramsay Bolton",
  scene: "S3E06"
}, {
  common: "You know nothing, \nJon Snow.",
  valyrian: "Daoruni gīmī, Ionos Sōnaro.",
  dothraki: "Yer tiholat vosi, Jon Ahesh.",
  character: "Ygritte",
  scene: "S3E07"
}, {
  common: "Great or small, we must do our duty.",
  valyrian: "Zhokwa che naqis, kisha eth tat kishi atthar.",
  dothraki: "Rōvēgrie iā byka, istiti gaomagon īlva gaomilaksir.",
  character: "Stannis Baratheon",
  scene: "S3E08"
}, {
  common: "A sword needs a sheath. And a wedding needs a bedding.",
  valyrian: "Iā egros jorrāelagon iā ñelly. Se iā dīnilūks jorrāelagon iā qogror.",
  dothraki: "Jin vov zigereo jin ilek. Akka jin athkemar zigereo jin athhilezar.",
  character: "Walder Frey",
  scene: "S3E09"
}, {
  common: "Let Robb go, or I will cut your wife's throat!",
  valyrian: "Ivestragī Rōb jikagon, iā kesan nektogon aōha irosh hen aōha ābrazȳrys!",
  dothraki: "Eqorasalat elat Robb, che anha tikh drozhat yeri chiorikem!",
  character: "Catelyn Stark",
  scene: "S3E09"
}, {
  common: "The Lannisters send their regards.",
  valyrian: "Lānistri pōja jaeloti jikazi.",
  dothraki: "Jin Lannisters ovvethat jin athchomar ki eyak.",
  character: "Roose Bolton",
  scene: "S3E09"
}, {
  common: "Any man who must say, \"I am the king\" is no true king.",
  valyrian: "Mirre vala qilōni ēdruta ivestragon, \"Iksan se dārys\" iksis daor drēje dārys.",
  dothraki: "Zhille mahrazh fin eth astat, \"Anha zin jin khal\" ajjin vo tawak khal.",
  character: "Tywin Lannister",
  scene: "S3E10"
}, {
  common: "Everyone is mine to torment!",
  valyrian: "Tolvys iksis ñuhon naejot ōdrikagon zirȳ!",
  dothraki: "Eyak is mine annithat them!",
  character: "Joffrey Baratheon",
  scene: "S3E10"
}, {
  common: "Monsters are dangerous and just now kings are dying like flies.",
  valyrian: "Dyni issi tolī quba se sepār sir dāryssy morghūljagon hae sōvegon.",
  dothraki: "Mel ajjin zhowak akka disse ajjin khals athdrivar allayafi afis.",
  character: "Tyrion Lannister",
  scene: "S3E10"
}, {
  common: "The Lannisters aren't the only ones who pay their debts.",
  valyrian: "Se Lannisters issi daor se mērī mēre qilōni addemmagon pōja gēlȳn.",
  dothraki: "Jin Lannisters hash vo jin disse ato fin athessazar zhorre atthar.",
  character: "Oberyn Martell",
  scene: "S4E01"
}, {
  common: "I understand that if anymore words come pouring out your cunt mouth, I'm going to have to eat every f*cking chicken in this room.",
  valyrian: "Nyke shifang bona lo dombo udra māzigon hen aōha orvorta relgos, iksan jāre naejot emagon naejot ipradagon tolvie qogralbar parklon isse bisa tistālion.",
  dothraki: "Anha tiholat rek fin zhille alikh ase jadat mra yeri, anha elat tat zhorre tat eat ei jiz hazze.",
  character: "Sandor \"The Hound\" Clegane",
  scene: "S4E01"
}, {
  common: "Help the poor boy. \nIdiots, help your king.",
  valyrian: "Dohaeragon se mijegindita valītsos. Doru-borto, dohaeragon aōha dārys",
  dothraki: "Rhellaya jin edavrasa rakh. Rhellaya yeri khal, yer tokik",
  character: "Olenna Tyrell",
  scene: "S4E02"
}, {
  common: "Money buys a man's silence for a time. A bolt in the heart buys it forever.",
  valyrian: "Gelebo sindigon iā lykemagon hen vala syt iā jēda. Iā egry isse se prūmia sindigon ziry syt iā bōsa.",
  dothraki: "Vekhikh jerat jin silence arrekoon mahrazh ha jin kashi. Jin mihesof kijinosi zhor jerat me ha jin neak.",
  character: "Petyr \"Littlefinger\" Baelish",
  scene: "S4E03"
}, {
  common: "I do not bring you commands. I bring you a choice.",
  valyrian: "Udrāzmī jemot maghon daor. Iderennon maghan.",
  dothraki: "Anha tat vo fichat yer ase. Anha fichat yer jin oakah okkat.",
  character: "Daenerys Targaryen",
  scene: "S4E03"
}, {
  common: "Haven't lost a fight since I was nine. Maybe it's time?",
  valyrian: "Emagon daor ojūdan iā vīlībagon pār īlen vōre. Skoros lo issa jēda?",
  dothraki: "Zhorre vo lei jin lajat arrekoon anha ki qazat. Ishish me ajjin kashi?",
  character: "Karl Tanner",
  scene: "S4E04"
}, {
  common: "I can't sleep until \nI say the names.",
  valyrian: "Nyke kostagon daor ēdrugon ēva vestran se brōzāt.",
  dothraki: "Anha laz vo remekat kash anha astat jin hake.",
  character: "Arya Stark",
  scene: "S4E05"
}, {
  common: "Who carries the lion banner into future battles? Your nephews? Lancel Lannister? Others whose names I don't even remember?",
  valyrian: "Qilōni kessa emagon se kēlio ezīmagon vīlībāzma? Trēsi hen aōha lēkia? Lancel Lānistor? Tolie skore brōzāt nyke ȳdra daor sesīr gīmigon?",
  dothraki: "Fin tikh kesselat jin hrakkar khiro she arrek vilajero? Yeri siera? Lancel lannister? Eshna mahrazhi, majin anha avvos akka vineserat?",
  character: "Jaime Lannister",
  scene: "S4E06"
}, {
  common: "Send me to kill your enemies. Let me do what I do best.",
  valyrian: "Jikagon nyke naejot ossēnagon aōha qrinuntyssy. Ivestragī nyke gaomagon skoros gaoman sȳrje.",
  dothraki: "Azhat anna tat drozhat yeri dozgo. Azhat anna tat fin anha tat davra.",
  character: "Daario Naharis",
  scene: "S4E07"
}, {
  common: "I am the Lord of the Vale and the Lord of the Vale is a very important person.",
  valyrian: "Iksan se āeksio hen Vāle se se āeksio hen Vāle iksis iā olvie jorrāelatan issaros.",
  dothraki: "Anha zin jin khasar ki Vale akka khasar ki Vale ajjin jin chomak voj",
  character: "Robin Arryn",
  scene: "S4E07"
}, {
  common: "I smashed \nher head in like this!",
  valyrian: "Nyke pryjagon zirȳla bartos isse hae bisa!",
  dothraki: "Anha kafat mae nhare she allayafi jin!",
  character: "Gregor \"The Mountain\" Clegane",
  scene: "S4E08"
}, {
  common: "If you're afraid of a band of wildlings, how in the seven hells did you kill a White Walker?",
  valyrian: "Lo iksā zūgagon hen mirri vali, skorkydoso isse se Sīkudi Nopāzmi gōntan ao ossēnagon iā Timpa Dekurūrys?",
  dothraki: "Fin yer hash rokhat ale ivezh mahrazhi, hash kijinosi fekh mel tat yer kill jin Lei Dahana?",
  character: "Pypar",
  scene: "S4E09"
}, {
  common: "I pledge my life to the Night's Watch, for this night, and for all the nights to come!",
  valyrian: "Nyke tepagon ñuha ābrar naejot se Bantio Urnēbion, syt bisa bantis, se syt mirre se bantior naejot māzigon!",
  dothraki: "Anha alloshat anna atthirar tat Ajjalani Vitihirak, ha jin ajjalani, akka ha ei jin ajjalani tat jadat!",
  character: "Grenn and the Watchmen",
  scene: "S4E09"
}, {
  valyrian: "Valar morghūlis.",
  common: "All men must die.",
  dothraki: "Ei mahrazhi eth drivoe.",
  character: "Arya Stark",
  scene: "S4E10"
}, {
  common: "Gold will be their crowns. Gold their shrouds.",
  valyrian: "Āeksion kessa sagon pōja pāletilla. Āeksion pōja ruaragon.",
  dothraki: "Their firikhnharen tikh tikh hoshor. Their janha tikh tikh hoshor.",
  character: "Maggy",
  scene: "S5E01"
}, {
  common: "Westeros needs to be saved from itself.",
  valyrian: "Vesteros jorrāelagon naejot sagon ȳgha hen ziry.",
  dothraki: "Rhaesh Andahli jif tikh sandi arrekoon me.",
  character: "Varys",
  scene: "S5E01"
}, {
  common: "I wish you good fortune in the wars to come.",
  valyrian: "Nyke jaelagon ao sȳz biarves isse se vīlībāzma naejot māzigon.",
  dothraki: "Anha zala yer davra qorasokh kijinosi athvilajerar tat jadat.",
  character: "Mance Rayder",
  scene: "S5E01"
}, {
  common: "No one… that is who a girl must become.",
  valyrian: "Konīr iksis daor vala qilōni riña ēdruta sagon.",
  dothraki: "Hazze ajjin vo jin mahrazh fin jin nayat eth tikh.",
  character: "Jaqen H'Ghar",
  scene: "S5E02"
}, {
  common: "Old people are terrible at learning new things.",
  valyrian: "Uēpa vali issi daor sȳz naejot gūrēñagon arlie ra.",
  dothraki: "Foz mahrazhi hash vo davra tat tiholat sash vekhikh.",
  character: "Shireen Baratheon",
  scene: "S5E02"
}, {
  common: "How many brothers can say that they've killed a White Walker and a Thenn?",
  valyrian: "Skoverdi lēkia kostagon ivestragon bona ēzi ossēntan iā Timpa Dekurūrys se iā Thenn?",
  dothraki: "Hash san mahrazh laz astat rek mori zhorre atthasat jin Lei Dahana akka jin Thenn?",
  character: "Samwell Tarly",
  scene: "S5E02"
}, {
  common: "Nothing's more hateful than failing to protect the one you love.",
  valyrian: "Daorun iksis qubykta hae iā qringaomagon naejot mīsagon se mēre ao jorrāelagon.",
  dothraki: "Vosi ajjin alikh fejat ven jin lostat tat vijazerat jin ato yer athfiezar.",
  character: "Brienne of Tarth",
  scene: "S5E03"
}, {
  common: "I have important friends in the capital.",
  valyrian: "Eman naenie raqirossa isse se oktion.",
  dothraki: "Anha zhorre many okeo hazze she jin rhaesh.",
  character: "Janos Slynt",
  scene: "S5E03"
}, {
  common: "A man's private affairs ought to stay private.",
  valyrian: "Orvorta ra hen vala emagon naejot umbagon orvorta.",
  dothraki: "Athzhilar ki jin mahrazh zhorre tat vikovarerat zhorre.",
  character: "Pycelle",
  scene: "S5E03"
}, {
  common: "The faith and the crown are the two pillars that hold up the world.",
  valyrian: "Se vokēdre se se pāletilla issi se lanta ra bona ōregon bē se vys.",
  dothraki: "Jin athzalar akka firikhnharen hash jin akat vekhikh rek qoralat yatholat jin rhaesheser.",
  character: "Cersei Lannister",
  scene: "S5E03"
}, {
  common: "The dead don't need lovers. Only the living.",
  valyrian: "Se morghe ȳdra daor jorrāelagon vali isse jorrāelagon. Mērī vali lēda iā ābrar.",
  dothraki: "Jin driv avvos zigereo mahrazhi she athfiezar. Disse jin thir.",
  character: "Melisandre",
  scene: "S5E04"
}, {
  common: "An apology doesn't mean anything if you're not looking the person in the eye.",
  valyrian: "Iā vaoreznuni gaomas daor nūmāzma mirros lo ao sagon daor jurnegēre se issaros isse se laes.",
  dothraki: "At ase tat vo annakhat fin yer tat vo tihat jin voj kijinosi tih.",
  character: "Ramsay Bolton",
  scene: "S5E05"
}, {
  common: "You've known Sansa since she was a girl. Now watch her become a woman.",
  valyrian: "Ao gīmigon Sānsa pār īles riña. Sir urnēbagon zirȳla sagon iā ābra.",
  dothraki: "Yer tiholat Sansa arrekoon mae ki jin nayat. Ajjin tihat mae ohazholat jin chiori.",
  character: "Ramsay Bolton",
  scene: "S5E06"
}, {
  common: "The Gods' laws must be applied to all equally.",
  valyrian: "Se Jaes vēttir ēdruta sagon gaomagon naejot mirre isse gīda.",
  dothraki: "Jin vezhof ase eth tikh akkate ha ei.",
  character: "High Sparrow",
  scene: "S5E07"
}, {
  common: "I am not the most beautiful woman you have ever seen?",
  valyrian: "Iksan daor se olvie gevie ābra emā mirre ūndegīon?",
  dothraki: "Anha zin vo jin zheana chiori yer zhorre hash tihat?",
  character: "Tyene Sand",
  scene: "S5E07"
}, {
  common: "Khaleesi, please I just need a moment of your time.",
  valyrian: "Khalēsi, kostilus nyke sepār jorrāelagon mirri hen aōha jēda.",
  dothraki: "Khaleesi, qafat anha disse zigereo jin leshitof ki yeri kashi.",
  character: "Jorah Mormont",
  scene: "S5E07"
}, {
  common: "I am the greatest Lannister killer of our time!",
  valyrian: "Iksan se rovaja Lānistor ossēnagon hen īlva jēda!",
  dothraki: "Anha zin jin vezhven Lannister jaqqa ki kishi kashi!",
  character: "Tyrion Lannister",
  scene: "S5E08"
}, {
  common: "You have a good heart, Jon Snow. It'll get us all killed.",
  valyrian: "Emā iā sȳz prūmia, Ionos Sōnaro. Kessa jiōragon īlva mirre ossēntan.",
  dothraki: "Yer zhorre jin davra zhor, Jon Ahesh. Me tikh tat kisha ei atthasat.",
  character: "Alliser Thorne",
  scene: "S5E09"
}, {
  common: "Shame.",
  valyrian: "Narejozlivis.",
  dothraki: "Navvirzethay.",
  character: "Septa Unella",
  scene: "S5E10"
}, {
  common: "For the Watch.",
  valyrian: "Syt Bantio Urnēbion.",
  dothraki: "Ha jin Vitihirak.",
  character: "Olly",
  scene: "S5E10"
}, {
  common: "If you were planning to see tomorrow, you picked the wrong room.",
  valyrian: "Lo ao kȳvanon naejot ūndegon hemtubis, ao iderēptan se pirta tistālion.",
  dothraki: "Fin zalat tat tihat silokh, yer okkat jin ojil gache.",
  character: "Eddison Tollett",
  scene: "S6E01"
}, {
  common: "Weak men will never rule Dorne again.",
  valyrian: "Nākostōbā vali kessa dōrī udrāzma Dorne arlī.",
  dothraki: "Havolat mahrazhi tikh avvos become khal she Dorne ato alikh kashi.",
  character: "Ellaria Sand",
  scene: "S6E01"
}, {
  common: "I drink and I know things.",
  valyrian: "Mōzun gīmin ra.",
  dothraki: "Anha indelat akka anha tiholat vekhikh.",
  character: "Tyrion Lannister",
  scene: "S6E02"
}, {
  common: "The past is already written. The ink is dry.",
  valyrian: "Se uēpa jēdi sia bardutan. Se ankas iksis tista.",
  dothraki: "Jin foz kashi ajjin ray lirisirazo. Jin kudsa ajjin ath.",
  character: "Three-Eyed Raven",
  scene: "S6E03"
}, {
  common: "You're not going to serve. You're going to die.",
  valyrian: "Iksā daor jāre naejot dohaeragon. Iksā jāre naejot morghūljagon.",
  dothraki: "Yeri vos osili vosecchi. Yeri vadrivoe.",
  character: "Daenerys Targaryen",
  scene: "S6E04"
}, {
  common: "You freed me from the monsters who murdered my family and gave me to other monsters who murdered my family.",
  valyrian: "Ao daerēdas nyke hen se dyni qilōni ossēntan ñuha lentor se teptan nyke naejot tolie dyni qilōni ossēntan ñuha lentor.",
  dothraki: "Yer tat anna seris arrekoon jin ivezho fin drozhat anna rhojosor akka azhat anna tat eshna ivezho fin drozhat anna rhojosor.",
  character: "Sansa Stark",
  scene: "S6E05"
}, {
  common: "You'll never be one of us, Lady Stark.",
  valyrian: "Kesā dōrī sagon mēre hen īlva, riña Stārke.",
  dothraki: "Yer tikh avvos tikh ato ki kishi chomak, erinak Stark.",
  character: "Waif",
  scene: "S6E05"
}, {
  common: "The First Men called us \"the Children\", but we were born long before them.",
  valyrian: "Se Ēlie Vali brōztagon īlva \"Riñar\", yn īlin āzma bōsa gō zirȳ.",
  dothraki: "Jin ataki mahrazhi ast \"Yalli\", vosma kisha hash yol neak hatif eyak.",
  character: "Leaf",
  scene: "S6E05"
}, {
  common: "Where are my niece and nephew? Let's go murder them.",
  valyrian: "Skoriot issi riñar hen ñuha jenigon? Ivestragī īlva jikagon ossēnagon zirȳ.",
  dothraki: "Finne hash anna janise akka siera? Gwe drozhat eyak.",
  character: "Euron Greyjoy",
  scene: "S6E05"
}, {
  common: "Everyone is what they are and where they are for a reason.",
  valyrian: "Tolvys iksis skoros issi se skoriot issi syt iā drīve.",
  dothraki: "Ei ajjin fin mori hash akka finne mori hash ha jin velzerikh.",
  character: "Kinvara",
  scene: "S6E05"
}, {
  common: "Hodor...hodor...",
  valyrian: "Hodor...hodor...",
  dothraki: "Hodor...hodor...",
  character: "Hodor",
  scene: "S6E05"
}, {
  common: "Burn them all!",
  valyrian: "Pōntoma Zālaza!",
  dothraki: "She vorsa eyak ei.",
  character: "The Mad King",
  scene: "S6E06"
}, {
  common: "He's a greater warrior than either of you will ever be.",
  valyrian: "Issa iā tolī vīlībāzmio mirre hen kesā mirre sagon.",
  dothraki: "Mae ajjin jin alikh vezhven warrior, che ki yer tikh hash tikh.",
  character: "Gilly",
  scene: "S6E06"
}, {
  common: "What's happening?",
  valyrian: "Skoros iksis massitas?",
  dothraki: "Fin ajjin elat she?",
  character: "Mace Tyrell",
  scene: "S6E06"
}, {
  common: "You have served your house and your king faithfully for many years. And you will continue to do so. But not in this city.",
  valyrian: "Emā dohaertan aōha lentor se aōha dārys lēda vokēdre syt naenie jēdri. Se kesā gaomagon sīr. Yn daor isse bisa oktion.",
  dothraki: "Yer rhellaya yeri chomak akka yeri khal ha jin neak kashi. Akka yer tikh tat ma. Vosma vo jinne.",
  character: "Tommen Baratheon",
  scene: "S6E06"
}, {
  common: "There's something  \ngreater than us.",
  valyrian: "Konīr iksis mirros tolī rōvēgrie īlva.",
  dothraki: "Hazze ajjin adakha alikh zhokwa kisha.",
  character: "Ray",
  scene: "S6E07"
}, {
  common: "As long as I am standing, the war is not over.",
  valyrian: "Hae bōsa hae iksan kesīr, se vīlībāzma iksis daor toliot.",
  dothraki: "Ven neak ven anha akkovarat, jin athvilajerar ajjin vo malilat.",
  character: "Brynden \"The Blackfish\" Tully",
  scene: "S6E07"
}, {
  common: "Two translators are on a sinking ship. The first says, \"Do you know how to swim?\" The second says, \"No, but I can shout for help in 19 languages.\"",
  valyrian: "Lanta ȳdrassis issi va iā qrimbughegon lōgor. Se ēlī vestras, \"Gaomagon ao gīmigon skorkydoso naejot bughegon?\" se tȳne vestras, \"Daor, yn kostan iepagon dohaeragon isse 19 udrir.\"",
  dothraki: "Akat lekh-tiholat hash she jin velainerat rhaggat eveth. Jin ate astat, \"Tat yer tiholat hash tat zerqolat?\" jin eshna astat, \"Vo, vosma anha laz qafat ha rhellaya she 19 lekh.\"",
  character: "Missandei",
  scene: "S6E08"
}, {
  common: "A girl is Arya Stark of Winterfell. And I'm going home.",
  valyrian: "Riña iksis Āria Stārke hen Ropatasōnaro. Se iksan jāre lenton.",
  dothraki: "Jin nayat ajjin Arya Stark ki aheshke arthas. Akka anha zin elat irge.",
  character: "Arya Stark",
  scene: "S6E08"
}, {
  common: "Battles have been won against greater odds.",
  valyrian: "Vīlībāzma emagon issare ērinagon lēda dorolvie azantyr.",
  dothraki: "Vilajero hash iffi ma jin san alikh esinakh.",
  character: "Jon Snow",
  scene: "S6E09"
}, {
  common: "Sometimes before we can usher in the new, the old must be put to rest.",
  valyrian: "Gō kosti urnēptre isse se arlie, se uēpa ēdruta sagon dīnagon naejot mōris.",
  dothraki: "Hatif kisha laz idrilat kijinosi sash, jin foz eth tikh annakholat.",
  character: "Qyburn",
  scene: "S6E010"
}, {
  common: "She does not intend to suffer those consequences. The trial can wait. We all need to leave.",
  valyrian: "Ziry gaomas daor jaelagon naejot botagon hen lī ra. Se iderenne kostagon umbagon. Īlon mirre jorrāelagon naejot henujagon.",
  dothraki: "Mae tat vo zala tat dogat arrekoon vekhikh. Jin akkelenat laz ayolat. Kisha ei zigereo esemrasalat.",
  character: "Margaery Tyrell",
  scene: "S6E10"
}, {
  common: "The Gods' judgement is fierce but also fair.",
  valyrian: "Se Jaes udir iksis nēdenka yn litse hae sȳrī.",
  dothraki: "Jin vezhof ase ajjin fierce vosma fair ven chek.",
  character: "High Sparrow",
  scene: "S6E10"
}, {
  common: "Promise me, Ned.",
  valyrian: "Kivijī ynot, Ned",
  dothraki: "Asqoyi anna, Ned",
  character: "Lyanna Stark",
  scene: "S6E10"
}, {
  common: "He's my king from this day until his last.",
  valyrian: "Issa ñuha dārys hen bisa tubis ēva zȳhon mōrī.",
  dothraki: "Mae ajjin anna khal arrekoon jin asshekh kash mae nakhok.",
  character: "Lyanna Mormont",
  scene: "S6E10"
}, {
  common: "Tell them the North remembers. Tell them winter came for House Frey.",
  valyrian: "Ivestragon zirȳ jelmor rūnis. Ivestragon zirȳ sōnar māstan syt lentor Frey.",
  dothraki: "Astat eyak jin valshe vineserat. Astat eyak aheshke et jadat ha Frey.",
  character: "Arya Stark",
  scene: "S7E01"
}, {
  common: "You wish to know where my loyalties lie? Not with any King or Queen, but with the people.",
  valyrian: "Ao jaelagon naejot gīmigon skoriot ñuha pazavorve pirtir? Daor lēda mirre dārys iā dāria, yn lēda se vali.",
  dothraki: "Zalat tat tiholat finne anna qothat qosarvenikh? Vo ma zhille khal che khaleesi, vosma ma chomak.",
  character: "Varys",
  scene: "S7E02"
}, {
  common: "It doesn't matter whose skeleton sits on the Iron Throne.",
  valyrian: "Daoriot jemas skore skeleton iksis va se Dēmalion Āegenko.",
  dothraki: "Me ajjin vo qisi majin khadokh ajjin she m'adori shiqethi.",
  character: "Davos Seaworth",
  scene: "S7E03"
}, {
  common: "I want her to know \nit was me.",
  valyrian: "Anha zala mae tat tiholat me ki anna.",
  dothraki: "Jaelan zirȳla naejot gīmigon īles nyke.",
  character: "Olenna Tyrell",
  scene: "S7E03"
}, {
  common: "Come on, you fucker!",
  valyrian: "Māzigon va, ao aspo!",
  dothraki: "Jadat she, yer govak!",
  character: "Bronn",
  scene: "S7E04"
}, {
  common: "I can't wait this war out.",
  valyrian: "Nyke kostagon daor umbagon bisa vīlībāzma hen.",
  dothraki: "Anha laz vo athayozar jin athvilajerar mra.",
  character: "Gendry",
  scene: "S7E05"
}, {
  common: "You spent too much time with the free folk, now you don't like kneeling.",
  valyrian: "Ēdā mirri olvie jēda lēda se Dāez Idañe, sir ao ȳdra daor raqagon naejot obūljagon.",
  dothraki: "Yer ki ale san kashi ma seris, ajjin yer avvos allayafi avvemolat.",
  character: "Tormund Giantsbane",
  scene: "S7E06"
}, {
  common: "The enemy always wins. And we still need to fight him.",
  valyrian: "Se qrinuntys va moriot ērinagon. Se īlon iēdrosa jorrāelagon naejot vīlībagon zirȳla.",
  dothraki: "Jin dozgo ayyey iffi. Akka kisha zin zigereo tat lajat mae.",
  character: "Beric Dondarrion",
  scene: "S7E06"
}, {
  common: "Careful, Beric. You lost your priest. This is your last life.",
  valyrian: "Keligon ziry, Beric. Ao ojūdan aōha voktys. Bisa iksis aōha mōrī ābrar.",
  dothraki: "Avvos tikh aranne, beric. Yer lei yeri movek. Jini yeri nakhok atthirar.",
  character: "Sandor \"The Hound\" Clegane",
  scene: "S7E06"
}, {
  common: "The dragons are my children. They're the only children I'll ever have.",
  valyrian: "Se zaldrīzoti issi ñuha riñar. Pōnta're se mērī riñar nyke'll mirre emagon.",
  dothraki: "Jin zhavvorsa hash anna yalli. Mori hash jin disse yalli anha tikh hash zhorre.",
  character: "Daenerys Targaryen",
  scene: "S7E06"
}, {
  common: "It always seemed that there was an impossible choice I had to make. Stark or Greyjoy.",
  valyrian: "Ziry va moriot vestretan bona konīr iksin iā qopsa iderennon ēdan naejot mazverdagon. Stārke iā Grāeyjoy.",
  dothraki: "Hazze ayyey ki jin chongat anha ki tat akkelenat. Stark che Greyjoy.",
  character: "Theon Greyjoy",
  scene: "S7E07"
}, {
  common: "Thank you for all your many lessons, Lord Baelish. I will never forget them.",
  valyrian: "Tolvys jaelagon mirros, Alaīne. Se skori ao gīmigon skoros vala jaelagon ao gīmigon qilōni issa, se skorkydoso naejot dīnagon zirȳla.",
  dothraki: "San athchomari yeraan ha ei yeri athvillar, khasar Baelish. Anha tikh vineserat eyak.",
  character: "Sansa Stark",
  scene: "S7E07"
}, {
  common: "I loved you. \nMore than anyone.",
  valyrian: "Nyke jorrāelatan ao. Hae daorys gōntan.",
  dothraki: "Anha zhilak yera. Allayafi vo ato hash.",
  character: "Petyr \"Littlefinger\" Baelish",
  scene: "S7E07"
}, {
  common: "I pledged to ride north. I intend to honor that pledge.",
  valyrian: "Nyke kivio naejot kipagon jelmor. Mazeman naejot rigle bona kivio.",
  dothraki: "Anha alloshat tat dothralat valshe. Anha movekkhat chomolat rek alloshat.",
  character: "Jaime Lannister",
  scene: "S7E07"
}, {
  common: "It was a bit hard to explain why my wife fled moments after the king’s murder.",
  valyrian: "Īles mirrī qopsa naejot udligon skoro syt ñuha ābrazȳrys dakogon paktot tolī se dārys ossēnagon.",
  dothraki: "Me ki jin naqis chongat tat astat kifindirgi anna chiorikem lanat irge jin khal ajjin driv.",
  character: "Tyrion Lannister",
  scene: "S8E01"
}, {
  common: "You want a queen? \nEarn her.",
  valyrian: "Zalat jin khalessi? Zhorre mae.",
  dothraki: "Jaelā iā dāria? gūrogon zirȳla.",
  character: "Cersei Lannister",
  scene: "S8E01"
}, {
  common: "You've never been a bastard.",
  valyrian: "Emā dōrī issare iā nādrēsy.",
  dothraki: "Yer zhorre avvos tikh jin vosi.",
  character: "Samwell Tarly",
  scene: "S8E01"
}, {
  common: "I've always had blue eyes!",
  valyrian: "Eman va moriot ēdas kasta laesi!",
  dothraki: "Anha zhorre ei jin kashi ki thelis tih!",
  character: "Tormund Giantsbane",
  scene: "S8E01"
}, {
  common: "I will not hide underground. I pledged to fight for the North, and I will fight.",
  valyrian: "Anha tikh vo hide hazze. Anha asqoyi tat lajat ha jin valshe, akka anha tikh lajat.",
  dothraki: "Kesan daor ruaragon gō tegon. Nyke kivio naejot ivīlībagon Jelmor, se kesan vīlībagon.",
  character: "Lyanna Mormont",
  scene: "S8E02"
}, {
  common: "All without a shred of combat ability.",
  valyrian: "Mirre mijegon mirre vīlībāzma gūrēñare.",
  dothraki: "Ei oma zhille vilajero athvillar.",
  character: "Davos Seaworth",
  scene: "S8E02"
}, {
  common: "My name, my real name, is Aegon Targaryen.",
  valyrian: "Ñuha brōzi, ñuha real brōzi, iksis Aegon Targārien.",
  dothraki: "Anna hake, anna tawak hake, ajjin Aegon Targaryen.",
  character: "Jon Snow",
  scene: "S8E02"
}, {
  common: "Live.",
  valyrian: "Glaesagon.",
  dothraki: "Thirat.",
  character: "Beric Dondarrion",
  scene: "S8E03"
}, {
  common: "Brown eyes, green eyes, blue eyes. Eyes you'll shut forever.",
  valyrian: "Nudho laesi, kasta laesi, zōbrie laesi. Laesi kesā ojughagon syt se rest hen jēda.",
  dothraki: "Nozhoven tih, dahaan tih, thelis tih. Tih yer tikh qisi ha evoon.",
  character: "Melisandre",
  scene: "S8E03"
}, {
  common: "Not Today.",
  valyrian: "Tubī daor.",
  dothraki: "Vo asshekh.",
  character: "Arya Stark",
  scene: "S8E03"
}, {
  common: "[Smiles]",
  valyrian: "[Līrinon]",
  dothraki: "[Eme]",
  character: "Night King",
  scene: "S8E03"
}, {
  common: "You're a good man, Theon. Thank you.",
  valyrian: "Iksā iā sȳz vala, Thēon. Kirimvose.",
  dothraki: "Yer hash jin davra mahrazh, Theon. San athchomari yeraan.",
  character: "Bran Stark",
  scene: "S8E03"
}, {
  common: "I'm hurt.",
  valyrian: "Iksan ōdrikagon.",
  dothraki: "Anha zin annithat.",
  character: "Jorah Mormont",
  scene: "S8E03"
}, {
  common: "Dracarys.",
  valyrian: "Dracarys.",
  dothraki: "Zhavvorsa vorsa.",
  character: "Missandei",
  scene: "S8E04"
}, {
  common: "You were the only one... who didn't treat me like a monster.",
  valyrian: "Īlē se mērī mēre qilōni gōntan daor ȳdragon lēda nyke hae iā dyni.",
  dothraki: "Yer hash jin disse ato fin tat vo tikh ma anna allayafi jin mel.",
  character: "Tyrion Lannister",
  scene: "S8E05"
}, {
  common: "The Red Keep has never fallen. It won’t fall today.",
  valyrian: "Se mele gaomagon ēza dōrī ropagon. Kessa daor ropagon tubī.",
  dothraki: "Jin virzeth keep et avvos oharat. Me tikh vo oharat asshekh.",
  character: "Cersei Lannister",
  scene: "S8E05"
}, {
  common: "Yeah... that's you. That's what you've always been.",
  valyrian: "Konir sagon ao. Konir sagon skoros emā va moriot issare.",
  dothraki: "Sek haji yer. Haji fin yer hash ha jin neak kashi.",
  character: "Sandor \"The Hound\" Clegane",
  scene: "S8E05"
}, {
  common: "Now Varys's ashes can tell my ashes \"See? I told you so\"",
  valyrian: "Sir ñuqir hen Vāris kostagon ivestragon ñuha ñuqir \"Ūndegon? nyke ivestretan ao sīr\"",
  dothraki: "Ajjin ikh ki Varys laz astat anna ikh \"Tihat? anha astat yer ma\".",
  character: "Tyrion Lannister",
  scene: "S8E06"
}, {
  common: "Love is the death of duty.",
  valyrian: "Jorrāelagon iksis se morghon hen gaomilaksir.",
  dothraki: "Athfiezar ajjin jin athdrivar ki atthar.",
  character: "Jon Snow",
  scene: "S8E06"
}, {
  common: "Why do you think I came all this way?",
  valyrian: "Skoro syt gaomagon ao pendagon nyke māstan mirre bisa ñuhoso?",
  dothraki: "Kifindirgi tat yer dirgat anha jadat ei kijinosi?",
  character: "Bran Stark",
  scene: "S8E06"
}, {
  common: "A Song of Ice and Fire.",
  valyrian: "Vāedar Suvio se Perzo.",
  dothraki: "Hoyali Jeshi ma Vorsasi.",
  character: "Samwell Tarly",
  scene: "S8E06"
}]

export default quotes
