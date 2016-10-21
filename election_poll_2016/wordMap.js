//Some sample data - http://en.wikiquote.org/wiki/Opening_lines
var words = "experienced strong untrustworthy politician tolerable feminist sneaky controversy  strong criminal underrated dishonest experience dedicated democrat politician better prepared qualified fake  politician strong, powerful, knowledgable fighter liar vpotus female meh feminism scumbag clever reliable  qualified strong strong woman qualified corruption liar untrustworthy deceiving  intelligent female competent politician  not trump crooked leader eh untrustworthy democrat responsible strong collected strong woman president ready cringe democrat corrupt  determined robotic necessary untrustworthy strong prison eh untrustworthy dedicated corrupt cuckold dishonest capable  determined incompetent irresponsible money neutral manipulative weak corrupt  qualified dishonest  unliked liar crooked qualified leader qualified experienced liar mafia experienced liar experienced confident empty experienced sleazy fake qualified  politician experienced experienced presidential crook experienced competent experienced experienced competent leader politician powerful eh politician corruption politician  better experienced  untrustworthy  lesser evil crook uninspiring liar  strong experienced pant suit  cold politician unlikeable  experience qualified iono experienced  emails untrustworthy stoic qualified emails deceit poised experienced experience misrepresented dishonest experienced calculated president experienced  unliked experienced  e-mails better than trump qualified feminism experienced capable woman powerful feminist strong corrupt qualified presidential.  strong the only option steady accomplished scripted corrupt  experienced sketchy corporate leader strong strong warmonger lie untrustworthy  liar slippery lucky determined put together emails queen president corrupt intelligent liar powerful eh intelligent acceptable scam liar mature experienced equality pantsuit unreliable politician established woman sneaky strong  fake strong deceiving  experienced crooked experienced experienced capable trying woman conflicted safe  woman slimy  untrustworthy corrupt experienced informed unsure ready leader crooked politician president woman credentials liar women cold woman experienced better unforthcoming tolerable qualified president crooked experienced ok strong secretary  fake progress corruption  safe  woman lewinsky  liar perseverant scandal corrupt experienced untrustworthy  experienced qualified liar untrustworthy experienced bought perserverant  experience shrewd better crooked untrustworthy  considerate  sketchy pretentious  career politician  liar trying  idk fake experienced determined stable experienced warhawk sure strong un-charismatic qualified decisive qualified  presidential experienced establishment serviceable liar president strong hard work  liar flawed corrupt liar experienced liar qualified qualified inspiring unemotional experience  stable  secretary liar dammit qualified  resourceful dishonest better experience rubber capable experienced experienced experienced competent prepared experienced experienced future  democrat liar ambitious  untrustworthy woman feminism strong president qualified polished presidential  competent strength old reserved  strong inconsistent untrustworthy adaptable deceiving corrupt  experienced untrustworthy murderer tenacious  sick motivated pragmatic experienced inspiring  effective leader experienced untrustworthy  calculative liar imperialist  decent president experienced experienced experienced old liar capable pragmatic experienced woman palatable  adequate pretoria female email powerful dishonest liar qualified knowledgeable liar progressive taxes default  persistent hope experienced experienced criminal qualified experienced smart knowledgeable driven experienced traditional insincere experience white feminist feminism politician maybe experience experienced progress liar experienced powerful okay relentless historic corrupt woman  acceptable yikes experienced better than trump experienced fake ineffective intelligent nottrump women powerful experienced last-resort careful michelle obama liar untrustworthy passionate  revolutionary  aloof competent  liar ? empowering experience strong accomplished strong dirty benghazi  experienced smart leader strong  establishment slimey interesting qualified strong serious   charismatic politician active emails adequate female president experienced 'the-goat' equilibrium  committed experienced steadfast badass democrat shady competent  vanilla warmonger smart experienced experienced shady experienced psycho professional uninspiring  bh impressive fake over-criticized shrewd intelligence democrat smart complicated woman qualified experienced leader leader politician right track  desperate  presidential female  experience qualified  president woman  experience woman email experienced liar crooked fraud competent politically-savvy neo-imperialist inspiring competent  experiences imperialist first female president experienced woman experienced fake  strong-willed powerful  corrupt empowerment  sophisticated calculated first  brilliant old leader ambitious dishonest capable  qualified strong sly jail manipulative  prepared qualified hard-working experienced qualified political untrustworthy convoluted strength cultivated experienced consistent powerful woman experienced uninspiring dishonest  incremental strong politician strong woman fake inspiring qualified strong emails follower nah strong calculated criminal qualified deliberate calculated qualified glass ceiling snake  female qualified woman eh experience establishment annoying woman old eh strong female woman children democrat experienced qualified untrustworthy non-apocalyptic professional competent smart feminist prepared capable untrustworthy career politician good hawkish better crooked tuition complicated  corrupt  qualified strong capable bad new york commander corrupt strong dishonest medic rational experienced pantsuit firm determined corporate knowledgeable  determined democrat steady  corrupt career prepared experienced  tolerable desperate dishonest experienced smart secretary women experienced untrustworthy dependable firm determined equality capable sociopath power ruthless  emails inspirational woman corrupt consistent  strong unrelateable  qualified corruption female conniving pant-suit politician qualified  eh better reliable secretive dependable qualified desperate choice knowledgable  crooked groundbreaking bold rational qualified liar woman strong  settlement qualified crooked crooked reasonable disconnected emails liar  leader dank smart fake inspiring experienced qualified resourceful woman rational dishonest ambitious feminist indifference dishonest experienced  emails enough madame president strong powerful qualified strong experienced liar experienced qualified  qualified experienced experience politician honest experience sharp liar criminal controlled womanizer  fierce experienced new experienced qualified strong inspirational experienced competent overly-qualified criminal russia betterthantrump  crook meh intelligent bill qualified  experienced qualified consistent hope experience second-best better strong experienced suspicious crooked crooked competent determined politician experienced female liar emails necessary fake strong powerful decent turdsandwich corrupt fake experienced democrat qualified crooked old female role model  sick experienced crook woman experienced pass two-faced experienced qualified experienced  criminal sneaky female smart accomplished strong experienced pandering experienced misunderstood manipulative experience politician experienced hypocritical women crooked crooked politic experienced emails obama emails accomplished smart adequate cookie-cutter experienced powerful feminist  old corrupt strong corrupt corrupt  qualified liar brave benghazi woman experience misunderstood crooked liar paintsuits boring corrupt confident unrelatable corrupt  shady - ok criminal grim-hopefulness legit first prepared interesting yes feminist woman politician  bamf experience experienced president dishonest corrupt good liberal qualified wanting emails old slimy despicable qualified female alright untrustworthy liar crooked independent brilliant liar competent  corrupt prepared #girlboss prepared better than trump fake dedicated strong fine corrupt strong"

drawWordCloud(words);

function drawWordCloud(text_string) {
    var common = "poop,i,me,my,myself,we,us,our,ours,ourselves,you,your,yours,yourself,yourselves,he,him,his,himself,she,her,hers,herself,it,its,itself,they,them,their,theirs,themselves,what,which,who,whom,whose,this,that,these,those,am,is,are,was,were,be,been,being,have,has,had,having,do,does,did,doing,will,would,should,can,could,ought,i'm,you're,he's,she's,it's,we're,they're,i've,you've,we've,they've,i'd,you'd,he'd,she'd,we'd,they'd,i'll,you'll,he'll,she'll,we'll,they'll,isn't,aren't,wasn't,weren't,hasn't,haven't,hadn't,doesn't,don't,didn't,won't,wouldn't,shan't,shouldn't,can't,cannot,couldn't,mustn't,let's,that's,who's,what's,here's,there's,when's,where's,why's,how's,a,an,the,and,but,if,or,because,as,until,while,of,at,by,for,with,about,against,between,into,through,during,before,after,above,below,to,from,up,upon,down,in,out,on,off,over,under,again,further,then,once,here,there,when,where,why,how,all,any,both,each,few,more,most,other,some,such,no,nor,not,only,own,same,so,than,too,very,say,says,said,shall";

    var word_count = {};

    var words = text_string.split(/[ '\-\(\)\*":;\[\]|{},.!?]+/);
    if (words.length == 1) {
        word_count[words[0]] = 1;
    } else {
        words.forEach(function(word) {
            var word = word.toLowerCase();
            if (word != "" && common.indexOf(word) == -1 && word.length > 1) {
                if (word_count[word]) {
                    word_count[word]++;
                } else {
                    word_count[word] = 1;
                }
            }
        })
    }

    var svg_location = "#wordCloud";
    var width = $(document).width();
    var height = $(document).height();

    var fill = d3.scale.category20();

    var word_entries = d3.entries(word_count);

    var xScale = d3.scale.linear()
        .domain([0, d3.max(word_entries, function(d) {
            return d.value;
        })])
        .range([10, 100]);

    d3.layout.cloud().size([width, height])
        .timeInterval(20)
        .words(word_entries)
        .fontSize(function(d) {
            return xScale(+d.value); })
        .text(function(d) {
            return d.key; })
        .rotate(function() {
            return ~~(Math.random() * 2) * 90; })
        .font("Impact")
        .on("end", draw)
        .start();

    function draw(words) {
        d3.select(svg_location).append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + [width >> 1, height >> 1] + ")")
            .selectAll("text")
            .data(words)
            .enter().append("text")
            .style("font-size", function(d) {
                return xScale(d.value) + "px"; })
            .style("font-family", "Impact")
            .style("fill", function(d, i) {
                return fill(i); })
            .attr("text-anchor", "middle")
            .attr("transform", function(d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function(d) {
                return d.key; });
    }

    d3.layout.cloud().stop();
}
