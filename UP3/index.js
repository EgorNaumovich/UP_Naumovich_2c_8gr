var Posts = [];
let lenta = document.getElementById('c4a');

function validatePost(pst) {
		let flag;
		for(let i = 0; i<Posts.length;i++){
			if(Posts[i].id == pst.id){
				flag = false;
				break;
			}
			else flag = true;
			}
		
		if(pst.author == '' || pst.name == '' || pst.description.length > 200 || flag == false)
			return false;
		else return true;
	}

function addAndView(Post, pst){
	if(Post.addPost(pst) == true){
		
let Post = document.createElement('div');
Post.className = 'adv';

let testimg = document.createElement('div');
testimg.className = 'img';
Post.appendChild(testimg);

let testtitle = document.createElement('div');
testtitle.className = 'title';
testtitle.innerHTML = pst.name;
Post.appendChild(testtitle);

let testuser = document.createElement('div');
testuser.className = 'user';
testuser.innerHTML = pst.author;
Post.appendChild(testuser);

let testdescr = document.createElement('div');
testdescr.className = 'description';
testdescr.innerHTML = pst.description;
Post.appendChild(testdescr);

let testlike = document.createElement('div');
testlike.className = 'like';
Post.appendChild(testlike);
		
Post.id = pst.id;
					
lenta.appendChild(Post);
	}
}

function removeAndView(Post, idnum){
	Post.removePost(idnum);
	let toRemove = document.getElementById(idnum);
	console.log(toRemove);
	lenta.removeChild(toRemove);
}

function editAndView(idnum, Post, pst){
	Post.editPost(idnum, pst);
	let toChange = document.getElementById(idnum);
	removeAndView(Post,idnum);
	addAndView(Post,pst);
	
	
}

class Post{
	constructor(Posts1){
	this.id = Posts1.id;
	this.name = Posts1.name;
	this.description = Posts1.description;
	this.createdAt = Posts1.createdAt;
	this.author = Posts1.author;
	this.photoLink = Posts1.photoLink;
	}

	getPosts(filter){
		
		
		for(let i = 0; i < Posts.length - 1; i++){
		if(Posts[i].createdAt.getDate() > Posts[i+1].createdAt.getDate()){
				var swap = Posts[i];
                Posts[i] = Posts[i + 1];
                Posts[i + 1] = swap;
			}
				
		}
		
		if(filter != null){
					let temp = [];

		for(let i = 0; i<Posts.length;i++){
			if(Posts[i].author == filter)
				temp.push(Posts[i]);
		}
			console.log(temp);
		}
		else{
			console.log(Posts);
		}
	}
	
	getPost(idnum){
		for(let i = 0; i < Posts.length;i++){
			if(Posts[i].id == idnum)
		console.log(Posts[i]);
		}
	}
	
	addPost(pst){
	if(validatePost(pst)){
		Posts.push(pst);
		return true;
		}
	}
	
	removePost(idnum){
		for(let i = 0; i < Posts.length;i++){
			if(Posts[i].id == idnum){
				Posts.splice(i,1);
			}
		}
	}
	
	editPost(idnum, pst){
		for(let i = 0; i < Posts.length;i++){
			if(Posts[i].id == idnum){
				Posts[i].description = pst.description;
				Posts[i].name = pst.name;
				Posts[i].photoLink = pst.photoLink;
			}
	}
}
}



let tst = new Post(Posts);
let test1 = {
		id: '111',
		name: 'Новый пост',
		description: 'Новое объявление',
		createdAt: new Date('2021-03-05'),
		author: 'Новый автор',
		photoLink: 'http://fpmi.bsu.by/ImgFpmi/Cache/banner_61403.jpg'
}

let test2 = {
		id: '113',
		name: 'Ещё новый пост2',
		description: 'Рандомный длинный текст, чтобы проверить, не съедет ли объявление',
		createdAt: new Date('2021-03-06'),
		author: 'Новый автор',
		photoLink: 'http://fpmi.bsu.by/ImgFpmi/Cache/banner_61403.jpg'
}
addAndView(tst, test1);
//addAndView(tst, test2);
tst.getPosts();
console.log('debug');