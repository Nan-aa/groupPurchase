let express = require('express');

let path = require('path');
let fs = require('fs');

let http = require('http');
let https = require('https');

let ejs = require('ejs');

//创建应用
let app = express();

app.engine('.html', ejs.__express);

//静态化
app.use('/static/', express.static(path.join(process.cwd(), './static/')));
app.use('/favicon.ico', express.static(path.join(process.cwd(), './static/favicon.ico')))

//路由 默认渲染views下的home.html
app.get('/', (req, res) => {
	res.render('home.html')
})
app.get('/admin', (req, res) => {
	res.render('admin.html')
})
//jiekou  mock数据
app.use('/data/', (req, res, next) => {
	// console.log(req.url);
	let arr = req.url.split('?');
	arr[0] += '.json';
	req.url = arr.join('?');
	next();
}, express.static(path.join(process.cwd(), './static/data/')))

app.post('/admin/login', (req, res) => res.json({ errno: 0, data: 'admin' }))
app.post('/admin/manager/update', (req, res) => res.json({ errno: 0 }))
app.post('/admin/product/upload', (req, res) => res.json({ errno: 0, data: '/static/img/list/01.jpg' }));
app.post('/admin/product/create', (req, res) => res.json({ errno: 0 }));
app.post('/admin/product/remove', (req, res) => res.json({ errno: 0 }));
app.post('/admin/product/update', (req, res) => res.json({ errno: 0 }));
app.post('/admin/user/createUser', (req, res) => res.json({ errno: 0 }));
app.post('/admin/user/updateUserInfo', (req, res) => res.json({ errno: 0 }));

app.use('/admin/', (req, res, next) => {
	// console.log(req.url);
	let arr = req.url.split('?');
	arr[0] += '.json';
	req.url = arr.join('?');
	next();
}, express.static(path.join(process.cwd(), './static/data/')))

//监听端口
let httpPort = 3005;
let httpsPort = 3006;
//读取密钥文件

let key = fs.readFileSync(path.join(process.cwd(), './ssl/private.pem'));
let cert = fs.readFileSync(path.join(process.cwd(), './ssl/file.crt')) 

http.createServer(app).listen(httpPort, res => {console.log('listen at' + httpPort)});
https.createServer({key, cert}, app).listen(httpsPort, res => console.log('listen at' + httpsPort))