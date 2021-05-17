function display(){
  document.getElementById("para2").innerHTML = "";

  var num = document.getElementById("box").value;
  var str = "Invictus is the leading organization in the field of Safety and Compliance consulting. With several Fortune 500 organizations and Govt. agencies as its clientele, Invictus has touched over 20 million lives. Our clients include Microsoft, Adobe, Walmart, British Telecom, Canon, Pepsi, Sony, Maruti, TCS, Infosys, McKinsey and many more. Invictus is now making a leap in the field of smart technology solutions to enhance the overall safety quotient of individuals as well as organizations. With the safety and compliance industry in a hyper growth mode, we are aiming to become the number 1 safety and compliance tech brand in the next few years. We are in a rapid growth phase and are looking for individuals with drive and vision to associate with us to take us forward in our journey. What we promise to everyone at Invictus is a dynamic and intellectually stimulating environment with the flexibility to experiment. In addition to working on exciting tech, you would also have the satisfaction of creating a safer &amp; smarter society of tomorrow. Looking for talented engineers to - build Web and App projects using latest technologies - develop BACKEND services using technologies like nodejs, redis, mysql, memcached, mongodb, elastic search - develop FRONTEND in collaboration with UI/UX designer(s) using technologies like Reactjs, Nextjs, React Native  - work on Data Analytics - work on Amazon AWS, Amazon EC2, Amazon Elasticache, Amazon ElasticSearch, Amazon Lambda and Serverless";
  var arr = str.split(" ");
  var length = arr.length;
  var temp = {};
  var visited ={};
  var map = new Map();

  for(var i=0;i<length;i++){
    visited[i]=false;
  }

  for(var i=0;i<length;i++){
    if(visited[i]==true){
      continue;
    }
    var count=1;
    for(var j=i+1;j<length;j++){
      if(arr[i]==arr[j]){
        visited[j]=true;
        count++;
      }
    }
    map.set(arr[i],count);
  }
  map = map.sort();
  var itr = map.keys();
  var i=0;
  while(i<num){
    document.getElementById("para2").innerHTML += itr.next().value + " : " + map.get(itr.next().value) + "<br/>";
    i++;
  }
  return false;
}

