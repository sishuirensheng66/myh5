/**
 * 保存图片
 * @param  {[type]}   data [description]
 * @param  {Function} cb   [description]
 * @return {[type]}        [description]
 */
export const savePic = (data, cb) => {
	$.ajax({
		url: '/aj/pic/save',
		type: 'post',
		contentType: false,
		//必须false才会自动加上正确的Content-Type
		processData: false,
		//必须false才会避开jQuery对 formdata 的默认处理,XMLHttpRequest会对 formdata 进行正确的处理
		data: data,
		success: (rs) => {
			cb && cb(rs);
		}
	});
}
/**
 * 获取图片
 * @param  {[type]}   data [description]
 * @param  {Function} cb   回调
 */
export const getPic = (data, cb) => {
	$.ajax({
		url: '/aj/pic/get',
		type: 'get',
		data: data,
		success: (rs) => {
			rs.data.data.forEach((item) => {
				item.src = 'http://ors5gu12t.bkt.clouddn.com/' + item.src + '?imageView2/2/w/230/h/230/q/75|imageslim';
			})
			cb && cb(rs);
		}
	});
}
/**
 * 删除图片
 * @param  {[type]}   data [description]
 * @param  {Function} cb   [description]
 * @return {[type]}        [description]
 */
export const delPic = (data, cb) => {
	$.ajax({
		url: '/aj/pic/del',
		type: 'get',
		data: data,
		success: (rs) => {
			cb && cb(rs);
		}
	});
}
