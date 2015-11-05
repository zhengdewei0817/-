/**
 *这里是列表的学习部分 
 */

(function(){
	function Person(name,sex){
		this.name = name;
		this.sex = sex;
	}
	
	var xiaozhao = new Person("小赵","男");
	var xiaoqian = new Person("小钱","女");
	var xiaosun = new Person("小孙","男");
	var xiaoli = new Person("小李","女");
	var xiaozhou = new Person("小周","男");
	var xiaowu = new Person("小吴","女");
	var xiaozheng = new Person("小郑","男");
	var xiaowang = new Person("小王","女");
	var xiaohan = new Person("小韩","男");
	var xiaoyang = new Person("小杨","男");
	
	var list = new ZDW_List();
	list.append(xiaozhao);
	list.append(xiaoqian);
	list.append(xiaosun);
	list.append(xiaoli);
	list.append(xiaozhou);
	list.append(xiaowu);
	list.append(xiaozheng);
	list.append(xiaowang);
	list.append(xiaohan);
	list.append(xiaoyang);
	

	function getPerson(sex){
		var test = new ZDW_List();
	
		for(list.front();list.currPos()<list.length()-1;list.next()){
			if(list.getElement().sex == sex){
				test.append(list.getElement())
			}
		}
		
		return test;
	}
	
	
	var nan = getPerson("男");
	console.log(nan)
	
})()
