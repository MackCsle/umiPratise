var moment = require('moment');
/*
 *window.location.host => ENV
 *
 */
const tools = {
  initMonthValue() {
    const startValue = `${moment().add(0, 'month').format('YYYY-MM')}-01`; //月初
    const stateMonth = moment(startValue).add(1, 'month').add(-1, 'days');
    const endValue = moment(stateMonth).format('YYYY-MM-DD'); //月末
    return [startValue, endValue];
  },
  initQuarterValue() {
    const quater = moment(moment().startOf('quarter')).quarter();
    const startValue = moment(moment().startOf('quarter'))
      .quarter(quater)
      .format('YYYY-MM-DD'); //季度初
    const endValue = moment(moment().endOf('quarter'))
      .quarter(quater)
      .format('YYYY-MM-DD'); //季度末
    return [startValue, endValue];
  },
  initYearValue() {
    const year = moment().year() + 1;
    const startValue = moment()
      .month(+3)
      .startOf('month')
      .format('YYYY-MM-DD');
    const endValue = moment()
      .year(year)
      .month(+2)
      .endOf('month')
      .format('YYYY-MM-DD');

    return [startValue, endValue];
  },
  getUrlParam(name) {
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
    const r = decodeURIComponent(window.location.search.substr(1)).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  },
  getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length == 2) return parts.pop().split(';').shift();
  },
  setCookie(name, value, days) {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${value}${expires}; path=/`;
  },
  getUserRoleText(role) {
    let mapStatus = '';
    switch (role) {
      case '1':
        mapStatus = 'status1';
        break;
      case '2':
        mapStatus = 'status2';
        break;
      default:
        break;
    }
    return mapStatus;
  },
  PrefixInteger(num, n) {
    return (Array(n).join(0) + num).slice(-n);
  },
  getFileType(file_name) {
    // 传入完整的文件名：返回对应的文件类型
    const last_name = (file_name || '')
      .replace(/\?.*$/, '')
      .replace(/.*\./g, '')
      .toUpperCase();
    if (
      last_name === 'BMP' ||
      last_name === 'PNG' ||
      last_name === 'JPG' ||
      last_name === 'JPEG' ||
      last_name === 'GIF' ||
      last_name === 'BMP' ||
      last_name === 'WEBP'
    ) {
      return '图片';
    } else {
      switch (last_name) {
        case 'PPT':
        case 'PPTX':
          return 'ppt';
        case 'PDF':
          return 'pdf';
        case 'CAD':
          return 'cad';
        case 'DOC':
        case 'DOCX':
          return 'world';
        case 'TXT':
          return 'txt';
        case 'XLS':
        case 'XLSX':
          return 'excel';
        case 'CSV':
          return 'csv';
        case 'MP4':
        case 'MKV':
        case 'AVI':
        case 'RM':
        case 'RMVB':
        case 'MOV':
        case '3GP':
        case '3G2':
        case 'WMV':
          return 'video';
        case 'MP3':
        case 'OGG':
        case 'WAV':
          return '音频';
        default:
          return '其他';
      }
    }
  },
};
console.log(
  moment()
    .month(+3)
    .startOf('month'),
);
//console.log(tools.initMonthValue(),tools.initQuarterValue(),tools.initYearValue(),tools.getUrlParam('https://terra.alibaba.net/terra_overtime_apply_detail.html?applyId=20210705133700864'));
console.log(
  tools.getUserRoleText('1'),
  tools.PrefixInteger(1112, 6),
  tools.getFileType('sooo.png'),
);
