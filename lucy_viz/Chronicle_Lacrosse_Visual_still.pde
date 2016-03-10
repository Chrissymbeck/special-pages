color[] palette={#122661,#281262,#8F7B0D,#8F660D,#8696C5};
String[] trigger={"rape","raped","lacrosse","brodhead","accusation","sickening","misconduct",
"sexual","toleration","Duke","deliberate","allegations","suspension","team","conduct","charges", 
"student","mistake","guilty","investigation","behavior","report","attorney","innocent","athletic","evidence"
,"report","reports"};
String[] common={"i", "me", "my", "myself", "we", "our", "ours", "ourselves", "you", "your", "yours", "yourself", "yourselves", "he", "him", "his", "himself", "she", "her", "hers", "herself", "it", "its", "itself", "they", "them", "their", "theirs", "themselves", "what", "which", "who", "whom", "this", "that", "these", "those", "am", "is", "are", "was", "were", "be", "been", "being", "have", "has", "had", "having", "do", "does", "did", "doing", "a", "an", "the", "and", "but", "if", "or", "because", "as", "until", "while", "of", "at", "by", "for", "with", "about", "against", "between", "into", "through", "during", "before", "after", "above", "below", "to", "from", "up", "down", "in", "out", "on", "off", "over", "under", "again", "further", "then", "once", "here", "there", "when", "where", "why", "how", "all", "any", "both", "each", "few", "more", "most", "other", "some", "such", "no", "nor", "not", "only", "own", "same", "so", "than", "too", "very", "s", "t", "can", "will", "just", "don", "should", "now", "d", "ll", "m", "o", "re", "ve", "y", "ain", "aren", "couldn", "didn", "doesn", "hadn", "hasn", "haven", "isn", "ma", "mightn", "mustn", "needn", "shan", "shouldn", "wasn", "weren", "won", "wouldn"};

int i=0;
int x;
int y;
ArrayList<Integer> xcoord=new ArrayList<Integer>();
ArrayList<Integer> ycoord=new ArrayList<Integer>();
String words[];
String nums[];
ArrayList<String> trigs=new ArrayList<String>();
ArrayList<Integer> trigCount=new ArrayList<Integer>();

void setup(){
  size(1000,800);
  background(palette[0]);
  words=loadStrings("LacrosseWordFrequencyWords.txt");
  nums=loadStrings("LacrosseWordFrequencyNums.txt");
  for (int i=0;i<words.length;i++){
    x=(int)random(100,800);
    y=(int)random(50,700);
    xcoord.add(x);
    ycoord.add(y);
    int col=(int) random(5);
    //if (nums[i].equals("243")){
    //  println(words[i]);
    //  println(nums[i]);
    //}
    //fill(255);
    int count=0;
    for (int j=0;j<trigger.length;j++){
      if (words[i].toLowerCase().equals(trigger[j])){
        count++;
        trigs.add(words[i]);
        trigCount.add(int(nums[i]));
      }
    }
    if (count!=0){
      fill(0);
    } else {
      if (col!=0){
        fill(palette[col]);
      }else fill(palette[4]);
    }
    if (int(nums[i])>80){
      textSize(100);
    }else{
    textSize(int(nums[i]));
    }
    text(words[i],x,y);}
}

void draw(){
  fill(0);
  rect(25,25,50,50);
  textSize(15);
  fill(255);
  text("Trigger",25,55);
  
  fill(0);
  rect(25, 100, 50, 50);
  fill(255);
  textSize(10);
  text("All words",28,130);
  
  if (mouseX>25 && mouseX<75 && mouseY>25 && mouseY<75){
    background(palette[0]);
    drawTrigButton();
    drawNormButton();
    triggerHover();
}else if(mouseX>25 && mouseX<75 && mouseY>100 && mouseY<150){ 
    setup();
    drawTrigButton();
    drawNormButton();
  }
}

void drawTrigButton(){
  fill(0);
    rect(25,25,50,50);
    textSize(15);
    fill(255);
    text("Trigger",25,55);
}

void drawNormButton(){
    fill(0);
    rect(25, 100, 50, 50);
    fill(255);
    textSize(10);
    text("All words",28,130);
}

void triggerHover(){
  background(palette[0]);
  for (int i=0; i<trigs.size(); i++){
      fill(0);
      x=(int)random(50,750);
      y=(int)random(50,700);
      textSize(trigCount.get(i));
      text(trigs.get(i),x,y);
      delay(2);
  }
}