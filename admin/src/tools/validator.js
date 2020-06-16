//用户名校验
export function username(fields, value, cb) {
	if (!/^\w{4,8}$/.test(value)) {
		return cb(new Error('请输入4-8位包含字母，数字及下划线'))
	}
	cb();
}
//密码校验
export function password(fields, value, cb) {
	if (!/^[a-zA-Z].*\d|\d.*[a-zA-Z]$/.test(value)) {
		return cb(new Error('密码包含数字和字母'))
	}
	cb();
}

export function repeat(data, text, fields, value, cb) {
	if (!value) {
		return cb(new Error('请重复输入密码'))
	}else if(data !== value) {
		return cb(new Error('两次输入的密码不一致'))
	}
	cb();
}

export function phonenum(fields,value,cb){
	if (!/^([1]\d{10}|([\(（]?0[0-9]{2,3}[）\)]?[-]?)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?)$/.test(value)) {
		return cb(new Error('请输入正确电话号码'))
	}
	cb();
}

