/**
 * 这里是列表的功能类库
 * 列表的使用情况：当数据不是很多，且不需要复杂查找或者排序的情况下进行使用
 * 使用场景：待办事宜、购物车、排行榜、等等。
 * 列表比Array的优点 
 * 不需要关心底层的数据存储结构
 * 迭代器为访问提供了统一的方式
 * API包括
 * listSize 列表个数
 * pos 列表的当前位置
 * length 返回列表的个数
 * clear 清除列表
 * toString 返回列表的字符串形式
 * getElement 返回当前位置的元素
 * insert 在现有元素后面添加新元素
 * append 在列表的末尾添加新元素
 * remove 从列表中删除元素
 * front 将列表当前位置设置移动到第一个元素
 * end 将当前列表位置移动到最后一个元素
 * prev 将当前位置前移一位
 * next 将当前位置后移一位
 * currPos 返回列表的当前位置
 * moveTo 将当前位置移动到指定位置
 */

(function(win) {
	var ZDW_List = function() {
		this.listSize = 0;
		this.pos = 0;
		this.dataStore = []; //存放数据的数组
	}
	var p = ZDW_List.prototype;

	/**
	 *添加元素到最后
	 * @param {Object} element
	 */
	p.append = function(element) {
		this.dataStore[this.listSize++] = element;
	}

	/**
	 *查找当前元素是否在列表中，如果存在，则返回列表 ID  如果不存在，则返回－1
	 * @param {Object} element
	 */
	p.find = function(element) {
		for (var i = 0; i < this.dataStore.length; i++) {
			if (this.dataStore[i] == element) {
				return i;
			}
		}
		return -1;
	}

	/**
	 * 删除数组中的某一位，如果将isIndex设置为true，则第一位参数默认为数组位数
	 * 如果只写一个变量，则填入的为元素本身
	 * @param {Object} element
	 */
	p.remove = function(element, isIndex) {
		var index;
		if (!isIndex) {
			index = this.find(element);
		} else {
			index = element;
		}
		if (index > -1) {
			this.dataStore.splice(index, 1);
			--this.listSize;
			return true;
		} else {
			return false;
		}
	}
	/**
	 *返回列表的长度 
	 */
	p.length = function(){
		return this.listSize;
	}
	/**
	 *返回列表的数据 
	 */
	p.toString = function(){
		return this.dataStore;
	}
	/**
	 *	向指定元素 后面添加一个元素 
	 * 	如果第三个参数为true 则第二个参数可以直接写成需要插入的ID
	 * @param {Object} element
	 * @param {Object} after
	 */
	p.insert = function(element,after,isIndex){
		var index;
		if(!isIndex){
			index = this.find(after);
		}else{
			index = after;
		}
		if(index > -1){
			this.dataStore.splice(index+1,0,element);
			++this.listSize;
			return true;
		}else{
			return false;
		}
	}
	/**
	 *清除当前列表 
	 */
	p.clear = function(){
		this.dataStore = [];
		this.dataStore.length = 0;
		this.listSize = this.pos = 0;
	}
	/**
	 *移动到当前列表的第一位 
	 */
	p.front = function(){
		this.pos = 0;
		return this.pos;
	}
	p.end = function(){
		this.pos = this.listSize-1;
		return this.pos;
	}
	p.next = function(){
		if(this.pos<this.listSize-1){
			++this.pos;			
		}
		//console.log(this.pos)
		return this.pos;
	}
	p.prev = function(){
		if(this.pos>0){
			--this.pos;
		}
		return this.pos;
	}
	p.currPos = function(){
		return this.pos;
	}
	p.moveTo = function(position){
		this.pos = position;
	}
	p.getElement = function(){
		return this.dataStore[this.pos];
	}

	win.ZDW_List = ZDW_List;
})(window)