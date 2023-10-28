module.exports = { //activityfee
	PROJECT_COLOR: '#1B9D64',
	NAV_COLOR: '#ffffff',
	NAV_BG: '#1B9D64',


	// setup
	SETUP_CONTENT_ITEMS: [
		{ title: '关于我们', key: 'SETUP_CONTENT_ABOUT' },
	],

	// 用户
	USER_REG_CHECK: false,
	USER_FIELDS: [
		{ mark: 'sex', title: '性别', type: 'select', selectOptions: ['男', '女'], must: true },
	],
	USER_CHECK_FORM: {
		name: 'formName|must|string|min:1|max:30|name=昵称',
		mobile: 'formMobile|must|mobile|name=手机',
		forms: 'formForms|array'
	},


	NEWS_NAME: '通知公告',
	NEWS_CATE: [
		{ id: 1, title: '通知公告', style: 'leftbig1' },

	],
	NEWS_FIELDS: [
	],

	ACTIVITY_NAME: '报名',
	ACTIVITY_CATE: [
		{ id: 1, title: '幼儿园招生' },
		{ id: 2, title: '培训班招生' },
		{ id: 3, title: '职校招生' },
		{ id: 4, title: '课程报名' },
		{ id: 5, title: '成教班招生' },
		{ id: 6, title: '自考班招生' },
		{ id: 7, title: '辅导班报名' },
		{ id: 8, title: '夏令营报名' },
		{ id: 9, title: '考公班报名' },
		{ id: 10, title: '考研班报名' },
		{ id: 11, title: '特长班报名' },
		{ id: 12, title: '公益班报名' },
	],
	ACTIVITY_FIELDS: [
		{ mark: 'cover', title: '封面小图', ext: { hint: ' 用于首页和列表页展示' }, type: 'image', min: 1, max: 1, must: true },
		{ mark: 'coverbig', title: '封面大图', ext: { hint: '用于首页轮播图和详情展示' }, type: 'image', min: 1, max: 1, must: true },
		{ mark: 'desc', title: '报名须知', type: 'content', must: true },

	],
	ACTIVITY_JOIN_FIELDS: [
		{ mark: 'name', type: 'text', title: '姓名', must: true, max: 30, edit: false },
		{ mark: 'birth', type: 'date', title: '出生日期', must: true, edit: false },
		{ mark: 'sex', title: '性别', type: 'select', selectOptions: ['男', '女'], must: true, edit: false },
		{ mark: 'phone', type: 'mobile', title: '电话号码', must: true, edit: false },
	],

}